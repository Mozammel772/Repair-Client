import React from "react";

const MessengerChat = () => {
  const facebookProfile = "your_facebook_profile_id"; // আপনার Facebook Profile ID এখানে দিন
  const url = `https://m.me/${facebookProfile}`; // Facebook Messenger link
  return (
    <div>
      <div className="fixed top-[70%] right-5 transform -translate-y-1/2 z-50">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <img
            src="https://i.ibb.co.com/rG95xdX/messenger.png"
            alt="Messenger"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default MessengerChat;

