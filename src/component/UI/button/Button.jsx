export const Button =({children,onClick,...others})=>{
    return(
        <button onClick={onClick} {...others}>{children}</button>
    )
}