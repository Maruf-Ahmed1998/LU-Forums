import React from 'react'

import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'


const Landing = () => {
  return (
      <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            {/*components*/}
          <div className="info"> 
          <h1>
            Leading <span>University </span>Forums
            </h1>
            <p>I'm baby put a bird on it lomo coloring book air plant vibecession.
                 Normcore air plant listicle taiyaki banh mi. XOXO waistcoat DIY, austin bicycle rights vegan pug hell of unicorn fam swag banh mi marfa. </p>

                 <button className="btn btn-hero">Login/Register</button>
            
        </div>
        <img src={main} alt="Querries" className='img main-img' />
        </div>
      </Wrapper>
   
  )
}


export default Landing