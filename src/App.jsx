import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Backend URL

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load chat history when connected
    socket.on("load_chat_history", (loadedMessages) => {
      setMessages(loadedMessages);
    });

    // Listen for new messages
    socket.on("receive_message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("load_chat_history");
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        sender: "User", // You can replace this with the logged-in user's name or email
      };
      socket.emit("send_message", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="mt-20" style={{ padding: "20px" }}>
      <h2>Real-Time Chatbox</h2>
      <div
        style={{
          border: "1px solid gray",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
}

export default App;
