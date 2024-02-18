import logo from '../assets/logo1.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <div className='bg-bgShade py-28 md:px-12 px-4'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20'>
        <a href="" className='flex-shrink-0'><img src={logo} alt="" className='h-16 rounded-lg' /></a>

        <div className='flex flex-col sm:flex-row md:items-center flex-wrap  gap-4'>
          <a href="home" className='block hover:text-gray-400 py-2 px-4'>Home</a>
          <a href="portfolio" className='block hover:text-gray-400 py-2 px-4'>Portfolio</a>
          <a href="about" className='block hover:text-gray-400 py-2 px-4'>About me</a>
          <a href="contact" className='block hover:text-gray-400 py-2 px-4'>Contact</a>
          <a href="testimonials" className='block hover:text-gray-400 py-2 px-4'>Testimonials</a>
        </div>
        {/* social button  */}
        <div className='flex items-center gap-4 '>
          <FaFacebookF className='cursor-pointer hover:-translate-y-3 duration-300 transition-all text-xl hover:text-primary' />
          <FaInstagram className='cursor-pointer hover:-translate-y-3 duration-300 transition-all text-xl hover:text-primary' />
          <FaTwitter className='cursor-pointer hover:-translate-y-3 duration-300 transition-all text-xl hover:text-primary' />
          <FaLinkedin className='cursor-pointer hover:-translate-y-3 duration-300 transition-all text-xl hover:text-primary' n />
        </div>
      </div>
      <div>
        <hr className="h-1 bg-black" />
      </div>
      <div className='mt-10 flex flex-col md:flex-row justify-between gap-8'>
        <p>Copyright © 2024 SmartDev. All Rights Reserved</p>
        <div className='space-x-6'>
          <a href="/" className='hover:text-gray-400'>Privacy Policy</a>
          <a href="/" className='hover:text-gray-400'>Terms of Service</a>
          <a href="/" className='hover:text-gray-400'>Cookies Settings</a>

        </div>
      </div>
    </div>
  )
}

export default Footer
