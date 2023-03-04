import Link from "next/link"
import { FC } from "react"
import styles from '@/styles/Home.module.css'


const NavBar:FC= () => {


    return (
        <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MovieLFics</span>
                </a>
                <div className="flex items-center">
                    <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                </div>
            </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex items-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                         <Link className="text-gray-900 dark:text-white hover:underline" href="/">Home</Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 dark:text-white hover:underline" href="/movies">Movies</Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 dark:text-white hover:underline" href="/form">form</Link>
                        </li>
                        <li>
                        <Link className="text-gray-900 dark:text-white hover:underline" href="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
              </div>
    )
}

export default NavBar