import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root(){
  return(
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}