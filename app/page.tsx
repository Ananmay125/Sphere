import './page.css';

export default function Home() {
  return (
    <>
      <nav>
        <img src='image.png' className='logo'></img>
        <h1 className="main-heading">Sphere</h1>
        <ul>
          <li className='nav-li'>Home</li>
          <li className='nav-li'>Chat</li>
          <li className='nav-li'>Friends</li>
          <li className='nav-li'>Spicy_32</li>
          <img src='favicon.ico' className='avatar'></img>
        </ul>
      </nav>
      <main></main>
    </>
  );
}
