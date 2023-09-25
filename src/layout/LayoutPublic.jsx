import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="container tezt-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
