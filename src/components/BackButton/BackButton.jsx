import { Link } from 'react-router-dom'
import './BackButton.css'

function BackButton({ para = '/', texto = 'Voltar' }) {
  return (
    <Link to={para} className="back-button">
      <span className="back-button-seta">←</span>
      {texto}
    </Link>
  )
}

export default BackButton
