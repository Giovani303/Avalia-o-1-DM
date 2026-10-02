import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">Guia SP</Link>
      <nav className="header-nav">
        <Link to="/">Início</Link>
        <Link to="/lugares">Lugares</Link>
      </nav>
    </header>
  )
}

export default Header
