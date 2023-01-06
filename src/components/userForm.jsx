import React,{useState,useEffect} from "react";
import "./mycss.css";
const UserForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const val = Object.fromEntries(data.entries());
    if (
      !val.userName ||
      !val.name ||
      !val.phone ||
      !val.password ||
      !val.confirmPassword
    ) {
      alert("Please fill all the fields");
      return;
    }
    if(val.userName.length<5){
        alert("Username should be atleast 5 characters long");
        return;
    }
    if(val.name.length<3){
        alert("Name should be atleast 3 characters long");
        return;
    }
    if(val.phone.length!==10){
        alert("Phone number should be 10 digits long");
        return;
    }
    if(val.password.length<3){
        alert("Password should be atleast 3 characters long");
        return;
    }
    if (val.password !== val.confirmPassword) {
      alert("Password and Confirm Password should be same");
      return;
    }
    console.log(val);
  };

  const [debounce, setDebounce] = useState(null);
  const [password, setPassword] = useState(null);
  const [message,setMessage] = useState(false);


  useEffect(() => {
    let time = setTimeout(()=>{
        if(debounce!==password)
            setMessage(true);  
    },300)
    return () => {
      clearTimeout(time);
      setMessage(false);
    }
  }, [debounce])
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="myForm">
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ display: "block" }}>User Name: </label>
              <label style={{ display: "block" }}>Name: </label>
              <label style={{ display: "block" }}>Phone Number: </label>
              <label style={{ display: "block" }}>Password: </label>
              <label style={{ display: "block" }}>Confirm Password: </label>
            </div>
            <div>
              <input
                name="userName"
                type="text"
                placeholder="Username"
                style={{ display: "block", marginBottom: "3px" }}
              />
              <input
                name="name"
                type="text"
                placeholder="Name"
                style={{ display: "block", marginBottom: "3px" }}
              />
              <input
                name="phone"
                type="number"
                placeholder="Phone"
                style={{ display: "block", marginBottom: "3px" }}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                style={{ display: "block", marginBottom: "3px" }}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                style={{ display: "block", marginBottom: "3px" }}  
                onChange={(e)=>{setDebounce(e.target.value)}}  
              />
              <div>{message?<div style={{fontSize:"small"}}>Password and Confirm Password should be same</div>:null}</div>
            </div>
          </div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
