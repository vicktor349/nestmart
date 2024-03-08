import React from 'react'
import BestSellingCard from './BestSellingCard'

const BestSales = () =>
{
    return (
        <div>
            <h3 className='text-3xl font-semibold text-primaryText py-12'>Daily Best Sales</h3>
            <BestSellingCard />
        </div>

    )
}

export default BestSales