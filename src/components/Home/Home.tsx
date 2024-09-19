
import classes from './home.module.css'
import Footer from "../Footer/Footer";
import profilePicture from './../../assets/png/profile.jpeg'
import Experience from '../Experience/Experience'
import { expInfo } from '../../data/experience'

export default function Home() {
  const skills: string[] = ["React.js", "Angular", "TypeScript", "JavaScript", "RxJS", "HTML5", "CSS3", "Node.js", "REST API", "Express.js",
    "Sentry", "AWS Web Sockets", "AWS DynamoDB", "AWS Lamda", "AWS S3", "GitHub", "GitLab", "D3.js",
    "Highcharts", "Data Visualization", "Tailwind", "SQL", "MySQL"]
  const experienceInfo = expInfo
  return (
    <>
      <div className={`${classes.home_container} flex justify-center`}>
        <div className={`p-4 text-center flex items-center justify-center  border border-gray-200 rounded-lg shadow sm:p-8`}>
          <div>
            <h1 className='font-bold drop-shadow my-2 font-[20px]'>
              Hi, I am Himanshu Sah
            </h1>
            <div className='flex justify-center'>
              <img className="w-[200px] h-[200px] rounded" src={profilePicture} alt="" />
            </div>
            <h3 className='font-bold drop-shadow my-2 font-[18px]'>
              Frontend Engineer
            </h3>
          </div>
        </div>
        <div className={`p-4 w-[600px] mx-10 text-center flex flex-col flex-wrap  border border-gray-200 rounded-lg shadow sm:p-8`}>
          <h1 className='font-bold my-2'>Technical Skills</h1>
          <div className='flex flex-start flex-wrap'>
          {skills.map((skill: string,index:number) => (
            <span key={index} className='text-xs font-medium me-2 px-2.5 py-0.5 mr-2.5 my-1 rounded'>
              {skill}
            </span>
          )
          )}

          </div>
        </div>
      </div>
      <div className='p-4 text-center gap-4 flex-col items-center justify-start	 border border-gray-200  shadow sm:p-8'>
        <Experience expData = {experienceInfo}></Experience>
      </div>
      <Footer/>
    </>
  )
}
