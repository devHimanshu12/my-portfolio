
const Footer = () => {
    return (
        <>
            <footer >
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm  sm:text-center">Developed using React, Tailwind and HTML, CSS and JavaScript
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium">
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
