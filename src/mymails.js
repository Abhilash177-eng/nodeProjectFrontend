import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
function Mymails(props) {
    const [flag, setFlag] = useState(0);
    const [userData, setData] = useState();
    const getUSerData = async () => {
        setFlag(flag + 1)
        let reqBody={
            sender:props.location.state.gmailid
        }
        axios.post('http://localhost:3003/mymails',reqBody)
            .then(resp => {
                console.log(resp.data.message);
                setData(resp.data.message)
            })
            .catch(err => {
                console.log("error");
            })
    }
    React.useEffect(() => {
        if (flag < 1) {
            getUSerData();
        }
    })
    return (
        <div className='friendCointainer'>
            {userData && userData.length >= 1 ? userData.map(elem => <div className='friendBox'> <span><b>To</b>: {elem.reciver}</span> <div className='innerContent'><b>{elem.heading}</b>-{elem.content}</div> </div>) : <span> </span>}
        </div>
    )
}

export default Mymails