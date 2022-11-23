import "./Alerts.css";
const Alerts = ({ hunger, stress, happiness }) => {
  const feedMe = [
    "Покорми меня!",
    "Я хочу кушать!",
    "Кушать,пожалуйста!",
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
      {hunger < 30 && (
        <div className="Alerts__dialog">
          <h2>{feedMe[Math.floor(Math.random() * 5)]}</h2>
        </div>
      )}
      {hunger > 80 && (
        <div className="Alerts__dialog">
          <h2>Я сейчас лопну!</h2>
        </div>
      )}
      {stress < 30 && (
        <div className="Alerts__dialog">
          <h2>{depressed[Math.floor(Math.random() * 2)]}</h2>
        </div>
      )}
      {stress > 80 && (
        <div className="Alerts__dialog">
          <h2>{tooTired[Math.floor(Math.random() * 2)]}</h2>
        </div>
      )}
      {happiness < 30 && (
        <div className="Alerts__dialog">
          <h2>Тебе совсем на меня плевать?</h2>
        </div>
      )}
      {happiness > 80 && (
        <div className="Alerts__dialog">
          <h2>Ну сколько можно?!</h2>
        </div>
      )}
    </div>
  );
};

export { Alerts };
