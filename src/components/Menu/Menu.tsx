import classes from './menu.module.css'


export default function Menu() {
    const menuItems:any = [{id:1,label:"Home"},{id:2,label:"Projects"},{id:2,label:"Links"}]
  return (
    <>
    <div>
        <ul className={classes.navbar_list}>
            {
                menuItems.map(menu=>(
                    <li key={menu.id} className={classes.nostyle}>{menu.label}</li>
                ))
            }
        </ul>
    </div>
    </>
   
  )
}
