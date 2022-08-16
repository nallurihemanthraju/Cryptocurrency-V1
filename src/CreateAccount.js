import React from 'react';
import { useFormik} from 'formik'
import * as Yup from 'yup'

const CreateAccount = () => {
  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      number:""
        },

        validationSchema:Yup.object({
          firstname:Yup.string()
          .max(15,'Must be less then 15 characters')
          .min(5,'must be minium 5 letters')
          .required('Requried'),

          lastname:Yup.string()
          .max(15,'must be less than 15 characters')
          .min(5,'must be minimum 5 letters')
          .required('Requried'),
          
          email: Yup.string()
          .email('Invalid email')
          .required('Required'),

          number:Yup.number()
          // .max(10,"Maximum 10 numbers are requried")
          // .min(10,"minmum numbers are 11")
          .required("Requried")
          
          // number:Yup.number()
          // .min(0,'Min value 0.')
          // // .max(30,"max value 10.")
          // .max()
          // .required('Requried ')
        }),
        

        onSubmit:values=>{
          console.log(values)
          
        }
  })
  
  return (
    <div>
      <h1>{JSON.stringify('values'.values)}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label className='ml-36 text-blue-400 mt-10 text-xl' htmlFor='firstname'>First Name ::</label>
        <input name='firstname' className='ml-36 mt-10 border-2 border-blue-700 rounded-lg' id="firstname" placeholder="enter your first name" onChange={formik.handleChange} value={formik.values.firstname}/>
        <br/>
        {
          formik.touched.firstname && formik.errors.firstname ? ( <div className='ml-96 text-red-600'>{formik.errors.firstname}</div>): null
        }
        <br/>
        <label className='ml-36 text-blue-400 mt-10 text-xl' htmlFor='lastname'>Last Name ::</label>
        <input name="lastname" className='ml-36 mt-10   border-2 border-blue-700 rounded-lg' id='lastname' placeholder='enter your last name' onChange={formik.handleChange} value={formik.values.lastname}/>
        <br/>
        {
          formik.touched.lastname && formik.errors.lastname ? ( <div className='ml-96 text-red-600'>{formik.errors.lastname}</div> ) :null
        }
        <br/>
        <label className='ml-36 text-blue-400 mt-10 text-xl' htmlFor='email'>Email::</label>
        <input name='email' className='ml-48 border-2 mt-10 border-blue-700 rounded-lg' id='email' placeholder='enter your email' onChange={formik.handleChange} value={formik.values.email}/>
        <br/>
        {
          formik.touched.email && formik.errors.email ? (<div className='ml-96 text-red-600'>{formik.errors.email}</div>) : null
        }
        <br/>
        <label className='ml-36 mt-10  text-blue-500 text-xl    ' htmlFor='number'>Number::</label>
        <input name="number" className='ml-40    mt-10 border-2 border-blue-500 rounded-md ' id="number" placeholder="enter your number" onChange={formik.handleChange} value={formik.values.number}/>
        <br/>
        {
          formik.touched.number && formik.errors.number ? ( <div className='ml-96  text-red-600'>{formik.errors.number}</div> ) : null
        }
        <br/>
        <button  className='ml-96 mt-12 h-8 w-20 bg-green-400 rounded-md mb-44' type='submit'>Submit</button>
      </form>
    </div>
    
  ) 
}

export default CreateAccount