import "./Events.css";
import { useEffect, useState } from "react";

const Events = ({ eventCounter }) => {
  const [author, setAuthor] = useState("Trixi");
  const [message, setMessage] = useState(
    "Привет,меня зовут Трикси. Будем дружить?:)"
  );
  const [authorImg, setAuthorImage] = useState(
    "https://i.pinimg.com/736x/ef/59/0d/ef590d3e2990e6827d96ad8ce55a755b.jpg"
  );

  const setEvent = (author, ava, message) => {
    setAuthor(author);
    setAuthorImage(ava);
    setMessage(message);
  };

  useEffect(() => {
    if (eventCounter === 3) {
      setEvent(
        "...",
        "https://dzyannica.by/sites/default/files/files/styles/original_bez_znaka/public/field/image/eed3770b05b15db819921e4ced960c98.jpg?itok=mposMHNs",
        "У нас пополнение? Даже не думай спокойно гулять здесь, пока я рядом "
      );
    }

    if (eventCounter === 7) {
      setEvent(
        "Trixi",
        "https://i.pinimg.com/736x/ef/59/0d/ef590d3e2990e6827d96ad8ce55a755b.jpg",
        "Опять этот Борг. Его хозяин плохой человек. Будь осторожней с ними "
      );
    }

    if (eventCounter === 11) {
      setEvent(
        "Murzik",
        "https://funart.pro/uploads/posts/2022-05/1653717298_2-funart-pro-p-naglii-kotik-krasivo-foto-2.jpg",
        "Господа, вижу у вас проблемы ? "
      );
    }

    if (eventCounter === 15) {
      setEvent(
        "Trixi",
        "https://i.pinimg.com/736x/ef/59/0d/ef590d3e2990e6827d96ad8ce55a755b.jpg",
        "Отстань, Мурзик. Разберемся и без тебя "
      );
    }

    if (eventCounter === 20) {
      setEvent(
        "Murzik",
        "https://funart.pro/uploads/posts/2022-05/1653717298_2-funart-pro-p-naglii-kotik-krasivo-foto-2.jpg",
        "Как скажешь,Трикс. Если что - ты знаешь,где меня искать "
      );
    }

    if (eventCounter === 25) {
      setEvent(
        "Trixi",
        "https://i.pinimg.com/736x/ef/59/0d/ef590d3e2990e6827d96ad8ce55a755b.jpg",
        "Мурзик не тот, кем кажется. Мать родную продаст за банку сметаны "
      );
    }

    if (eventCounter === 31) {
      setEvent(
        "Borg",
        "https://dzyannica.by/sites/default/files/files/styles/original_bez_znaka/public/field/image/eed3770b05b15db819921e4ced960c98.jpg?itok=mposMHNs",
        "Скучали,щенки? "
      );
    }
  }, [eventCounter]);
  return (
    <div className="Events">
      <img className="Events__dogAvatar" src={authorImg} alt="avatar" />
      <div className="Events__message">
        <h2>{author}</h2>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export { Events };
