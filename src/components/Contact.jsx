import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-spidey-red rounded-3xl overflow-hidden shadow-2xl shadow-spidey-red/20 flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="w-full md:w-2/5 p-8 md:p-12 bg-spidey-darkBlue text-white">
            <h2 className="marvel-font text-5xl mb-6">SIGNAL <br/><span className="text-spidey-red">ME!</span></h2>
            <p className="text-spidey-blue-100 mb-12 opacity-80">
              Need a hand with a project? Or just want to talk about the latest MCU theories? Drop me a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-spidey-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                  <p className="font-medium">spidey.dev@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-spidey-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Phone</p>
                  <p className="font-medium">+1 (555) SPIDEY-0</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-spidey-red rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Base of Ops</p>
                  <p className="font-medium">Queens, New York</p>
                </div>
              </div>
            </div>

            {/* Comic Dot Pattern Decoration */}
            <div className="mt-12 opacity-20 hidden md:block">
               <svg width="100" height="100" viewBox="0 0 100 100">
                 <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" fill="white" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black marvel-font text-xl mb-2">IDENTITY</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-spidey-red focus:bg-white text-black rounded-lg transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-black marvel-font text-xl mb-2">COMM CHANNEL</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-spidey-red focus:bg-white text-black rounded-lg transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black marvel-font text-xl mb-2">THE MISSION</label>
                <textarea
                  rows="4"
                  placeholder="How can I help you today?"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-spidey-red focus:bg-white text-black rounded-lg transition-all outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-spidey-red hover:bg-spidey-darkBlue text-white marvel-font text-2xl py-4 rounded-lg shadow-xl transition-colors flex items-center justify-center gap-3"
              >
                FIRE SIGNAL <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
