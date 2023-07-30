import React from 'react'
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper';
import './Header.scss';

const scaleVariant={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  
  return (
    <div  className='app__header app__flex'>
      <motion.div 
        whileInView={{ x: [-100,0], opacity: [0,1]}}
        transition={{duration:0.5}}
        className="app__header-info">
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>

              <span>
              👋
              </span>

              <div style={{marginLeft: 20}}>
                <p className='p-text hello'>Hello, I am</p>
                <h1 className='head-text name'>Anmol</h1>
              </div>

            </div>

            <div className='tag-cmp app_flex'>
            <p className="p-text">Computer Science Engineer</p>
            <p className="p-text">Web Developer</p>
            <p className="p-text">UI/UX Designer</p>
            <p className="p-text">Graphics Designer</p>
            </div>
          </div>
      </motion.div>

      <motion.div 
        whileInView={{opacity: [0,1]}}
        transition={{duration:0.5, delayChildren: 0.5}}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
          <motion.img 
            whileInView={{scale: [0,1]}}
            transition={{duration:1, ease: 'easeInOut'}}
            src={images.gradient}
            alt="profile_circle"
            className="overlay_circle"
          /> 
      </motion.div>
      
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className='app__header-circles'
      >
        {[images.node, images.react, images.figma].map((circle,index)=>(
          <div className="circle-cmp app_flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      

    </div>
  )
}

export default AppWrap(Header,'home');