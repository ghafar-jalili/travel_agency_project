import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Star = ({ filled }) => (
  <svg
    className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ClientsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Adventure Seekers Co.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      testimonial: 'Jalili crafted the perfect 2-week itinerary through Afghanistan that exceeded all our expectations. Their local knowledge is unmatched!',
      rating: 5
    },
    {
      id: 5,
      name: 'khan ali',
      company: 'Seekers Co.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      testimonial: 'Jalili crafted the perfect 2-week itinerary through Afghanistan that exceeded all our expectations. Their local knowledge is unmatched!',
      rating: 1
    },
    {
      id: 6,
      name: 'jhoson an',
      company: 'Adventur Co.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      testimonial: 'Jalili crafted the perfect 2-week itinerary through Afghanistan that exceeded all our expectations. Their local knowledge is unmatched!',
      rating: 4
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Nomads LLC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      testimonial: "The cultural immersion experiences arranged by Jalili gave our team insights we couldn't have discovered on our own.",
      rating: 4
    },
    {
      id: 3,
      name: 'Amina Al-Farsi',
      company: 'Desert Rose Travel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      testimonial: 'Professional service from start to finish. Our clients consistently praise the seamless logistics handled by Jalili.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Müller',
      company: 'Alpine Expeditions',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      testimonial: "Their mountain guides are the best in the region. We've partnered with Jalili for 3 years and counting.",
      rating: 5
    }
  ];
  const logoGrid = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' // ← Working Netflix
  ];



  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % clients.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: 'beforeChildren' }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const testimonialVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-6 mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-semibold tracking-wider text-indigo-600 uppercase"
          >
            Trusted Partnerships
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Our Valued Clients
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mt-4 text-lg text-gray-600"
          >
            Join hundreds of satisfied travelers and organizations who trust our expertise.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            {logoGrid.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-24 p-4 bg-white shadow rounded-xl"
              >
                <img src={logo} alt={`Client ${index + 1}`} className="object-contain h-12" />
              </motion.div>
            ))}
          </motion.div>

          <div className="relative h-full min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={testimonialVariants}
                className="absolute inset-0 flex flex-col p-8 bg-white shadow-xl rounded-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="flex items-center mb-6">
                  <img src={clients[activeTestimonial].logo} alt={clients[activeTestimonial].company} className="w-auto h-12" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{clients[activeTestimonial].name}</h3>
                    <p className="text-gray-600">{clients[activeTestimonial].company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < clients[activeTestimonial].rating} />
                  ))}
                </div>
                <blockquote className="flex-grow mb-6 text-lg text-gray-700">
                  "{clients[activeTestimonial].testimonial}"
                </blockquote>
                <div className="flex justify-center mt-auto space-x-2">
                  {clients.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 5000);
                      }}
                      className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-indigo-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {["100% Satisfaction Guarantee", "5-Star Rated Experiences", "Local Expert Guides"].map((text, i) => (
            <div key={i} className="flex items-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-2 text-gray-700">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
