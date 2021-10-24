import React, { useState } from 'react'
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function NewChat() {
    const [radio, setRadio] = useState("")
    const [email, setEmail] = useState("")
    function handleRadio(e) {
        setRadio(e.target.textContent || e.target.value)
    }
    const db = getDatabase();
    const user = JSON.parse(localStorage.getItem("user"))
    let collectionsObject
    onValue(ref(db, `/`), (res) => {
        if (res.val()) {
            collectionsObject = Object.keys(res.val())
        }
    })
    let numberOfPrivateChats = collectionsObject.map(privateEle => {
        let count = 0
        if (privateEle.includes("PrivateChat")) {
            count += 1
        }
        return count
    })
    let numberOfGroupChats = collectionsObject.map(groupEle => {
        let count = 0
        if (groupEle.includes("GroupChat")) {
            count += 1
        }
        return count
    })
    numberOfPrivateChats = numberOfPrivateChats[numberOfPrivateChats.length - 1]
    numberOfGroupChats = numberOfGroupChats[numberOfGroupChats.length - 1]
    const newCollectionName = radio === "Private Chat" ? (`${radio.replace(" ", "")}${numberOfPrivateChats}`) : (`${radio.replace(" ", "")}${numberOfGroupChats}`)
    async function writeUserData(e) {
        e.preventDefault()
        push(ref(db, `/${newCollectionName}`), {
            email: [user?.userMail, email]
        });
    }
    return (
        <div className="new-chat-wrapper">
            <div className="mt-10 container flex flex-col justify-between items-center">
                <h1 className="text-center  text-7xl font-bold text-custom-blue uppercase tracking-wide">Create New Chat</h1>
                <form onSubmit={writeUserData} className="mt-12">
                    <div className="mb-7">
                        <input onChange={handleRadio} className="form-radio w-8 h-8 align-baseline" value="Private Chat" checked={radio === "Private Chat"} type="radio" name="privateChat" />
                        <label onClick={handleRadio} className="ml-2 text-3xl cursor-pointer" htmlFor="privateChat">Private Chat</label>
                        <input onChange={handleRadio} className="form-radio w-8 h-8 align-baseline ml-6" value="Group Chat" checked={radio === "Group Chat"} type="radio" name="privateChat" />
                        <label onClick={handleRadio} className="ml-2 text-3xl cursor-pointer" htmlFor="groupChat">Group Chat</label>
                    </div>
                    <input type="text" value={newCollectionName} className="form-input my-3 text-2xl rounded w-full" disabled />
                    <input type="email" placeholder="Enter Mail" className="form-input my-3 text-2xl rounded w-full" onChange={e => {
                        setEmail(e.target.value)
                    }} value={email} required />
                    <button type="submit" className="block w-full my-3 mx-auto bg-blue-500 text-white font-display px-5 py-3 rounded">Submit</button>
                </form>
            </div>
        </div>
    )
}
