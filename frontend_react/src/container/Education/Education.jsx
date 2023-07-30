import React from 'react';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Education.scss';
const Education = () => {
  return (
    <>
      <h1 className='head-text'><span>Education </span>Details</h1>
      <div className='edu__content'>
        <div className='edu__left__sastra'>
          <h3 className='head-text sastra'>SASTRA DEEMED UNIVERSITY</h3>
            <h5 className='p-text sastra__address'>Thanjavur, Tamil Nadu</h5>
            <h5 className='p-text branch'>Final Year | B.Tech - Computer Science Engineering with Specialization in <br />Cyber Security & Blockchain Technology</h5>
            <h5 className='p-text sastra__year'>2020 - 2024</h5>
          </div>
          <div className='edu__right__sastra'>
          <img className='edu__sastra' src={images.sastra} alt="sastra" />
        </div>
        <div className='edu__left__kv'>
          <h3 className='head-text kv'>KENDRIYA VIDYALAYA NO. 1</h3>
          <h5 className='p-text kv__address'>Bokaro Steel City, Jharkhand</h5>
          <h5 className='p-text kv__year'>2008 - 2020</h5>
        </div>
        <div className='edu__right__kv'>
          
          <img className='edu__kv' src={images.kv} alt="kv" />
        </div>
        

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Education,'app__education'),
  'education',
  "app__primarybg"
);