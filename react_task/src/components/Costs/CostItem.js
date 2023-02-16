import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function CostItem(props) {
 const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription('New cost');/* происходит присваивание description = 'New cost'
  и вызов функции CostItem(props) */
    console.log(description);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
  );
}

export default CostItem;
