import React from 'react'
import Contact from './contact'
export default function contactpage() {
    return (
        <>



            <div className="flex flex-col items-center justify-center text-center mt-10 pct mb-3 ">
                <div>
                    <h1 className='font-semibold text-2xl mm' >Get In <span className='text-orange-500'>Touch</span></h1>
                    <h2 className='mm'>Feel free to reach out to me!</h2>
                </div>

                <div className="">
                    <Contact />
                </div>
            </div>
        </>
    )
}
