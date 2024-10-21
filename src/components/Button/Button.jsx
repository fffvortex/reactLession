import './Button.css'
export default function Button({children,onClick,isActive}){
    // function handleClick(){
    //     console.log('button clicked')
    // }
    console.log('Button component render')
    return(
        <button className={isActive? 'button active': 'button'} onClick={onClick} onDoubleClick={()=>console.log('doubleClick')} >{children}</button>
    )
}