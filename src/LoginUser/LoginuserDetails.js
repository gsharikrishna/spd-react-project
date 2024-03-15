import React,{useState} from 'react'
import axios from 'axios';
export const LoginuserDetails = () => {
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        reEnterpassword:''
    })
  const handleChange =(e)=>{
    e.preventDefault();
       const {name,value}=e.target;
       setUser({
        ...user,
        [name]:value
       })
       console.log(user)

  }
  const registerClcik=(e)=>{
  e.preventDefault()
  const {name,email,password,reEnterpassword}=user
  if(name && email &&password &&(password===reEnterpassword)){
     axios.post('http://localhost:9002/register',user)
     .then(res=>alert(res.data.message))
  }
  else{
    alert("INVALID INPUT");
  } 
}
    
  return (
    <div className='hero'>
        <div className='form-box' style={{position:'absolute' ,top:'400px',left:'300px'}}  >
             <form className='input-group' id='register'>
                <input type='text' className='input-field' name='name' value={user.name} placeholder='Full name' onChange={handleChange} required/>
                <br/>
                <input type='email' className='input-field' name='email' value={user.email} placeholder='Email'onChange={handleChange} required/><br/>
                <input type='password' className='input-field' name='password' value={user.password} placeholder='Enter Password'onChange={handleChange} required/><br/>
                <input type='password' className='input-field' name='reEnterpassword' value={user.reEnterpassword} placeholder='Re-Enter Password'onChange={handleChange} required/>            <br/>

                <button className='submit-btn' onClick={registerClcik } >Register</button>               
             </form>
       </div>      
    </div>
  )
}














// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
