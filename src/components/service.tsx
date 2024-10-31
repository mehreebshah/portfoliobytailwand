import '../style/service.css';
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { LuGamepad2 } from "react-icons/lu";
import { MdAddAPhoto } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


function Service(){
    return(
        <main className='main'>
            <div className='ser-container'>
                {/* top div */}
                <div className='top-div-ser'>
                    <h2 className="title-ser">My Services</h2>
                    <p className='des-ser'>Need a professional website that stands out? As a skilled website developer, I specialize in creating responsive, user-friendly websites that are both visually appealing and optimized for performance. From modern designs to seamless functionality, I bring ideas to life to help you make a lasting online impression. Let s build something amazing together!</p>
                </div>
                {/* bottom div */}
            <div className='box-con'>
                <div  className='box'>
                <FaLaptopCode className='ser-icon'/>
                <h3>Web Development</h3>
                <span>Blog, E-Commerce</span>
                </div>
                <div  className='box'>
                <GiSoundOn  className='ser-icon'/>
                <h3>sound design</h3>
                <span>Voice Over, Beat Making</span>
                </div>
                <div  className='box'>
                <LuGamepad2 className='ser-icon'/>
                <h3>game design</h3>
                <span>Character Design, Props & Objects</span>
                </div>
                <div  className='box'>
                <MdAddAPhoto className='ser-icon'/>
                <h3>photography</h3>
                <span>portrait, product photography</span>
                </div>
                <div className='box'>
                <HiMiniComputerDesktop className='ser-icon'/>
                <h3>uI/uX design</h3>
                <span>Mobile app, website design</span>
                </div>
                <div  className='box'>
                <h3 className='box-para'>Advertising</h3>
                <span className='box-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </span>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Service