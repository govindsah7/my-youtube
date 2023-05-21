import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utilis/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utilis/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);

    useEffect(()=>{
    const interval= setInterval(()=>{
        //api polling
        // console.log("api polling");
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20) ,
        }));

    },2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
    {
        chatMessages.map((chat, index)=>(
            <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
    </div>
    </div>

    {/* // like if you are using form then submit will work on Enter also. */}
    <form className='w-full p-1 ml-2 border border-black rounded-lg'
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("On form submit", liveMessage);
        dispatch(addMessage({
            name: "Govind Sah",
            message: liveMessage,
        }))
        setLiveMessage("");
        // after dispatching action, set liveMessage empty
      }}
    >
        <input className='w-60 px-2 border border-gray-800 rounded-lg' type='text'
        value={liveMessage}
        onChange={(e) => { setLiveMessage(e.target.value); }
        }/>
        <button className='px-2 mx-2 bg-green-100 rounded-lg'>Send</button>
    </form>
    </>
  );
};

export default LiveChat;

/**
 * live chat >>>> Infinite Scroll >>> Pagination
 *
 * Two types of app:-
 *  1. live streaming
 *  2. not having live streaming
 *
 * Challenges of live chat:-
 *  - get data live (data layer)
 *  - update the UI (UI layer)
 *
 * Handle live Data
 *  - Web Sockets Api
 *       (it is two way connection established, it is a kind of handshake b/w server and ui,
 *        so, u can send data from ui to backend and backend to ui, there is no interval.)
 *         like in Zerodha, whatsapp,
 *         so in live chat we need web sockets,
 *       WebSockets have a low overhead per message. They're ideal for use cases that require low-latency, high-frequency communication.
 *
 *  - Api Pollling (long Polling)
 *        (data sharing is unidirectional. Ui is keep polling data from server after a fixed interval, let's say 10 sec)
 *        like in gmail, cricbuzz (like there is interval b/w two balls), youtube live chatting can use it.
 *       Long polling is sometimes considered only a half-real-time solution and not ideal for high-traffic scenarios or use cases that require real-time updates.
 * -
 *
 *
 */