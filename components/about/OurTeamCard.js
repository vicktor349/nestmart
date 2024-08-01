import React from 'react'
import ourteamdata from '@/data/ourteamdata'

const OurTeamCard = () =>
{
    return (
        <div className='flex'>
            {ourteamdata.map((data, id) =>
            {
                return (
                    <div className='lg:mt-0 ssm:mt-10 w-full h-full grid place-items-center' key={id}>
                        <div style={{ backgroundImage: `url(${data.imageUrl})` }} className='rounded-3xl w-72 h-96 bg-cover bg-center relative'>
                            <div className='bg-white absolute border rounded-2xl left-[12%] -bottom-10 w-52 h-28'>
                                <p className='text-center font-bold text-primaryText mt-6 text-2xl'>{data.name}</p>
                                <p className='text-center text-secondaryText'>{data.position}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OurTeamCard