import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  ExternalLink, 
  X, 
  Cpu, 
  Gamepad2, 
  BookOpen, 
  FileText,
  ChevronRight,
  Database,
  BrainCircuit,
  Download,
  Dumbbell,
  Coffee,
  Car,
  Bot,
  Box,
  Activity,
  Briefcase,
  Link,
  MapPin,
  Home,
  Medal,
  Award,
  ShieldCheck,
  Heart
} from 'lucide-react';

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Portfolio() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-indigo-900">JB.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">About & Journey</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition-colors">Featured Work</button>
            <button onClick={() => scrollToSection('hobbies')} className="hover:text-indigo-600 transition-colors">Beyond the Screen</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Jordan</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed">
              Bridging the gap between complex software architecture and human psychology to build intuitive, impactful products.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="00001.jordan.bastian.resume.pdf" 
                download="Jordan_Bastian_Resume.pdf"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all flex items-center shadow-lg shadow-indigo-600/20"
              >
                <Download className="mr-2 w-5 h-5" /> Download Resume
              </a>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center shadow-lg shadow-slate-900/20"
              >
                View Projects <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <a href="https://github.com/weeef" target="_blank" rel="noreferrer" className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all flex items-center shadow-sm">
                <Github className="mr-2 w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
          
          {/* Headshot & Abstract Graphic */}
          <div className="flex-1 w-full max-w-md relative hidden md:block">
            <div className="flex flex-col items-center">
              <div className="aspect-square w-full rounded-full bg-gradient-to-tr from-indigo-100 to-violet-50 flex items-center justify-center p-8 relative overflow-hidden border border-indigo-50 shadow-2xl shadow-indigo-900/10 group mb-6">
                 {/* Decorative floating icons */}
                 <BrainCircuit className="absolute top-10 left-10 w-12 h-12 text-indigo-200 group-hover:scale-110 transition-transform" />
                 <Cpu className="absolute bottom-10 right-10 w-12 h-12 text-violet-200 group-hover:scale-110 transition-transform" />
                 
                 {/* Headshot / Degree Badges */}
                 <div className="relative z-10 w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex flex-col items-center justify-center">
                   {/* Provide your headshot in the same folder named 'headshot.jpg' */}
                   <img src="/images/headshot.jpg" alt="Jordan Bastian" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display = 'none'} />
                 </div>
              </div>
              
              {/* Location Info */}
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center space-x-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className="font-medium">Minneapolis, MN</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
                  <Home className="w-4 h-4" />
                  <span>Hometown: Kennewick, WA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Journey So Far</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From early curiosity to building comprehensive software solutions. I thrive at the intersection of technical architecture and business strategy.</p>
          </div>

          {/* Master Timeline Container */}
          <div className="relative">
            {/* Main vertical spine */}
            <div className="absolute left-[19px] md:left-[23px] top-2 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-indigo-100 to-transparent rounded-full z-0"></div>

            <div className="space-y-12">
              
              <TimelineItem 
                year="May 3, 2003" 
                title="Hello World (Literally)" 
                desc="Born as the first child to a first-generation immigrant household—my dad is from Mexico and my mom is from the States. As a second-generation American, I like to think this early blend of cultures gave me a head start on understanding different perspectives (and gave me a great sense of humor)."
                icon={<Coffee className="w-5 h-5" />}
                images={[{ src: '/images/kid.jpg', position: 'center 20%' }]}
                onImageClick={setSelectedImage}
              />

              <TimelineItem 
                year="2006" 
                title="The Spark" 
                desc="Interest in computers began early at age 3. Receiving a Nintendo DS Lite for my 3rd birthday, along with playing video games and messing around with early PCs, ignited a lifelong passion for interactive systems."
                icon={<Gamepad2 className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

              <TimelineItem 
                year="2008 - 2017" 
                title="Foundations" 
                desc={`From Kindergarten through 8th grade, I was part of a dual language program where instruction was split between English and Spanish. In middle school, our curriculum was uniquely designed so that some semesters we would learn subjects like math in Spanish and history in English, and then swap. 

                This immersive academic environment, combined with growing up in a dual language household, further honed my ability to fluently speak, write, and understand Spanish—giving me a deep linguistic and cultural foundation that I carry into my professional work today.`}
                icon={<BookOpen className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

              {/* HS Timeline */}
              <TimelineItem 
                year="2017 - 2021" 
                title="Kamiakin High School & Game Dev" 
                desc="Took every computer class available (Hardware Engineering, Networking, etc.). At the exact same time, I was attending summer programs (WSU & Tri-Tech) learning to architect and develop games in Unity. I was living and breathing code before I could drive."
                icon={<Gamepad2 className="w-5 h-5" />}
                onImageClick={setSelectedImage}
                subs={[
                  {
                    year: "May 2018 - Present",
                    title: "JB's Landscaping and Lawn Care LLC",
                    desc: "My parents' business! I started out doing the literal heavy lifting as a Crew Member—mowing lawns and manual labor. Eventually, I earned my way into the office as a Technical Project Assistant. Witnessing firsthand what it takes to run a business—from hiring crews to managing tricky client interactions—taught me that technology is only as good as the business it supports."
                  },
                  {
                    year: "Feb 2019",
                    title: "First PC Build",
                    desc: "Sourced parts and built my first custom PC featuring a Ryzen 3 2200g and 16GB of RAM. This hands-on experience truly cemented my love for tech, hardware, and seeing how individual components synergize to create powerful systems."
                  }
                ]}
              />

              {/* College Timeline */}
              <TimelineItem 
                year="Aug 2021 - May 22, 2025" 
                title="Undergraduate Studies at St. Olaf" 
                desc={`Graduated with a dual degree in Computer Science and Psychology! As a first-generation college student, this achievement represents a significant milestone in my family's journey. This combination allows me to understand both the technical 'how' and the human 'why' behind product development. I spent countless nights staying up way too late, fueled by sheer willpower and caffeine, trying to finish complex coding projects. It was exhausting, but it built the resilience and deep technical empathy I bring to my teams today.

                During my time at St. Olaf, I was an active member of the Algorithm's Club and the Linux Ladies Club—tight-knit CS communities where we gathered to build projects, solve problems, and support each other's technical growth.`}
                icon={<BrainCircuit className="w-5 h-5" />}
                images={['/images/petal programming.jpg']}
                onImageClick={setSelectedImage}
                extra={
                  <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl">
                    <div className="bg-white p-2.5 rounded-lg shadow-sm border border-emerald-50 flex-shrink-0">
                      <Medal className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-emerald-900 block mb-0.5">2nd Place: Petal Programming Competition</span>
                      <p className="text-emerald-700 leading-relaxed">
                        I took home 2nd place in a "Petal Programming" competition during a school-hosted Linux Ladies event! I built a digital flower entirely out of HTML and CSS, and walked away with a real succulent as my prize. It was a fun way to blend creative frontend engineering with rapid prototyping.
                      </p>
                    </div>
                  </div>
                }
                subs={[
                  {
                    year: "May 2024 - Sep 2024",
                    title: "Frontend Developer Intern @ GBCS Group",
                    desc: "Collaborated with 5+ developers across 3 Agile projects. Spearheaded front-end development using React.js and TypeScript, coordinated API testing with Postman, and leveraged GitHub CI/CD to maintain delivery quality. Most importantly, I served as acting project lead, streamlining task delegation, resolving technical blockers, and providing progress reports to leadership—achieving 100% deadline adherence."
                  },
                  {
                    year: "Aug 2024 - May 2025",
                    title: "IT Support & Digital Media Intern",
                    desc: "Worked at the St. Olaf library providing direct technical support to students and faculty, resolving 50+ complex technical issues and actively tracking software bugs for the central IT department."
                  },
                  {
                    year: "April 2025",
                    title: "Seattle Alumni Connection & Tech Hub Tour",
                    desc: "Visited Seattle for an alumni connections event and toured Meta, Microsoft, and Amazon offices. Seeing these massive tech ecosystems in action cemented my realization: I didn't want to just be a software developer writing production code. I wanted to be the middleman—the Product Manager orchestrating the vision, the teams, and the execution.",
                    images: ['/images/mcsf spring.jpg'],
                    onImageClick: setSelectedImage
                  },
                  {
                    year: "May 22, 2025",
                    title: "Graduation: St. Olaf College",
                    desc: "Officially crossed the stage with my dual degree in Computer Science and Psychology! All the challenging projects, deep-dive research, and late-night coding sessions culminated here, equipping me with the perfect foundation for technical leadership.",
                    images: [{ src: '/images/grad.jpg', position: 'center 15%' }]
                  }
                ]}
              />

              <TimelineItem 
                year="Nov 2025 - Present" 
                title="Associate, Program Operations @ Element Fleet Management" 
                desc="Currently own and coordinate 5+ concurrent operational workstreams. I manage multiple databases and report key findings to corresponding stakeholders to ensure data integrity and transparency. I partner cross-functionally with analysts, vendors, and internal stakeholders to ensure 100% on-time delivery against SLA targets. This role has drastically sharpened my ability to drive stakeholder alignment, proactively escalate risks, and implement data-driven process improvements utilizing Smartsheet, Excel, and Power BI."
                icon={<Briefcase className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

            </div>
          </div>

          <div id="hobbies" className="mt-24 border-t border-slate-100 pt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Beyond the Screen</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                I believe the best leaders and product managers are well-rounded humans. Here are a few things that keep me active and grounded.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto lg:items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                <HobbyCard 
                  icon={<Bot className="w-6 h-6 text-indigo-600" />} 
                  title="Local LLMs & AI" 
                  desc="Utilizing LM Studio to host and explore the capabilities of various open-source models." 
                  color="bg-indigo-50" 
                />
                <HobbyCard 
                  icon={<Box className="w-6 h-6 text-sky-600" />} 
                  title="3D Printing" 
                  desc="Designing and printing custom functional parts and rapid prototypes." 
                  color="bg-sky-50" 
                />
                <HobbyCard 
                  icon={<Dumbbell className="w-6 h-6 text-emerald-600" />} 
                  title="Fitness" 
                  desc="An avid gym-goer. I find that consistent physical discipline is essential for a balanced life." 
                  color="bg-emerald-50" 
                />
                <HobbyCard 
                  icon={<Activity className="w-6 h-6 text-amber-600" />} 
                  title="Pickleball" 
                  desc="Applying high-speed strategy and reflexes on the court with friends." 
                  color="bg-amber-50" 
                />
                <HobbyCard 
                  icon={<Cpu className="w-6 h-6 text-violet-600" />} 
                  title="Hardware" 
                  desc="Endlessly curious about computer hardware and seeing how components synergize." 
                  color="bg-violet-50" 
                />
                <HobbyCard 
                  icon={<Car className="w-6 h-6 text-rose-600" />} 
                  title="Automotive" 
                  desc="Passionate about engineering and performance. I love the raw connection of a manual gearbox, even if my left leg regrets it in heavy traffic." 
                  color="bg-rose-50" 
                />
              </div>

              <div className="lg:w-80 w-full flex-shrink-0 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-rose-50 p-2.5 rounded-xl text-rose-600">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Furry Friends</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group relative border border-slate-100">
                      <img 
                        src="/images/cookie.jpg" 
                        alt="Cookie the Chihuahua" 
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                        onClick={() => setSelectedImage('/images/cookie.jpg')}
                      />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group relative border border-slate-100">
                      <img 
                        src="/images/waffles.jpg" 
                        alt="Waffles the Blue Heeler mix" 
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                        onClick={() => setSelectedImage('/images/waffles.jpg')}
                      />
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Back home in Washington, I have two dogs: <span className="font-semibold text-slate-800">Cookie</span>, a Chihuahua, and <span className="font-semibold text-slate-800">Waffles</span>, a Blue Heeler mix.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-rose-50 p-2.5 rounded-xl text-rose-600">
                      <Car className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Performance Daily</h4>
                  </div>
                  
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-sm group relative border border-slate-100 mb-6 flex-1">
                    <img 
                      src="/images/car.jpg" 
                      alt="Ford Focus ST" 
                      loading="lazy"
                      className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                      onClick={() => setSelectedImage('/images/car.jpg')}
                    />
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    I'm a firm believer that your daily driver should have character. My <span className="font-semibold text-slate-800">Ford Focus ST</span> is the perfect blend of utility and boost—though rowing through gears in stop-and-go traffic is definitely a test of patience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work & Research</h2>
              <p className="text-slate-600">A showcase of software engineering, machine learning, data processing, and ethical research. Demonstrating my capacity to lead projects across diverse technical domains.</p>
            </div>
          </div>

          {/* OptiPep Featured Project */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group mb-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-4 h-4" /> Current Project
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">OptiPep</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The ultimate companion for personal health management. OptiPep provides a centralized hub to track medications, injections, peptides, and supplements, empowering users to take control of their wellness journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-50 p-1 rounded-md">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-slate-600 text-base">Integrates seamlessly with <span className="font-semibold text-slate-900">Google Health</span> and <span className="font-semibold text-slate-900">Apple Health</span> for a unified view of your vitals.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-violet-50 p-1 rounded-md">
                      <BrainCircuit className="w-4 h-4 text-violet-600" />
                    </div>
                    <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">AI-Powered Assistant</span> designed to help optimize your medication and supplement stacks with personalized insights.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Expo / React Native</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Expo Router</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">NativeWind (Tailwind)</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Zustand</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">HealthKit / Fit</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">LLM / AI</span>
                </div>
              </div>
              <div className="flex-1 w-full max-w-sm mx-auto lg:max-w-none flex justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900 bg-slate-900 aspect-[9/19.5] max-h-[600px]">
                  <video 
                    className="w-full h-full object-contain"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/images/video for site.mov" type="video/quicktime" />
                    <source src="/images/video for site.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <a href="https://github.com/weeef/AlphaPoker" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">AlphaPoker</h3>
              <p className="text-slate-600 mb-6 flex-1">
                A Machine Learning model built in Google Colab using Python with a research partner to correctly identify poker hands from a crafted dataset. Led the development lifecycle, defining evaluation goals and managing end-to-end testing across decision trees and neural networks resulting in 99.8% accuracy.
              </p>
              <div className="flex gap-3 mt-auto">
                <button 
                  onClick={() => setSelectedDoc('ML_DOC')}
                  className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2" /> Read ML Docs
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <a href="https://github.com/weeef/proj-melda" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Project Melda</h3>
              <p className="text-slate-600 mb-6 flex-1">
                A game development project developed in C++ featuring custom assets, documentation, and logic. A custom Python script was also created to seamlessly deploy and run the game on university servers. Showcases my ongoing passion for interactive media and software architecture roots established since 2017.
              </p>
              
              <div className="mt-auto bg-slate-50 rounded-xl p-4 flex items-center gap-4 border border-slate-100">
                <div className="w-16 h-16 bg-white rounded-lg border border-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                  <img src="/images/melda.jpg" alt="Melda Main Character" loading="lazy" className="max-w-full max-h-full object-contain cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedImage('/images/melda.jpg')} />
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700 block">Featured Asset</span>
                  Main Character Sprite
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-0 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-100 relative cursor-pointer" onClick={() => setSelectedImage('/images/tail.jpg')}>
                <img src="/images/tail.jpg" alt="Variation in Tail to Body Ratio Poster" loading="lazy" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <h3 className="text-xl font-bold text-white">Canidae Tail Variation</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 text-sm mb-4">
                  Data processing, cleaning, and presentation project analyzing the variation in tail lengths across 31 species of the Canidae family. We categorized lengths and analyzed evolutionary traits. 
                  <br/><br/>
                  <em>Fun Fact:</em> The longest dog tail is 30.2 inches (Irish Wolfhound).
                </p>
                <div className="mt-auto flex gap-2">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">Data Cleaning</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">Research</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">R Studio</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-0 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group flex flex-col">
              <div className="h-48 overflow-hidden bg-slate-100 relative cursor-pointer" onClick={() => setSelectedImage('/images/trust.jpg')}>
                <img src="/images/trust.jpg" alt="Trust in Autonomous Vehicles Poster" loading="lazy" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <h3 className="text-xl font-bold text-white">Trust in Autonomous Vehicles</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 text-sm mb-4">
                  (Fall 2023) Explored the socio-technical ecosystem of AVs. Conducted extensive literature reviews to discover the best ethical frameworks for software development. Evaluated how to foster trust among drivers and pedestrians by analyzing ethical, technological, and societal factors shaping public acceptance.
                </p>
                <div className="mt-auto flex gap-2">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">Ethics in Tech</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">System Analysis</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Professional Development</h2>
            <p className="text-slate-600">Continuing education and specialized training in project management, operational excellence, and technical leadership.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CSSC Lean Six Sigma */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col h-full hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                  <ShieldCheck className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Lean Six Sigma White Belt</h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">CSSC Certified</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Foundational understanding of the DMAIC methodology (Define, Measure, Analyze, Improve, Control).
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Core principles of Lean and Six Sigma to reduce waste and variation in business processes.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Techniques for identifying process improvements and enhancing organizational efficiency.
                </li>
              </ul>
              <a 
                href="https://www.credly.com/badges/cc541b2c-3a7a-4058-82f2-8e83d945daf2/linked_in_profile" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>

            {/* Microsoft & LinkedIn */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col h-full hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 flex-shrink-0 w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img src="/images/micro.png" alt="Microsoft Logo" loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Career Essentials in Project Management</h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Microsoft & LinkedIn</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Mastery of the project lifecycle, from initiation and stakeholder mapping to final delivery.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Practical application of traditional and Agile project management frameworks.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Communication strategies for effective team leadership and cross-functional collaboration.
                </li>
              </ul>
              <a 
                href="https://www.linkedin.com/learning/certificates/aa826693f88f9173dbe3464abe44a44edbeb66146630a7d57be8e9d1c34082b0" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>

            {/* IBM */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col h-full hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 flex-shrink-0 w-14 h-14 flex items-center justify-center overflow-hidden">
                  <img src="/images/ibm.png" alt="IBM Logo" loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Project Management Foundations</h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">IBM Certified</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Comprehensive training in project initiation, documentation, and resource planning.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Risk management and mitigation techniques to ensure project stability and SLA adherence.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Utilization of data-driven tools for tracking progress and reporting to executive leadership.
                </li>
              </ul>
              <a 
                href="https://www.coursera.org/account/accomplishments/verify/AE8STY50ZEXB" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Let's Build Something Great.</h2>
            <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg">
              I am open to exploring opportunities where I can leverage my technical foundation and psychological insights to lead teams and deliver exceptional products.
            </p>

            <div className="space-y-4">
              <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Open to Relocation & Remote Roles</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['California', 'Washington', 'Idaho', 'Oregon', 'New York', 'Boston', 'Minnesota'].map((loc) => (
                  <span key={loc} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="00001.jordan.bastian.resume.pdf" 
                download="Jordan_Bastian_Resume.pdf"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/20 w-full sm:w-auto text-center"
              >
                <Download className="mr-2 w-5 h-5" /> Download My Resume
              </a>
              
              <div className="flex gap-4">
                <a href="https://github.com/weeef" target="_blank" rel="noreferrer" className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/bastian-jordan" target="_blank" rel="noreferrer" className="bg-slate-800 p-4 rounded-xl hover:bg-indigo-600 transition-colors border border-slate-700">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:bastianjordan056@gmail.com" className="bg-slate-800 p-4 rounded-xl hover:bg-emerald-600 transition-colors border border-slate-700">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none group-hover:bg-transparent transition-colors z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180943.4357754687!2d-93.38520286663364!3d44.9706753177651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f351f87!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1717200000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© 2026 Jordan Bastian. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Minneapolis, MN</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Open to Remote</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedDoc === 'ML_DOC' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedDoc(null)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-lg text-slate-900 flex items-center"><FileText className="mr-2 text-indigo-600" /> AlphaPoker ML Documentation</h3>
              <button onClick={() => setSelectedDoc(null)} className="text-slate-400 hover:text-slate-900 p-1 rounded hover:bg-slate-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto custom-scrollbar prose prose-slate max-w-none text-sm md:text-base">
              
              <h4 className="text-indigo-900 font-semibold border-b pb-2 mb-4">Dataset Selection</h4>
              <p>We chose the poker dataset with the goal of making a model that can correctly identify poker hands.</p>
              
              <h4 className="text-indigo-900 font-semibold border-b pb-2 mb-4 mt-8">EDA & Data Cleaning</h4>
              <p>No missing values; the data itself is already pretty 'clean' by default as it was intentionally crafted instead of collected data. No data cleaning needed.</p>
              
              <h4 className="text-indigo-900 font-semibold border-b pb-2 mb-4 mt-8">Model Selection</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Null Model:</strong> Set everything as majority class.</li>
                <li><strong>Simple model:</strong> KNN.</li>
                <li><strong>Complex model:</strong> Neural Net (MLPClassifier).</li>
              </ul>

              <h4 className="text-indigo-900 font-semibold border-b pb-2 mb-4 mt-8">Model Tuning Documentation/Notes</h4>
              <p className="text-slate-500 italic mb-4">Note: While testing and fine-tuning, each iteration was taking hours, so we decided to start documenting in case we don't get results that are as good as we would want them to be.</p>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6">
                <strong className="block text-slate-800 mb-2">KNN → Decision Tree</strong>
                <p>Changed from KNN to Decision Tree as we realized KNN is not great with huge datasets due to the curse of dimensionality.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6 space-y-3">
                <strong className="block text-slate-800 mb-2">Neural Net - MLPClassifier Iterations</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tried with and without StandardScaler (Accuracy was worse without it).</li>
                  <li>Changed solver from 'lbfgs' to 'adam' (Increased overall execution time).</li>
                  <li>Tinkered with different alphas. Best alpha we found for our use case was <code>1e-5</code>.</li>
                  <li>Tested various different amounts of hidden layers. Best solution currently for <code>hidden_layer_sizes = (12,24)</code>.</li>
                  <li>Changed <code>max_iter</code> to 1000 since old solver needed more iterations.</li>
                  <li>Tried various activation functions (Logistics regression performed poorly). Best function so far: <strong>Tanh</strong>.</li>
                  <li>Included early stopping (<code>early_stopping = true</code>) to prevent overfitting and reduce training time.</li>
                </ul>
              </div>

              <h4 className="text-indigo-900 font-semibold border-b pb-2 mb-4 mt-8">Final Execution & GridSearch</h4>
              <p className="mb-4">We decided to run one big batch of GridSearch overnight. To handle long runtimes, we optimized our environment utilizing Colab's Machine Learning runtime types.</p>
              
              <div className="bg-slate-900 text-emerald-400 p-4 rounded-lg font-mono text-xs overflow-x-auto mb-6">
                {`param_grid = [
  { # Null Model
    'classifier': [DummyClassifier(strategy='most_frequent', random_state=seed)]
  },
  { # KNN
    'classifier': [KNeighborsClassifier()],
    'classifier__n_neighbors': [50, 120, 500, 1000]
  },
  { # Neural Net
    'classifier': [MLPClassifier(random_state=seed, max_iter=1000, early_stopping=True)],
    'classifier__hidden_layer_sizes': [(12,24), (12,25), (12,16)],
    'classifier__activation': ['relu', 'tanh', 'logistic'],
    'classifier__solver': ['adam', 'sgd'],
    'classifier__alpha': [1e-5, 1e-6, 1e-7],
    'classifier__learning_rate': ['constant', 'adaptive'],
    'classifier__learning_rate_init': [1e-4, 1e-3, 1e-2, 1]
  }
]`}
              </div>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 text-emerald-900 mt-6">
                <strong>Result:</strong> We achieved an accuracy of <strong>99.8%</strong>, which is as good as it gets. Cut down final hyperparameter searches to maintain speed.
              </div>

            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute -top-12 right-0 text-white hover:text-slate-300 bg-slate-800/50 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

    </div>
  );
}

// Hobby Card Component
function HobbyCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
      <div className={`${color} w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}

// Master Timeline Item (supports nested sub-items)
function TimelineItem({ year, title, desc, icon, images, subs, onImageClick, extra }) {
  return (
    <div className="relative pl-14 md:pl-20">
      {/* Icon Node */}
      <div className="absolute left-[0px] md:left-[0px] mt-0.5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-4 border-white bg-indigo-50 text-indigo-600 shadow-sm z-10">
        {icon}
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <span className="text-sm font-bold text-indigo-500 mb-1 block">{year}</span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">{desc}</p>

        {/* Render Main Images and Extra Content */}
        {(images && images.length > 0) || extra ? (
          <div className="mt-4 flex flex-col md:flex-row gap-6">
            {images && images.length > 0 && (
              <div className="flex flex-wrap gap-4 flex-1">
                {images.map((img, idx) => {
                  const imgSrc = typeof img === 'string' ? img : img.src;
                  const position = typeof img === 'object' ? img.position : 'center';
                  return (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 relative aspect-video flex-1 min-w-[200px] max-w-[300px] cursor-pointer group/img" onClick={() => onImageClick && onImageClick(imgSrc)}>
                      <img 
                        src={imgSrc} 
                        alt={`${title} visual`} 
                        loading="lazy"
                        className={`absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300`} 
                        style={{ objectPosition: position }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {extra && <div className="flex-1">{extra}</div>}
          </div>
        ) : null}
        </div>

        {/* Render Nested Sub-Events */}
        {subs && subs.length > 0 && (
        <div className="mt-6 space-y-6 relative ml-2 md:ml-4">
          {/* Sub Spine connecting the dots */}
          <div className="absolute left-[13px] top-2 bottom-6 w-0.5 bg-slate-200"></div>

          {subs.map((sub, idx) => (
            <div key={idx} className="relative pl-10 md:pl-12 group">
              {/* Sub Node Dot */}
              <div className="absolute left-[9px] top-4 h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-slate-50 group-hover:bg-indigo-400 group-hover:ring-indigo-50 transition-all z-10"></div>

              {/* Sub Content */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors">
                  <span className="text-xs font-bold text-slate-500 mb-1 block uppercase tracking-wider">{sub.year}</span>
                  <h4 className="text-md font-bold text-slate-800 mb-2">{sub.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{sub.desc}</p>

                  {/* Render Sub Images if any */}
                  {sub.images && sub.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {sub.images.map((img, i) => {
                        const imgSrc = typeof img === 'string' ? img : img.src;
                        const position = typeof img === 'object' ? img.position : 'center';
                        return (
                          <div key={i} className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white relative aspect-video flex-1 min-w-[150px] max-w-[250px] cursor-pointer group/subimg" onClick={() => onImageClick && onImageClick(imgSrc)}>
                            <img 
                              src={imgSrc} 
                              alt={`${sub.title} visual`} 
                              loading="lazy"
                              className={`absolute inset-0 w-full h-full object-cover group-hover/subimg:scale-105 transition-transform duration-300`}
                              style={{ objectPosition: position }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Render Extra Content if any */}
                  {sub.extra && sub.extra}
              </div>
            </div>
          ))}
        </div>
        )}
        </div>
        );
        }