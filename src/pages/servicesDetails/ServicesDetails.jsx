import { useParams } from "react-router"

const ServicesDetails = () => {

   const { id } = useParams()
  return (
    <div>{id}</div>
  )
}
export default ServicesDetails