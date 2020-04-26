const fetch = require('node-fetch');
const swapi = require('./script2')

describe('swapi', () => {
  // it('calls swapi to get people', done => {
  //   expect.assertions(1)
  //   swapi.getPeople(fetch).then(data => {
  //     expect(data.count).toEqual(82)
  //     done();
  //   })
  // })

  it('calls swapi to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(82)
    })
  })

  it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(82)
      expect(data.results.length).toBeGreaterThan(5)
    })
  })
})

