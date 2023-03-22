import React from 'react';
import css from './Hero.module.scss';
import {motion} from "framer-motion";
import { staggerContainer } from '../../../utils/motion';
import { fadeIn } from '../../../utils/motion';
import { slideIn } from '../../../utils/motion';
const Hero = () => {
    return(
       <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`innerWidth ${css.container}`}>
         
        < div className={css.upperElements}>   
        <motion.span 
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='primaryText'>
        
          Hey There, <br/> I'm Yumjirdulam. 
        </motion.span>
             <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
                Love coding
                <br/>
                Love designing
             </motion.span>
         </div>
 
         <motion.div 
         variants={fadeIn("up", "tween", 0.3, 1)}
         className={css.person}>
            <motion.img 
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png" alt=""/>
         </motion.div>

         <a className={css.email} href="mailto:yumjiree1723@gmail.com">
            yumjiree1723@gmail.com
         </a>
        
         <div className={css.lowerElements}>
            <motion.div 
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}>
            
             <div className="primaryText"> 1 </div>
            <div className="secondaryText"> 
            <div> Year </div>
            <div>Experience</div>
            </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}>
             <img src ="./certificate.png" alt=""/>
             <span>MS COMPUTER SCIENCE</span>
             <span>SOFTWARE ENGINEER</span>
             </motion.div>
          </div>
          </motion.div>
        </section>
    );
};

export default Hero;