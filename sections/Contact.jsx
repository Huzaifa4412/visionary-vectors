'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const Contact = () => (
  <section id='contact' className={`${styles.paddings} relative z-10`}>
    <div className="absolute w-[300px] h-[300px] bg-[#a509ff] right-[10%] top-[20%] blur-[150px] opacity-30 z-0 pointer-events-none" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-10 lg:gap-20`}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-1 flex flex-col justify-center">
        <TypingText title="| Get in Touch" />
        <TitleText title="Let's build something amazing together." />
        <p className="mt-[20px] font-normal sm:text-[18px] text-[16px] text-secondary-white max-w-lg leading-relaxed">
          Whether you have a question, a project in mind, or just want to say hi, our team is ready to help you accelerate your digital transformation.
        </p>
        
        <div className="mt-[40px] flex flex-col gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 bg-[#141b25] border-[1px] border-[#233142] p-4 rounded-2xl cursor-pointer shadow-lg hover:border-[#34acc7] transition-all">
            <div className="w-[50px] h-[50px] rounded-full bg-[#1a232f] flex justify-center items-center">
              <Mail size={24} color="#34acc7" />
            </div>
            <div>
              <h4 className="text-white font-bold text-[18px]">Email Us</h4>
              <p className="text-secondary-white text-[14px]">hello@visionaryvectors.com</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 bg-[#141b25] border-[1px] border-[#233142] p-4 rounded-2xl cursor-pointer shadow-lg hover:border-[#a134c7] transition-all">
            <div className="w-[50px] h-[50px] rounded-full bg-[#1a232f] flex justify-center items-center">
              <MapPin size={24} color="#a134c7" />
            </div>
            <div>
              <h4 className="text-white font-bold text-[18px]">Global Headquarters</h4>
              <p className="text-secondary-white text-[14px]">San Francisco, CA & Remote Worldwide</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
        
      <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className="flex-1 flex flex-col justify-center">
        <div className="bg-[#101720] border-[1px] border-[#1d2735] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 sm:p-10 rounded-[32px] w-full flex flex-col gap-6 relative overflow-hidden">
                
          <h3 className="text-white text-[24px] font-bold">Send a Message</h3>
                
          <div className="flex sm:flex-row flex-col gap-6">
            <motion.div className="w-full flex flex-col gap-2">
              <label className="text-secondary-white text-[12px] uppercase tracking-wider font-semibold">Your Name</label>
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-[#161f2b] border-[1px] border-[#233142] rounded-[12px] p-4 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[#34acc7] transition-all duration-300 placeholder:text-[#4d5c70]"
              />
            </motion.div>
                  
            <motion.div className="w-full flex flex-col gap-2">
              <label className="text-secondary-white text-[12px] uppercase tracking-wider font-semibold">Your Email</label>
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="john@company.com" 
                className="w-full bg-[#161f2b] border-[1px] border-[#233142] rounded-[12px] p-4 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[#34acc7] transition-all duration-300 placeholder:text-[#4d5c70]"
              />
            </motion.div>
          </div>
                
          <motion.div className="w-full flex flex-col gap-2">
            <label className="text-secondary-white text-[12px] uppercase tracking-wider font-semibold">Project Details</label>
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              placeholder="Tell us about the challenges you're facing and the goals you want to achieve..." 
              rows="4"
              className="w-full bg-[#161f2b] border-[1px] border-[#233142] rounded-[12px] p-4 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[#34acc7] transition-all duration-300 resize-none placeholder:text-[#4d5c70]"
            />
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(52,172,199,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex items-center justify-center w-full h-fit py-4 px-8 bg-gradient-to-r from-[#25618B] to-[#34acc7] rounded-[32px] text-white font-bold text-[16px] transition-all"
          >
            Start the Conversation
          </motion.button>
                
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
