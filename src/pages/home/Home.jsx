import '../../App.scss'
import About from '../../components/about/About'
import Hero from '../../components/hero/Hero'
import ribera from '../../img/ribera.svg'
import fortuna from '../../img/fortuna.svg'
import adn from '../../img/adn.svg'
import jf from '../../img/jf.svg'
import sandra from '../../img/sandra.svg'
import mym from '../../img/mym.svg'
import './home.css'

const logos = [
  sandra,
  
  mym,
  adn,  
  jf,
  fortuna,
  ribera
]




const Home = () => {

  
  return (
    <>
      <Hero />  
      <About /> 

      <figure className='logos-wrapper'>
        {
          logos.map(photo => (
            <img src={photo} alt="logo de empresa" />
          ))
        }
      </figure>


      
    </>
  )
}
export default Home