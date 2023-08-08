import image from './images/logo192.png';

export const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={image} className="nav-img" width={'50 px'} alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
