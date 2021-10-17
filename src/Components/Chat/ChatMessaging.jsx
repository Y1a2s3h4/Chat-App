import React, { Fragment, useState, useEffect, useRef } from 'react'
import MessageIcon from '../../Assets/MessageIcon'
import { v4 } from 'uuid'
import SendIcon from '../../Assets/SendIcon'
import { getDatabase, ref, push, onValue } from "firebase/database";
import GlobalIcon from '../../Assets/Global.jsx'
export default function ChatMessaging({ profile }) {
    const [msg, setMsg] = useState("")
    const [messages, setMessages] = useState([])
    const db = getDatabase();
    const scroll = useRef()
    console.log(scroll)
    useEffect(() => {
        onValue(ref(db, "/users"), (res) => {
            if (res.val()) {
                setMessages(Object.values(res.val()))
                scroll?.current?.scrollIntoView({ behavior: "smooth" })
            }
        })
        // eslint-disable-next-line
    }, [])
    async function writeUserData(e, userId, email, profile) {
        e.preventDefault()
        push(ref(db, '/users'), {
            email,
            userId,
            msg,
            profile
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
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="chat-messaging rounded-10 flex flex-col bg-white h-full">
            <form className="flex flex-col" onSubmit={(e) => {
                writeUserData(e, user?.userId, user?.userMail, profile.user_avatar.user_img)
            }}>
                {profile._id &&
                    (<div className="profile-bar w-full bg-blue-600 flex items-center py-2 px-5">
                        <GlobalIcon className="w-12 rounded-full" strokeColor="#fff" />
                        <h1 className="text-white ml-4">{profile.user_name}</h1>
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
                        <div className="chat-messaging-body flex flex-col relative flex-none overflow-y-auto">
                            {messages?.map((msg) => (
                                <Fragment key={v4()}>
                                    <div className="flex flex-row w-full my-2">
                                        {msg.email === user?.userMail ? (<p className="sended-msg shadow-md ml-auto">{msg.msg}</p>) : (
                                            <>
                                                <img src={msg.profile} alt="" className="w-8 rounded-full self-end ml-4" />
                                                <p className="received-msg shadow-md mr-auto">{msg.msg}</p>
                                            </>
                                        )}
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
                        <div className="msg-container w-full flex-none self-end border-t-4 border-custom-blue">
                            <div className="flex flex-row">
                                <input type="text" onChange={e => {
                                    setMsg(e.target.value)
                                }} value={msg} className="w-full py-4 px-5 rounded-b-10 focus:outline-none focus:border-blue-600" placeholder="Enter Your Message" />
                                <button type="submit" className="w-8"> <SendIcon className="send-svg" strokeWidth="2" strokeColor="#3574ff" /> </button>
                            </div>
                        </div>
                    )
                }
            </form>
        </div>
    )
}
