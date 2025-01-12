import LoginImage from '../../assets/loin.jpg'

export default function LoginBackgroundImage(){
    return (
    <>
    <img src={LoginImage} alt="Barbies in circle" className='absolute max-h-full w-full h-full object-cover -z-40 ' />
    </> )
}