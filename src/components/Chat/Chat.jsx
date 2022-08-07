import React, { useState, useEffect, useRef } from 'react'
import SendMessage from './sendmessage'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    // useEffect(() => {
    //     db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //         setMessages(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])
    return (
        <div>
            <div className="msgs">
                <div>
                    <div className={`msg ${true ? 'sent' : 'received'}`}>
                        <p>jjsbdhbhsb</p>
                    </div>
                </div>
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat