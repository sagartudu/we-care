import Image from "next/image";
import HomePage from "./pages/home/page";
import NavBar from "./components/navBar/page";
import { Typography } from "@mui/material";
import Registration from "./pages/registration/page";

export default function Home() {
  return (
      <main style={{width:'100%', height:'100%'}}>
        <NavBar/>
        <HomePage/>
        {/* <Registration/> */}
      </main>
      
  );
}
