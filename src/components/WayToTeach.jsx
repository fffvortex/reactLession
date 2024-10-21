
export default function WayToTeach({title,description}) {
    return (
      <li className="liWay">
        <p>
          <strong>{title} </strong>
           {description}
        </p>
      </li>
    );
  }