import "./Alerts.css";
const Alerts = ({ hunger, stress, happiness }) => {
  const feedMe = [
    "Покорми меня!",
    "Я хочу кушать!",
    "Кушать!",
    "Ты забыл меня покормить?",
    "Ав-ав!",
  ];

  const tooTired = ["У меня сердце выпрыгнет!", "Я ж не гончая!"];

  const depressed = [
    "Самый несчастный песик на районе...",
    "Лучше бы ты меня вообще не заводил",
  ];

  return (
    <div className="Alerts">
      {hunger < 30 && <h2>{feedMe[Math.floor(Math.random() * 5)]}</h2>}
      {hunger > 80 && <h2>Я сейчас лопну!</h2>}
      {stress < 30 && <h2>{depressed[Math.floor(Math.random() * 2)]}</h2>}
      {stress > 80 && <h2>{tooTired[Math.floor(Math.random() * 2)]}</h2>}
      {happiness < 30 && <h2>Тебе совсем на меня плевать?</h2>}
      {happiness > 80 && <h2>Ну сколько можно?!</h2>}
    </div>
  );
};

export { Alerts };
