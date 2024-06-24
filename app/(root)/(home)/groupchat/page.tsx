import GroupChat from '@/components/Chat/GroupChat'
import GroupConversation from '@/components/Chat/GroupConversation'
import React from 'react'

const GroupPage = () => {
  return (
    <div className=' relative w-full h-full flex items-center m-0 '>
      {/* Left */}
      <GroupChat />

      {/* Right Side */}
      <GroupConversation />
    </div>
  )
}

export default GroupPage