import { useEffect } from "react";
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../assets/logo1.png"
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className="w-full fixed top-0 left-0 right-0 ">
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
                <div className="flex items-center justify-between ">
                    {/* for large device  */}
                    <div className="cursor-pointer">
                        <a href=""><img src={logo} alt="logo" className="h-16 rounded-lg " /></a>
                    </div>
                    {/* nav links for large scren */}
                    <div className="lg:flex item-center text-xl gap-3 hidden text-body">
                        <Link to="home" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 ">Home</Link>
                        <Link to="skills" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Skills</Link>
                        <Link to="about" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer  hover:text-gray-400 ">About me</Link>
                        <Link to="portfolio" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Portfolio</Link>
                        <Link to="testimonials" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 ">Testimonials</Link>
                    </div>

                    {/* button  */}
                    <div className="lg:block hidden">
                        <Link to="contact" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400 "><button className="outlineBtn">Contact me</button></Link>
                    </div>

                    {/* links for smalll screen  */}

                    <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
                        <RiMenu3Fill />
                    </button>

                </div>

                {/* menu links fr small screen  */}
                {
                    isMenuOpen && <div className="mt-4 p-4 bg-body rounded-lg text-white">
                        <Link to="home" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 ">Home</Link>
                        <Link to="skills" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer  hover:text-gray-400 ">Skills</Link>
                        <Link to="about" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer  hover:text-gray-400 ">About me</Link>
                        <Link to="portfolio" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer  hover:text-gray-400 ">Portfolio</Link>
                        <Link to="testimonials" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer  hover:text-gray-400 ">Testinomials</Link>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar
