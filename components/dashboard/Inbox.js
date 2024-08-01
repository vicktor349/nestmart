import React from 'react'
import Message from './Message'

const Inbox = () =>
{
    return (
        <div>
            <p className='text-3xl font-semibold'>Inbox Messages</p>
            <div className='mt-7 grid gap-y-6'>
                <Message
                    title="How was your Experience?"
                    date="8 sept"
                    message='Thank you for shopping with us! We hope you were happy with your item(s). Our customers rely on reviews from insightful customers such as yourself to decide which of our products is best for them. We would love to hear your feedback on the seller and item, please click on the "Reviews" section to share. Thank you for shopping on Nest Mart!'
                />
                <Message
                    title="Package delivered!"
                    date="6 sept"
                    message='Package# DS-NHI-1253423282-0114 is delivered. You can rate your product to let other people know about it. Not happy? You can return it within 7 days from now! Thank you for shopping on Nest Mart!'
                />
                <Message
                    title="Package delivered!"
                    date="6 sept"
                    message='Package# DS-NHI-1253423282-5152 is delivered. You can rate your product to let other people know about it. Not happy? You can return it within 7 days from now! Thank you for shopping on Nest Mart!'
                />
                <Message
                    title="Delivery Notification: Unable to Reach You by Phone"
                    date="1 sept"
                    message='Hi Layomi, Our Delivery Agent from Nest Mart was unable to reach you by phone. Kindly call back on (08083104719) for delivery today, to prevent rescheduling the package to tomorrow.'
                />
                <Message
                    title="Delivery Notification: Unable to Reach You by Phone"
                    date="1 sept"
                    message='Hi Layomi, Our Delivery Agent from Nest Mart was unable to reach you by phone. Kindly call back on (08083104719) for delivery today, to prevent rescheduling the package to tomorrow.'
                />
                <Message
                    title="Delivery Notification: Unable to Reach You by Phone"
                    date="1 sept"
                    message='Hi Layomi, Our Delivery Agent from Nest Mart was unable to reach you by phone. Kindly call back on (08083104719) for delivery today, to prevent rescheduling the package to tomorrow.'
                />
                <Message
                    title="Delivery Notification: Unable to Reach You by Phone"
                    date="1 sept"
                    message='Hi Layomi, Our Delivery Agent from Nest Mart was unable to reach you by phone. Kindly call back on (08083104719) for delivery today, to prevent rescheduling the package to tomorrow.'
                />
                <Message
                    title="Delivery Notification: Unable to Reach You by Phone"
                    date="1 sept"
                    message='Hi Layomi, Our Delivery Agent from Nest Mart was unable to reach you by phone. Kindly call back on (08083104719) for delivery today, to prevent rescheduling the package to tomorrow.'
                />
            </div>
        </div>
    )
}

export default Inbox