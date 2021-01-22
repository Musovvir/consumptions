import React from "react";

function HistoryItem(props) {

  return (
    <div className="historyItem mt-3">
      <div className="historyCategory">{props.history.category}</div>
      <div className="historySum">{props.history.sum}</div>
      <div className="historyComment">{props.history.comment}</div>
    </div>
  );
}

export default HistoryItem;
