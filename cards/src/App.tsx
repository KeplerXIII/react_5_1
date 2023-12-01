import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  type CardProps = {
    title: string
    text: string
    children: React.ReactNode
    imgSrc: string
  }

  const CardImg: React.FC<Pick<CardProps, 'imgSrc'>> = ({ imgSrc }) => {
    if (imgSrc) return <img src={imgSrc} className="card-img-top" alt="Кратинка"></img>
  }

  const Card: React.FC<Omit<CardProps, 'imgSrc'>> = ({ title, text, children }) => {
    return (
      <div className="card text-light bg-dark h-auto" style={{
        maxWidth: '250px',
        minWidth: '250px'
      }}>
        { children }
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn p-3 mb-2 bg-secondary text-white">Go somewhere</a>
        </div>
      </div >
    )
  }

  return (
    <>
      <Card title='Test title' text='Test text'>
        <CardImg imgSrc='http://alfa.dev-top-it.ru/local/templates/alpha/img/nophoto.jpg'></CardImg>
      </Card>
    </>
  )
}

export default App
