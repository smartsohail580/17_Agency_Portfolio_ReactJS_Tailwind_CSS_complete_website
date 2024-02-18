import bannerimage from '../assets/image1.png'
function Home() {
    return (
        <div className="mt-20 bg-bgShade" id="home">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
                <div className='md:w-1/2 w-full '>
                    <img src={bannerimage} alt="" className='w-full' />
                </div>
                <div className="md:w-1/2 w-full mt-5">
                    <h3 className="text-xl text-headingColor font-semibold mb-5 ">Hey, I am Sohail</h3>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-[76px] mb-5">Exploring the World of <span className="text-primary">React JS</span> with <span className='text-primary'>Tailwind CSS</span></h1>
                    <p className="text-body font-normal text-2xl leading-9 mb-8">Welcome to my personal portfolio website. Here you'll find a showcase of my latest projects, as well as insights into my skills and experiences as a frontend developer. Let's build something amazing together!</p>
                    <button className="btnPrimary">Get in Touch</button>
                </div>

            </div>
        </div>
    )
}

export default Home
