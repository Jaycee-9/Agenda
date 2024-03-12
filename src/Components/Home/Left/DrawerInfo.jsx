import { useContext } from "react";
import { AccountContext } from "../../../Context";
import { Logout, Close } from "@mui/icons-material";

function DrawerInfo({ onClose }) {
  const { user, setUser, task, setTaskDetails } = useContext(AccountContext);

  const handleLogout = () => {
    setUser(null);
    setTaskDetails({});
  };

  const buttonStyle = {
    marginTop: "70px",
    padding: "10px 20px",
    fontSize: "40px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "80px 0px 0px 0px",
  };

  return (
    <div className="drawer-info">
      <div className="drawer-info-img">
        <img src={user.picture} alt="user" />
      </div>
      <div className="drawer-info-name">
        <h1>{user.name}</h1>
        <p>Pending Tasks</p>
      </div>
      <div className="drawer-info-category">
        <ul>
          {task.map((task) => {
            return <li key={task._id}>{task.title}</li>;
          })}
        </ul>
      </div>
      <div className="drawer-info-btn">
        <Logout onClick={handleLogout} sx={buttonStyle} />
        <Close onClick={onClose} sx={buttonStyle} />
      </div>
    </div>
  );
}

export default DrawerInfo;
