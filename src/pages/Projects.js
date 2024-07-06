import Banner from '../Components/Banner'

export default function Projects()
{
    const content = [
        {
            title: "Image 1",
            description: "Stuff and things",
            url: "./Images/img1.png",
        },
        {
            title: "Image 2",
            description: "Other things and stuff",
            url: "./Images/img2.jpg",
        },
        {
            title: "Image 3",
            description: "Really cool stuff and things. And other stuff and things",
            url: "./Images/img3.jpg",
        },
    ]

    return (
        <>
            <h1>Projects</h1>

            {/* Creates cards and maps data to each */}
            {
                content.map( (data, index) => (
                <Banner title={data.title} index={index}/>
            ))
        }
        </>
    )
}