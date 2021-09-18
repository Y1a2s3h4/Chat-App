import React from 'react'
import UserIcon from '../../Assets/UserIcon'
import ProfileData from "./Source"
export default function ChatList({ setProfile }) {
    return (
        <div className="chat-list absolute top-0 left-0 bg-custom-blue w-96 h-full overflow-auto">
            <UserIcon className="w-12" color="white" />
            {/* <div className="list absolute"> */}
            {ProfileData.map((ele, idx) => {
                return (
                    <button onClick={() => {
                        setProfile(ele)
                    }}
                        key={ele._id} className="item w-full bg-blue-300 flex items-center py-4 px-4 rounded-10 my-4">
                        <img src={ele.user_avatar} className="w-9 rounded-full mr-3" alt="" />
                        <h1 className="font-semibold">{ele.user_name}</h1>
                    </button>
                )
            })}
            {/* </div> */}
        </div>
    )
}
