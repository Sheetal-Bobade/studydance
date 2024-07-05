

const Contact = () => {
   
    

    return(
        
            <form className="registration-form" >
             <input type="text" id="fullname" name="fullname" placeholder="Name & Surname"/><br/>
             <input type="text" id="address" name="address" placeholder="Address"/><br/>
             <input type="text" id="citycountry" name="citycountry"placeholder="City,Country" /><br/>
             <input type="text" id="phone" name="phone" placeholder="Phone" /><br/>
             <textarea name="message"  placeholder="Message" ></textarea><br/>
             <button variant="primary" type="submit">Send</button>
             </form> 
    )
}


export default Contact;