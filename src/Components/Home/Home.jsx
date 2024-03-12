import LeftDrawer from "./Left/Drawer";
import TaskInput from "./Centre/Top/TaskInput";
import DetailTaskView from "./Right/DetailTaskView";

function Home() {
  return (
    <div className="home">
      <LeftDrawer />
      <TaskInput />
      <DetailTaskView />
    </div>
  );
}
export default Home;
