import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";

const RootPage = () => (
  <main>
    <Header />
    <div className="pages">
      <Outlet />
    </div>
  </main>
);

export default RootPage;
