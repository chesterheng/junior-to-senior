import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Next</h1>
    {/* Client Side Routing */}
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    {/* Server Side Routing */}
    {/* <a href="/about">About</a> */}
  </div>
);

export default Index;