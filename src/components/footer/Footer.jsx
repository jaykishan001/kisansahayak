import React, { useState } from 'react';
import Chatbot from '../Chatbot';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';




function Footer() {
  // State to manage Chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);
  
  // Toggle Chatbot visibility
  const handleClick = () => {
    setShowChatbot(!showChatbot);
  }

  return (
    <div className=''>
      <button onClick={handleClick} className='absolute left-[95%] top-[85%]'>
        <ForumSharpIcon style={{height: "50px" , width: "50px" }}/>
      </button>
      {/* Conditionally render Chatbot if showChatbot is true */}
      {showChatbot && <Chatbot />}
    </div>
  );
}

export default Footer;
