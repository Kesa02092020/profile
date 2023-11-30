"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const navbar = () => {
   // const [show, setShow] = useState(false);
   const handleScroll = (e) => {
    e.preventDefault();
    //setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
};

    return (
        <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
               <motion.div initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}><h1>Kasa</h1></motion.div>
                <div>
                <ul className='hidden mdl:inline-flex flex text-[13px] gap-7'>
                            <Link href="#home" className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                            onClick={handleScroll}>
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.1 }}>Home</motion.li>
                            </Link>
                            <Link href="#about" className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                             onClick={handleScroll}>
                                <motion.li  initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.2 }}><span className='text-textGreen'>01.</span>About</motion.li>
                            </Link>
                            <Link href="#experience" className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                             onClick={handleScroll}>
                                <motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.3 }}><span className='text-textGreen'>02.</span>Experience</motion.li>
                            </Link>
                            <Link href="#project" className="flex item-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                             onClick={handleScroll}>
                                <motion.li initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.4 }}><span className='text-textGreen'>03.</span>Project</motion.li>
                            </Link>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default navbar