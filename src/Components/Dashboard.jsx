import React from 'react'
import ChatList from './Chat/ChatList'
import ChatMessaging from './Chat/ChatMessaging'
export default function Dashboard() {
    return (
        <div className="dashboard-wrapper flex justify-center items-center">
            <div className="chat-wrapper bg-white rounded-10 shadow-xl relative">
                <ChatList />
                <ChatMessaging />
            </div>
        </div>
    )
}