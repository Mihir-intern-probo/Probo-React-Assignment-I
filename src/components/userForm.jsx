import React, { useState } from 'react'
import './mycss.css'
const UserForm = () => {
    const [userName,setUserName] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState();
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userName || !name || !phone || !password || !confirmPassword){
            alert("Please fill all the fields");
        }else if(userName.length < 6){
            alert("Username must be atleast 3 characters long");
        }else if(name.length < 3){
            alert("Name must be atleast 3 characters long");
        }else if(phone.length!=10){
            alert("The length of the phone number should be 10")
        }else if(password.length<3 || confirmPassword.length<3){
            alert("Passwords should be of atleast 3 characters");
        }else if(password !== confirmPassword){
            alert("Passwords do not match");
        }else{
            console.log({userName,name,phone,password,confirmPassword});
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="myForm">
            <label>
                Enter Your User Name: 
                <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} style={{width:"60%"}}/>
            </label><br/>
            <label>
                Enter Your Name: 
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} style={{width:"66%"}}/>
            </label><br/>
            <label>
                Enter Your Phone Number: 
                    <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} style={{width:"54%"}}/>
            </label><br/>
            <label>
                Enter Your Password:: 
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{width:"61%"}}/>
            </label><br/>
            <label>
                Confirm Your Password:: 
                    <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} style={{width:"57%"}}/>
            </label><br/>
            <input type="submit"/>
        </div>
        </form>
    </div>
  )
}

export default UserForm
