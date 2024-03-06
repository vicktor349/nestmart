import React from 'react'
import FeaturedCategoriesCard from './FeaturedCategoriesCard'

const FeaturedCategories = () =>
{
    return (
        <div className='ssm:hidden lg:block'>
            <p className='text-primaryText text-4xl font-semibold py-6'>Featured Categories</p>
            <div className='grid grid-cols-200 gap-8 mt-6'>
                <FeaturedCategoriesCard bg="bg-[#F2FCE4]" logo="/images/featuredcategoryimages/burger.png" item="Cake & Milk" amount="26" />
                <FeaturedCategoriesCard bg="bg-[#FFFCEB]" logo="/images/featuredcategoryimages/kiwi.png" item="Oganic Kiwi" amount="28" />
                <FeaturedCategoriesCard bg="bg-[#ECFFEC]" logo="/images/featuredcategoryimages/peaches.png" item="Peach" amount="14" />
                <FeaturedCategoriesCard bg="bg-[#FEEFEA]" logo="/images/featuredcategoryimages/redapple.png" item="Red Apple" amount="54" />
                <FeaturedCategoriesCard bg="bg-[#FFF3EB]" logo="/images/featuredcategoryimages/snacks.png" item="Snack" amount="56" />
                <FeaturedCategoriesCard bg="bg-[#FFF3FF]" logo="/images/featuredcategoryimages/vegetables.png" item="Vegetables" amount="72" />
                <FeaturedCategoriesCard bg="bg-[#F2FCE4]" logo="/images/featuredcategoryimages/strawberry.png" item="Strawberry" amount="36" />
            </div>
        </div>
    )
}

export default FeaturedCategories