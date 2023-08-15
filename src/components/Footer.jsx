
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <>
      <footer className="text-center text-warning border-top border-warning mt-5">
        <div className="container p-4">
          <section className="mb-1">
            <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><FaFacebook className='icons'/></a>
            <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><FaInstagram className='icons'/></a>
            <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"><FaLinkedin className='icons'/></a>
          </section>
        </div>
        <div className="text-center p-1" >
          © 2023 Copyright:
          <a className="text-white" 
            rel="noopener noreferrer"
            target="_blank" 
            href="https://mdbootstrap.com/" 
            style={{ textDecoration: 'none'}}> MDBootstrap.com</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
