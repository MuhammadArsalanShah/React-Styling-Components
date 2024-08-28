import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>React Art</h1>
      <p style={{color: 'red', fontStyle: 'italic'}}>A community of artists and art-lovers.</p>
    </header>
  );
}
