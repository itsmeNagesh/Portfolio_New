import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mock';
import { Code2, Bot, Database, Briefcase, Headphones, Server, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Code2,
  Bot,
  Database,
  Briefcase,
  Headphones,
  Server
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Services I Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-xl p-6 hover:neon-glow-purple transition-all duration-300 card-3d group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 glass rounded-2xl p-6 sm:p-8 border border-cyan-500/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-cyan-400 font-semibold mb-2">Coursera Certification</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Google IT Support Professional Certificate
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Displayed below the services section so your Coursera certification is highlighted alongside your IT support and infrastructure offerings.
              </p>
            </div>

            <a
              href="https://drive.google.com/file/d/1uDFZ95d_v6xqf11etypEMqkCBpJmmwp7/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
            >
              View certificate
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


