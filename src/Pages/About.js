import React,{useState} from 'react'
// import { Footer } from '../Footer/Footer'
import '../Pages/AboutPage.css'
import { useNavigate } from 'react-router-dom'
import video from '../Videos/vegvideo2.mp4'
import axios from 'axios'
export const About = () => {
  const [details,setDetails] = useState({
    username:'',
    email:'',
    feedbackprovider:''
  })
  const changeHandler=(e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setDetails({
      ...details,
      [name]:value
    })
    console.log(details);

  }
  const sendclick=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:9002/feedback',details)
    .then(res=>alert(res.data.message))
  }









   const navigate=useNavigate();
  return (
    <div>
        <div className='main'>
        <video autoPlay muted controls playsInline className='backvideo' width="80%" height="90%" style={{position:'relative',zIndex:0}} >
          <source src={video} type="video/mp4"  ></source>
        </video>
        <div className='hari'>
        <h1>Receive the best of the season's vegetables, fruits and rices direct from our farm to your kitchen.</h1>
        <button className='btns'>EXPLORE</button>
        </div>
        </div>

        <div className='rowclass'>


          <div className='colclass'>
            <h1>Home Delivery</h1>
            <p>The Chef's Garden at Home! Receive a box of seasonal, nutrient-dense, flavor-rich food that will revolutionize your home kitchen. As soon as we receive your order, we’ll head to the field, harvest your produce, and get it on its way to you. It’s like having your own garden. Let Farmer Jones Farm at The Chef's Garden be your personal farmer.</p>
            <button>Explore</button>
          </div>

          <div className='colclass'>

            <div className='card card1'>
              <h1>carrot</h1>
              <p>A popular sweet-tasting root vegetable, Carrots are long, narrow and cone shaped.They have thick, fleshy, deeply coloured root, which grows underground, with feathery green leaves that emerge above the ground.</p>
             </div>

             <div className='card card2'>
              <h1>Cabbage</h1>
              <p>With a texture of crispness and juiciness the moment you take the first bite, cabbages are sweet and grassy flavoured with dense and smooth leafy layers.</p>
             </div>

             <div className='card card3'>
              <h1>Tomato</h1>
              <p>The product image(s) shown are for representation purposes only. The actual product may vary. It is recommended to read the product labels (if any), batch details, directions for use, etc., as contained in the actual product before consuming and/or utilizing the product.</p>
             </div>


             <div className='card card4'>
              <h1>Cauliflower</h1>
              <p>Cauliflower is made up of tightly bound clusters of soft, crumbly, sweet cauliflower florets that form a dense head.Resembling a classic tree, the florets are attached to a central edible white trunk which is firm and tender.</p>
             </div>

          </div>


        </div>
        <section className='friutssection'>

            <div className='colclass'>
            <h1>Fruits Section</h1>
            <p>A fruit stand is a primarily open-air business venue that sells seasonal fruit and many fruit products from local growers. It might also sell vegetables and various processed items derived from fruit. The fruit stand is a small business structure that is primarily run as an independent sole proprietorship, with very few franchises or branches of larger fruit stand conglomerates, though many large food industry businesses have developed from fruit stand businesses.</p>
            <button>Explore</button>
            </div>


            <div className='colclass'>

            <div className='card card5'>
              <h1>Apple</h1>
              <p>A popular sweet-tasting root vegetable, Carrots are long, narrow and cone shaped.They have thick, fleshy, deeply coloured root, which grows underground, with feathery green leaves that emerge above the ground.</p>
             </div>

             <div className='card card6'>
              <h1>Banana</h1>
              <p>With a texture of crispness and juiciness the moment you take the first bite, cabbages are sweet and grassy flavoured with dense and smooth leafy layers.</p>
             </div>

             <div className='card card7'>
              <h1>Strawberries</h1>
              <p>The product image(s) shown are for representation purposes only. The actual product may vary. It is recommended to read the product labels (if any), batch details, directions for use, etc., as contained in the actual product before consuming and/or utilizing the product.</p>
             </div>


             <div className='card card8'>
              <h1>Watermelon</h1>
              <p>Cauliflower is made up of tightly bound clusters of soft, crumbly, sweet cauliflower florets that form a dense head.Resembling a classic tree, the florets are attached to a central edible white trunk which is firm and tender.</p>
             </div>

          </div>
        </section>

        <section className='ricessection'>

            <div className='colclass'>
            <h1>   Types of Rices</h1>
            <p>As a cereal grain, domesticated rice is the most widely consumed staple food for over half of the world's hu      man population,[Liu 1] especially in Asia and Africa. It is the agricultural commodity with the third-highest worldwide production, after sugarcane and maize.[1] Since sizable portions of sugarcane and maize crops are used for purposes other than human consumption, rice is the most important food crop with regard to human nutrition.</p>
            <button>Explore</button>
            </div>


            <div className='colclass'>

            <div className='card card12'>
              <h1>Basmati Rice.</h1>
              <p>Basmati, pronounced ['bɑːsmət̪iː], is a variety of long, slender-grained aromatic rice which is traditionally grown in India, Pakistan, and Nepal.</p>
             </div>

             <div className='card card9'>
              <h1>Long-Grain White Rice.</h1>
              <p>Basmati rice and jasmine rice are both examples of long-grain rice. Like the regular white and brown rice found in every grocery store, long-grain rice is approximately three to five times the length that it is wide.</p>
             </div>

             <div className='card card10'>
              <h1>Valencia Rice.</h1>
              <p>The name Valencia comes from the Spanish province, home to authentic paella. This variety is short grain rice, also known as pearl rice or round rice which, when cooked, absorbs the liquid so it becomes tender, compact and moist.</p>
             </div>


             <div className='card card11'>
              <h1>Short-Grain Rice.</h1>
              <p>Rice varieties are classified as short-, medium-, or long-grain based on their length-to-width ratio when cooked. Long-grain rice is long and thin (roughly four to five times as long as it is wide), while medium-grain rice is about two to three times as long as it is wide. Short-grain rice is considerably more wide than it is long..</p>
             </div>

          </div>
        </section>
        <section>
          {/* <Footer /> */}
        </section>
       <h1 className='submituserreview'>SUBMIT USER'S REVIEW</h1>
        <section className='submitfeedback'>              
          <div className='submitfeedbackbutton'>
          <h1>submit feedback</h1>
          <br/ >
          <button onClick={()=>navigate('feedback')}>Submit Feedback</button>
          </div>
          <div className='submitinputfeedback'>
          <h1 className='detailstext'>Please fill your details</h1>
          <form>
              <input className='nameinput' type="text" name='username' value={details.username}  onChange={changeHandler} placeholder='Enter name' />
              <br/>

              <input className='nameinput' type="email" name='email' value={details.email} onChange={changeHandler} placeholder='Enter email' />
              <br/>
              <input className='nameinputemail' type="text" name='feedbackprovider' value={details.feedbackprovider} onChange={changeHandler} placeholder="enter Feedback" />
              <br/>
             <button className='send' onClick={sendclick}>SEND</button>
          </form>
          </div>
        </section>
    </div>
  )
}
