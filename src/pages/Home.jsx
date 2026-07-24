// pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';

// -------- IMAGES (keep your existing imports) --------
import HeroImg from "../assets/images/H-home1.png";
import Hero1Img from "../assets/images/H-fservice1.jpg";
import Hero2Img from "../assets/images/H-fservice2.jpg";
import Hero3Img from "../assets/images/H-fservice-3.jpg";
import Hero4Img from "../assets/images/H-fservice4.jpg";
import Hero5Img from "../assets/images/H-blog-1.jpg";
import Hero6Img from "../assets/images/H-blog-2.jpg";
import Hero7Img from "../assets/images/H-blog-3.jpg";
import Hero8Img from "../assets/images/H-project1.jpg";
import Hero9Img from "../assets/images/H-project2.jpg";
import Hero10Img from "../assets/images/H-project3.jpg";
import Hero11Img from "../assets/images/H-project4.jpg";
import Hero12Img from "../assets/images/H-project5.jpg";
import Hero13Img from "../assets/images/H-project6.jpg";

// -------- CUSTOM HOOK: Intersection Observer for scroll animations (faster) --------
const useScrollReveal = (threshold = 0.1, delay = 0) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
};

// -------- CUSTOM HOOK: Counter animation (faster) --------
const useCounter = (targetValue, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = Math.max(1, Math.floor(targetValue / (duration / 16)));
          const timer = setInterval(() => {
            start += step;
            if (start >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetValue, duration]);

  return { count, ref };
};

const Home = () => {
  // -------- STATS DATA --------
  const stats = [
    { label: "Trusted Clients", value: 1240, suffix: "+", icon: "fa-users" },
    { label: "Finished Projects", value: 850, suffix: "+", icon: "fa-check-circle" },
    { label: "Years of Excellence", value: 12, suffix: "", icon: "fa-star" },
    { label: "Awards Won", value: 45, suffix: "+", icon: "fa-trophy" },
  ];

  // -------- FAQ DATA --------
  const faqs = [
    {
      q: "What types of loans do you offer?",
      a: "We provide Personal, Gold, Consumer, Home, Car, and Property loans with flexible terms and competitive rates starting from 7.5% p.a.",
    },
    {
      q: "How can I apply for a loan?",
      a: "Apply online through our website, visit any branch, or call our helpline. Our team guides you through the entire process.",
    },
    {
      q: "What are the interest rates for fixed deposits?",
      a: "Our fixed deposit rates are among the best in the industry, starting from 7.5% p.a. for senior citizens and 7% for others.",
    },
    {
      q: "Is Soulful Nidhi a registered Nidhi company?",
      a: "Yes, we are a fully compliant Nidhi company registered under the Companies Act, 2013 with ROC Gwalior.",
    },
  ];

  // -------- TESTIMONIALS --------
  const testimonials = [
    {
      name: "Pankaj Sharma",
      role: "Business Owner",
      text: "I would like to express my gratitude to you and your staff for their assistance in getting my loan approved. I earnestly value the work of your group.",
      avatar: "PS",
      rating: 5,
    },
    {
      name: "Sunmit Gandhi",
      role: "Entrepreneur",
      text: "Incredible administration with respect to banking and great arrangement given for financial administration. Highly recommend!",
      avatar: "SG",
      rating: 5,
    },
    {
      name: "Harsh Mehta",
      role: "Freelancer",
      text: "I am using a saving account from Soulful Nidhi Limited, which offers excellent customer service, quick service, and an excellent interest rate.",
      avatar: "HM",
      rating: 4,
    },
  ];

  // -------- COUNTER HOOKS --------
  const counters = stats.map((s) => ({
    ...s,
    ...useCounter(s.value, 1500),
  }));

  // -------- STATE --------
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // -------- AUTO ROTATE TESTIMONIALS (faster) --------
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // -------- SCROLL REVEAL HOOKS (faster, no delay) --------
  const heroReveal = useScrollReveal(0.1, 0);
  const loansReveal = useScrollReveal(0.1, 100);
  const schemesReveal = useScrollReveal(0.1, 100);
  const whyReveal = useScrollReveal(0.1, 100);
  const processReveal = useScrollReveal(0.1, 100);
  const skillsReveal = useScrollReveal(0.1, 100);
  const statsReveal = useScrollReveal(0.1, 100);
  const servicesReveal = useScrollReveal(0.1, 100);
  const boardReveal = useScrollReveal(0.1, 100);
  const testimonialReveal = useScrollReveal(0.1, 100);
  const blogReveal = useScrollReveal(0.1, 100);
  const faqReveal = useScrollReveal(0.1, 100);
  const ctaReveal = useScrollReveal(0.1, 100);
  const partnersReveal = useScrollReveal(0.1, 100);
  const awardsReveal = useScrollReveal(0.1, 100);
  const newsletterReveal = useScrollReveal(0.1, 100);

  // -------- PARTNER LOGOS (dummy) --------
  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"];

  // -------- AWARDS --------
  const awards = [
    { title: "Best Nidhi Company 2024", org: "Financial Times" },
    { title: "Excellence in Customer Service", org: "Banking Awards" },
    { title: "Fastest Growing NBFC", org: "Economic Times" },
  ];

  // -------- RENDER --------
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e1a16] font-sans antialiased overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO + ABOUT (with particles)                             */}
      {/* ============================================================ */}
      <section 
        ref={heroReveal.ref}
        className={`relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-500 ease-out ${
          heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#b4943c]/10 animate-float"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
              }}
            />
          ))}
        </div>
        <div className="space-y-6 relative z-10">
          <div className="inline-block bg-[#f5efe6] text-[#7a5c2e] text-xs font-semibold tracking-wider px-4 py-1.5 rounded-full animate-pulse">
            <i className="fas fa-building mr-2"></i> Incorporated June 2023
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-[#b4943c] relative">
              Soulful Nidhi
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#b4943c]/30 rounded-full"></span>
            </span> Limited
          </h1>
          <p className="text-[#4d4033] text-lg leading-relaxed max-w-xl">
            A Limited Liability Company focused on encouraging banking habits, offering
            saving accounts, loans, and fixed deposit facilities with exciting rates
            &amp; flexible terms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#b4943c] hover:bg-[#9e7d2f] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore More
            </a>
            <a
              href="#"
              className="border border-[#d4c5b2] hover:border-[#b4943c] hover:bg-[#b4943c]/5 px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Free Consultation
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#5e4d32]">
            <span className="flex items-center"><i className="fas fa-check-circle text-[#b4943c] mr-2"></i> NIDHI compliant</span>
            <span className="flex items-center"><i className="fas fa-check-circle text-[#b4943c] mr-2"></i> MP registered</span>
          </div>
        </div>
        <div className="relative z-10 group">
          <div className="absolute -inset-4 bg-[#b4943c]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <img
            src={HeroImg}
            alt="Soulful Nidhi - Trusted Banking"
            className="relative w-full h-full object-cover aspect-[4/3] rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
          <span className="absolute bottom-4 right-6 text-xs bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
            G27 prestige tower, Indore
          </span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. LOANS SECTION                                             */}
      {/* ============================================================ */}
      <section 
        ref={loansReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          loansReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Our <span className="text-[#b4943c] relative">
            Loans
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <a href="#" className="text-sm font-medium text-[#b4943c] hover:underline flex items-center gap-1 transition-all hover:gap-2">
            View all <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: Hero8Img, title: "Personal Loans", desc: "Quick approval, minimal paperwork. No need to put your needs into shelves.", icon: "fa-user" },
            { img: Hero9Img, title: "Gold Loans", desc: "Get instant funds against your gold. Pump your business growth and development.", icon: "fa-gem" },
            { img: Hero10Img, title: "Consumer Loans", desc: "On Diamond, Gold, Electronics, Furnitures – flexible EMI options.", icon: "fa-shopping-cart" },
            { img: Hero11Img, title: "Home Loans", desc: "High-impact funding for your dream home. Few industries are as demanding as transportation.", icon: "fa-home" },
            { img: Hero12Img, title: "Car Loan", desc: "Drive your dream car today. Deep experience across oil & gas and utilities sectors.", icon: "fa-car" },
            { img: Hero13Img, title: "Property Loan", desc: "Unlock the value of your property. Leading consulting partner to the private equity industry.", icon: "fa-building" },
          ].map((loan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-soft border border-[#ece5db] overflow-hidden hover-lift group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={loan.img}
                  alt={loan.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#b4943c] shadow-md">
                  <i className={`fas ${loan.icon}`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#b4943c] group-hover:text-[#9e7d2f] transition-colors">{loan.title}</h3>
                <p className="text-sm text-[#5e4d32] mt-2 leading-relaxed">{loan.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-sm font-medium text-[#b4943c] hover:text-[#9e7d2f] transition-colors group-hover:gap-2 gap-1"
                >
                  Learn More <i className="fas fa-arrow-right transition-all"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DEPOSIT SCHEMES                                            */}
      {/* ============================================================ */}
      <section 
        ref={schemesReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          schemesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">OUR <span className="text-[#b4943c] relative">
            SCHEMES
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <a href="#" className="text-sm font-medium text-[#b4943c] hover:underline flex items-center gap-1 transition-all hover:gap-2">
            View all <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: Hero1Img, title: "Saving Account", desc: "Save more with higher rates of interest.", icon: "fa-piggy-bank" },
            { img: Hero2Img, title: "Fixed Deposit", desc: "Keep a secure account to earn good returns.", icon: "fa-coins" },
            { img: Hero3Img, title: "Recurring Deposit", desc: "Experience the power of compounding.", icon: "fa-chart-line" },
            { img: Hero4Img, title: "Daily Deposit", desc: "All deposits into the Account should be made either in cash.", icon: "fa-calendar-day" },
          ].map((scheme, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
                <img
                  src={scheme.img}
                  alt={scheme.title}
                  className="w-full h-[70%] object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#b4943c] text-xs shadow">
                  <i className={`fas ${scheme.icon}`}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold">{scheme.title}</h3>
              <p className="text-sm text-[#5e4d32] mt-2">{scheme.desc}</p>
              <a
                href="#"
                className="inline-block mt-4 text-sm font-medium text-[#b4943c] hover:text-[#9e7d2f] transition-colors"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHY CHOOSE US (with animated icons)                       */}
      {/* ============================================================ */}
      <section 
        ref={whyReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          whyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose <span className="text-[#b4943c] relative">
            Soulful Nidhi
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <p className="text-[#5e4d32] max-w-2xl mx-auto mt-4">
            We combine tradition with technology to deliver transparent, customer‑first banking experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "fa-shield-alt", title: "100% Secure", desc: "Your money is safe with our robust security protocols and encryption." },
            { icon: "fa-hand-holding-usd", title: "Lowest Rates", desc: "We offer the most competitive interest rates in the market, period." },
            { icon: "fa-clock", title: "Quick Approval", desc: "Get your loan approved within 24 hours with minimal documentation." },
            { icon: "fa-users", title: "Customer First", desc: "Our dedicated team is always ready to assist you 24/7." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] text-center hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#b4943c] text-2xl mx-auto mb-4 group-hover:bg-[#b4943c] group-hover:text-white transition-all duration-300">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-[#5e4d32] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OUR PROCESS (with animated steps)                         */}
      {/* ============================================================ */}
      <section 
        ref={processReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          processReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our <span className="text-[#b4943c] relative">
            Process
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <p className="text-[#5e4d32] mt-2">Simple steps to get your loan approved</p>
        </div>
        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-[#b4943c]/20 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Apply Online", desc: "Fill in your details and upload documents in minutes.", icon: "fa-file-alt" },
              { step: "02", title: "Get Verified", desc: "Our team verifies your information quickly and securely.", icon: "fa-check-double" },
              { step: "03", title: "Approval", desc: "Receive instant approval with the best rates available.", icon: "fa-thumbs-up" },
              { step: "04", title: "Disbursement", desc: "Funds are credited to your account within 24 hours.", icon: "fa-hand-holding-usd" },
            ].map((p, idx) => (
              <div key={idx} className="text-center relative group">
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#b4943c] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  {p.step}
                  <div className="absolute -inset-2 bg-[#b4943c]/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#b4943c] text-lg mx-auto -mt-12 mb-2 relative z-20">
                  <i className={`fas ${p.icon}`}></i>
                </div>
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="text-sm text-[#5e4d32] mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SKILLS + LOAN CALLOUT (enhanced)                          */}
      {/* ============================================================ */}
      <section 
        ref={skillsReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-500 ease-out ${
          skillsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-white rounded-3xl p-8 shadow-soft border border-[#ece5db] hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-6">Our <span className="text-[#b4943c]">Skills</span></h3>
          <div className="space-y-5">
            {[
              { label: "Management", value: 88, color: "bg-[#b4943c]" },
              { label: "CRM", value: 68, color: "bg-blue-500" },
              { label: "Marketing", value: 78, color: "bg-green-500" },
              { label: "SEO", value: 52, color: "bg-purple-500" },
            ].map((skill, idx) => (
              <div key={skill.label} className="group">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.label}</span>
                  <span className="text-[#b4943c]">{skill.value}%</span>
                </div>
                <div className="w-full bg-[#ece5db] rounded-full h-3 mt-1 overflow-hidden">
                  <div
                    className={`${skill.color} h-full rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-6 border-[#e7dfd4]" />
          <div className="text-center">
            <span className="text-sm font-semibold text-[#b4943c] uppercase tracking-wider">Our benefits</span>
            <h4 className="text-2xl font-bold mt-2">The Best Way Loan To Start Your Business Right Now</h4>
            <a
              href="#"
              className="inline-block mt-4 bg-[#b4943c] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#9e7d2f] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get started
            </a>
          </div>
        </div>
        {/* Consumer Loans + Testimonials */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#1e1a16] to-[#2d251e] text-white rounded-3xl p-8 shadow-soft hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold">Consumer Loans</h3>
            <p className="text-sm opacity-80 mt-1">On Diamond, Gold, Electronics, Furniture</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Free consultation</span>
              <a
                href="#"
                className="bg-[#b4943c] hover:bg-[#9e7d2f] px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Call now
              </a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-[#ece5db] hover:shadow-2xl transition-shadow duration-300">
            <h4 className="font-bold text-lg">Clients Feedback</h4>
            <div className="mt-4 space-y-4 text-sm text-[#4d4033]">
              {testimonials.slice(0, 2).map((t, idx) => (
                <div key={idx} className="p-4 bg-[#f5efe6] rounded-xl hover:bg-[#ece5db] transition-colors">
                  <p><span className="font-semibold">{t.name}</span> — “{t.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. STATS / COUNTERS (with animated numbers)                  */}
      {/* ============================================================ */}
      <section 
        ref={statsReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((stat, idx) => (
            <div
              key={idx}
              ref={stat.ref}
              className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] text-center hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#b4943c] text-xl mx-auto mb-3 group-hover:bg-[#b4943c] group-hover:text-white transition-all duration-300">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="text-4xl font-bold text-[#b4943c]">
                {stat.count}
                {stat.suffix}
              </div>
              <div className="text-sm text-[#5e4d32] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SERVICES / CONSULTING (with images)                       */}
      {/* ============================================================ */}
      <section 
        ref={servicesReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          servicesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Our <span className="text-[#b4943c] relative">
            Services
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <a href="#" className="text-sm font-medium text-[#b4943c] hover:underline flex items-center gap-1 transition-all hover:gap-2">
            View all <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: Hero8Img, title: "Business Consultation", tag: "/ business / finance", desc: "Expert guidance to grow your business with strategic financial planning." },
            { img: Hero9Img, title: "Finance Strategy", tag: "/ finance / marketing", desc: "Strategic financial planning to maximize growth and minimize risks." },
            { img: Hero10Img, title: "Digital Marketing", tag: "/ finance / marketing", desc: "Innovative digital strategies to boost your online presence and engagement." },
            { img: Hero11Img, title: "Enterprise Loan", tag: "/ business / marketing", desc: "Flexible loan solutions for businesses to fuel growth and expansion." },
            { img: Hero12Img, title: "Fund Management", tag: "/ finance / startup", desc: "Professional fund management services for startups and established businesses." },
            { img: Hero13Img, title: "Insurance Finance", tag: "/ finance / startup", desc: "Comprehensive insurance finance solutions to protect your assets and future." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-soft border border-[#ece5db] overflow-hidden hover-lift group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-xs text-[#b4943c] mt-1">{service.tag}</p>
                <p className="text-sm text-[#5e4d32] mt-2">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-sm font-medium text-[#b4943c] hover:text-[#9e7d2f] transition-colors group-hover:gap-2 gap-1"
                >
                  Learn More <i className="fas fa-arrow-right transition-all"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. BOARD OF DIRECTORS (with styled cards)                    */}
      {/* ============================================================ */}
      <section 
        ref={boardReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          boardReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          Board of <span className="text-[#b4943c]">Directors</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b4943c]/40 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { initials: "OJ", name: "Onila Jain", role: "Director", bg: "bg-[#f5efe6]" },
            { initials: "SK", name: "Sharad Kumar Porwal", role: "Director", bg: "bg-[#ece5db]" },
            { initials: "AP", name: "Arti Porwal", role: "Director", bg: "bg-[#f5efe6]" },
          ].map((dir, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] text-center hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative w-24 h-24 rounded-full mx-auto mb-4">
                <div className={`w-full h-full rounded-full ${dir.bg} flex items-center justify-center text-3xl font-bold text-[#b4943c]`}>
                  {dir.initials}
                </div>
                <div className="absolute -inset-1 rounded-full border-2 border-[#b4943c]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-semibold text-lg">{dir.name}</h3>
              <span className="text-sm text-[#5e4d32]">{dir.role}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-[#5e4d32]">From worldwide clients</div>
      </section>

      {/* ============================================================ */}
      {/* 10. TESTIMONIALS CAROUSEL (auto-rotating)                    */}
      {/* ============================================================ */}
      <section 
        ref={testimonialReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our <span className="text-[#b4943c] relative">
            Clients Say
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
        </div>
        <div className="relative bg-white rounded-3xl p-8 shadow-soft border border-[#ece5db] max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-300">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f5efe6] flex items-center justify-center text-2xl font-bold text-[#b4943c] mx-auto mb-4">
                    {t.avatar}
                  </div>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < t.rating ? 'text-[#b4943c]' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <div className="text-4xl text-[#b4943c] mb-4">“</div>
                  <p className="text-lg text-[#4d4033] leading-relaxed">{t.text}</p>
                  <div className="mt-6">
                    <div className="font-bold text-[#1e1a16]">{t.name}</div>
                    <div className="text-sm text-[#5e4d32]">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeTestimonial === idx
                    ? "bg-[#b4943c] w-10 h-3"
                    : "bg-[#d4c5b2] w-3 h-3 hover:bg-[#b4943c]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. LATEST INSIGHTS / BLOG (with images)                     */}
      {/* ============================================================ */}
      <section 
        ref={blogReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          blogReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Read our latest <span className="text-[#b4943c] relative">
            insights
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
          <a href="#" className="text-sm font-medium text-[#b4943c] hover:underline flex items-center gap-1 transition-all hover:gap-2">
            View all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: Hero5Img, cat: "Business", title: "Hello world!", date: "July 7, 2023 / admin / 10 Comments" },
            { img: Hero6Img, cat: "Business marketing", title: "Contactless Payments' Time Has Come", date: "September 4, 2020 / admin / 4 Comments" },
            { img: Hero7Img, cat: "Business", title: "The Future of Retail: Asia's Ecosystems", date: "February 24, 2023 / admin / 1 Comment" },
          ].map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-soft border border-[#ece5db] overflow-hidden hover-lift group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs bg-[#f5efe6] px-3 py-1 rounded-full">{post.cat}</span>
                <h4 className="font-bold text-lg mt-2 hover:text-[#b4943c] transition-colors cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-sm text-[#5e4d32] mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Categories & Tags */}
        {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover:shadow-xl transition-shadow">
            <span className="font-semibold">Categories</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {["BLOG (45)", "BUSINESS (4)", "CONSULTING (1)", "FINANCE (1)", "MARKETING (2)"].map((cat) => (
                <span key={cat} className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs hover:bg-[#b4943c] hover:text-white transition-all cursor-default">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover:shadow-xl transition-shadow">
            <span className="font-semibold">Tags</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {["#ANALYSIS", "#TRANSPARENT", "#BUSINESS", "#CONSULTING", "#FINANCE", "#MARKETING", "#STRATEGY"].map((tag) => (
                <span key={tag} className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs hover:bg-[#b4943c] hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      {/* ============================================================ */}
      {/* 12. FAQ (accordion with smooth animations)                    */}
      {/* ============================================================ */}
      <section 
        ref={faqReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          faqReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked <span className="text-[#b4943c] relative">
            Questions
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#b4943c]/40 rounded-full"></span>
          </span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-soft border border-[#ece5db] overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-xl border-[#b4943c]/30' : ''
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-[#1e1a16] hover:bg-[#f5efe6] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} text-[#b4943c]`}></i>
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[#5e4d32] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. AWARDS & RECOGNITION (new)                               */}
      {/* ============================================================ */}
      <section 
        ref={awardsReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          awardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Awards & <span className="text-[#b4943c]">Recognition</span></h2>
          <p className="text-[#5e4d32] mt-2">Our commitment to excellence has been recognized globally</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] text-center hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#b4943c] text-3xl mx-auto mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-lg font-bold">{award.title}</h3>
              <p className="text-sm text-[#5e4d32] mt-1">{award.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. OUR PARTNERS (new)                                       */}
      {/* ============================================================ */}
      <section 
        ref={partnersReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          partnersReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Trusted <span className="text-[#b4943c]">Partners</span></h2>
          <p className="text-[#5e4d32] mt-2">We collaborate with the best in the industry</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white px-6 py-4 rounded-xl shadow-soft border border-[#ece5db] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <span className="text-sm font-semibold text-[#5e4d32]">{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. CALL TO ACTION (with gradient background)                */}
      {/* ============================================================ */}
      <section 
        ref={ctaReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative bg-gradient-to-r from-[#1e1a16] to-[#2d251e] text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b4943c]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#b4943c]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-xs uppercase tracking-widest opacity-60">MAXBIZZ</div>
            <h3 className="text-3xl font-bold mt-1">Need a First-Class Finance Firm?</h3>
            <p className="text-sm opacity-70 mt-1">Get expert financial solutions tailored to your needs</p>
          </div>
          <a
            href="#"
            className="relative z-10 bg-[#b4943c] hover:bg-[#9e7d2f] px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            Get in touch <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. TRUST BADGES (new)                                       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center gap-2 text-sm text-[#5e4d32]">
            <i className="fas fa-shield-alt text-[#b4943c]"></i> RBI Compliant
          </div>
          <div className="flex items-center gap-2 text-sm text-[#5e4d32]">
            <i className="fas fa-lock text-[#b4943c]"></i> 256-bit SSL
          </div>
          <div className="flex items-center gap-2 text-sm text-[#5e4d32]">
            <i className="fas fa-award text-[#b4943c]"></i> ISO Certified
          </div>
          <div className="flex items-center gap-2 text-sm text-[#5e4d32]">
            <i className="fas fa-handshake text-[#b4943c]"></i> 100% Trustworthy
          </div>
          <div className="flex items-center gap-2 text-sm text-[#5e4d32]">
            <i className="fas fa-clock text-[#b4943c]"></i> 24/7 Support
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 17. NEWSLETTER (new)                                         */}
      {/* ============================================================ */}
      <section 
        ref={newsletterReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          newsletterReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-white rounded-3xl p-8 shadow-soft border border-[#ece5db] max-w-2xl mx-auto text-center hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold">Stay <span className="text-[#b4943c]">Updated</span></h3>
          <p className="text-sm text-[#5e4d32] mt-2">Subscribe to our newsletter for the latest offers and updates</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-[#ece5db] focus:outline-none focus:border-[#b4943c] focus:ring-2 focus:ring-[#b4943c]/20 transition-all"
            />
            <button className="bg-[#b4943c] hover:bg-[#9e7d2f] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg whitespace-nowrap">
              Subscribe <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* CSS for floating particles animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.6; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .shadow-soft {
          box-shadow: 0 8px 32px -8px rgba(0,0,0,0.06);
        }
        .hover-lift {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px -16px rgba(0,0,0,0.12);
        }
      `}</style>
    </div>
  );
};

export default Home;