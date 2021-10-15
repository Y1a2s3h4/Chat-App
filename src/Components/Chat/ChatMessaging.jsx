import React, { Fragment, useState, useEffect, useRef } from 'react'
import MessageIcon from '../../Assets/MessageIcon'
import { v4 } from 'uuid'
import SendIcon from '../../Assets/SendIcon'
import { getDatabase, ref, push, onValue } from "firebase/database";
export default function ChatMessaging({ profile }) {
    const [msg, setMsg] = useState("")
    const [messages, setMessages] = useState([])
    const db = getDatabase();
    const { userId, userMail } = JSON.parse(localStorage.getItem("user"))
    const scroll = useRef(null).current
    useEffect(() => {
        onValue(ref(db, "/users"), (res) => {
            setMessages(Object.values(res.val()))
            scroll?.scrollIntoView({ behavior: "smooth" })
        })
        // eslint-disable-next-line
    }, [])
    async function writeUserData(e, userId, email) {
        e.preventDefault()
        push(ref(db, '/users'), {
            email,
            userId,
            msg
        });
        setMsg("")
        /* const res = await fetch("https://chat-app-be2a9-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", {
            method: "POST",
            headers:{
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, 
                userId, 
                msg 
            })
        }) */
        // console.log(res)
    }
    return (
        <div className="chat-messaging absolute top-0 right-0 rounded-10 bg-white h-full">
            {profile._id &&
                (<div className="profile-bar w-full bg-blue-600 flex items-center py-2 px-5">
                    <img className="w-12 rounded-full mr-5" src={profile.user_avatar} alt="" />
                    <h1 className="text-white">{profile.user_name}</h1>
                </div>)
            }
            {!profile._id && (<>
                <MessageIcon className="w-1/2 mx-auto" color="#3574ff" />
                <h1 className="text-custom-blue text-5xl text-center">Start Chatting here!</h1>
            </>
            )
            }
            {profile._id && (
                <>
                    <div className="chat-messaging-body flex flex-col relative overflow-scroll">
                        {messages?.map((msg) => (
                            <Fragment key={v4()}>
                                <div>
                                    {msg.email === userMail ? (<p className="sended-msg ml-auto">{msg.msg}</p>) : (<p className="received-msg mr-auto">{msg.msg}</p>)}
                                </div>
                            </Fragment>
                        ))}
                        <div className="dummy" ref={scroll}></div>
                    </div>
                </>
            )
            }
            {
                profile._id &&
                (
                    <div className="msg-container w-full absolute bottom-0 flex left-0 border-t-4 border-custom-blue">
                        <input type="text" onChange={e => {
                            setMsg(e.target.value)
                        }} value={msg} className="w-full py-4 px-5 rounded-b-10 focus:outline-none focus:border-blue-600" placeholder="Enter Your Message" />
                        <button type="submit" onClick={(e) => {
                            writeUserData(e, userId, userMail)
                        }}> <SendIcon className="send-svg" strokeWidth="2" strokeColor="#4f86ff" /> </button>
                    </div>
                )
            }

        </div >
    )
}
