import { useState } from "react";

type TMessage = {
  message: string;
  id: string;
  sender: string;
};
export const HelpWidget = () => {
  const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
  const [senderId, setSenderId] = useState("0");

  const [messages, setMessages] = useState<TMessage[]>([
    {
      message: "Hello, how can we help you today?",
      id: "1bqwcqvwt",
      sender: "0",
    },
    {
      message: "Hello, how can we help you today?",
      id: "1bqwcqvwt",
      sender: "0",
    },
    {
      message: "Hello, how can we help you today?",
      id: "1bqwcqvwt",
      sender: "1",
    },
    {
      message: "Hello, how can we help you today?",
      id: "1bqwcqvwt",
      sender: "0",
    },
    {
      message: "There is anything we can do for you?",
      id: "vqwevqewwr",
      sender: "1",
    },
  ]);

  return isChatPanelDisplayed ? (
    <div className="w-70 fixed bottom-10 right-10 flex h-96 w-80 flex-col justify-between bg-gray-50 p-6">
      <button
        className="absolute top-4 right-4 hover:text-red-400"
        onClick={() => setIsChatPanelDisplayed(false)}
      >
        X
      </button>
      <ul>
        {messages.map(({ message, id, sender }) => (
          <li
            className={`mb-1 rounded p-1 ${
              sender === senderId ? "bg-gray-50" : "bg-blue-200"
            }`}
            key={id}
          >
            {message}
          </li>
        ))}
      </ul>
      <div className="flex">
        <input className="w-full border border-gray-800 p-1 px-2 " />
        <button
          className="cursor-pointer bg-blue-400 p-2 px-3
     text-white transition-all hover:bg-blue-800"
        >
          Send
        </button>
      </div>
    </div>
  ) : (
    <div
      className="fixed bottom-10 right-10 cursor-pointer bg-blue-400 p-2 px-3
     text-white transition-all hover:bg-blue-800"
      onClick={() => setIsChatPanelDisplayed(true)}
    >
      Speak with us
    </div>
  );
};
