const jwt = require('jsonwebtoken');
const redis = require("redis");

// setup redis
const redisClient = redis
  .createClient({
  // refer to redis service in docker container
  host: 'redis' 
}).on("error", error => console.error(error));

const handleSignin = (db, bcrypt, req, res) => {
  const {
    email,
    password
  } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}

const getAuthTokenId = (req, res) => {
  const { authorization } = req.body
  // Redis client: get token
  // get a id or nil
  return redisClient.get(authorization, (err, reply) => {
      if(err || !reply) {
        return res.status(400).json('Unauthorized')
      }
      return res.json({ id: reply })
  })
}

const signToken = email => {
  const jwtPayload = { email }
  return jwt.sign( 
    jwtPayload,
    process.env.JWT_SECRET, {
      expiresIn: '2 days'
    }
  );
}

// key: token, value: id
const setToken = (key, value) => {
  // Redis client: set token id
  return Promise.resolve(redisClient.set(key, value))
}

const createSessions = user => {
  // JWT token, return user data
  const { email, id } = user;
  const token = signToken(email)
  // store token to redis database
  return setToken(token, id)
  .then(() => ({ success: 'true', userId: id, token }))
  .catch(error => console.log(error))
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? getAuthTokenId(req, res) :
    handleSignin(db, bcrypt, req, res)
    .then(data => {
      return data.id && data.email ?
        createSessions(data) :
        Promise.reject(data)
    })
    .then(session => res.json(session))
    .catch(err => res.status(400).json(err))
}

module.exports = {
  handleSignin,
  signinAuthentication
}