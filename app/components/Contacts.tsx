'use client'
import { log } from 'console'
import React ,{FormEvent, useState}from 'react'
import { useGlobalContext } from '../context/cotext'

// class netlify extends HTMLAttribute {
//   constructor() {
//     super("my-custom-attribute", "default-value");
//   }
// }

function Contacts() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const {isDarkMode}:any = useGlobalContext()

  function encode(data:any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e:FormEvent) =>{
  e.preventDefault()
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", name, email, message }),
  })
    .then(() => alert("Message sent!"))
    .catch((error) => alert(error));
  }


  return (
    <section id="contact" className="relative mt-[8rem] flex flex-col justify-center items-center">
      <h1 className='p-5 sm:text-8xl text-3xl mb-1 font-black  '>Send me a message!</h1>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className={` lg:w-2/3 md:w-1/2 ${isDarkMode?`bg-gray-900`: `bg-slate-300`} rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative `}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.420516201429!2d15.127700611969189!3d37.54515522523635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fb7f69fe6e15%3A0x70d954bfd5c3a1eb!2sVia%20Firenze%2C%2024%2C%2095021%20Aci%20Castello%20CT!5e0!3m2!1sit!2sit!4v1698014771968!5m2!1sit!2sit"   
           />
          <div className= {`${isDarkMode?`bg-gray-900`: `bg-slate-300`} relative flex flex-wrap py-6 rounded shadow-md`} >
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                
                Aci Castello, CT 95021
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold  tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ale120789@gemail.com
              </a>
              <h2 className="title-font font-semibold  tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">347-7934906</p>
            </div>
          </div>
        </div>
        <form
        onSubmit={handleSubmit}
          data-netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="t sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-xl font-thin">
          Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              autoComplete='on'
              type="text"
              id="name"
              name="name"
              onChange={(e)=> setName(e.target.value)}
              className= {`w-full ${isDarkMode?`bg-gray-900`: `bg-slate-300`} rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              autoComplete='on'
              type="email"
              id="email"
              name="email"
              onChange={(e)=> setEmail(e.target.value)}
              className= {`w-full ${isDarkMode?`bg-gray-900`: `bg-slate-300`} rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e)=> setMessage(e.target.value)}
              className= {`w-full ${isDarkMode?`bg-gray-900`: `bg-slate-300`} rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className='flex items-center justify-center w-full'>
              <button type='submit'
                      className= {`relative flex h-[50px] w-80 text-lg items-center justify-center overflow-hidden ${isDarkMode?` bg-slate-900`:`bg-slate-300`} shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:before:h-full hover:before:w-96`} >
                <span className="relative z-10">Submit</span>
              </button>
          </div>
          
        </form>
      </div>
    </section>
  )
}
export default Contacts
