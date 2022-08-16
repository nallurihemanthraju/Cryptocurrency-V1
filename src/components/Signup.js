import React from 'react'
import { useFormik } from 'formik'
import { Link,useNavigate } from 'react-router-dom'
import "./Signup.css"

function Signup() {

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            number:"",
            password:"",
            conformpassword:""
           
        },
        onSubmit:(values)=>{
            values.preventDefault();
            console.log("form values",values);
            formik.values("")

          
        },
        validate:(values)=>{

            // const OnlyNum = /^[0-9 ]*$/;
            let errors={}
            if(!values.firstname)
            {
                errors.firstname='Please enter firstname'
            }
              else if(!values.firstname.match(/^[a-zA-Z]+$/))
            {
                errors.firstname="Enter only alphabets only"
            }

            if(!values.lastname)
            {
                errors.lastname='Please enter your last name'
            }
            else if(!values.lastname.match(/^[a-zA-Z]+$/))
            {
                errors.lastname='Enter only albhabets only'
            }

            if(!values.email)
            {
                errors.email='Please enter email'
            }
            else if(!values.email.match(/^([a-zA-Z0-9_.-])+@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
            {
                errors.email='email should be example@gmail.com format only'
            }
            
            if(!values.number)
            {
                errors.number='enter  your number number'
            }
            else if(!values.number.length<10)
            {
                errors.number="number  should contain atleast 10 characters"
            }
            else if(!values.number.length>10)
            {
                errors.number="number number max 10 Digit"
            }
            // else if(values.number.match(OnlyNum))
            // {
            //     errors.number='please enter number number only'
            // }

            // else if(values.number.length<10)
            // {
            //     errors.number="number number should contain atlest 10 numbers"
            // }
            // else if(values.number.length>10)
            // {
            //     errors.number='number number max 10 digits'
            // }
            // else if((values.number.charAt(0)===1))
            // {
            //     errors.number="number number should not start with 1,2,3"
            // }
            // else if((values.number.charAt(0)===1))
            // {
            //     errors.number='number number should not start with 1,2,3'
            // }
            // else if((values.number.charAt(0)===1))
            // {
            //     errors.number="number number should not start with 1,2,3"
            // }

            if(!values.password)
            {
                errors.password='enter your password'
            }
            else if(!values.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/))
            {
                errors.password='password should contain atleast min 8 Chars[abc..,ABC..,123..,@#$..]'
            }
            // else if(values.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^$*-]).{8,}$/))
            // {
            //     errors.password='Please enter 8 digits Valid password'
            // }

            if(!values.conformpassword)
            {
                errors.conformpassword='enter your password'
            }
            else if(values.password === values.conformpassword)

            {
                errors.conformpassword="password matched"
            }
            else
            {
                errors.conformpassword='password and conformpassword should be the same'
            }
            return errors;

        }

        
    }
    );
     let data = { 
        fname:formik.values.firstname,
        lname:formik.values.lastname,
        email:formik.values.email,
        number:formik.values.number,
        password:formik.values.password,
        uniqueId:Math.round(Math.random()*100)+"_"+Math.random(Math.random()*100),
        loginStatus:false

     }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(formik.values.firstname && formik.values.lastname && formik.values.number && formik.values.email && (formik.values.password === formik.values.conformpassword))
        {
            let IsData = localStorage.getItem("userDataList");
            let parseData;

            if(IsData)
            {
                parseData = JSON.parse(IsData);
            } else {
                parseData = [];
            }

            localStorage.setItem("userDataList",JSON.stringify([data,...parseData]));
            

            let formTags = document.forms[0];
            formTags.firstname.value = "";
            formTags.lastname.value = "";
            formTags.email.value = "";
            formTags.number.value = "";
            formTags.password.value ="";
            formTags.conformpassword.value = "";

            formik.handleSubmit();

            navigate("/login")

        }

        else
        {
            alert(" Please fill empty fields")
        }
        

    };
    console.log(formik.errors.number)
    return (
        <div >
            <h1 className='mt-3 ml-10 '>Signup</h1>
            <div className='container '>
                <form autoComplete='off' onSubmit={onSubmit}>
                    <div className='grid gap-x-8 gap-y- 4 grid-cols-2 grid-rows-2 '>
                        <div>
                            <label className='text-blue-600 font-extrabold ml-36 mt-8'>First Name :</label>
                            <br />
                            <input type="text" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96 hover:border-pink-600' placeholder="enter your First Name " id='firstname' name='firstname' 
                            values={formik.values.firstname}
                            onChange={formik.handleChange}
                             />
                            <br/>
                            
                            <span>{formik.errors.firstname ? <div className='text-red-800 ml-36 '>{formik.errors.firstname}</div>:null}</span>
                            <br/>
                            <br/>
                            <label className='text-blue-600 font-extrabold ml-44 mt-8'>Email :</label>
                            <br />
                            <input type="email" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96  hover:border-pink-600' placeholder="enter your email " id='email' name='email'
                             values={formik.values.email}
                             onChange={formik.handleChange}
                             />
                            <br />
                            <span className='text-red-800 ml-36'>{formik.errors.email}</span>
                            <br/>
                            <br/>
                            <label className='text-blue-600 font-extrabold ml-36 mt-8'>password :</label>
                            <br />
                            <input type="password" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96 hover:border-pink-500' placeholder="enter your password " id='password' name='password'
                             values={formik.values.password}
                             onChange={formik.handleChange}
                             />
                             <br/>

                             <span className='text-red-800 ml-36'>{formik.errors.password}</span>
                             <br/>
                        </div>
                        <div>
                            <label className='text-blue-600 font-extrabold ml-44 mt-8'>Last Name :</label>
                            <br />
                            <input type="text" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96 hover:border-pink-600'  placeholder="enter your Last Name " id='lastname' name='lastname'
                             values={formik.values.lastname}
                             onChange={formik.handleChange}
                             />
                            <br />
                            <span className='text-red-800 ml-36'>{formik.errors.lastname}</span>
                            <br/>
                            <br/>
                            <label className='text-blue-600 font-extrabold ml-36 mt-8'>Mobile :</label>
                            <br />
                            <input type="number" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96 hover:border-pink-600' placeholder="enter your number " id='number' name='number' 
                            values={formik.values.number}
                            onChange={formik.handleChange}
                            />
                            <br />
                            <span >{formik.errors.number?<div>{formik.errors.number}</div>:null}</span>
                            
                            <br/>
                            <br/>
                            <label className='text-blue-600 font-extrabold ml-36 mt-8'>Conform Password</label>
                            <br />
                            <input type="password" className='ml-36 border-2 rounded-lg text-center text-blue-600 border-black w-96 hover:border-pink-600' placeholder=" Conform Password " id='conformpassword' name='conformpassword' 
                            values={formik.values.conformpassword}
                            onChange={formik.handleChange} 
                            />
                            <br/>
                            <span className='text-green-800 ml-36'>{formik.errors.conformpassword}</span>
                        </div>
                        <button  type='submit' className=" button border-green-300 bg-blue-400 rounded-lg mt-32 text-lg">Submit</button>
                    </div>
                </form>
            </div>
            <span>
            <p className='text-orange-800'>If you have Already have Account ? <Link to="/login" className='ml-3 border-2 rounded-md text-xl'>Login</Link>
         
                </p>
                </span>

        </div>
    )
}

export default Signup   