import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <Outlet />
      </main>
      <footer className="container tezt-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
