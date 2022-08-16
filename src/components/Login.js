import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Login = ({loginPageCall,logFunc}) => {
  const [userName,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  let navigate= useNavigate();                


const onSubmit = (event) => {
  event.preventDefault();
  let lsData = localStorage.getItem("userDataList");
  let parseData;
    if(lsData){
      parseData = JSON.parse(lsData);
    }else{
      parseData = [];
    }
    if(parseData!== null && !parseData.length>0){ 
    }else{
      let i = 0;
      let userUniqueID = "";
      try{
        while(i <= parseData.length){
          if(parseData[i].email === userName && parseData[i].password === userPassword){
            parseData[i].loginStatus = true;
            userUniqueID = parseData[i].uniqueId;
            localStorage.setItem("userDataList",JSON.stringify(parseData));
            
                  navigate('/home');
                  document.getElementById("navbar").style.display = "flex";
                  loginPageCall(userUniqueID);
                  logFunc(true);
                break;
              }else{
                document.getElementById("navbar").style.display = "none";
              }
            i += 1;
          }
        }catch(err){
         
          document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
          setTimeout(()=>{
              document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
          },2500);
          console.log(err);
        }
    }
};

  return (
    
    <div >
      <h2 className="mb-5 text-5xl text-green-700  mt-4 ml-96">Login</h2>
      <br />
      <div className="errMessage">
        <p className="ml-96 mb-5 text-green-400">Incorrect credentials, Please check and try again!</p>
      </div>
      
      <form onSubmit={onSubmit} >
        
        <label className="block ml-96 text-green-500 text-xl" htmlFor="userName">Username/Email</label>
        <br />
        <input type="text" name="userName" id="userName" className=" ml-96 py-3 px-52 border-2 border-blue-400 rounded-full bottom-2 hover:border-red-500" placeholder="enter your name" onChange={(e)=>{setUserName(e.target.value)}} />
      <br/>
        <br />
        <label className="block ml-96 text-green-700 text-xl">Password</label>
        <br />
        <input type="password" className="ml-96  px-52 py-3 border-2 rounded-full form-input outline-blue-400  hover:border-red-500" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} />
         <br/><br/>
        <button type="submit" className=" ml-96 mt-6 logIn text-2 font-bold text-white duration-300 bg-green-500 rounded-md">Login</button>
        
      </form>
      

      <br />
      <p style={{marginBottom:"7rem"}} className="text-1xl text-lg text-white ml-96 mt-5">If You Don't Have An Account ? <Link className="text-green-700 ml-4" to="/signup"><b>Signup</b></Link></p>
    </div>
   
  );
};
export default Login;