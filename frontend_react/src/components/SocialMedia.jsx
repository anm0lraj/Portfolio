import React from 'react'
// import {BsTwitter,BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'
import {BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/anm0lraj/"><BsLinkedin/></a>
        </div>
        <div>
          <a href="https://twitter.com/anm0l_raj"><BsTwitter/></a> 
        </div>
        <div>
          <a href="https://www.facebook.com/anm0lraj/"><FaFacebookF/></a>
        </div>
        <div>
          <a href="https://www.instagram.com/anm0l_raj/"><BsInstagram/></a>
        </div>
        {/* <div>
          <a href="https://github.com/anm0lraj"><BsGithub/></a>
        </div> */}
    </div>
  )
}

export default SocialMedia