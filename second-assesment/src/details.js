import React from 'react';
import './App.css';

const Details = ( props ) =>{

 const Message = () =>{
    alert('Thankyou for your feedback');
  }
 
return (
    <div>
     <form className='form'>
            <div>
            <label>Name</label>
            <input type="text" 
            name="name" 
            placeholder="Your Name"
            />
          </div>
          <br></br>
          <div>
            <label>Number</label>
            <input 
            type="number"
            id='number' 
            name="number" 
            placeholder="Your Phone Number" 
            />
          </div>
          <br></br>
          <div>
            <label>Email</label>
            <input type="email" 
            placeholder="Email" 
              />
          </div>
          <br></br>
          <button className='btn' onClick={Message}>Submit</button>
      </form>

      </div>
  )
    
}
export default Details;
