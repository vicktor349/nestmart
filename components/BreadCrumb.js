import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router'
import Link from 'next/link';


const BreadCrumb = ({
    homeElement,
    separator,
    capitalizeLinks,
}) =>
{
    const location = useRouter()
    const activeColor = (p) => location.pathname === p ? "#3BB77E" : "#253D4E"
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);
    return (
        <div className='my-3'>
            <ul className="flex">
                <li className="mr-3">
                    <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) =>
                {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                    let itemLink = capitalizeLinks
                        ? link[0].toUpperCase() + link.slice(1, link.length)
                        : link;
                    return (
                        <React.Fragment key={index}>
                            <li className="ml-3 font-bold" style={{ color: activeColor("/about") }}>
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default BreadCrumb;
