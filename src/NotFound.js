import pic from "./img/funny-404-page-removebg-preview.png";
import "./App.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="error">
        <img src={pic} alt="crying" />
        <h2 className="error-p">Dont Cry, It is just 404 Error</h2>
      </div>
      <Link to="/" className="link-error">
        Back to Home
      </Link>
    </>
  );
};
export default NotFound;
