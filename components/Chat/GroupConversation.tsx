"use client"

import React, { useState } from 'react'
import Chatheader from './Chatheader'
import Message from '../conversation/Message'
import Footer from '../conversation/Footer'

const GroupConversation = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className=' w-[calc(100%-288px)] absolute top-0 left-72'>
      {selectedUser ? (
          <>
            <header
              className=" w-full h-15 text-gray-400 bg-gray-800"
            >
              <Chatheader user={selectedUser} />
            </header>
            {/* Message */}
            <div className="grow ">
              <Message />
            </div>
            <Footer />
          </>
        ) : (
          <div className="flex items-center justify-center h-screen text-white">
            Select a user to start chatting
          </div>
        )}
    </div>
  )
}

export default GroupConversation