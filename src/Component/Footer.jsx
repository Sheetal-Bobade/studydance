
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer className="home-sec-bg">
            <div className="container">
            <div className="footer-flex one">
             <div className="footer-flex-col">
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>

             </div>
             <div className="footer-flex-col">
             <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
               <a href="mailto:mail@studydance.com">mail@studydance.com</a> 

             </div>
            </div>   

            <div className="footer-flex two">
             <div className="footer-flex-col">
                <p>
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't.
               </p>

             </div>
             <div className="footer-flex-col">
                <div className="footer-logo-area">
                <div className="footer-social-icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faWhatsapp} />
                </div>

                <h1>STUDY DANCE</h1>
                </div>

             </div>
            </div>  
            
            </div>
              
             
           

        </footer>
    )
}

export default Footer;