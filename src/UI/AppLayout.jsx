import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div>
      <header>
        <SideBar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
