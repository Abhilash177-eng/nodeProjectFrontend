import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Home(props) {
    const history = useHistory();
    const sendData = () => {
        let reqBody = {
            recepient: document.getElementById("gmailid").value,
            subject: document.getElementById("subject").value,
            body: document.getElementById("body").value,
            gmailid: props.location.state.gmailid,
            Userpassword: props.location.state.Userpassword
        }
        let resData = {
            gmailid: props.location.state.gmailid
        }
        axios.post('http://localhost:3003/sendEmail', reqBody)
            .then(resp => {
                if (resp.data.message === "Success") {
                    console.log(resp.data.message);
                    history.push({ pathname: '/mymail', state: resData });
                }
                else{
                    alert("Mail Not Sent")
                }
            })
            .catch(err => {
                console.log("error");
            })
    }
    return (
        <div className='signupBody'>
            <p className='tagLine'>Compose</p>
            <div className='extraArrow' style={{ width: "97%", marginLeft: "0.1%" }}> </div>
            <input id="gmailid" type='email' className='signupInput' placeholder='Recipient' style={{ width: "78%" }} />
            <input id='subject' type='text' className='signupInput' placeholder='Subject' style={{ marginTop: "25%", marginLeft: "7%", width: "78%" }} />
            <input id='body' type='text' className='signupInput' placeholder='body' style={{ marginTop: "45%", width: "78%" }} />
            <button className='newAccountButton' style={{ marginTop: "70%", width: "33%", height: "10%", marginLeft: "37%" }} onClick={sendData}>Send Mail</button>
        </div>
    )
}
export default Home