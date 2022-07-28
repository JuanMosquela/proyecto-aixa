import {BsInstagram, BsVimeo} from 'react-icons/bs'
import {FaFacebookF, FaBehance} from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <p>Seguime en:</p>
        <ul className="social-icons-container">
            <li>
            <a href="/"><FaFacebookF /></a>

            </li>
            <li>
            <a href="/"><FaBehance /></a>

            </li>
            <li>
                <a href="/"><BsInstagram /></a>

            </li>
            <li>
            <a href="/"><BsVimeo /></a>

            </li>
        </ul>
    </footer>
  )
}
export default Footer