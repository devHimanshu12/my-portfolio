type Icon = {
    iconPath:string,
    iconStyles?:any,
    iconContainerStyles?:any
}

export  default function({iconPath,iconStyles,iconContainerStyles}:Icon){
    return (
        <>
        <span className={iconContainerStyles}>
            <img className={iconStyles} src={iconPath} alt="" />
        </span>
        </>
    )
}