import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Zap className="text-yellow-400" />, label: 'Agility', value: 'High' },
    { icon: <Shield className="text-spidey-blue" />, label: 'Resilience', value: 'Ultra' },
    { icon: <Target className="text-spidey-red" />, label: 'Precision', value: '99%' },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-spidey-red to-spidey-blue rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-spidey-black rounded-lg p-8 border border-white/10">
                <h2 className="marvel-font text-4xl text-spidey-red mb-6">ORIGIN STORY</h2>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Every developer has an origin story. Mine started with a curiosity for how things work behind the scenes.
                  Like a certain neighborhood hero, I believe that <span className="text-spidey-red font-bold underline">with great code comes great responsibility</span>.
                </p>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I specialize in spinning complex ideas into elegant, user-friendly digital webs.
                  My mission is to protect the web from bad UX and sluggish performance,
                  ensuring every user has a heroic experience.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex justify-center mb-2">{stat.icon}</div>
                      <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                      <div className="font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="p-6 border-l-4 border-spidey-red bg-spidey-red/5">
              <h3 className="marvel-font text-2xl text-white mb-2 underline decoration-spidey-red">SPIDER-SENSE ENGAGED</h3>
              <p className="text-gray-400">
                I have a knack for spotting bugs before they cause trouble. My proactive approach to development
                ensures that projects are delivered with high quality and minimal issues.
              </p>
            </div>

            <div className="p-6 border-l-4 border-spidey-blue bg-spidey-blue/5">
              <h3 className="marvel-font text-2xl text-white mb-2 underline decoration-spidey-blue">WEB-SLINGING TECH</h3>
              <p className="text-gray-400">
                Using the latest tools in the Marvel-ous world of web development, I build responsive,
                scalable applications that look great on any device.
              </p>
            </div>

            <div className="p-6 border-l-4 border-white bg-white/5">
              <h3 className="marvel-font text-2xl text-white mb-2 underline">COMMUNITY HERO</h3>
              <p className="text-gray-400">
                Open source contributor and constant learner. I believe in giving back to the community
                and helping others level up their skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-spidey-red/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spidey-blue/10 blur-[120px] -z-10" />
    </section>
  );
};

export default About;
