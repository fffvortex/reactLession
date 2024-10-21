import Button from "./Button/Button"
export default function TabsSection({active,onChange}){
    return(
        <section className="centered">
            <Button isActive={active === 'main'} onClick={()=> onChange('main')}>Main</Button>
            <Button isActive={active === 'feedback'} onClick={ ()=> onChange('feedback')}>Feedback</Button>
        </section>
    )
}