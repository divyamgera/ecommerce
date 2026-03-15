
import { FaHeart,FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import Iconpay1 from "../assets/icon-pay-01.png"
import Iconpay2 from "../assets/icon-pay-02.png"
import Iconpay3 from "../assets/icon-pay-03.png"
import Iconpay4 from "../assets/icon-pay-04.png"
import Iconpay5 from "../assets/icon-pay-05.png"

import '../componentStyles/Footer.css'




const Footer = () =>{

  return(
    <>
         <footer className="bgColor ">
          <div className="container">

            <div className="row p-b-18">
              <div className="col-lg-3">
                <h4>Categories</h4>
                <ul className="p-0"  >
                  <li  className="p-b-10" ><a className="stext" href="#">Women</a></li>
                  <li  className="p-b-10"><a className="stext" href="#">Men</a></li>
                  <li  className="p-b-10"><a className="stext" href="#">Shoes</a></li>
                  <li className="p-b-10"><a className="stext" href="#">Watches</a></li>
                </ul>
              </div>


              <div className="col-lg-3">
                <h4>Help</h4>
                 <ul className="p-0">
                  <li className="p-b-10"><a className="stext" href="#">Track Order</a></li>
                  <li className="p-b-10"><a className="stext" href="#">Returns</a></li>
                  <li className="p-b-10"><a className="stext" href="#">Shipping</a></li>
                  <li className="p-b-10"><a className="stext" href="#">FAQs</a></li>
                </ul>
              </div>

                <div className="col-lg-3">
                  <h4>Get In Touch</h4>
                  <p>
						           Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
					        </p>
              <div className="mb-4">
                <a href="#" className="mr-15">  <FaFacebookF size={22} />  </a>
                <a href="#" className="mr-15"> 	<FaInstagram size={22} />  </a>
                <a href="#" className="mr-15">  <FaPinterestP size={22} /> </a>
              </div>

                </div>


              <div className="col-lg-3">
                <h4>NewsLetter</h4>
                <form >
                  <div className="inputbox">
                    <input type="text" placeholder="email@example.com" />
                  </div>
                  <div className="subscribeBtn">
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>


              </div>

              <div className="p-t-40">

                <div className="footerIcons">
                  <a href="#"> <img src={Iconpay1}  /> </a>
                  <a href="#"> <img src={Iconpay2}  /> </a>
                  <a href="#"> <img src={Iconpay3}  /> </a>
                  <a href="#"> <img src={Iconpay4}  /> </a>
                  <a href="#"> <img src={Iconpay5}  /> </a>
                </div>

                <p>
                  Copyright &copy;2025 All right reserved | Made with  <FaHeart color="red" /> by Divyam.
                </p>



              </div>
            
            </div>
             
       


         </footer>

    
    </>
  )

}

export default  Footer;