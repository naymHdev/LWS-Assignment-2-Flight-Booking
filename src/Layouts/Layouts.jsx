import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layouts = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className=" w-11/12 mx-auto max-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
