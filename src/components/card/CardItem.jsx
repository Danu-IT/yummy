import React, { useRef, useState } from "react";
import classes from "./CardItem.module.scss";
import cat from "../../images/Cat.png";

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
  const bg = useRef(null);
  const hover = (e) => {
    e.preventDefault();
    if (card.disabled) return false;

    bg.current.style.opacity = 0.8;
    if (color === "rgb(217, 22, 103)") {
      bg.current.style.backgroundColor = "#E52E7A";
      title.current.innerText = "Котэ не одобряет?";
    }
    if (color === "rgb(22, 152, 217)") {
      bg.current.style.backgroundColor = "rgb(46, 168, 230)";
    }
  };
  const unHover = (e) => {
    e.preventDefault();
    if (card.disabled) return false;

    bg.current.style.opacity = 1;
    if (color === "rgb(217, 22, 103)") {
      bg.current.style.backgroundColor = "rgb(217, 22, 103)";
      title.current.innerText = "Сказочное заморское яство";
    }
    if (color === "rgb(46, 168, 230)") {
      bg.current.style.backgroundColor = "rgb(22, 152, 217)";
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
        ref={bg}
        style={{ backgroundColor: !card.disabled && color }}
        className={
          card.disabled
            ? [classes.cardBorder, classes.disabled].join(" ")
            : classes.cardBorder
        }>
        <div
          className={classes.card}
          onMouseEnter={hover}
          onMouseLeave={unHover}>
          <div
            className={classes.cardContent}
            onMouseEnter={(event) => event.preventDefault()}
            onMouseLeave={(event) => event.preventDefault()}>
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
            src={cat}
            alt="cat"
          />
        </div>
      </div>
      {color === ("rgb(22, 152, 217)" || "rgb(46, 168, 230)") &&
        !card.disabled && (
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
