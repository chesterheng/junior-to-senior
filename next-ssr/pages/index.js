import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Next</h1>
    <Link href="/about">
      <button>About</button>
    </Link>
  </div>
);

export default Index;