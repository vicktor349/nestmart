import React, { useState } from 'react'

const Profile = () =>
{
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleInputChange = (event) =>
    {
        let input = event.target.value.replace(/\D/g, '');

        if (input.length > 10)
        {
            input = input.slice(0, 10)
        }

        setPhoneNumber(input);
    };
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-14'>
                <div className='mt-6'>
                    <label htmlFor="email" className="block font-medium leading-6 text-primaryText">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="firstname"
                            name="firstname"
                            type="firstname"
                            required
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="email" className="block font-medium leading-6 text-primaryText">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="lastname"
                            name="lastname"
                            type="lastname"
                            required
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="email" className="block font-medium leading-6 text-primaryText">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='relative mt-6'>
                    <label htmlFor="phone" className="block font-medium leading-6 text-primaryText">
                        Phone Number
                    </label>
                    <div className="mt-2 flex items-center">
                        <span className="absolute left-0 pl-3 text-gray-500">+(234)</span>
                        <input
                            type="text"
                            id="phone"
                            value={phoneNumber}
                            onChange={handleInputChange}
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-16 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            placeholder="Enter phone number"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-6'>
                    <label htmlFor="email" className="block font-medium leading-6 text-primaryText">
                        Address
                    </label>
                    <div className="mt-2">
                        <input
                            id=""
                            name=""
                            type=""
                            required
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile