import React from 'react'
import OurTeamCard from './OurTeamCard'

const OurTeam = () =>
{
    return (
        <>
            {/* DESKTOP VIEW */}
            <div className=' items-center justify-between mt-32 ssm:hidden lg:flex lg:mx-20 xl:mx-28'>
                <div className='leading-8'>
                    <p className="text-primary font-bold text-5xl mb-5">Our Team</p>
                    <h3 className='text-2xl mb-5'>Meet Our Expert Team</h3>
                    <p className="text-secondaryText w-96 mb-5">
                        Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.
                    </p>
                    <p className='text-secondaryText w-96'>
                        Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.
                    </p>
                </div>
                <OurTeamCard />
            </div>
            {/* MOBILE VIEW */}
            <div className='ssm:block lg:hidden'>
                <div className='leading-8 text-center'>
                    <p className="text-primary font-bold text-5xl mb-5">Our Team</p>
                    <h3 className='text-2xl mb-5'>Meet Our Expert Team</h3>
                    <p className="text-secondaryText lg:w-96 mb-5">
                        Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.
                    </p>
                    <p className='text-secondaryText lg:w-96'>
                        Proin ullamcorper pretium orci. Donec necscele risque leo.
                        Nam massa dolor imperdiet neccon sequata congue idsem.
                        Maecenas malesuada faucibus finibus.
                    </p>
                </div>
                <OurTeamCard />
            </div>
        </>
    )
}

export default OurTeam