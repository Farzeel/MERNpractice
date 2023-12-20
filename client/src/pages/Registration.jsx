import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Errormessage from '../components/Errormessage'

const Registration = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const [userData,  setUserData] = useState({
        username:"",
        phone:"",
        email:"",
        password:"",
    })

    const handleInputChange = (e)=>{

        const {name,value} = e.target
        setUserData({...userData , [name]:value})
       
    }

    const handleSubmit = async (e)=>{

       e.preventDefault()

       

   try {
    setLoading(true)
        const response = await fetch("http://localhost:7000/api/auth/register", 
        {
          method:"POST",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify(userData)
        }
        )

        const message = await response.json()
        
        if (response.ok) {
           console.log(message.message)
            
        }else{
        setError(true)
        setErrorMessage(message.message)
        
        }
 
       
   } catch (error) {
    console.log("REGISTRATION" , error)

   } finally{
    setLoading(false)
    setTimeout(() => {
        setError(false)
    }, 1000);
   }

     

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        
         <Input
         type="text"
         placeholder="Username"
         onchange={handleInputChange}
         name = "username"
         />
         {error && <Errormessage message={errorMessage}/>}
     
         <Input
         type="email"
         placeholder="email"
         onchange={handleInputChange}
         name = "email"
         />

         <Input
         type="number"
         placeholder="PhoneNumber"
         onchange={handleInputChange}
         name = "phone"
         />

         <Input
         type="password"
         placeholder="password"
         onchange={handleInputChange}
         name = "password"
         />
         {loading ? <Loader/> : <Button onClick={handleSubmit} text = "Register"/>}
        </form>
   
    </div>
  )
}

export default Registration
