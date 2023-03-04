import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
