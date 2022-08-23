import './notFound.css'
import errorImg from '../../img/ilustracion404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container-errorpage'>
      <div className="error-wrapper">
        <img src={errorImg} alt="logo de pagina no encontrada" />
        <h2>Lo sentimos:</h2>
        <p>Intenta con una direccion diferente o regresa haciendo click <Link to='/'>aqui</Link></p>
      </div>
    </div>
  )
}
export default NotFound