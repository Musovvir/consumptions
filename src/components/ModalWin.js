import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/actions/categories";
import Picker from "emoji-picker-react";

function ModalWin() {
  const dispatch = useDispatch();

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const opened = useSelector((state) => state.categories.opened);

  const [categoryItem, setCategoryItem] = useState("");

  if (!opened) {
    return null;
  }

  const AddCategory = () => {
    dispatch(
      addCategory({
        category: categoryItem,
      }),
      setCategoryItem(""),
    );
  };

  return (
    <div className="window">
      <div className="windowBlock">
        <input
          type="text"
          value={chosenEmoji}
          onChange={(e) => setChosenEmoji(e.target.value)}
          placeholder="Название иконки..."
        />
        {/*<Picker onEmojiClick={onEmojiClick} />*/}
        <input
          type="text"
          value={categoryItem}
          onChange={(e) => setCategoryItem(e.target.value)}
          placeholder="Название категории..."
        />
        <button className="bt" onClick={AddCategory}>
          Добавить
        </button>
      </div>
    </div>
  );
}

export default ModalWin;
