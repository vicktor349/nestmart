import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { CiMail } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { PiHeart, PiShoppingCartSimple } from 'react-icons/pi'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

const SideNavbar = ({ activeComponent, setActiveComponent }) =>
{
    const menuItems = [
        { location: "Profile", icon: <FiUser size={24} />, name: "Profile" },
        { location: "Order", icon: <PiShoppingCartSimple size={24} />, name: "Order" },
        { location: "Inbox", icon: <CiMail size={24} />, name: "Inbox" },
        { location: "Reviews", icon: <BiMessageDetail size={24} />, name: "Reviews" },
        { location: "SavedItems", icon: <PiHeart size={24} />, name: "Saved Items" },
        { location: "Transactions", icon: <RiMoneyDollarCircleFill size={24} />, name: "Transactions" },
    ]
    return (
        <div>
            <ul className='mt-10 space-y-4'>
                {menuItems.map((item) => (
                    <li
                        key={item.location}
                        onClick={() => setActiveComponent(item.location)}
                        className={`flex items-center select-none font-semibold space-x-4 hover:cursor-pointer lg:w-48 xl:w-56 2xl:w-64 py-5 text-[#666] hover:rounded-md text-sm ${activeComponent === item.location ? 'bg-primary/25 rounded-md duration-300 ease-in' : 'hover:bg-primary/25'}`}
                    >
                        <p className={`ml-5 ${activeComponent === item.location ? 'text-primary rounded-md duration-300 ease-in' : ''}`}>{item.icon}</p>
                        <p className={`${activeComponent === item.location ? 'text-primary rounded-md duration-300 ease-in' : ''}`}>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideNavbar