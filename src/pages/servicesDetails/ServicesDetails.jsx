import { useEffect, useState } from "react"
import { useParams } from "react-router"
import dataServices from "../../data/dataServices"
import './servicesDetails.scss'
import {TiDelete} from 'react-icons/ti'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import CommunityManager from "../communityManager/CommunityManager";


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

  const filterPhotos = (subCategory) => {
    
    const photosCategory = dataServices.find(service => {
      return service.subCategory === subCategory
    })

    setAllPhotos(photosCategory.picture_URL) 

  }
  


  return (
    <>

      <figure className="services-hero">
        <img src={allPhotos[0]} alt="" />
        <h2>{service.category}</h2>
      </figure>
      

    { service.category === 'Community manager' ? 
      <CommunityManager />
    : 
      <section className='services'>
        
        {
          service.category === 'Film maker' ? (
            <div className="film-container">
              <h2>Metamorfosis</h2>
              <p>Metamorfosis es un corto que hice en pandemia con el fin de mostrar la evolucion que atravesamos todos al pasar por diferentes "evoluciones", por ejemplo cuando salimos de nuestra zona de confort y nos toca tener vivencias nuevas que nos hacen crecer. Es por eso que al final del corto se dice: 'y vos ya te encontraste'.</p>
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/595543165?h=b7052375a7" width="740" height="460" frameborder="0" allowfullscreen></iframe>
            </div>

          ) : (
            <div className="photos-wrapper">
              <div className="services-options">
                
                  <button onClick={() => filterPhotos("editorial")}>Editorial</button>
                  <button onClick={() => filterPhotos("comercial")}>Comercial</button>
                  <button onClick={() => filterPhotos("gastronomia")}>Gastronomia</button>
                
              </div>
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
          )
        }
      
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
    }
    
    </>
  )
}
export default ServicesDetails