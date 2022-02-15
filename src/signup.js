import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './App.css';
function Signup() {
    const history = useHistory();
    const sendData = () => {
        let reqBody = {
            UserName: document.getElementById("name").value,
            gmailid: document.getElementById("gmailid").value,
            Userpassword: document.getElementById("password").value
        }
        axios.post('http://localhost:3003/postdata', reqBody)
            .then(resp => {
                console.log(resp.data.message);
                history.push({ pathname: '/login' })
            })
            .catch(err => {
                console.log("error");
            })
    }
    return (
        <div className='signupBody'>
            <p className='tagLine'>Create your Email Account</p>
            <div className='extraArrow' style={{ width: "97%", marginLeft: "0.1%" }}> </div>
            <input id="name" type='text' className='signupInput' placeholder='UserName' style={{ width: "78%" }} />
            <input id='gmailid' type='email' className='signupInput' placeholder='Emailid' style={{ marginTop: "25%", marginLeft: "7%", width: "78%" }} />
            <input id='password' type='password' className='signupInput' placeholder='Password' style={{ marginTop: "45%", width: "78%" }} />
            <button className='newAccountButton' style={{ marginTop: "70%", width: "33%", height: "10%", marginLeft: "37%" }} onClick={sendData}>Sign Up</button>
        </div>
    )
}
export default Signup