import Head from "next/head";
import Link from "next/link";
import React from "react";


const NotFound = () => 
{
    return (
        <>
            <Head>
                <title>Nest | Not Found</title>
            </Head>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center py-12">
                    <p className="text-7xl font-semibold text-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-primaryText sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we could&apos;nt find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondaryText focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default NotFound;