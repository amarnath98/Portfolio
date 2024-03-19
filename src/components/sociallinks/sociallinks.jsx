import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import './sociallinks.css'

export const SocialLinks = () => {
    
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/amarnath-pamidi/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/amarnath98/',
        },
        {
            id: 3,
            child: (
                <>
                    Mail 
                </>
            ),
            href: 'mailto:amarnath.pamidi@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/assets/files/AmarnathPamidi_Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];
    
    return (
    // <div className='hidden lg-flex flex-col top-35 left-0 fixed'>
    <div className="social-container">
       <ul>
            {links.map(({id, child, href, style, download}) => (
                <li 
                key={id} 
                className={`flex items-center justify-between w-40 px-4 h-14 ml-negative-100 bg-gray-500 ml-negative-10 rounded-md duration-300 ${style}`}>
                    <a 
                    href={href} 
                    className='flex items-center justify-between w-full text-white' 
                    download={download} 
                    target='_blank'
                    rel='noreferrer'>
                        {child}
                    </a>
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default SocialLinks;