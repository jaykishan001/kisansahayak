import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const getChatbotResponse = async (userInput) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
          max_tokens: 150,
          stop: "\n",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "",
          },
        }
      );
      console.log("Response data:", response.data);
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, something went wrong.";
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    const chatbotResponse = await getChatbotResponse(input);
    setMessages([...messages, { role: "chatbot", content: chatbotResponse }]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Chatbot</h1>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.role === "user" ? "right" : "left",
              margin: "5px",
            }}
          >
            <span>{message.role === "user" ? "You: " : "Chatbot: "}</span>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={{
            width: "calc(100% - 20px)",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          placeholder="Type your message..."
          className="mb-4"
        />
        <button
          type="submit"
          style={{
            padding: "5px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;