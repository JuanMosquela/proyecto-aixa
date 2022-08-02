import { useEffect, useState } from "react"
import { useParams } from "react-router"
import dataServices from "../../data/dataServices"
import './servicesDetails.scss'
import {TiDelete} from 'react-icons/ti'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

const ServicesDetails = () => {

  const [service, setService] = useState({}) 
  
  const [allPhotos, setAllPhotos] = useState([])

  const [modal, setModal] = useState(false)

  const [slideNumber, setSlideNumber] = useState(0)

  const { id } = useParams()

  useEffect(() => {  

    const serviceFound = dataServices.find(service => {
      return service.category === id
    })

    if(serviceFound){
      setAllPhotos(serviceFound.picture_URL)      
      setService(serviceFound)
      
    }    
    
  }, [])  

  const handleOpen = (index) => {    
    setModal(true)
    setSlideNumber(index)    
  }

  const handleClick = (direction) => {

    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? allPhotos.length-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === allPhotos.length-1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }

 
  
  


  return (
    <>
      <figure className="services-hero">
        <img src={allPhotos[0]} alt="" />
        <h2>{service.category}</h2>
      </figure>
      <section className='services'>
        <div className="services-options">
          <ul className="service-row">
            <li>Moda</li>
            <li>Gastronomia</li>
            
          </ul>
        </div>
        <div className="photos-wrapper">
          <h3>Fleur</h3>
          <div className="container-photos">
            {allPhotos.map((photo, index) => (
              <figure key={photo} >
                <img
                onClick={() => handleOpen(index)}                 
                src={photo} 
                alt="" />
              </figure>
                

            ))}
          </div>
        </div>
        {
            modal && (
              <div className="photo-wrapper">
                <figure>
                  <img src={allPhotos[slideNumber]} alt="" />
                  <TiDelete 
                  className='close-modal'
                  onClick={() => setModal(false)} />
                  <BsFillArrowLeftCircleFill className='arrow-left' onClick={() => handleClick('l')} />
                  <BsFillArrowRightCircleFill className='arrow-right' onClick={() => handleClick('r')} />
                </figure>
                
              </div>
            )
          }
        
      </section>
      
    </>
  )
}
export default ServicesDetails