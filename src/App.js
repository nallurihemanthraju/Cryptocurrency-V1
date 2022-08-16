import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import About from "./components/About";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ThankYou from "./components/ThankYou";
import Login from "./components/Login"
import CreateAccount from "./CreateAccount";
import Footer from "./components/Footer";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [userFound, setUserFound] = useState(false);
  const [loginStatus,setLoginStatus] = useState(false);
  const loginPageCall = (userUniqueID)=>{
   
    
    let lsData = localStorage.getItem("userDataList");
    let parseData;
      if(lsData){
          parseData = JSON.parse(lsData);
      }else{
          parseData = [];
      }

      for(let i=0; i<parseData.length; i++){
        if(parseData[i].uniqueId === userUniqueID){
          setUserFound(parseData[i].loginStatus);
        }
      }
  }
  const logFunc = (value)=>{
    value?window.alert("logged In"):window.alert('logged Out');
    setLoginStatus(value);
  };
  return (
    <Router>
       
        <Navbar loginStatus={loginStatus} logFunc={logFunc}/>
          <Routes>
            <Route path="/" element={<Login logFunc={logFunc}/>} />
            <Route path="/login" element={<Login logFunc={logFunc} loginPageCall={loginPageCall}/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/feature1" element={<Feature1 />} />
            <Route path="/feature2" element={<Feature2 />} />
            <Route path="/feature3" element={<Feature3 />} />
            <Route path="/feature4" element={<Feature4 />} />
            <Route path="/feature5" element={<Feature5 />} />
            <Route path="/feature6" element={<Feature6 />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/thankyou" element={<ThankYou/>} />
            <Route path="/createaccount"element={<CreateAccount/>}/>
          </Routes>
      <Footer/>
    
    </Router>
  );
}

export default App;