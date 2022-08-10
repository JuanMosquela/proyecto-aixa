import {MdPhotoCamera, MdSocialDistance} from 'react-icons/md'
import {BiCameraMovie} from 'react-icons/bi'
import {TiSocialYoutube} from 'react-icons/ti'

const dataServices = [
    {
        title: 'content creator',
        subtitle: 'medios digitales',
        picture_URL:[
            'https://i.postimg.cc/wjgC3fWw/IMG-6950-Editar.jpg',
            'https://i.postimg.cc/Dw0Sf5DZ/1-2.jpg',
            'https://i.postimg.cc/0QRjfvNM/IMG-6651-4.jpg',
            'https://i.postimg.cc/sxK2sZ47/IMG-6655-4.jpg',
            'https://i.postimg.cc/0NJrDj91/IMG-6678-4.jpg',
            'https://i.postimg.cc/bw5sZkcR/IMG-6782-4.jpg',
            'https://i.postimg.cc/rsqpB9xq/IMG-6801-4.jpg',
            'https://i.postimg.cc/T3KPv1L5/IMG-6847-Editar.jpg',
            'https://i.postimg.cc/2jxy4PNy/IMG-6963-Editar.jpg',
            'https://i.postimg.cc/mDYDpncd/IMG-7042-4.jpg',
            'https://i.postimg.cc/5NN0pnf3/IMG-7082-4.jpg'],
        category:'Content creator',
        icon:  <TiSocialYoutube />
    },
    {
        title: 'community manager',
        subtitle: 'ampliar comunidades online',
        picture_URL:['https://i.postimg.cc/KvSShvtS/15042022-IMG-2263.jpg'],
        category:'Community manager',
        icon: <MdSocialDistance />
    },
    {
        title: 'fotografia',
        subtitle: 'proyectar imagenes',
        picture_URL:['https://i.postimg.cc/L5PcgrKb/2-1.jpg'],
        category:'Fotografa',
        icon: <MdPhotoCamera />
    },
    {
        title: 'films',
        subtitle: 'construir audiovisuales',
        picture_URL:['https://i.postimg.cc/4N6Cfk1K/IMG-1995.jpg'],
        category:'Film maker',
        icon: <BiCameraMovie />
    }

]

export default dataServices