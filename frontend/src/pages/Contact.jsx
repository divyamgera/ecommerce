
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import iconEmail from '../assets/icon-email.png'

import '../pagesStyles/Contact.css'


const Contact = () =>{
  return (
    <>
    <section className="bg-img1">
      <h1 className="htext" >Contact</h1>
      </section>  
      <section className="contactSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Contactbox1">

              <form>
                <h4 className="ContactHtext">Send Us A Message</h4>
                <div className="bor8 ContactEtext">
                  <input className="Eaddress" type="email" placeholder="Your Email Address" />
                 
                  <img className="how-pos4" src={iconEmail}  />
                </div>
                <div className="bor8 ContactTtext">
                  <textarea className="textArea" placeholder="How Can We Help?"></textarea>
                </div>
                <button className="hov-btn">Submit</button>
              </form>

            </div>

            <div className="col-lg-6 Contactbox2">

              <div className="p-b-42">
                <span className="mIcon"> 
                  <span className="icon"><TfiLocationPin /></span>
                   </span>
                <div className="size-212">
                  <span>Address</span>
                  <p className="pText cl6">
								Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
							</p>
                </div>

              </div>

                <div className="p-b-42">
                <span className="mIcon">
                  <span className="icon"><IoCallOutline /></span>
                </span>
                <div className="size-212">
                  <span>Lets Talk</span>
                  <p className="pText">
								+1 800 1236879
							</p> 
                </div>

              </div>

                <div className="w-full">
                <span className="mIcon">
                  <span className="icon"><HiOutlineMail /></span>
                </span>
                <div className="size-212">
                  <span>Sale Support</span>
                  <p className="pText">
								contact@example.com
							</p>
                </div>

              </div>

            

            </div>
          </div>
        </div>


      </section>

      <section className="container-fluid p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105038.52520452657!2d76.5685589017168!3d30.5812293632221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1752063785416!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

   


    </>
  )
}

export default Contact;