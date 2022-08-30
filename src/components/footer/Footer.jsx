import {BsInstagram, BsVimeo} from 'react-icons/bs'
import {FaFacebookF, FaBehance} from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <p>Seguime en:</p>
        <ul className="social-icons-container">
            <li>
            <a href="https://www.facebook.com/aixafranzoni" target='a_blank' ><FaFacebookF /></a>

            </li>
            <li>
            <a href="https://www.behance.net/aixafranzoni" target='a_blank'><FaBehance /></a>

            </li>
            <li>
                <a href="https://www.instagram.com/aixafranzoni/?igshid=Y2ZmNzg0YzQ%3D"  target='a_blank' ><BsInstagram /></a>

            </li>
            <li>
            <a href="https://vimeo.com/user58620817" target='a_blank'><BsVimeo /></a>

            </li>
        </ul>
    </footer>
  )
}
export default Footer