import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Robots = ({ robots }) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <ul>
        {robots.map(
          ({ id, name }) => (
            <li key={id}>
              <Link href={`robots/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

Robots.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  console.log(data);
  return { robots: data }
}

export default Robots;
