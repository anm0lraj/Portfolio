import React, { useEffect, useState } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
    const [theme, setTheme]=useState("dark-theme");
    const [toggle,setToggle] = useState(false);
    const toggleTheme =()=>{
        if (theme==="dark-theme"){
            setTheme('light-theme');
        }
        else{
            setTheme('dark-theme');
        }
    };
    useEffect(()=>{
        document.body.className=theme;
    },[theme]);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href="/"><img src={images.logo} alt='logo'/></a>
                
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about','education','skills','roles','works', 'designs','achievements','certificates','contact'].map((item)=>(
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div>
                <a href="https://drive.google.com/file/d/1iV_DWkrhr9cmMjqARZEUydnqpoE1kHGk/view?usp=sharing"><button className='resume'><h4>Resume</h4></button></a>
            </div>
            <div className='btn' onClick={()=>toggleTheme()}>
                <h5>Change Theme</h5>
            </div>
            
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={()=>setToggle(true)}/>
                {toggle && (
                        <motion.div 
                            whileInView={{x:[300,0]}}
                            transition={{duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={()=>setToggle(false)}/>
                            <ul>   
                                {['home', 'about','education','skills','roles','works','designs','achievements','certificates','contact'].map((item)=>(
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                )}
                
            </div>
        </nav>
    )
}

export default Navbar