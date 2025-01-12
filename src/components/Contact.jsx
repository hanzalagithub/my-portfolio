import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { motion } from 'motion/react';
function Contact(){
    return(
        <div className="px-4 md:py-24 py-20 text-center md:mt-0" id="contact">
            <div className="max-w-3xl mx-auto">
            <motion.h1  initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-10 font-semibold">Contact Me</motion.h1>
           <div className="flex justify-center items-center gap-10">
            <a href="https://github.com/hanzalagithub?tab=repositories" target='_blank' className="font-bold md:text-4xl text-2xl">
                <FaGithub/>
            </a>
             <a href="https://www.linkedin.com/in/ahmed-hanzala-4324a326b/" target='_blank' className="font-bold md:text-4xl text-2xl">
                <FaLinkedin/>
            </a>
           </div>
            </div>
            <a href="#home" className="fixed bottom-24 right-5 z-10 bg-slate-800 text-white w-12 h-12 text-xl flex justify-center items-center border-2 font-bold rounded-full">&uarr;</a>
        </div>
    );
}

export default Contact