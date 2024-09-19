import classes from './menu.module.css';
import Icon from '../../shared/Icon/Icon';
import logo from './../../assets/svg/framework-env.svg';
import { Button } from '../../shared/Button/Button';
import linkedInIcon from './../../assets/svg/linkedIn-icon.svg';
import githubIcon from './../../assets/png/github-icon-dark.png';
import { NavLink } from 'react-router-dom';




export default function Menu() {
    const menuItems: any = [{ id: 891, label: "Home",routePath:"/my-portfolio/home" },{ id: 3892, label: "Projects",routePath:"/my-portfolio/projects" }]
    return (
        <>
            <header className={classes.header_container}>
                <div className='flex p-2 w-full justify-between items-center gap-16'>
                    <div className='flex justify-start items-center gap-4'>
                        <div className='flex'>
                            <Icon iconPath={logo} iconStyles={classes.icon_styles} iconContainerStyles={classes.icon_container_styles} />
                        </div>
                        <div className='text-black font-bold'>
                            Software Engineer
                        </div>
                    </div>
                    <div className='flex-auto justify-start'>
                        <nav className={`${classes.navbar_list} ${classes.nav_item}`}>
                            {
                                menuItems.map((menu: any) => (
                                    <div className={classes.nav_item} key={menu.id}>
                                        <NavLink  key={menu.id} className={({ isActive }) => (isActive ? classes.active : '')} to = {menu.routePath}>{menu.label}</NavLink>
                                    </div>
                                ))
                            }
                        </nav>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <ul className={classes.navbar_list}>
                                <li className={`${classes.nav_list} ${classes.right_nav_list}`}>
                                    <a className='flex' href="https://www.linkedin.com/in/himanshu-s-0650aa115/" target="_blank" >
                                        <Icon iconPath={linkedInIcon} iconStyles={classes.right_icon_styles} iconContainerStyles={classes.right_icon_container_styles} />
                                    </a>
                                </li>
                                <li className={`${classes.nav_list} ${classes.right_nav_list}`}>
                                    <a className='flex' href="https://github.com/devHimanshu12" target="_blank" >
                                        <Icon iconPath={githubIcon} iconStyles={`${classes.right_icon_styles}  ${classes.github_icon}`} iconContainerStyles={classes.right_icon_container_styles} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div >
                            <Button label="Theme" />
                        </div> */}
                    </div>
                </div>
            </header>
        </>

    )
}
