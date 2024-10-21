import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection(){
    return(
        <section>
          <h1>Hello React!</h1>
          <h3>Our approach to learn</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach className="wayToTeach" key={way.title} {...way} />
            ))}
          </ul>
        </section>
    )
}