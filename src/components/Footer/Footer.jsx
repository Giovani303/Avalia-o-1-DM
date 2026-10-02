import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>Guia Turístico de São Paulo · {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
