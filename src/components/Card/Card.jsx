import './Card.css'

function Card({ nome, categoria, bairro, descricao, imagem, favorito, onFavoritar }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} className="card-imagem" />
      <div className="card-conteudo">
        <h3>{nome}</h3>
        <p className="card-categoria">{categoria} · {bairro}</p>
        <p>{descricao}</p>
        <button className="card-botao" onClick={onFavoritar}>
          {favorito ? '★ Favorito' : '☆ Favoritar'}
        </button>
      </div>
    </div>
  )
}

export default Card
