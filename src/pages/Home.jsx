import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <h1>Guia Turístico de São Paulo</h1>
      <p>
        Uma seleção de parques, museus e lugares para comer na maior cidade do Brasil.
      </p>
      <Link to="/lugares" className="home-botao">
        Ver lugares
      </Link>
    </section>
  )
}

export default Home
