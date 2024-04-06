import React from 'react'
import { Tabs } from '@mantine/core';

const Tab = () =>
{
    return (
        <Tabs color="green" defaultValue="description" className='mt-12'>
            <Tabs.List>
                <Tabs.Tab value="description" color='#3BB77E'>
                    Description
                </Tabs.Tab>
                <Tabs.Tab value="delivery" color='#3BB77E'>
                    Delivery
                </Tabs.Tab>
                <Tabs.Tab value="ingredients" color='#3BB77E'>
                    Ingredients
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="description" pt="xs" className="space-y-4">
                <p className="text-primaryText text-3xl font-semibold mt-5">Description</p>
                <div className="text-secondaryText my-4">
                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                    goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                </div>
                <div className='text-secondaryText mt-4 mb-10'>
                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                    wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                    mastodon goodness gnashed a jellyfish and one however because.
                </div>
                <div className='flex items-center text-secondaryText space-x-32'>
                    <ul className='space-y-6'>
                        <li>Type Of Packing</li>
                        <li>Color</li>
                        <li>Quantity Per Case</li>
                        <li>Ethyl Alcohol</li>
                        <li>Piece In One</li>
                    </ul>
                    <ul className='space-y-6'>
                        <li>Bottle</li>
                        <li>Green, Pink, Powder Blue, Purple</li>
                        <li>100ml</li>
                        <li>70%</li>
                        <li>Carton</li>
                    </ul>
                </div>
                <div className="space-y-5 pt-12">
                    <h3 className='text-3xl text-primaryText font-semibold'>Suggested Use</h3>
                    <p className='text-secondaryText'>Refrigeration not necessary.</p>
                    <p className='text-secondaryText'>Stir before serving</p>
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="delivery" pt="xs">
                <div className="text-primaryText text-3xl font-semibold mt-5">Packaging & Delivery</div>
                <div className="text-secondaryText mt-6">
                    Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                    assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                    held one exuberantly sheep goodness so where rat wry well concomitantly.
                </div>
                <div className="text-secondaryText my-6">
                    Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and
                    next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less
                    across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="ingredients" pt="xs">
                <div className="text-primaryText text-3xl font-semibold mt-5">Other Ingredients</div>
                <ul className='text-secondaryText space-y-6 mt-6'>
                    <li>Organic raw pecans, organic raw cashews.</li>
                    <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                    <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                </ul>
            </Tabs.Panel>
        </Tabs>
    )
}

export default Tab