import "./contact.scss";
import { useFormik } from "formik";
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  

  const basicSchemas = yup.object().shape({
    service: yup.string().required("Indica un servicio"),   
    firstName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),
    lastName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),        
    email: yup.string().email('Debes ingresar un email valido').required('Este campo es requerido'),
    phone: yup.number().required('Este campo es requerido'),
    message: yup.string().min(2, 'Mensaje muy corto!').max(100, 'Mensaje muy largo!').required('Este campo es requerido')
  })

  const SendEmail = (object) => {   
    
     let promise = emailjs.send("service_vgcjzto", "template_lcpoui8", object,"xYJ9QBuyTyzUwX_9E" )    
      .then((result) => {
        setTimeout(() => {            
          
          resetForm()
          
                    
            
        }, 3000);
      }, (error) => {
            console.log(error.text)
      })
      toast.promise(promise, {
        loading: 'Enviando...',
        success:'Mensaje enviado',
        error: 'Error'
      },
      {
        style:{              
          backgroundColor:'#FFF',
          padding:'5px 15px',
          boxShadow: '1px 5px 15px rgba(0,0,0,.2)' }
        }
      )
 }

  const { values, errors, touched,  handleSubmit, handleChange, handleBlur,  resetForm} = useFormik({
    initialValues:{
      service: '',
      firstName: '',
      lastName:'',
      email:'',
      phone:'',
      message:''
    },
    onSubmit: (values) => {      
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
      

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2>Formulario</h2>

        <div className="selectWrapper">
          <label htmlFor="servicios">Servicios</label>
          <select 
            name="service"
            id="servicios"
            value={values.color}
            onChange={handleChange}
            onBlur={handleBlur}>
              <option value="Product Manager" defaultChecked>Product Manager</option>
              <option value="Content Creator" defaultChecked>Content Creator</option>
              <option value="Fotografia" defaultChecked>Fotografia</option>
              <option value="Film Maker" defaultChecked>Film Maker</option>
              <option value="Quiero sumarme al equipo" defaultChecked>Quiero sumarme al equipo</option>
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
            rows='7'
            id="">
          </textarea>
          { touched.message && errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Enviar</button>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{            
            
            duration: 5000,
            style: {
              background: '#f5f5f5',
              color: '#333',
              fontSize:'1.8rem',
              minWidth:'200px'
            },
            
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        
      </form>
      
    </div>
  );
};
export default Contact;
