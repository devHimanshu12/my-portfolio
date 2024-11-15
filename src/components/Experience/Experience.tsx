// type expType = {
//     company: string,
//     location: string,
//     years: string,
//     domain?: string,
//     position: string,
//     id?: number
// }



export default function Experience({expData}:any) {
    return (
        <>

            <h2 className="text-xl font-bold">Experience</h2>
            {
                expData.map((exp: any) => (
                    <div className="flex flex-col my-2" key={exp.id}>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <h4 className="text-bold">{exp.company}</h4>
                        <h5 className="no-margin">{exp.location}</h5>
                        <h6>{exp.years}</h6>
                    </div>
                ))
            }

        </>
    )
}
