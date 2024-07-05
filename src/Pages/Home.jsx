import React from "react";
import Contact from "../Component/contact";
import SimpleSlider from "../Component/simpleslider";


function Home(){
    return(
        <div className="home">
            
             <section className="home-main">
             <div className="container main-slider">
             
                <SimpleSlider/>
      
                </div>
             </section>

             <section className="home-sec-bg">
             <div className="container">
             <h2>BE PART OF OUR SCHOOL</h2>
             <h6>REGISTER</h6>
             <Contact/>
             </div>
             </section>

             <section className="home-sec-bg-1">
                <div className="container">
                <h2>DANCE LESSONS</h2>
                <h1 className="discount">DISCOUNT</h1>
                <h1>30% OFF</h1>
                <h3>PROMO FRIENDS</h3>

                </div>
             </section>
            
             <section className="home-main last">
             <div className="container">
                <div className="flex">
             <div className="home-main-col-2">
                    <img src="images/young-classical-dancer.png" alt="young-classical-dancer" />
                </div>
                <div className="home-main-col-1">
                    <div>
                    <h1>Dance Classes</h1>
                    <h2>EVERYTHING PUBLIC</h2>
                    <h1 className="discount">Best Offer</h1>
                    </div>
                    <div>
                    <h6>Everyday from 10 Hours</h6>
                    <p>It is a long established fact.</p>
                    </div>
 
                </div>
                </div>
                </div>
             </section>
              
             
           

        </div>
    )
}

export default Home;