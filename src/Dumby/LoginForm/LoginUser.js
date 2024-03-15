import React from 'react'
import img1 from '../ImagesFolder/goggle.jpg';
import img2 from '../ImagesFolder/git.jpg';
import img3 from '../ImagesFolder/facebook.jpg';
//import { Link } from 'react-router-dom';
import '../LoginForm/LoginUser.css'

export const LoginUser = () => {
    const login=(e)=>{
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        // var z  = document.getElementById("btn");
            x.style.left='10px';
        y.style.left='450px';

        
        
         
    }
    const register=(e)=>{
        var x1 = document.getElementById("login");
        var y1= document.getElementById("register");
        // var z1 = document.getElementById("btn");
    
        x1.style.left="-400px";
        y1.style.left="5px";
         
    }
  const handleGoogle =(e)=>{
    window.open('https://myaccount.google.com/personal-info?hl=en');
  }
  const handlegit=(e)=>{
  
    window.open('https://github.com/');
  }
  const handleface=(e)=>{
 
 window.open('https://www.facebook.com/profile.php?id=100044105327911&sk=map');
  }
  return (
    <div className='hero'>
        <div className='form-box'>
            <div className='button-box'>
            <div className='btn'></div>
                <button className='toggle-btn' onClick={login}>LOGIN</button>
                <button className='toggle-btn' onClick={register} >REGISTSER</button>
                
            </div>
            <h4>Already have an account?</h4>
            <h3>Use social media accounts</h3>
            
                <div className='social-icons'>
                       <img src={img1} alt='whats' style={{paddingRight:'20px',paddingLeft:'40px',cursor:'pointer'}} onClick={handleGoogle} />
                        <img src={img2} alt='whats' height='67px' style={{paddingRight:'20px',cursor:'pointer'}} onClick={handlegit}/>
                         <img src={img3} alt='whats' height='67px'style={{paddingRight:'20px',cursor:'pointer'}} onClick={handleface} />
                  </div>
             

             <form className='input-group' id='login'>
                <input type='text' className='input-field' placeholder='USER ID' required/>
                <input type='password' className='input-field' placeholder='ENTER PASSWORD' required/>
                <input type="checkbox" className='check-box' /><span>Remember password</span>
                <button className='submit-btn'>LOGIN</button>
             </form>


             <form className='input-group' id='register'>
                <input type='text' className='input-field' placeholder='Full name' required/>
                <input type='email' className='input-field' placeholder='Email' required/>
                <input type='password' className='input-field' placeholder='Enter Password' required/>
                <input type='password' className='input-field' placeholder='Re-Enter Password' required/>
                
                 
                 
                <input type="checkbox" className='check-box'  /><span>I Agree to terms and conditions</span>

                <button className='submit-btn'>LOGIN</button>
             </form>

        </div>
      
    </div>
  )
}
