import { useState } from "react";
import CardItem from "./components/card/CardItem";
import "./styles/App.scss";
import { dataCard } from "./data";

const App = () => {
  const [data] = useState(dataCard);
  return (
    <div className="App">
      <h1 className="App__title">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {data.map((el) => (
          <CardItem
            key={el.id}
            card={el}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default App;
