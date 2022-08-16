import {MdPhotoCamera, MdSocialDistance} from 'react-icons/md'
import {BiCameraMovie} from 'react-icons/bi'
import {TiSocialYoutube} from 'react-icons/ti'

const dataServices = [
    {
        title: 'content creator',
        subtitle: 'medios digitales',
        serviceMenu: true,
        picture_URL:[
            "https://i.postimg.cc/8c5CcGrF/9b.jpg",
            "https://i.postimg.cc/KzHvVVRt/1.jpg",
            "https://i.postimg.cc/rmKtK54C/10.jpg",
            "https://i.postimg.cc/j5mnNCQV/11.jpg",
            "https://i.postimg.cc/Hkg5BcGd/2.jpg",
            "https://i.postimg.cc/W1wZKNjr/3.jpg",
            "https://i.postimg.cc/WtRppkm3/4.jpg",
            "https://i.postimg.cc/sfb5GHwB/5.jpg",
            "https://i.postimg.cc/NfTm68zd/6.jpg",
            "https://i.postimg.cc/Y2v19BfK/7.jpg",
            "https://i.postimg.cc/MGsQ69np/8.jpg"],
        category:'Content creator',
        subCategory:'editorial',
        icon:  <TiSocialYoutube />
    },
    {
        title: 'content creator',
        subtitle: 'medios digitales',
        serviceMenu: false,
        picture_URL:[
            "https://i.postimg.cc/pXDRYyYf/2.jpg",
            "https://i.postimg.cc/xjN086XF/1.jpg",
            "https://i.postimg.cc/gj3FDBRz/10.jpg",
            "https://i.postimg.cc/0ynvF34r/3.jpg",
            "https://i.postimg.cc/GmdrMrqZ/4.jpg",
            "https://i.postimg.cc/1zzSQBxB/5.jpg",
            "https://i.postimg.cc/MKkzQ1RZ/6.jpg",
            "https://i.postimg.cc/KYs2vTx2/7.jpg",
            "https://i.postimg.cc/ydMC0zDp/8.jpg",
            "https://i.postimg.cc/nzjtsLhQ/9.jpg"
            ],
        subCategory:'gastronomia',
    },
    {
        title: 'community manager',
        subtitle: 'ampliar comunidades online',
        serviceMenu: true,
        picture_URL:['https://i.postimg.cc/KvSShvtS/15042022-IMG-2263.jpg'],
        category:'Community manager',
        icon: <MdSocialDistance />
    },
    {
        title: 'fotografia',
        subtitle: 'proyectar imagenes',
        serviceMenu: true,
        picture_URL:['https://i.postimg.cc/L5PcgrKb/2-1.jpg'],
        category:'Fotografa',
        icon: <MdPhotoCamera />
    },
    {
        title: 'films',
        subtitle: 'construir audiovisuales',
        serviceMenu: true,
        picture_URL:['https://i.postimg.cc/4N6Cfk1K/IMG-1995.jpg'],
        category:'Film maker',
        icon: <BiCameraMovie />
    }

]

export default dataServices