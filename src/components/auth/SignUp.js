import React from 'react';

export default function SignUp() {
    return (
        <div className="flex-col container mx-auto text-center p-3 m-3">
            <h3 className="text-gray-600 text-2xl mb-5 uppercase">Sign Up</h3>
            <form>
                <div className="mb-3">
                    <input className="w-1/2 text-center font-semibold rounded px-3 py-4 focus:outline-none border" type="email" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <input className="w-1/2 text-center font-semibold rounded px-3 py-4 focus:outline-none border" type="password" placeholder="Enter Password"/>
                </div>
                <div>
                    <button className="bg-green-300 text-white uppercase hover:bg-green-500 w-1/2 text-center font-semibold rounded px-3 py-4 focus:outline-none" type="password">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
