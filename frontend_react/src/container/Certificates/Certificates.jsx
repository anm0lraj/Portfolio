import React, { useState, useEffect } from 'react'
// import {images} from '../../constants';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';
const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick=(index)=>{
        setCurrentIndex(index);
    }
    useEffect(() => {
        const query = '*[_type == "certificates"]';
    
        client.fetch(query).then((data) => {
          setCertificates(data);
        });
    }, []);
    const test=certificates[currentIndex];
    return (
    <>
        <h1 className='head-text'>Certificates</h1>
        {certificates.length &&(
            <>
                <div className='app__certificates-item app__flex' >
                    <a href={test.url} target="_blank">
                        <img src={urlFor(test.imgurl)} alt="certificate" />
                    </a>
                </div>
                <div className='app__certificates-btns app__flex'>
                    <div className='app__flex' onClick={()=>handleClick(currentIndex===0 ? certificates.length -1 : currentIndex-1)}>
                    <HiChevronLeft/>
                    </div>
                    <div className='app__flex' onClick={()=>handleClick(currentIndex===certificates.length-1 ? 0 : currentIndex+1)}>
                    <HiChevronRight/>
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default AppWrap(
    MotionWrap(Certificates,'app__certificates'),
    'certificates',
    "app__primarybg"
  );