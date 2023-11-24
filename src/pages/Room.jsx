import { room } from "../assets/video";
import GarlandCanvas from "../components/canvas/Garland";
import Garland2 from "../components/canvas/Garland2";
import HouseTable from "../components/canvas/HouseTable";
import SantaCanvas from "../components/canvas/Santa";
import TreeCanvas from "../components/canvas/Tree";
import "../styles/Room.scss";

function Room() {
  return (
    <section className="room-ctn">
      <video src={room} autoPlay loop muted />
      <TreeCanvas />
      <SantaCanvas />
      <HouseTable />
      <GarlandCanvas />
    </section>
  );
}

export default Room;
