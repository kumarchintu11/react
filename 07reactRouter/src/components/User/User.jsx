import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
const {userid} =useParams()
    return (
    <div className=' bg-gray-700 text-center'>
        {/* jo bhi url mein aayega wo hum le skte hai dynamically*/}
      User: {userid}
    </div>
  )
}

export default User
