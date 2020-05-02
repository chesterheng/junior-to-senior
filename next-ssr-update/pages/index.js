import Link from 'next/link';
import Image from '../components/image';
// When you hit the Back button, it navigates the page to the
// index page entirely via the client; next/link does all the
// location.history handling for you.
//You don't need to write even a single line of client-side routing code.
const Index = () => {
  return (
    <div>
      <Link href="/about">
        {/*<a  style={{ fontSize: 20 }}>About Page</a>*/}
        <button  style={{ fontSize: 20 }}>About Page</button>
      </Link>
      <Link href="/robots">
        {/*<a  style={{ fontSize: 20 }}>About Page</a>*/}
        <button  style={{ fontSize: 20 }}>Robots Page</button>
      </Link>
      <h1>I am a SSR magician</h1>
      <p>made with love</p>
      <Image />
    </div>
  );
}

export default Index;