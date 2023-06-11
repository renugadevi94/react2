import React from 'react'
//import { AiOutlineCheck } from "react-icons/ai";

function Pricecard(props){
return(
<p>{props.name} {props.acc} </p>



)
}

function App () {
  

  const domain='Free Subdomain'
  const report='Monthly Status Reports'
  const support='Dedicated Phone Support'
  const project='Unlimited Private Projects'
  const access='Community Access'
  
  
  return (
    <div className='container' >
      <div className='card1' >
      <p>FREE</p>
      <h2>$0 /month</h2>
      <Pricecard name='Single Users' />
      <Pricecard name='5GB Storage' />
      <Pricecard name= 'Unlimited Public Projects'/>
      <Pricecard acc={access} />
      <Pricecard name={project} />
      <Pricecard name={support} />
      <Pricecard name={domain} />
      <Pricecard name= {report} />
      
      
      <button type="button">BUTTON</button>
      
      </div>

      <div className='card2 '> 
      <p>PLUS</p>
      <h2>$9 /month</h2>
       <Pricecard name='5 Users' />
      <Pricecard name='50GB Storage' />
      <Pricecard name= 'Unlimited Public Projects'/>
      <Pricecard acc={access} />
      <Pricecard name={project} />
      <Pricecard name={support} />
      <Pricecard name={domain} />
      <Pricecard name={report}  />
      
      <button type="button">BUTTON</button>
      
      </div>
      


      <div className='card3' > 
      <p>PRO</p>
      <h2>$49 /month</h2>
      <Pricecard name= 'Unlimited Users'/>
      <Pricecard name= '150GB Storage'/>
      <Pricecard name= 'Unlimited Public Projects'/>
      <Pricecard acc={access} />
      <Pricecard name={project} />
      <Pricecard name={support} />
      <Pricecard name={domain} />
      <Pricecard name={report} />
      
      <button type='button'>BUTTON</button>
      </div>
    </div>
  )
}
export default App











 