import React, { useState } from 'react'
import { useUser } from '../userContext';
import supabase from '@/helpers/supabase';

const Profile = () =>
{
    const { user } = useUser()
    const [phoneNumber, setPhoneNumber] = useState("")
    const [profileData, setProfileData] = useState({
        firstname: user.user_metadata.firstname,
        lastname: user.user_metadata.lastname,
        email: user.user_metadata.email,
        // phonenumber: "",
        gender: "",
        birthdate: "",
        address: "",
        region: "",
        city: ""

    })

    const handleInputChange = (event) =>
    {
        let input = event.target.value.replace(/\D/g, '');

        if (input.length > 10)
        {
            input = input.slice(0, 10)
        }

        setPhoneNumber(input)
        setProfileData({ ...profileData })
    };

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
        // handleInputChange
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        const updatedInfo = {};
        for (const key in profileData)
        {
            if (profileData[key] !== '')
            {
                updatedInfo[key] = profileData[key];
            }
        }


        const userId = user.id;

        const { data, error } = await supabase
            .from('profiles')
            .update(updatedInfo)
            .eq('id', userId);

        if (error)
        {
            console.error('Error updating user info:', error);
        } else
        {
            console.log('User info updated');
        }
    };



    return (
        <form onSubmit={handleSubmit} className='mb-32'>
            <div className='grid md:grid-cols-2  md:gap-x-3 lg:gap-x-14'>
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
                            className="cursor-not-allowed select-none block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
                            className="cursor w-full -not-allowed select-none block rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
                            className="cursor-not-allowed select-none block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='relative mt-6'>
                    <label htmlFor="phonenumber" className="block font-medium leading-6 text-primaryText">
                        Phone Number
                    </label>
                    <div className="mt-2 flex items-center">
                        <span className="absolute left-0 pl-3 text-gray-500">+(234)</span>
                        <input
                            type="text"
                            id="phonenumber"
                            name='phonenumber'
                            // value={profileData.phonenumber}
                            // onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-gray-100 px-16 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                            placeholder="Enter phone number"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="gender" className="block font-medium leading-6 text-primaryText">
                        Gender
                    </label>
                    <div className="mt-2">
                        <select id="gender" onChange={handleChange} value={profileData.gender} name='gender' className="block w-full rounded-md border-0 bg-gray-100 px-3 hover:cursor-pointer h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none" >
                            <option value="" disabled>Select Gender</option>
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
                            name='birthdate'
                            id="birthdate"
                            value={profileData.birthdate}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
                            name="address"
                            type="text"
                            required
                            value={profileData.address}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-x-3 lg:gap-x-14'>
                <div className='mt-6'>
                    <label htmlFor="region" className="block font-medium leading-6 text-primaryText">
                        Region
                    </label>
                    <div className="mt-2">
                        <input
                            id="region"
                            name="region"
                            type="text"
                            required
                            value={profileData.region}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <label htmlFor="city" className="block font-medium leading-6 text-primaryText">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            value={profileData.city}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 bg-gray-100 px-3 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none"
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
        </form>
    )
}

export default Profile