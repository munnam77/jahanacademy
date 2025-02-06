import React, { useEffect, useState, lazy } from "react";
import { Navigation } from "./components/Navigation";
import { translations } from "./i18n/translations";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe2, Clock, MessageCircle, CheckCircle2, PlaneTakeoff, ChevronRight, MapPin } from "lucide-react";
export function App() {
  const [currentLang, setCurrentLang] = useState("en");
  const t = translations[currentLang];
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  }, []);
  return <div className="w-full min-h-screen bg-white">
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <motion.img initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1
        }} src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3" alt="Fukuoka cityscape" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/japanese-pattern.png")`,
          backgroundRepeat: "repeat"
        }} />
        </div>
        <div className="relative z-10">
          <Navigation translations={t} currentLang={currentLang} onLanguageSwitch={setCurrentLang} />
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="container mx-auto px-6 pt-32">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl">
              {t.hero.subtitle}
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              {t.hero.cta}
            </motion.button>
          </motion.div>
        </div>
      </header>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Study in Fukuoka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3" alt="Modern City" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern City Life</h3>
              <p className="text-gray-600">
                Experience the perfect blend of traditional and modern Japan
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3" alt="Cultural Experience" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rich Culture</h3>
              <p className="text-gray-600">
                Immerse yourself in authentic Japanese culture
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3" alt="Cultural Experience" className="w-full h-48 object-cover rounded-lg mb-4" />
              <img src="" alt="Food Culture" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Amazing Food</h3>
              <p className="text-gray-600">
                Enjoy Fukuoka's famous culinary delights
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3" alt="Student Life" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Friendly</h3>
              <p className="text-gray-600">
                One of Japan's most affordable student cities
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">
                Intensive Japanese Course
              </h3>
              <ul className="space-y-2">
                <li>• 20 hours per week</li>
                <li>• JLPT preparation</li>
                <li>• Business Japanese</li>
                <li>• Cultural activities</li>
              </ul>
              <p className="mt-4 text-blue-600 font-semibold">¥650,000/year</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Academic Preparation</h3>
              <ul className="space-y-2">
                <li>• University preparation</li>
                <li>• Academic Japanese</li>
                <li>• Research skills</li>
                <li>• Exam preparation</li>
              </ul>
              <p className="mt-4 text-blue-600 font-semibold">¥750,000/year</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Globe2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Online Course</h3>
              <ul className="space-y-2">
                <li>• Flexible schedule</li>
                <li>• Live classes</li>
                <li>• Personal tutor</li>
                <li>• Online resources</li>
              </ul>
              <p className="mt-4 text-blue-600 font-semibold">¥450,000/year</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Step 1</h3>
                <p>Submit Application</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <MessageCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Step 2</h3>
                <p>Online Interview</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Step 3</h3>
                <p>Receive Acceptance</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <PlaneTakeoff className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Step 4</h3>
                <p>Start Your Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Student Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3" alt="Student Dormitory" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Student Dormitory</h3>
                <p className="text-gray-600 mb-4">
                  Shared facilities with other international students
                </p>
                <p className="font-semibold">¥35,000/month</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3" alt="Private Apartment" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Private Apartment</h3>
                <p className="text-gray-600 mb-4">
                  Independent living in the city center
                </p>
                <p className="font-semibold">¥55,000/month</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3" alt="Homestay" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Homestay</h3>
                <p className="text-gray-600 mb-4">
                  Live with a Japanese family
                </p>
                <p className="font-semibold">¥65,000/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3" alt="Student 1" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-gray-600">USA</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The intensive course helped me achieve N2 level in just one
                year. The teachers are amazing!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3" alt="Student 2" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-gray-600">Singapore</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Studying in Fukuoka was the best decision. The city is perfect
                for students!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" alt="Student 3" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-bold">Maria Garcia</h3>
                  <p className="text-gray-600">Spain</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The cultural activities and field trips made learning Japanese
                so much fun!"
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">
                What is the application deadline?
              </h3>
              <p className="text-gray-600">
                Applications are accepted year-round, but we recommend applying
                at least 3 months before your intended start date.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">
                Do I need to know Japanese to apply?
              </h3>
              <p className="text-gray-600">
                No, we accept complete beginners. We have courses for all levels
                from N5 to N1.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">
                Can I work part-time while studying?
              </h3>
              <p className="text-gray-600">
                Yes, students can work up to 28 hours per week with a proper
                student visa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="schools" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AIWA Language Academy</h3>
              <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="AIWA Campus" className="w-full h-48 object-cover rounded-lg mb-6" />
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Intensive Japanese Language Courses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>JLPT Preparation Programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Business Japanese Courses</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Tuition Fees:</h4>
                <p className="text-gray-600">Starting from ¥650,000/year</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                FFLC Japanese Institute
              </h3>
              <img src="https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90py1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="FFLC Campus" className="w-full h-48 object-cover rounded-lg mb-6" />
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>General Japanese Courses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Cultural Exchange Programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>University Preparation Course</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Tuition Fees:</h4>
                <p className="text-gray-600">Starting from ¥600,000/year</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Start Your Japanese Journey Today
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us for more information about our programs and admission
              process.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Fukuoka Language Academy
              </h3>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1" />
                <p>1-1-1 Tenjin, Chuo-ku, Fukuoka City, Japan</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#schools" className="hover:text-white">
                    Schools
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#fees" className="hover:text-white">
                    Tuition Fees
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@fukuoka-academy.jp</p>
              <p className="text-gray-400">Tel: +81-92-XXX-XXXX</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Moazzem Hossain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}