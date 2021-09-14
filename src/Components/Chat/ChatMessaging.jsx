import React from 'react'
import MessageIcon from '../../Assets/MessageIcon'
export default function ChatMessaging({ profile }) {
    return (
        <div className="chat-messaging absolute top-0 right-0 rounded-10 bg-white h-full">
            {profile._id &&
                (<div className="profile-bar w-full bg-blue-600 flex items-center py-2 px-5">
                    <img className="w-12 rounded-full mr-5" src={profile.user_avatar} alt="" />
                    <h1 className="text-white">{profile.user_name}</h1>
                </div>)
            }
            {profile._id && (
                <MessageIcon className="w-10" color="bg-custom-blue" />
            )}
            {profile._id &&
                (
                    <div className="msg-container w-full absolute bottom-0 left-0">
                        <input type="text" className="w-full py-4 px-5 rounded-b-10 focus:outline-none focus:border-blue-600" placeholder="Enter Your Message" />
                    </div>
                )
            }

        </div>
    )
}
