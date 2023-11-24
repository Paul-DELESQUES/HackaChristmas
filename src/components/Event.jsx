import { useEffect, useState } from "react";
import "../styles/Event.scss";
import doors from "../components/doors.json";


function Event() {
  const [isOpen, setIsOpen] = useState([]);
  const [submitToStorage, setSubmitToStorage] = useState([]);

  const checkIfAllowedToOpen = (inputdate) => {
    const doordate = new Date(inputdate);
    const today = new Date();

    today >= doordate
      ? openDoor(inputdate)
      : alert(
          "Wait a few days, MF"
        );
  };

  const openDoor = (doordate) => {
    setSubmitToStorage([...isOpen, doordate]);
    localStorage.setItem("isOpen", submitToStorage);
  };

  const converDateToDay = (inputdate) => {
    const date = new Date(inputdate);
    const day = date.getDate();

    return day;
  };

  const resetDoors = () => {
    setSubmitToStorage([]);
    localStorage.removeItem("isOpen");
  };

  useEffect(() => {
    const local = localStorage.getItem("isOpen");
    setIsOpen(local ? local : []);
  }, [submitToStorage]);

  return (
    <div className="container">
      <div className="content">
        <div className="calendar">
          {doors.map((door, i) => {
            return (
              <div key={i}>
                {isOpen.includes(door.day) ? (
                  <div className="dooropen">
                    <p>{door.message}</p>
                  </div>
                ) : (
                  <div
                    className="door"
                    onClick={() => checkIfAllowedToOpen(door.day)}
                  >
                    <p>{converDateToDay(door.day)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button className="resetbutton" onClick={resetDoors}>
          Reset the doors
        </button>
      </div>
    </div>
  );
}

export default Event;
