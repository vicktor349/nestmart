import ourteamdata from '@/data/ourteamdata'
import Image from 'next/image'
import React from 'react'

const OurTeam = () =>
{
    return (
        <div>
            {ourteamdata.map((data, id) =>
            {
                return (
                    <div key={id}>

                    </div>
                )
            })}
        </div>
    )
}

export default OurTeam