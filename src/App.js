import { Modal } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import "./App.css";
import { Events } from "./Events";
import { Alerts } from "./Alerts";

function App() {
  const [openGreeting, setOpenGreeting] = useState(true);
  const [breed, setBreed] = useState(null);
  const [alive, setAlive] = useState(true);
  const [dogImgSrc, setDogImgSrc] = useState(null);

  const [hunger, setHunger] = useState(50);
  const [stress, setStress] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const [eventCounter, setEventCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((hunger) => hunger - 4);
      return () => clearInterval(interval);
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStress((stress) => stress - 4);
      return () => clearInterval(interval);
    }, 4000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((happiness) => happiness - 4);
      return () => clearInterval(interval);
    }, 4000);
  }, []);

  useEffect(() => {
    setHunger(50);
    setStress(50);
    setHappiness(50);
  }, [breed]);

  useEffect(() => {
    if (hunger > 100 || stress > 100 || happiness > 100) {
      setAlive(false);
    }
    if (hunger < 0 || stress < 0 || happiness < 0) {
      setAlive(false);
    }
  }, [hunger, stress, happiness]);

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
                    setDogImgSrc("/images/breeds/chih.png");
                  }}
                  src={"/images/breeds/chih.png"}
                  alt="chihuahua"
                />
              </div>
              <div className="breed haski">
                <img
                  onClick={() => {
                    setBreed("haski");
                    setOpenGreeting(false);
                    setDogImgSrc(
                      process.env.PUBLIC_URL + "/images/breeds/haski.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/haski.png"}
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
                      process.env.PUBLIC_URL + "/images/breeds/korgi.png"
                    );
                  }}
                  src={process.env.PUBLIC_URL + "/images/breeds/korgi.png"}
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
            <h5>hunger</h5>
            <LinearProgress
              color={hunger > 30 ? "success" : "inherit"}
              variant="determinate"
              value={hunger}
            />
            <h5>stress</h5>
            <LinearProgress
              color={stress > 30 ? "success" : "inherit"}
              variant="determinate"
              value={stress}
            />
            <h5>happiness</h5>
            <LinearProgress
              color={happiness > 30 ? "success" : "inherit"}
              variant="determinate"
              value={happiness}
            />
          </div>
          <div className="App__buttons">
            <img
              onClick={() => {
                setEventCounter((eventCounter) => eventCounter + 1);
                setHunger((hunger) => hunger + 10);
              }}
              src="https://cdn-icons-png.flaticon.com/512/2771/2771401.png"
              alt="feed"
            />
            <img
              onClick={() => {
                setEventCounter((eventCounter) => eventCounter + 1);
                setStress((stress) => stress + 10);
              }}
              src="https://w7.pngwing.com/pngs/120/435/png-transparent-person-sports-throwing-a-ball-stick-figures-in-motion-icon.png"
              alt="play"
            />
            <img
              onClick={() => {
                setEventCounter((eventCounter) => eventCounter + 1);
                setHappiness((happiness) => happiness + 10);
              }}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dog-sitting-1465875-1241873.png"
              alt="train"
            />
          </div>
          <img className="App__dogImg" src={dogImgSrc} alt="dog" />
          <Alerts hunger={hunger} stress={stress} happiness={happiness} />
          <Events eventCounter={eventCounter} />
          {!alive && (
            <div className="App__deathScreen">
              <center>
                <h2>К сожалению,щенок умер :(</h2> <br />
                <h2
                  className="App__reset"
                  onClick={() => document.location.reload()}
                >
                  Нажмите,чтобы начать заново
                </h2>
              </center>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
