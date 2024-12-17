import React from 'react';
import { motion } from "motion/react";
import teamOne from '../../assets/team/team-2.jpg'
import teamTwo from '../../assets/team/team-1 (1).jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    < motion.img
                        src={teamOne}
                        animate={{y: [50, 100,50] }}
                        transition={{duration: 10, repeat: Infinity }}
                        className="max-w-sm w-56 -mt-40  rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl" />
                    < motion.img
                        src={teamTwo}
                        animate={{x: [50, 150,50] }}
                        transition={{duration: 10, delay:3, repeat: Infinity }}
                        className="max-w-sm w-48   rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 100, 0]}}
                        transition={{duration: 10,  repeat: Infinity}}
                        className="text-5xl font-bold">Lates
                         <motion.span  > Jobs </motion.span> For You!</motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;