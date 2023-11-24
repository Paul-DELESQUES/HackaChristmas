import { useState } from "react";
import { room } from "../assets/video";
import GarlandCanvas from "../components/canvas/Garland";
import HouseTable from "../components/canvas/HouseTable";
import SantaCanvas from "../components/canvas/Santa";
import TreeCanvas from "../components/canvas/Tree";
import Actions from "../components/Actions";
import "../styles/Room.scss";

function Room() {
  const [buttonStates, setButtonStates] = useState({
    socks: true,
    light: true,
    tree: true,
    santa: true,
    sound: true,
  });

  const handleClick = (buttonId) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonId]: !prevStates[buttonId],
    }));
  };

  return (
    <section className="room-ctn">
      <video src={room} autoPlay loop muted />
      <Actions handleClick={handleClick} buttonStates={buttonStates} />
      {!buttonStates.tree ? <TreeCanvas /> : ""}
      {!buttonStates.santa ? <SantaCanvas /> : ""}
      {!buttonStates.light ? <GarlandCanvas /> : ""}
      {!buttonStates.socks ? <HouseTable /> : ""}
    </section>
  );
}

export default Room;
