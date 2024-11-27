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
      <main>
        <nav className='side-bar'>
          <ul className='side-bar-list'>
              <li className='side-bar-li'>Comments</li>
              <li className='side-bar-li'>Posts</li>
              <li className='side-bar-li'>Notifications</li>
              <li className='side-bar-li'>About Sphere</li>
          </ul>
        </nav>
        <div className='scroll-div'>
          <div className='post'>
            <textarea className='post-input' placeholder="What's on your mind bro?"></textarea>
          </div>
          <div className='content-div'></div>
        </div>
      </main>
    </>
  );
}
