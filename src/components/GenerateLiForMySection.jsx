
export default function GenerateLi({title,text}){
    return(
        <li className="liWay">
            <p>
                <strong>{title} </strong>
                {text}
            </p>
        </li>
    )
}