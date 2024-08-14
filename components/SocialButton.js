const SocialButton = ({ text, icon }) =>
{
    return (
        <div className='text-primaryText bg-white border-borderColor border rounded-md w-44 h-12 flex items-center justify-center text-center hover:cursor-pointer select-none space-x-3'>
            {icon} <p className='font-semibold text-primaryText'>{text}</p>
        </div>
    )
}
export default SocialButton