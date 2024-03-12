import { GoogleLogin } from "@react-oauth/google";
import "../../../App.css";
import { jwtDecode } from "jwt-decode";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../Service/api";
import logo from "../../../Public/Images/Agenda.png";

function GoogleOAuth() {
  const [error, setError] = useState(null);

  const { setUser, user } = useContext(AccountContext);

  const navigate = useNavigate();

  const handleSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    setError(null);
    userLogin(decode);
    setUser(decode);
  };

  const handleError = (res) => {
    setError("Something went wrong please try again");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="google-background">
      <div className="google-login">
        <img src={logo} alt="logo" />
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        <p>{error}</p>
      </div>
    </div>
  );
}

export default GoogleOAuth;
