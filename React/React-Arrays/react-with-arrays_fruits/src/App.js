import Card from "./components/Card";
import { Fragment } from "react";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍎 apple", color: "red" },
    { id: 2, name: "🥝 kiwi", color: "green" },
    { id: 3, name: "🍊 orange", color: "orange" },
    { id: 4, name: "🍇 grapes", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name }) => {
        return (
          <Fragment key={id}>
            {" "}
            <Card name={name} />
          </Fragment>
        );
      })}
    </div>
  );
}
