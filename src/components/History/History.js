import React from "react";
import HistoryItem from "./HistoryItem";
import { useSelector } from "react-redux";

function History() {
  const histories = useSelector((state) => state.categories.history);

  let total = histories.reduce((prev, item) => prev + parseInt(item.sum), 0);

  const nameCategory = useSelector((state) =>
    state.categories.categories.filter((item) => {
      return item.category === histories.id;
    })
  );

  return (
    <div className="history">
      <div className="text">Всего потрачено: {total}</div>
      {histories.map((history) => {
        return <HistoryItem history={history} nameCategory={nameCategory.category} />;
      })}
    </div>
  );
}

export default History;
