export type CardType = {
    label:string,
    link?:string,
    description:string,
    techStack?:string[]
}

export default function Card({label,link,description,techStack}:CardType){
    return (
    <>
     <div className="p-6 border border-gray-200 rounded-lg shadow">
            <a href={link} target="_blank">
                <div className="mb-2 flex items-center justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-center">{label}</h5>
                <span className="-rotate-45 ">
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                </span>
                </div>
            </a>
            <p className="mb-3 font-normal text-left">{description}</p>
            <ul className="flex gap-4">
            {techStack?.map((item:string,index:number)=>(
                <li key={index}>
                    {item}
                </li>
            ))
            }
            </ul>
        </div>
    </>)
}