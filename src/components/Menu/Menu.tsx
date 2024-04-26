import classes from './menu.module.css'
import Icon from '../../shared/Icon/Icon'
import iconPath from './../../assets/svg/framework-env.svg'
import { Button } from '../../shared/Button/Button'


export default function Menu() {
    const menuItems:any = [{id:1,label:"Home"},{id:2,label:"Projects"},{id:2,label:"Links"}]
  return (
    <>
    <header className={classes.header_container}>
        <div className='flex p-4'>
        <Icon iconPath={iconPath} iconStyles={classes.icon_styles} iconContainerStyles={classes.icon_container_styles}/>
        <ul className={classes.navbar_list}>
            {
                menuItems.map((menu:any)=>(
                    <li key={menu.id} className={classes.nav_list}>{menu.label}</li>
                ))
            }
        </ul>
        <Button label="Theme"/>
        </div>
    </header>
    </>
   
  )
}
