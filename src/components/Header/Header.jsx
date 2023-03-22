import React, { useRef, useState} from 'react';
import css from './Header.module.scss';
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
const Header =() => {

    const[menuOpened, setMenuOpened] =useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();

    useOutsideAlerter(
        {
            menuRef,
            setMenuOpened,
        });
 return (
<motion.div 
initial="hidden"
whileInView="show"
variants={headerVariants}
viewport={{once: true, amount: 0.25}}
className={`bg-primary paddings ${css.wrapper}`}
style={{boxShadow: headerShadow}}
>

        <div className={` innerWidth ${css.container} flexCenter`}>
            <div className={css.name}> Yumjirdulam </div>

            <ul 
            ref={menuRef}
            className ={`flexCenter ${css.menu}`}
            style={getMenuStyles(menuOpened)}
            >
                <li><a href="#experties">Services</a></li>
                <li><a href="#work">Skills & Experience</a></li>
                <li><a href="#portfolio">Certificates</a></li>
                <li><a href="#people">Testimonials</a></li>
                <li className={`flexCenter ${css.phone}`}>
                    <p>+001 (551) 220 7423</p>
                    <BiPhoneCall size ={"40px"}/>
                </li>
            </ul>

             <div 
             className={css.menuIcon}
                onClick ={()=>setMenuOpened((prev)=>!prev)}
                >
                <BiMenuAltRight size ={30}/>
            </div>
        </div>
    </motion.div>
  );
};
 export default Header;