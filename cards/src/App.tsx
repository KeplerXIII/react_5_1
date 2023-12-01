import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  type CardProps = {
    title: string
  }

  type CardImgProps = {
    imgSrc: string
  }

  const CardImg: React.FC<CardImgProps> = ({ imgSrc }) => {
    if (imgSrc) return <img src={imgSrc} className="card-img-top" alt="Кратинка"></img>
  }

  const Card: React.FC<CardProps> = ({ title }) => {
    return (
      <div className="card text-light bg-dark h-auto" style={{
        maxWidth: '250px',
        minWidth: '250px'
      }}>
        <CardImg imgSrc='http://alfa.dev-top-it.ru/local/templates/alpha/img/nophoto.jpg'/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn p-3 mb-2 bg-secondary text-white">Go somewhere</a>
        </div>
      </div >
    )
  }

  return (
    <>
      <Card title='Card title' />
    </>
  )
}

export default App
