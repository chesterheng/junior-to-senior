import Link from 'next/link';

const About = () => {
  return (
    <div style={{
      fontSize: '20px',
      color: 'blue'
    }}>
      <h1>About</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
      <p>I learn SSR</p>
    </div>
  );
}

export default About;