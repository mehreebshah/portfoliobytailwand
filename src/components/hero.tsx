import Image from "next/image";
import pic1 from "../public/memoji-removebg-preview.png";
import "../style/hero.css";
const Hero = () => {
    return(
        <div className="header-container">
            <div className="header-boxes-con">
            <Image  src={pic1} alt="profilepic" height={200} width={200} className="image"/>
            <div className="hero-right-div"> 
            <h2 className="title">Hi !I am Syeda Areeba</h2>
           <p className="pargraph">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.</p>
            <button className="btn">Hire Me</button>
            </div>
            </div>
        </div>
    )
};

export default Hero