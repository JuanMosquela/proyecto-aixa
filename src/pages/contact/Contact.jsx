import "./contact.scss";
import { useFormik } from "formik";
import * as yup from 'yup';
import emailjs, {send} from 'emailjs-com';
import { useState } from "react";

const Contact = () => {

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState(false)

  const basicSchemas = yup.object().shape({
   
    firstName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),
    lastName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),        
    email: yup.string().email('Debes ingresar un email valido').required('Este campo es requerido'),
    phone: yup.number().required('Este campo es requerido'),
    message: yup.string().min(2, 'Mensaje muy corto!').max(100, 'Mensaje muy largo!').required('Este campo es requerido')
  })

  const SendEmail = (object) => {
    
    setLoading(true)
    
    emailjs.send("service_vgcjzto", "template_lcpoui8", object,"xYJ9QBuyTyzUwX_9E" )    
      .then((result) => {
        setTimeout(() => {
            
          setLoading(false)
          resetForm()
          setForm(true)
                    
            
        }, 3000);
      }, (error) => {
            console.log(error.text)
  })
 }

  const { values, errors, touched,  handleSubmit, handleChange, handleBlur,  resetForm} = useFormik({
    initialValues:{
      firstName: '',
      lastName:'',
      email:'',
      phone:'',
      message:''
    },
    onSubmit: (values) => {
      setLoading(true)
      SendEmail(values)     
       
    },  
    validationSchema: basicSchemas
  })


  return (
    <div className="contact">
      <div className="contactBanner">
        <img src="https://i.postimg.cc/sBZXM6Rm/contact1.jpg" alt="" />
        <img src="https://i.postimg.cc/NL8K8z2P/contact2.jpg" alt="" />
        <img src="https://i.postimg.cc/cvzC4qP6/contact3.jpg" alt="" />
        <img src="https://i.postimg.cc/jLXJTFsJ/contact4.jpg" alt="" />
      </div>

      <div className="contactInfo">
        <h2>Contacto</h2>
        <h3>Consultas generales/Enivar CV</h3>
        <span>aixafranzoni@gmail.com</span>
        <h3>Editorales/Comerciales</h3>
        <span>aixafranzoni@gmail.com</span>
        <span>011-5174-8813</span>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2>Formulario</h2>

        <div className="selectWrapper">
          <select name="servicios" id="servicios">
            <option value="servicios" defaultChecked>Servicios</option>
          </select>
        </div>

        <div className="inputRow">
          <div className="inputWrapper">
            <label htmlFor="firstName">Nombre</label>
            <input
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}              
              type="text" 
              name="firstName" />
            { touched.firstName && errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="inputWrapper">
            <label htmlFor="lastName">Apellido</label>
            <input 
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text" 
              name="lastName" />
            { touched.lastName && errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="inputRow">
          <div className="inputWrapper">
            <label htmlFor="email">E-mail</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} 
              type="email" 
              name="email" />
            { touched.email && errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="inputWrapper">
            <label htmlFor="phone">Teléfono</label>
            <input 
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="tel" 
              name="phone" />
              { touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <div className="textareaWrapper">
          <label htmlFor="message">Consulta</label>
          <textarea
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur} 
            name="message" 
            id="">
          </textarea>
          { touched.message && errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Enviar</button>
        {form ? <span className="success">Mensaje enviado exitosamente</span> : null}
      </form>
      
    </div>
  );
};
export default Contact;
