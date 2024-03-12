import { useContext, useState } from "react";
import { AccountContext } from "../../../Context/index";
import { Drawer } from "@mui/material";
import DrawerInfo from "./DrawerInfo";

function LeftDrawer() {
  const { user } = useContext(AccountContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerStyle = {
    left: 20,
    top: 20,
    height: "95%",
    width: 400,
    borderRadius: "2px",
    boxShadow: "none",
  };

  return (
    <div className="left-drawer">
      <div className="user">
        <img src={user.picture} alt="user" onClick={toggleDrawer(true)} />
      </div>
      <Drawer
        PaperProps={{ sx: drawerStyle }}
        open={open}
        onClose={toggleDrawer()}
      >
        <DrawerInfo onClose={toggleDrawer()} />
      </Drawer>
    </div>
  );
}

export default LeftDrawer;
