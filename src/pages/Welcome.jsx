import { welcome } from "../assets/video";

function Welcome() {
  return (
    <div className="welcome-ctn">
      <video src={welcome} autoPlay loop muted />
    </div>
  );
}

export default Welcome;
