import OpenEye from "../assets/eye.png";
import CloseEye from "../assets/eye-slash.png";

// To implement test scenario when showCompleted items is set to true or false
export default function ButtonToggle({ showCompleted, onClick }) {
  const EyeImage = showCompleted ? CloseEye : OpenEye;
  return (
    <button className="button_icon" onClick={onClick}>
      <img src={EyeImage} alt="Eye" className="icon" />
      <span>{showCompleted ? "Hide" : "View"} Completed Items</span>
    </button>
  );
}
