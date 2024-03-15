import React from 'react'
import '../Pages/MYcart.css'
export const Mycart = ({price}) => {
  const alerting=()=>{
    alert('We Will get your products early');
  }
  return (
    <div>
      <div className='setborder'>
      <div className='flexbasing'>
         <div className='qrcodeimage'>
            <img className='qrcodeimage' src='https://apc.estorewale.com/wp-content/uploads/2020/10/Bharath-QR-210x300.png' alt='shownoth8ing' />
          </div>
          <div className='setofinputs'>
          <div style={{border:'1px solid orange',width:'max-content',margin:'10px 80px',padding:'10px 10px'}}>
           
           Total Amount :₹{price}
          </div>
          <input type='text' className='input-field' name='name'   placeholder='Mobile number'  required/>
                <input type='text' className='input-field' name='email'  placeholder='Delivery Address' required/>
                <input type='text' className='input-field' name='password'  placeholder='Order summary' required/>
                <br />
                <label for="cars">Choose a Payment method:</label>
              <br />
                  <select name="cars" id="cars" style={{height:'30px'}}>
                      < option value="volvo">Cash on delivery</option>
                      <option value="saab">Express delivey(charges applicable)</option>
                      <option value="opel">UPI banking</option>
                      <option value="audi">Net banking</option>
                      <option value="audi">Drone delivery(not applicable for your location)</option>
                </select>
                
          </div> 
      </div>
      <div className='paymentbutton'>
        <button className='placeorderbutton' onClick={alerting }>PLACE ORDER</button>
      </div>
     
      
      </div>
    </div>
  )
}
