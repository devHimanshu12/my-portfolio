
import classes from './home.module.css'
import Footer from "../Footer/Footer";
import profilePicture from './../../assets/png/profile.jpeg'
import Experience from '../Experience/Experience'
import { expInfo } from '../../data/experience'
import Projects from '../Projects/Projects';

export default function Home() {
  const skills: string[] = ["Angular", "Angular Material", "TypeScript", "JavaScript", "RxJS", "HTML5", "CSS3", "React.js","Redux", "Node.js", "REST API", "Express.js",
    "GitHub", "GitLab", "D3.js", "SonarQube","Jasmine","karma","Docker", "Highcharts", "Data Visualization", "Tailwind"]
  const experienceInfo = expInfo
  return (
    <>
      <div className={`${classes.home_container} flex justify-center`}>
        <div className={`p-4 text-center gap-4 flex-col items-center justify-start  shadow sm:p-8 ${classes.home_container}`}>
          <Experience expData = {experienceInfo}></Experience>
        </div>
      </div>
      <div className={`text-center gap-4 flex-col items-center justify-start  shadow sm:p-8 ${classes.home_container}`}>
      <div className={`p-2 w-[600px]  text-center flex flex-col flex-wrap  border border-gray-200 rounded-lg shadow sm:p-8`}>
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
        <Projects/>
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
      </div>
      <Footer/>
    </>
  )
}
