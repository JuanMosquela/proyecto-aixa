import './notFound.css'
import errorImg from '../../img/ilustracion404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container-errorpage'>
      <div className="error-wrapper">
        <img src={errorImg} alt="logo de pagina no encontrada" />
        <h2>Página no encontrada</h2>
        <p>No podemos encontrar la página que estas buscando</p>
        <Link to='/'>
          <button>Volver</button>
        </Link>
      </div>
    </div>
  )
}
export default NotFound