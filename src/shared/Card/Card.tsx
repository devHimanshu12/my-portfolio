export type CardType = {
    label:string,
    link?:string,
    description:string
}

export default function Card({label,link,description}:CardType){
    return (
    <>
     <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow">
            <a href={link} target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{label}</h5>
            </a>
            <p className="mb-3 font-normal">{description}</p>
            <a href={link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Visit Website
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </>)
}