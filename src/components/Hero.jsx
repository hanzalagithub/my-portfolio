import { motion } from "motion/react"
import  Typing from './Typing'
function Hero() {
    const text2 = Typing('Software Engineer')
    const text3 = Typing("Full-Stack and Mern-Stack Developer")
    return (
     <div className="text-center hero flex flex-col justify-center items-center w-[100%] h-[100vh] gap-4 px-4 sm:mt-12 mt-6" id="home">
         <motion.div className="my-8" initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1, type: "spring", stiffness: 100}}>
            <img src="/img/meee.jpg" alt="me" className=" h-[200px] w-[200px] sm:h-[150px] sm:w-[150px] rounded-full  object-cover text-center mx-auto"/>
            
        </motion.div>

        <div className="mx-auto md:text-left">
            <motion.p initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.4}} className="md:text-xl text-center">I'm Ahmed Hanzala</motion.p>
            <h1 className="font-bold text-4xl md:text-7xl mt-5 text-center">{text2}</h1>
            <h1 className="font-bold text-lg md:text-2xl mb-10 mt-5 text-center">{text3}</h1>
                <div className="space-y-1 flex gap-5 justify-center">
                    <motion.a initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration: 1, delay: 0.5}} href="/img/Resume-FS-web-dev.pdf" download className="bg-black text-white py-3 md:px-12 px-5 rounded-2xl text-sm ">My Resume</motion.a>
                <div className="space-y-1 border border-black py-2 sm:px-8 px-4 rounded-2xl">
                <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.8, delay: 0.8}} href="whatsapp://send?phone=+923471297032">Hire Me</motion.a>
            </div>
            </div>
        </div>
     </div>
    );
}

export default Hero;