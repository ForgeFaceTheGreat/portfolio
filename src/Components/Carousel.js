import '../styles/Carousel.css'

export default function Carousel()
{
    const text = 'Carousel'
    const img = {
        backgroundImage: 'url("./Images/img3.jpg")'
    };
    
    return (
        <>
            <ImgSwitch />
            <div className="carousel" style={img}>
                <div className='text'>{text}</div>
            </div>
        </>
    )
}

// var timer;

function ImgSwitch()
{
    setInterval(() => {
        console.log("asdkfjasldkfj")
    }, 5000);

    // switch ()
}