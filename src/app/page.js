"use client";
import React from 'react'
import { motion } from "framer-motion";
import About from "./components/about";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Leftsidebar from "./components/leftsidebar";
import Projects from "./components/Projects";
import Rightsidebar from "./components/rightsidebar";
import Archive from "./components/Archive";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
           <Leftsidebar />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
           <Rightsidebar />
          </motion.div>
    </main>
  )
}
