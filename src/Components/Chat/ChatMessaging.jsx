import React from 'react'

export default function ChatMessaging({ profile }) {
    return (
        <div className="chat-messaging absolute top-0 right-0 rounded-10 bg-white h-full">
            <div className="profile-bar w-full bg-gray-100 flex items-center py-4 px-5">
                <img className="w-12 rounded-full mr-5" src={profile.user_avatar} alt="" />
                <h1>{profile.user_name}</h1>
            </div>
        </div>
    )
}
