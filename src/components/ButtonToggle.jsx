import OpenEye from "../assets/eye.png";
import CloseEye from "../assets/eye-slash.png";

export default function ButtonToggle({ showCompleted, onClick }) {
  const EyeImage = showCompleted ? CloseEye : OpenEye;
  return (
    <button className="icon-button toggle" onClick={onClick}>
      <img src={EyeImage} alt="Eye" className="icon" />
      <span>{showCompleted ? "Hide" : "View"} Completed Items</span>
    </button>
  );
}
