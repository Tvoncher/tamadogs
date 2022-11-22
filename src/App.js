import { Modal } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [openGreeting, setOpenGreeting] = useState(true);
  const [breed, setBreed] = useState(null);
  const [dogImgSrc, setDogImgSrc] = useState(null);

  const [hunger, setHunger] = useState(100);
  const [stress, setStress] = useState(100);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((hunger) => hunger - 1);
      return () => clearInterval(interval);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStress((stress) => stress - 1);
      return () => clearInterval(interval);
    }, 700);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((happiness) => happiness - 1);
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Modal open={openGreeting}>
        <div className="App__greeting">
          <center>
            <h1>Welcome!</h1>
            <h2>
              You need to choose your dogs breed. It wont affect anything,just
              choose whoever you like
            </h2>
            <div className="App__breedContainer">
              <div className="breed pomeranian">
                <img
                  onClick={() => {
                    setBreed("pomeranian");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/pomeranian.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/pomeranian.png"}
                  alt="pomeranian"
                />
              </div>
              <div className="breed amstaff">
                <img
                  onClick={() => {
                    setBreed("amstaff");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/amstaff.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/amstaff.png"}
                  alt="amstaff"
                />
              </div>
              <div className="breed chihuahua">
                <img
                  onClick={() => {
                    setBreed("chihuahua");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/chihuahua.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/chihuahua.png"}
                  alt="chihuahua"
                />
              </div>
              <div className="breed haski">
                <img
                  onClick={() => {
                    setBreed("haski");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/haski.jpg"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/haski.jpg"}
                  alt="haski"
                />
              </div>
              <div className="breed shepherd">
                <img
                  onClick={() => {
                    setBreed("shepherd");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/shepherd.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/shepherd.png"}
                  alt="shepherd"
                />
              </div>
              <div className="breed akita">
                <img
                  onClick={() => {
                    setBreed("akita");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/akita.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/akita.png"}
                  alt="akita"
                />
              </div>
              <div className="breed samoed">
                <img
                  onClick={() => {
                    setBreed("samoed");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/samoed.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/samoed.png"}
                  alt="samoed"
                />
              </div>
              <div className="breed korgi">
                <img
                  onClick={() => {
                    setBreed("korgi");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/korgi.jpg"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/korgi.jpg"}
                  alt="korgi"
                />
              </div>
            </div>
          </center>
        </div>
      </Modal>

      {breed && (
        <div className="App__main">
          <div className="App__stats">
            hunger
            <LinearProgress
              color="success"
              variant="determinate"
              value={hunger}
            />
            <br />
            stress
            <LinearProgress
              color="success"
              variant="determinate"
              value={stress}
            />
            <br />
            happiness
            <LinearProgress
              color="success"
              variant="determinate"
              value={happiness}
            />
          </div>
          <div className="App__buttons">
            <img
              onClick={() => setHunger((hunger) => hunger + 10)}
              src="https://cdn-icons-png.flaticon.com/512/2771/2771401.png"
              alt="feed"
            />
            <img
              onClick={() => setStress((stress) => stress + 10)}
              src="https://w7.pngwing.com/pngs/120/435/png-transparent-person-sports-throwing-a-ball-stick-figures-in-motion-icon.png"
              alt="play"
            />
            <img
              onClick={() => setHappiness((happiness) => happiness + 10)}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dog-sitting-1465875-1241873.png"
              alt="train"
            />
          </div>
          <img className="App__dogImg" src={dogImgSrc} alt="dog" />
          <div className="App__events">
            <img
              className="App__dogAvatar"
              src="https://i.pinimg.com/736x/ef/59/0d/ef590d3e2990e6827d96ad8ce55a755b.jpg"
              alt="avatar"
            />
            <div className="App__message">
              <h2>Trixi</h2>
              <h3>Hello there. How r u?</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
