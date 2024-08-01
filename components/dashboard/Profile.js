import React, { useState } from 'react'
import { useUser } from '../userContext';

const Profile = () =>
{
    const { user } = useUser()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [profileData, setProfileData] = useState({
        firstname: user.user_metadata.firstname,
        lastname: user.user_metadata.lastname,
        email: user.user_metadata.email
    })

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
        <div className='mb-32'>
            <div className='grid grid-cols-2 gap-x-14'>
                <div className='mt-6'>
                    <label htmlFor="firstname" className="block font-medium leading-6 text-primaryText">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            value={profileData.firstname}
                            disabled
                            className="cursor-not-allowed select-none block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="lastname" className="block font-medium leading-6 text-primaryText">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={profileData.lastname}
                            required
                            disabled
                            className="cursor-not-allowed select-none block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
                            disabled
                            value={profileData.email}
                            required
                            className="cursor-not-allowed select-none block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
                <div className='mt-6'>
                    <label htmlFor="gender" className="block font-medium leading-6 text-primaryText">
                        Gender
                    </label>
                    <div className="mt-2">
                        <select id="gender" className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 hover:cursor-pointer h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none" >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                    </div>
                </div>
                <div className='relative mt-6'>
                    <label htmlFor="birthdate" className="block font-medium leading-6 text-primaryText">
                        Birth Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            id="birthdate"
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            placeholder="Enter Birth"
                        />
                    </div>
                </div>

            </div>
            <div>
                <div className='mt-6'>
                    <label htmlFor="address" className="block font-medium leading-6 text-primaryText">
                        Address
                    </label>
                    <div className="mt-2">
                        <input
                            id="address"
                            name=""
                            type=""
                            required
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-6'>
                    <label htmlFor="additionalinformation" className="block font-medium leading-6 text-primaryText">
                        Additional Information
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
            <div className='grid grid-cols-2 gap-x-14'>
                <div className='mt-6'>
                    <label htmlFor="region" className="block font-medium leading-6 text-primaryText">
                        Region
                    </label>
                    <div className="mt-2">
                        <input
                            id=""
                            name=""
                            type=""
                            required
                            className="block w-[40rem] rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="city" className="block font-medium leading-6 text-primaryText">
                        City
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
            </div>
            <div className='flex justify-end mt-10'>
                <button
                    type="submit"
                    className="flex w-32 justify-center items-center rounded-md bg-primary h-10 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Profile