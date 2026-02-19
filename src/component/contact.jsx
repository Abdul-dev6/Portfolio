import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Contact() {
    const { mode } = useContext(UserContext);

    return (
        <>

            <div
                className={` p-5 sm:p-8 rounded-xl w-[100%] mb-2 border-2 flex flex-col gap-3 pctw
                    ${mode ? 'border-amber-100' : 'border-orange-400'}`}
            >
                <div className='flex flex-col sm:flex-row gap-3'>
                    <input
                        type="text"
                        placeholder="First Name"
                        className={`p-2 rounded-md w-full border-2 focus:outline-none
                            ${mode ? 'bg-gray-500 border-gray-600 focus:border-gray-400 text-white' : 'bg-orange-100 border-orange-200 focus:border-orange-400'}`}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className={`p-2 rounded-md w-full border-2 focus:outline-none
                            ${mode ? 'bg-gray-500 border-gray-600 text-white focus:border-gray-400' : 'bg-orange-100 border-orange-200 text-black focus:border-orange-400'}`}
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email Address"
                    className={`p-2 rounded-md w-full border-2 focus:outline-none
                        ${mode ? 'bg-gray-500 border-gray-600 text-white focus:border-gray-400' : 'bg-orange-100 border-orange-200 text-black focus:border-orange-400'}`}
                />

                <textarea
                    className={`p-2 rounded-md w-full border-2 focus:outline-none resize-none
                        ${mode ? 'bg-gray-500 border-gray-600 text-white focus:border-gray-400' : 'bg-orange-100 border-orange-200 text-black focus:border-orange-400'}`}
                    rows="5"
                    placeholder="Your Message"
                />

                <button className="cursor-pointer hover:bg-orange-600 transition-all duration-200 hover:scale-95 border-2 py-2 rounded-md bg-orange-500 w-full text-white">
                    Send Message
                </button>
            </div>

        </>
    )
}

export default Contact;