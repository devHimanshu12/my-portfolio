import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

export default function Layout(){

    return(
        <>
        <Menu/>
        <Outlet/>
        <Footer/>
        </>
    )
}