import image from '../../assets/imgCoudreFigma.png'
export default function BackgroundImage(){
    return (
        <img src={image} className='absolute object-cover h-full w-full top-0' />
    )
}