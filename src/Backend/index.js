import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://final:final@final.oc5qcyk.mongodb.net/myapp?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('DB is connnected')
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("user",userSchema)


app.post('/login',(req,res)=>{
    const{email,password}= (req.body);
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:'Login successfully',user:user})
            }
            else{
                res.send({message:"password didn't match"})
            }
        }
        else{
            res.send("user not registered")
        }
    })
})

app.post('/register',(req,res)=>{
    const{name,email,password}= (req.body);
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user alerady registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message:"successfully Registerd"})
                }
            })
        }
    })

})



// for feedback
const feedbackSchema = new mongoose.Schema({
    username:String,
    email:String,
    feedbackprovider:String
})
const UserFeedback = new mongoose.model("userfeedback",feedbackSchema)

app.post('/feedback',(req,res)=>{
    const {username,email,feedbackprovider}= req.body;
    UserFeedback.findOne({email:email},(err,userfeedback)=>{
      if(userfeedback){
        res.send({message:"user's already submitted"})
      }
      else{
        const users = new UserFeedback({
            username,
            email,
            feedbackprovider
        })
        users.save(err=>{
            if(err)
            {
                res.send({message:'Error occured'})
            }
            else{
                res.send({message:"successfully submitted"})
            }
        })
      }

    })
})


app.listen(9002,()=>{
    console.log('server is running')
})