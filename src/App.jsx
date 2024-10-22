import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";
import { Fragment, useState } from "react"; // либо указание пустых тегов для children <></>
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import MySection from "./components/MySection";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <Fragment>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current)=>setTab(current)}/>

        {tab === "main" && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedbackSection />
            <MySection/>
          </>
        )}

      </main>
    </Fragment>
  );
}
