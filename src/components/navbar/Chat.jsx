import React from 'react'
import'./chat.css'
import { Chat1 } from './chat1'
export const Chat = () => {
  return (
    <div>
      
       <div className='Ask-section'>  
       <h2 className='Title'>Feel Free To Ask </h2>
       <div className="container" id="container">
       <div className="form-container answer-container">
        <form action="">
          <h1 >Your previous question </h1>
          <input type="text" placeholder="the previous question "></input>  
          <h1>the answer</h1>
          <input type="text" placeholder="the answer " /> 
          <p className='Quest'> if you have another question feel free to ask</p>
          <input type="text"  placeholder="your question" />
        </form>
      </div>
      <div className="form-container quest-container">
        <form action="">
        <div class="icon-container">
         <div id="chatbot">
           <div class="dot"></div>
           <div class="dot"></div>
           <div class="dot"></div>
          </div>
        </div>
           <h1>Ask Any Question </h1>
          <span>your question please</span>
          <input type="question" placeholder="question" />
          <button>Submit</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className='text'>
              Don't hesitated to ask more question 
            </p>
            <button className="ghost" id="Quest">get back</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Thank you for your question , Happy to help !!</h1>
            <p className='text'>Please click on the button below to get the asnwer</p>
            <button className="ghost" id="Answer">Click Here</button>
          </div>
        </div>
      </div>
    
    </div>
    <Chat1/>
    </div>
    
    </div>
  )
}

