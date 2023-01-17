import React, { useMemo, useRef, useState } from "react";
import classes from "./CardItem.module.scss";
import cat from "../../images/Cat.png";
import disabledCat from "../../images/disabledCat.png";
const CardItem = ({ card }) => {
  const [color, setColor] = useState("rgb(22, 152, 217)");

  const activeCard = () => {
    if (card.disabled) return false;
    if (title.current.innerText === "Котэ не одобряет?") {
      title.current.innerText = "Сказочное заморское яство";
    }
    setColor(
      color === "rgb(22, 152, 217)" ? "rgb(217, 22, 103)" : "rgb(22, 152, 217)"
    );
  };
  const title = useRef(null);

  const hover = (e) => {
    e.target.style.opacity = 0.95;
    if (e.target.style.backgroundColor === "rgb(217, 22, 103)") {
      e.target.style.backgroundColor = "rgb(229, 46, 122)";
      title.current.innerText = "Котэ не одобряет?";
    }
  };
  const unHover = (e) => {
    e.target.style.opacity = 1;
    if (e.target.style.backgroundColor === "rgb(229, 46, 122)") {
      e.target.style.backgroundColor = "rgb(217, 22, 103)";
      title.current.innerText = "Сказочное заморское яство";
    }
  };

  const ending = (num, word) => {
    switch (num) {
      case 1:
        return word;
      case 2:
        return word.slice(0, word.length - 1) + "и";
      case 5:
        return word.slice(0, word.length - 1) + "ей";
      default:
        return word;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <div
        onClick={activeCard}
        onMouseEnter={hover}
        onMouseLeave={unHover}
        style={{ backgroundColor: !card.disabled && color }}
        className={
          card.disabled
            ? [classes.cardBorder, classes.disabled].join(" ")
            : classes.cardBorder
        }>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div
              ref={title}
              className={
                card.disabled
                  ? [classes.aboveTitle, classes.disabledText].join(" ")
                  : classes.aboveTitle
              }>
              Сказочное заморское яство
            </div>
            <div className={classes.title}>Нямушка</div>
            <div className={classes.ingredient}>{card.ingredient}</div>
            <div
              className={
                card.disabled
                  ? [classes.portions, classes.disabledText].join(" ")
                  : classes.portions
              }>
              {card.portions} порций
            </div>
            <div
              className={
                card.disabled
                  ? [classes.prize, classes.disabledText].join(" ")
                  : classes.prize
              }>
              {card.prize} {ending(card.prize, "мышь")} в подарок
              <br />
            </div>
            <div
              style={
                card.disabled
                  ? { backgroundColor: "#B3B3B3" }
                  : { backgroundColor: color }
              }
              className={classes.kilo}>
              <div>{card.kilo}</div>
              <span>кг</span>
            </div>
          </div>
          <img
            className={classes.cat}
            src={card.disabled ? disabledCat : cat}
            alt="cat"
          />
        </div>
      </div>
      {color === "rgb(22, 152, 217)" && !card.disabled && (
        <span style={{ color: "white" }}>
          Чего сидишь? Порадуй котэ,{" "}
          <span
            style={{ color: "rgb(22, 152, 217)", cursor: "pointer" }}
            onClick={activeCard}>
            купи
          </span>
          .
        </span>
      )}
      {color === "rgb(217, 22, 103)" && !card.disabled && (
        <span style={{ color: "white" }}>{card.text}</span>
      )}
      {card.disabled && (
        <span style={{ color: "#FFFF66" }}>
          Печалька, {card.ingredient} закончился.
        </span>
      )}
    </div>
  );
};

export default CardItem;
