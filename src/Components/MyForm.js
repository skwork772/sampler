import {React, useState} from 'react'

function MyForm() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
     const [inputs, setInputs] = useState({Phone: "+91", Email: "@gmail.com", Country: "usa", Message: "The React one is"});

    function handleSubmit(e){
        e.preventDefault();
        //alert(`Your name is ${name}`);
        console.log("Your name is",inputs.name,"Your age is",inputs.Age,"Your email is",inputs.Email,"Your phone number is",inputs.Phone);
    }

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputs((previousState) => ({...previousState, [name]: value}));
       //setInputs((previousState) => { return {...previousState, [e.target.name]: e.target.value }})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name : <input type="text" name="name" onChange={handleChange}/></label><br/>
            <label>Enter Your Age : <input type="text" name="Age" onChange={handleChange}/></label><br/>
            <label>Enter Your Email : <input type="text" name="Email" onChange={handleChange} value={inputs.Email}/></label><br/>
            <label>Enter Your Phone : <input type="text" name="Phone" onChange={handleChange} value={inputs.Phone}/></label><br/>
            <label>Enter Your Country : <select name="Country" onChange={handleChange} value={inputs.Country}>
                <option value="india">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
            </select></label><br/>
            <label>Enter your message : <textarea name="Message" onChange={handleChange} value={inputs.Message}/></label><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default MyForm