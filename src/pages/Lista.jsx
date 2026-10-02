import { useState } from 'react'
import lugares from '../data/lugares.json'
import Card from '../components/Card/Card'
import BackButton from '../components/BackButton/BackButton'

function Lista() {
  const [favoritos, setFavoritos] = useState([])

  function alternarFavorito(id) {
    setFavoritos((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    )
  }

  return (
    <section>
      <BackButton />
      <h2>Lugares para visitar</h2>
      <p>Favoritos: {favoritos.length} de {lugares.length}</p>
      <div className="lista">
        {lugares.map((lugar) => (
          <Card
            key={lugar.id}
            nome={lugar.nome}
            categoria={lugar.categoria}
            bairro={lugar.bairro}
            descricao={lugar.descricao}
            imagem={lugar.imagem}
            favorito={favoritos.includes(lugar.id)}
            onFavoritar={() => alternarFavorito(lugar.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Lista
