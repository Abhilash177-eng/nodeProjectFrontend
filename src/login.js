import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Login() {
    const history = useHistory();
    const validateUser = () => {
        let reqBody = {
            gmailid: document.getElementById("gmailid").value,
            Userpassword: document.getElementById("password").value
        }
        axios.post('http://localhost:3003/validateUser', reqBody)
            .then(resp => {
                if (resp.data.message === "Success") {
                    history.push({ pathname: '/home', state: reqBody });
                }
                else {
                    console.log('NO')
                }
            })
            .catch(err => {
                console.log("error");
            })
    }
    return (
        <div className='signupBody'>
            <p className='tagLine'>Sign in</p>
            <div className='extraArrow' style={{ width: "97%", marginLeft: "0.1%" }}> </div>
            <input id='gmailid' type='email' className='signupInput' placeholder='Emailid' style={{ marginTop: "15%", marginLeft: "7%", width: "78%" }} />
            <input id='password' type='password' className='signupInput' placeholder='Password' style={{ marginTop: "37%", width: "78%" }} />
            <button className='newAccountButton' style={{ marginTop: "65%", width: "33%", height: "10%", marginLeft: "37%" }} onClick={validateUser}>Login</button>
        </div>
    )
}
export default Login