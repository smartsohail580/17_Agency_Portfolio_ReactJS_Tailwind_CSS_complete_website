import aboutPic from "../assets/image2.png"
function About() {
    return (
        <div className="lg:mx-12 mx-4" id="about">
            <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10">
                <div className="sm:w-1/2">
                    <img src={aboutPic} alt="" className="w-full sm:w-11/12" />
                </div>
                <div className="sm:w-1/2">
                    <p className="text-xl font-semibold mb-5">About</p>
                    <h2 className="md:text-5xl text-4xl font-bold">About Me</h2>
                    <p className="mt-8 md:pr-8 mb-8 font-medium">Hi there! I'm M.SOHAIL, a passionate front-end developer and graphic designer. With expertise in HTML/CSS, React JS & UI/UX design. I craft visually stunning websites and graphics that captivate users. Let's collaborate and turn your ideas into reality. <br /><br />
                    My journey in the world of design began with a fascination for visual storytelling and a commitment to crafting meaningful experiences for users. Over the years, I've honed my skills in UI/UX designing, leveraging design thinking principles to create intuitive interfaces that resonate with users and drive engagement.
                    </p>
                    <button className="btnPrimary">Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
