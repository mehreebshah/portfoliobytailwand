import Link from "next/link"
import Image from "next/image";

// import logo from "@/public/syeda Areeba.png";
import "../style/header.css"
const Navbar = ()=>{
    return(
      <div className="header">
         {/* left */}
         <div>
            <h1 className="logo">SA</h1>
         </div>
         {/* right */}
         <div className="header-right-div">
            <ul className="header-links">
               <li>
                  <Link className="nav-links" href="/">Home</Link>
               </li>
               <li>
                  <Link className="nav-links" href="/Service">Service</Link>
               </li>
               <li>
                  <Link className="nav-links" href="/Contact">Contact</Link>
               </li>
            </ul>
         </div>
      </div>
    )
}
export default Navbar