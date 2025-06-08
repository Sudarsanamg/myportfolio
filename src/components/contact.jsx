'use client';
import { useState } from "react";


export function Contact(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [subject ,setSubject] = useState('');
    const [message ,setMessage ] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    name: name,
    email: email,
    message: message,
    subject:subject
  };

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert('Message sent!');
  } else {
    alert('Failed to send message');
  }
};

    return (
        <div>
            <div className="flex justify-center m-3">
                <span className="text-4xl font-bold">Contact Me</span>
            </div>
            <div className="flex justify-center font-semibold px-5 m-5 sm:text-2xl ">
                <span>Feel free to reach out to me for any questions or opportunities!</span>
            </div>
            <div className="p-5 border-2 border-gray-300 shadow-[0_0_20px_#93c5fd] mt-5 m-3">
                <div>Email Me</div>
                <div className="flex flex-col sm:w-2xl gap-3">
                    <input type="text"  className="w-full border-2 border-gray-500 rounded-lg px-3 py-2 text-lg" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your Name"/>
                    <input type="text" className="w-full border-2 border-gray-500 rounded-lg px-3 py-2 text-lg" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your Email" />
                    <input type="text" className="w-full border-2 border-gray-500 rounded-lg px-3 py-2 text-lg" value={subject}  onChange={(e)=>setSubject(e.target.value)} placeholder="Subject"/>
                    <textarea name="" id="" className="w-full border-2 border-gray-500 rounded-lg px-5 py-2 text-lg" value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
                </div>
                <div className="flex justify-center mt-10 " onClick={handleSubmit}>
                    <button className="px-20  sm:w-2xl bg-gradient-to-r from-[#DB00FF] via-[#B200FF] to-[#8D00FF] py-2 rounded-lg text-white font-bold">Send</button>
                </div>
            </div>
        </div>
    )
}