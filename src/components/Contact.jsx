import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=" bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white">
        <div className="max-w-screen-lg p-4 justify-center mx-auto w-full h-full">
            <div className="pb-8">
                <p className="text-4xl border-b-4 border-gray-500 inline">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <form action="https://getform.io/f/76a5466c-1c30-4684-bf56-6f1e1f76d2d0" method='POST' className="flex flex-col w-full md:w-1/2 ">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="p-2 rounded-md bg-transparent border-2 text-white 
                            focus:outline-none" />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="p-2 rounded-md bg-transparent border-2 text-white 
                            focus:outline-none" />
                    <textarea 
                        name="message" 
                        placeholder="Enter your message"
                        rows="10" 
                        className="p-2 rounded-md bg-transparent border-2 text-white 
                            focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto rounded-md hover:scale-110 duration-300">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact 