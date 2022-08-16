import React from 'react'
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import './Contact.css'
function Contact(props) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [message,setMessage] = useState("");

  let navigate = useNavigate();

  const onformSubmit=(e)=>{
    e.preventDefault();

    document.getElementById("name").oninvalid = (e)=> {
      e.target.setCustomValidity("Incorrect name, please enter a valid name!");
    }

    navigate("/thankyou")
      const data =  {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
        uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100)
        }
    
        let IsData = localStorage.getItem("contactUseDataList");
        let parseData;
        if(IsData)
        {
          parseData = JSON.parse(IsData)
        } else{
          parseData = [];
        }
       localStorage.setItem("contactUsDataList", JSON.stringify([data,...parseData]));
        let formTag = document.forms[0];
        formTag.name.value="";
        formTag.email.value="";
        formTag.mobile.value="";
        formTag.message.value="";
    
  }

  return (
        <>
        <h1 className='text-blue-800 font-extralight text-3xl ml-28'>Contact Us</h1>
           <div className='container'>
            <form onSubmit={onformSubmit}>
              <div>
                <div  className='mt-11'>
                  <label className='ml-52 text-lg text-blue-500 mt-10' htmlFor="name">Name :</label>
                  <br/>
                  <input className='form-input border-2 ml-64 rounded-lg border-yellow-300 h-8 w-80 hover:border-blue-700'  id='name' type="text" placeholder="Enter your name" name="name" onChange={(e)=>setName(e.target.value)} />
                  <br/>
                  <br/>
                  <label className='text-lg ml-52 text-blue-500 mt-4'htmlFor="email">Email :</label>
                  <br/>
                  <input className='form-input border-2 ml-64 rounded-lg border-yellow-300 h-8 w-80 hover:border-blue-700'  id='email' type="email" placeholder="Enter your mail id" name="email" onChange={(e)=>setEmail(e.target.value)} />
                  <br/>
                  <br/> 
                  <label className='ml-52 text-lg text-blue-500 mt-4' htmlFor="mobile">Mobile :</label>
                  <br/>
                  <input className='form-input border-2 ml-64 rounded-lg border-yellow-300 h-8 w-80 hover:border-blue-700'  id='mobile' type="number" placeholder="enter your mobile number" name="mobile" onChange={(e)=>setMobile(e.target.value)} />
                  <br/>
                  <br/>
                  <label className='ml-52 text-lg text-blue-500 mt-4' htmlFor="message">Message :</label>
                  <br/>
                  <textarea className='form-input border-2 ml-64 rounded-lg border-yellow-300 h-28 w-80 hover:border-blue-700' id='message' type="text" placeholder='Enter your message ' name='message' onChange={(e)=>setMessage(e.target.value)} />
                  <br/>
                  <Link  to="/thankyou"   className='border-2 ml-96 mt-11 bg-blue-600 rounded-lg h-9c w-16'>Submit</Link>
                </div>
              </div>
            </form>
           </div>
        </>

  )
}

export default Contact