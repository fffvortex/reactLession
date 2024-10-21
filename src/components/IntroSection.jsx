import React from "react";
// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Lorem ipsum</h1>
//       <h3 className="centered" style={{color: '#666'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad labore laborum architecto similique debitis ullam molestiae dolorum vel quam optio dolor quasi accusamus!</h3>
//     </section>
//   );
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement("h1", { className: "centered",key:1 }, "Lorem ipsum"),
    React.createElement(
      "h3",
      { className: "centered",key:2, style: { color: "#666" } },
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad labore laborum architecto similique debitis ullam molestiae dolorum vel quam optio dolor quasi accusamus!"
    ),
  ]);
}
