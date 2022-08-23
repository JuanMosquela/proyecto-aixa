

import SimpleSlider from '../../components/slider/SimpleSlider';


import "./communityManager.scss";



const CommunityManager = () => {

  const fortuna = [
    'https://i.postimg.cc/HkGJzgt1/fortuna1.png',
    'https://i.postimg.cc/bvgsq2fq/fortuna2.png',
    "https://i.postimg.cc/9QGDNnxR/fortuna3.png",
    "https://i.postimg.cc/Zq4Wkxgf/fortuna4.png",
    
  ]

   const ribera = [
    "https://i.postimg.cc/qqbYQXFD/ribera1.png",
    "https://i.postimg.cc/zXQ6g7KV/ribera2.png",
    "https://i.postimg.cc/BZMdq4v5/ribera3.png",
    "https://i.postimg.cc/VLv2vpSx/ribera4.png"


   ]

  


  return (
    <>
      <section className="cmFeatures">
        <h3 className='community-title'>INCLUYE</h3>
        <div className="underline"></div>

        <ul>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" /> Reels
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Fotos
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Feed
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Diseño gráfico
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Menú
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Historias
          </li>
          <li>
            <img src="https://i.postimg.cc/TP2TkQNf/tick.png" alt="" />
            Sorteos
          </li>
        </ul>
      </section>

      <section className="cmPhotos">
        <h3 className='community-title'>FOTOS</h3>
        <div className="underline"></div>

        <div className="client">
          <img
            src="https://i.postimg.cc/yNsPg3QD/La-fortuna.png"
            alt=""
            className="clientLogo"
          />
          <SimpleSlider photos={fortuna} />          
          
          
        </div>

        <div className="client">
          <img
            src="https://i.postimg.cc/7PWms66R/Ribera.png"
            alt=""
            className="clientLogo"
          />
          <h4>RIBERA ZÁRATE</h4>
           <SimpleSlider photos={ribera} />
        </div>
      </section>

      <section className="cmResults">
        <h3 className='community-title'>LOGROS EN INSTAGRAM</h3>
        <div className="underline"></div>

        <div className="compareContainer">
          <div className="compareStats">
            <img
              src="https://i.postimg.cc/8CrHjF6v/1.png"
              className="screenshot"
              alt=""
            />
            <span className="reach">
              Alcance de la cuenta La Fortuna gracias al sorteo.
            </span>

            <span>Estadisticas de la publicacion</span>
            <ul className="postStats">
              <li>
                <img src="https://i.postimg.cc/0QnwVmMh/likeicon.png" alt="" />
                <span>132</span>
              </li>
              <li>
                <img src="https://i.postimg.cc/fyb0pLYy/mpicon.png" alt="" />
                <span>123</span>
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/jjzNJBsx/commenticon.png"
                  alt=""
                />
                <span>430</span>
              </li>
            </ul>

            <span>Resumen</span>
            <div className="statsSummary">
              <div>
                <span>Cuentas alcanzadas</span>
                <span className="count">1236</span>
              </div>
              <div>
                <span>Interaccion con el contenido</span>
                <span className="count">485</span>
              </div>
              <div>
                <span>Actividad del perfil</span>
                <span className="count">63</span>
              </div>
            </div>

            <span>Alcance</span>
            <span>1238 cuentas alcanzadas</span>
          </div>

          <div className="compareStats">
            <img
              src="https://i.postimg.cc/8CrHjF6v/1.png"
              className="screenshot"
              alt=""
            />
            <span className="reach">
              Alcance de la cuenta Ribera gracias al sorteo.
            </span>

            <span>Estadisticas de la publicacion</span>
            <ul className="postStats">
              <li>
                <img src="https://i.postimg.cc/0QnwVmMh/likeicon.png" alt="" />
                <span>232</span>
              </li>
              <li>
                <img src="https://i.postimg.cc/fyb0pLYy/mpicon.png" alt="" />
                <span>209</span>
              </li>
              <li>
                <img
                  src="https://i.postimg.cc/jjzNJBsx/commenticon.png"
                  alt=""
                />
                <span>834</span>
              </li>
            </ul>

            <span>Resumen</span>
            <div className="statsSummary">
              <div>
                <span>Cuentas alcanzadas</span>
                <span className="count">5532</span>
              </div>
              <div>
                <span>Interaccion con el contenido</span>
                <span className="count">263</span>
              </div>
              <div>
                <span>Actividad del perfil</span>
                <span className="count">49</span>
              </div>
            </div>

            <span>Alcance</span>
            <span>5532 cuentas alcanzadas</span>
          </div>
        </div>
      </section>

      <section className="beforeAfter">
        <figure>
          <img
            src="https://i.postimg.cc/j2RQgZk6/3.png"
            alt=""
            className="screenshot"
          />
          <img
            src="https://i.postimg.cc/pTfJJgkX/4.png"
            alt=""
            className="screenshot"
          />
        </figure>
        <span>
          <b>Antes y después</b> feed de <b>Ribera Zárate</b>
        </span>
      </section>
    </>
  );
};

export default CommunityManager;
