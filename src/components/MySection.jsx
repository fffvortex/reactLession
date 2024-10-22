import { someText } from "../data";
import GenerateLi from "./GenerateLiForMySection";

export default function MySection() {
  return (
    <section>
        <h2>My Section!!!</h2>
        <h4>My section works</h4>
      <ul>
        {someText.map((SomeTextFragment)=> (
            <GenerateLi key={SomeTextFragment.title} {...SomeTextFragment} />
        ))} 
      </ul>
    </section>
  )
}
