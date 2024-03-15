import React from 'react'
import '../Pages/Home.css';
import veg from '../ImagesFolder/veg.jpg'
import friut from '../ImagesFolder/friut.jpg'
import rice from '../ImagesFolder/rice.jpg'
import cash from '../ImagesFolder/cash.jpg'
import debit from '../ImagesFolder/credit.jpg'
import online from '../ImagesFolder/online.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import CopyrightIcon from '@mui/icons-material/Copyright';
export const Home = () => {
  return (
    <div>

        <section className='header'>
         <div className='text-box'>
               <h1>THE CHEF's GARDEN </h1>
              <p>It’s every family’s dream to have organic and chemical-free vegetables, fish, eggs in our homes grown on our terrace and balconies.
               Chef Garden makes this dream a reality for every family. The extensive research and experiments we have conducted over the years ensures 
                the healthy plants are grown and produce the highest quality vegetables for consumption. Semi spherical tanks, clear air circulation, 
              PROBAYOTIC feed for fish rearing ensure the fish are of superior quality. There is a wash out facility in the fish tanks to remove
               fish waste and decomposed food waste. This waste is extremely useful for growing vegetables and at the same time ensures the quality 
               of water in the fish tank. The next is to rear hens at home for eggs. This ensures the availability of nutritious and wholesome food 
               for children as well as the family. A healthy body is vital to guarantee our functioning and thinking. We need to bring back the good food 
                culture into our society. Chef Garden is thus a humble attempt in bringing about this change in our lives. Lets attempt to utilize the available
                space in our homes to grow our vegetables, fish and eggs for our consumption and at the same time provide us with an additional income.</p>
                <button className='hero-btn'>Visit Us To Know More</button>
           </div>
        </section>

        <section className='course'>
          <h1>Profucts we offer</h1>
          <p>Some farmers, such as cash grain farmers or dairy farmers, have large, well-established markets. They can use existing organizations to perform the marketing function for them, or they can band together, form a cooperative, and market their products jointly. Small-scale fruit and vegetable growers generally have more difficulty finding established markets; therefore, they usually develop marketing systems tailored to their unique situations.</p>


          <div className='row'>

            <div className='course-col'>
              <h3>Vegetables</h3>
              <p>Find your ingredient vegetable items with us. We offer top notch vegetable items represent leading producers in a diverse range of air dried, freeze dried, infused, frozen purees and shelf stable options.</p>
            </div>

            <div className='course-col'>
              <h3>Friuts</h3>
              <p>A fruit stand is a primarily open-air business venue that sells seasonal fruit and many fruit products from local growers. It might also sell vegetables and various processed items derived from fruit. The fruit stand is a small business structure that is primarily run as an independent sole proprietorship, with very few franchises or branches of larger fruit stand conglomerates</p>
            </div>

            <div className='course-col'>
              <h3>Rices</h3>
              <p>There are many varieties of rice and culinary preferences tend to vary regionally.


Annual per capita rice supply (2019)

Oryza sativa with small wind-pollinated flowers
The traditional method for cultivating rice is flooding the fields while, or after, setting the young seedlings. This simple method requires sound irrigation planning but reduces the growth</p>
            </div>



          </div>
        </section>



        <section className='campus'>
          <h1>Our Cultivation</h1>
          <p>India’s diverse soil and climate, comprising several agroecological regions, make it conducive to grow a wide variety of horticulture crops comprising of fruits, vegetables, root and tuber crops, flowers, ornamental plants, medicinal and aromatic plants, spices, condiments, plantation crops and mushrooms, which form a significant part of aggregate agricultural produce.</p>

          <div className='row'>

            <div className='campus-col'>
              <img src={veg} alt='verimage' />
              <div className='layer'>
              <h3>Vegetables</h3>
              </div>
            </div>

            <div className='campus-col'>
              <img src={friut} alt='verimage' />
              <div className='layer'>
              <h3>Fruits</h3>
              </div>
            </div>

            <div className='campus-col'>
              <img src={rice} alt='verimage' />
              <div className='layer'>
              <h3>Rices</h3>
              </div>
            </div>

          </div>
        </section>
 
 
    <section className='facilities'>
      <h1>Our Facilities</h1>
      <p>You can get food, friuts, Rices and more quickly through delivery services.</p>


      <div className='row'>

          <div className='facilities-col'>
               <img src={online} alt='onlinemode' />
               <h3>ONLINE MODE</h3>
               <p>pay through online mode</p>
        </div>

        
        <div className='facilities-col'>
               <img src={cash} alt='cashmode' />
               <h3>ONLINE MODE</h3>
               <p>pay through direct-cash mode</p>
        </div>

        
        <div className='facilities-col'>
               <img src={ debit} alt='creidtmode' />
               <h3>ONLINE MODE</h3>
               <p>pay through debit card mode</p>
        </div>


      </div>
    </section>

    <section className='cta'>
      <h1>Want to collabrate With us</h1>
      <button className='hero-btn'>CONTACT US</button>
    </section>

    {/* Footer */}
    <section className='footer'>
      <h4>ABOUT US</h4>
      <p>Building a website is an exercise of willpower. The bells and whistles of the design process are tempting to focus on, but compelling content is what makes a website work for your business.There are few pieces of content on your website that are more compelling than your mission, vision, values, and team. And all of these elements are typically found on the About page of your website.</p>
      <div className='icons'>
          <div className='react-icons'>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
                <LinkedInIcon />
                 
        </div>
       
      </div>
       
    </section>
    </div>
  )
}
