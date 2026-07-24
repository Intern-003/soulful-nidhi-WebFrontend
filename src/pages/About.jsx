// pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';

// -------- IMAGES (import your assets) --------
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

// -------- CUSTOM HOOK: Scroll Reveal (fast) --------
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

// -------- CUSTOM HOOK: Counter --------
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

const About = () => {
  // -------- STATS DATA --------
  const stats = [
    { label: "Trusted Clients", value: 1240, suffix: "+", icon: "fa-users" },
    { label: "Finished Projects", value: 850, suffix: "+", icon: "fa-check-circle" },
    { label: "Years of Experience", value: 12, suffix: "", icon: "fa-star" },
    { label: "Visited Conferences", value: 45, suffix: "+", icon: "fa-trophy" },
  ];

  // -------- COUNTER HOOKS --------
  const counters = stats.map((s) => ({
    ...s,
    ...useCounter(s.value, 1500),
  }));

  // -------- RECENT POSTS DATA --------
  const recentPosts = [
    "The Ethics Edge: How Choosing Soulful Nidhi Bank, a Transparent Banking Partner, Can Transform Your Life",
    "The Future of Gold Loans: Speed, Security & Simplicity with Soulful Nidhi Limited",
    "Next-Gen Banking: How Soulful Nidhi Bank is Merging Technology with Humanity?",
    "The Secret Behind Stress-Free Loans: Soulful Nidhi Bank's Customer-First Approach",
    "The Role of Trust in Modern Banking: Lessons from Soulful Nidhi Bank",
  ];

  // -------- RECENT COMMENTS --------
  const recentComments = [
    { name: "konsultaci_tsmr", post: "The Future of Retail: Asia's Ecosystems" },
    { name: "advokat_jaKi", post: "The Future of Retail: Asia's Ecosystems" },
    { name: "Svadebnyy_bqEt", post: "The Future of Retail: Asia's Ecosystems" },
    { name: "Piony_uoSi", post: "The Future of Retail: Asia's Ecosystems" },
    { name: "advokat_kfKi", post: "The Future of Retail: Asia's Ecosystems" },
  ];

  // -------- CATEGORIES --------
  const categories = [
    { name: "Blog", count: 45 },
    { name: "Business", count: 4 },
    { name: "Consulting", count: 1 },
    { name: "Finance", count: 1 },
    { name: "Marketing", count: 2 },
  ];

  // -------- TAGS --------
  const tags = [
    "analysis", "a Transparent Banking Partner", "business", "consulting",
    "finance", "marketing", "strategy", "The Ethics Edge: How Choosing Soulful Nidhi Bank",
    "The Future of Gold Loans: Speed", "tips", "Your money Your Future: Building Stability with Soulful Nidhi Bank"
  ];

  // -------- SCROLL REVEAL HOOKS --------
  const heroReveal = useScrollReveal(0.1, 0);
  const storyReveal = useScrollReveal(0.1, 100);
  const statsReveal = useScrollReveal(0.1, 100);
  const servicesReveal = useScrollReveal(0.1, 100);
  const principlesReveal = useScrollReveal(0.1, 100);
  const ctaReveal = useScrollReveal(0.1, 100);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e1a16] font-sans antialiased overflow-x-hidden">

      {/* ============================================================ */}
      {/* 1. HERO / PAGE HEADER                                        */}
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
          <div className="inline-block bg-[#f5efe6] text-[#7a5c2e] text-xs font-semibold tracking-wider px-4 py-1.5 rounded-full">
            <i className="fas fa-info-circle mr-2"></i> About Company
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-[#b4943c] relative">
              Soulful Nidhi
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#b4943c]/30 rounded-full"></span>
            </span> Limited
          </h1>
          <p className="text-[#4d4033] text-lg leading-relaxed max-w-xl">
            A Limited Liability Company incorporated under Companies Act, June 2023, 
            focused on encouraging banking habits and rendering financial assistance 
            with exciting rates &amp; flexible terms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#b4943c] hover:bg-[#9e7d2f] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Our Services
            </a>
            <a
              href="#"
              className="border border-[#d4c5b2] hover:border-[#b4943c] hover:bg-[#b4943c]/5 px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="relative z-10 group">
          <div className="absolute -inset-4 bg-[#b4943c]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <img
            src={HeroImg}
            alt="About Soulful Nidhi"
            className="relative w-full h-full object-cover aspect-[4/3] rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
          <span className="absolute bottom-4 right-6 text-xs bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
            G27 prestige tower, Indore
          </span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT COMPANY / STORY                                     */}
      {/* ============================================================ */}
      <section 
        ref={storyReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          storyReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold relative">
              About <span className="text-[#b4943c]">Us</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#b4943c]/40 rounded-full"></span>
            </h2>
            <p className="text-[#4d4033] leading-relaxed">
              <span className="font-semibold text-[#1e1a16]">Soulful Nidhi Limited</span> is a Limited Liability Company 
              incorporated under Companies Act, June 2023. The company was established in June 2023 and has its 
              registered head office at <span className="font-semibold">G 27 prestige tower, Nawlakha, Indore, M.P.</span>
            </p>
            <p className="text-[#4d4033] leading-relaxed">
              The Nidhi company focuses to encourage banking habits among individuals and renders financial assistance 
              in both short and long term commitments. It offers saving account, loans, and fixed deposit facilities 
              at exciting rate of interest and flexible terms.
            </p>
            <div className="bg-[#f5efe6] p-6 rounded-2xl border-l-4 border-[#b4943c]">
              <p className="text-[#4d4033] leading-relaxed italic">
                <i className="fas fa-quote-left text-[#b4943c] mr-2"></i>
                We are mainly focused on serving financial services to lower-middle and middle income class households. 
                The banking services are offered at relatively realistic terms and lower rate of interest.
              </p>
            </div>
            <p className="text-[#4d4033] leading-relaxed">
              We have a major objective to offer financial assistance to our beloved customers in every situation. 
              Since our inception, we have been constantly working on improving efficient and transparent banking services. 
              And, not forget to mention that in a short span of time, we have earned people's trust through our action 
              and timely services.
            </p>
            <p className="text-[#4d4033] leading-relaxed">
              We treat all our customers with equal support and empathy and this is what builds a strong B2C bond. 
              Moreover, we have customized loan deals and offers for every individual to make great things happen 
              without concerning over the money part.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-[#b4943c]">Our Mission</h3>
              <p className="text-sm text-[#4d4033] mt-2 leading-relaxed">
                To empower individuals and families with accessible, transparent, and affordable financial services 
                that foster economic growth and financial independence.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-[#b4943c]">Our Vision</h3>
              <p className="text-sm text-[#4d4033] mt-2 leading-relaxed">
                To become the most trusted Nidhi company in India, known for our customer-centric approach, 
                innovative solutions, and unwavering commitment to financial inclusion.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db] hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-[#b4943c]">Our Values</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Trust</span>
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Transparency</span>
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Innovation</span>
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Customer First</span>
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Integrity</span>
                <span className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs">Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. STATS / COUNTERS                                          */}
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
      {/* 4. WHAT WE DO / SERVICES                                     */}
      {/* ============================================================ */}
      <section 
        ref={servicesReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          servicesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What <span className="text-[#b4943c]">We Do</span></h2>
          <p className="text-[#5e4d32] max-w-2xl mx-auto mt-2">
            We help you see the world differently, discover opportunities you may never have imagined and 
            achieve results that bridge what is with what can be.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              img: Hero8Img, 
              title: "Accounting & Finance", 
              desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
              icon: "fa-chart-pie"
            },
            { 
              img: Hero9Img, 
              title: "Management Skills", 
              desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
              icon: "fa-users-cog"
            },
            { 
              img: Hero10Img, 
              title: "Business Planning", 
              desc: "A great corporate strategy combines five elements: a bold yet realistic ambition, a carefully considered portfolio.",
              icon: "fa-bullseye"
            },
            { 
              img: Hero11Img, 
              title: "Creating Your Startup Business", 
              desc: "We help you see the world differently, discover opportunities you may never have imagined.",
              icon: "fa-rocket"
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-soft border border-[#ece5db] overflow-hidden hover-lift group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#b4943c] shadow-md">
                  <i className={`fas ${service.icon}`}></i>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-[#b4943c] transition-colors">{service.title}</h3>
                <p className="text-sm text-[#5e4d32] mt-2 leading-relaxed">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center mt-3 text-sm font-medium text-[#b4943c] hover:text-[#9e7d2f] transition-colors group-hover:gap-2 gap-1"
                >
                  Explore More <i className="fas fa-arrow-right transition-all"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. MAIN PRINCIPLES / CORE VALUES                             */}
      {/* ============================================================ */}
      <section 
        ref={principlesReveal.ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-500 ease-out ${
          principlesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Main <span className="text-[#b4943c]">Principles</span></h2>
          <p className="text-[#5e4d32] max-w-2xl mx-auto mt-2">
            The core values that drive Soulful Nidhi Limited's commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-chart-line",
              title: "Marketing Analysis",
              desc: "We analyze market trends to provide the best financial solutions tailored to your needs.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: "fa-chess-queen",
              title: "Finance Strategy",
              desc: "Strategic financial planning ensures your money works harder for you and your future.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: "fa-lightbulb",
              title: "Business Innovation",
              desc: "We innovate constantly to bring you the most modern and efficient banking services.",
              color: "from-purple-500 to-purple-600"
            },
          ].map((principle, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-soft border border-[#ece5db] text-center hover-lift transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${principle.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold">{principle.title}</h3>
              <p className="text-sm text-[#5e4d32] mt-2 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
        {/* Company description below principles */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-soft border border-[#ece5db] max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
          <p className="text-[#4d4033] leading-relaxed text-center">
            <span className="font-semibold text-[#1e1a16]">Soulful Nidhi Limited</span> is a Limited Liability Company 
            incorporated under Companies Act, June 2023. The company was established in June 2023 and has its 
            registered head office at <span className="font-semibold">G 27 prestige tower, Nawlakha, Indore, M.P.</span> 
            The Nidhi company focuses to encourage banking habits among individuals and renders financial assistance 
            in both short and long term commitments. It offers saving account, loans, and fixed deposit facilities 
            at exciting rate of interest and flexible terms.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SIDEBAR + BLOG / SEARCH SECTION                          */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - Recent Posts */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold relative">
              Recent <span className="text-[#b4943c]">Posts</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#b4943c]/40 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              {recentPosts.slice(0, 5).map((post, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-soft border border-[#ece5db] hover:shadow-xl transition-all duration-300 hover:border-[#b4943c]/30 hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f5efe6] flex items-center justify-center text-[#b4943c] flex-shrink-0">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold hover:text-[#b4943c] transition-colors cursor-pointer">{post}</h4>
                      <p className="text-xs text-[#5e4d32] mt-1">admin / July 2023</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db]">
              <h4 className="font-bold text-lg mb-4">Search</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="w-full px-4 py-3 rounded-full border border-[#ece5db] focus:outline-none focus:border-[#b4943c] focus:ring-2 focus:ring-[#b4943c]/20 transition-all pr-12"
                />
                <button className="absolute right-1 top-1 bg-[#b4943c] hover:bg-[#9e7d2f] text-white px-4 py-2 rounded-full text-sm transition-all">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {/* Recent Comments */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db]">
              <h4 className="font-bold text-lg mb-4">Recent Comments</h4>
              <div className="space-y-3">
                {recentComments.map((comment, idx) => (
                  <div key={idx} className="border-b border-[#f5efe6] pb-3 last:border-0 last:pb-0">
                    <p className="text-sm">
                      <span className="font-semibold hover:text-[#b4943c] transition-colors cursor-pointer">{comment.name}</span>
                      <span className="text-[#5e4d32]"> on </span>
                      <span className="hover:text-[#b4943c] transition-colors cursor-pointer">{comment.post}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db]">
              <h4 className="font-bold text-lg mb-4">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <span key={idx} className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs hover:bg-[#b4943c] hover:text-white transition-all cursor-default">
                    {cat.name} ({cat.count})
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-[#ece5db]">
              <h4 className="font-bold text-lg mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#f5efe6] px-3 py-1 rounded-full text-xs hover:bg-[#b4943c] hover:text-white transition-all cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CALL TO ACTION                                            */}
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
            <div className="text-xs uppercase tracking-widest opacity-60">Soulful Nidhi</div>
            <h3 className="text-3xl font-bold mt-1">Want to Know More About Us?</h3>
            <p className="text-sm opacity-70 mt-1">We're here to answer all your questions</p>
          </div>
          <a
            href="#"
            className="relative z-10 bg-[#b4943c] hover:bg-[#9e7d2f] px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            Contact Us <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TRUST BADGES                                              */}
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

      {/* CSS for animations */}
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

export default About;