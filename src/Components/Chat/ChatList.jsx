import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { v4 } from "uuid"
import GlobalIcon from '../../Assets/Global.jsx'

export default function ChatList({ setProfile }) {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem("user"))
    const user_img = `https://ui-avatars.com/api/?name=${user?.userMail}`
    return (
        <div className="chat-list bg-custom-blue w-96 h-full overflow-auto">
            <div className="dropdown">
                {/* <UserIcon className="w-12 cursor-pointer" color="white" /> */}
                <img src={`https://ui-avatars.com/api/?name=${user?.userMail}`} className="w-12 rounded-full cursor-pointer" alt="" />
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                        <a className="rounded bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#yash">{user?.userMail}</a>
                    </li>
                    <li className="">
                        <Link className="rounded bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" to="/newchat">New Chat</Link>
                    </li>
                </ul>
            </div>
            <button onClick={() => {
                setProfile({
                    _id: "G000",
                    user_name: "Global",
                    user_avatar: { user_img },
                    messages: [
                    ],
                })
            }}
                key={v4()} className="item w-full bg-blue-300 flex items-center py-4 px-4 rounded-10 my-4">
                <GlobalIcon className="w-10 rounded-full mr-3" strokeColor="#fff" />
                <h1 className="font-semibold">Global</h1>
            </button>
            {/* <div className="list absolute"> */}
            {/* {ProfileData.map((ele, idx) => {
                return (
                    <button onClick={() => {
                        setProfile(ele)
                    }}
                        key={v4()} className="item w-full bg-blue-300 flex items-center py-4 px-4 rounded-10 my-4">
                        <img src={ele.user_avatar} className="w-9 rounded-full mr-3" alt="" />
                        <h1 className="font-semibold">{ele.user_name}</h1>
                    </button>
                )
            })} */}
            {/* </div> */}
        </div>
    )
}
