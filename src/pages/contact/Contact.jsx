import "./contact.scss";

const Contact = () => {
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

      <div className="contactForm">
        <h2>Formulario</h2>

        <div className="selectWrapper">
          <select name="servicios" id="servicios">
            <option value="servicios" defaultChecked>Servicios</option>
          </select>
        </div>

        <div className="inputRow">
          <div className="inputWrapper">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" />
          </div>

          <div className="inputWrapper">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" name="apellido" />
          </div>
        </div>

        <div className="inputRow">
          <div className="inputWrapper">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>

          <div className="inputWrapper">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" name="telefono" />
          </div>
        </div>

        <div className="textareaWrapper">
          <label htmlFor="consulta">Consulta</label>
          <textarea name="consulta" id=""></textarea>
        </div>

        <button>Enviar</button>
      </div>
    </div>
  );
};
export default Contact;
