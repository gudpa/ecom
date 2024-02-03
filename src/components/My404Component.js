import image404 from "../images/error-404.jpg";
import "./styles/My404Component.css";

export default function My404Component() {
  return (
    <div className="error-container">
      <img src={image404} alt="404 image" />
    </div>
  );
}
