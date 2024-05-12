
const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed on React,Tailwind and HTML,CSS and JavaScript
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Contact : + 91 8800829969</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Email: shimanshu94@gmail.com</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Bengaluru,Karnataka,India</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
