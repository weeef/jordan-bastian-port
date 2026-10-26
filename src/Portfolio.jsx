import { useState, useEffect, useRef } from 'react';
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
  BrainCircuit,
  Download,
  Dumbbell,
  Coffee,
  Car,
  Bot,
  Box,
  Activity,
  Briefcase,
  MapPin,
  Home,
  Medal,
  ShieldCheck,
  Heart,
  Smartphone,
  MessageCircle,
  Users,
  Layers,
  Lock
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

// Shows a page at a fixed desktop size (width x height), scaled down to fit the available width.
const ScaledFrame = ({ src, title, width, height }) => {
  const [scale, setScale] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#0e0e0c]" style={{ height: height * scale }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="absolute top-0 left-0 border-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      />
    </div>
  );
};

export default function Portfolio() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('bastianjordan056@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-indigo-900">JB.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">About & Journey</button>
            <button onClick={() => scrollToSection('hobbies')} className="hover:text-indigo-600 transition-colors">Beyond the Screen</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition-colors">Featured Work</button>
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
              I studied computer science and psychology. What I like most is listening to the people who use a product, figuring out what they actually need, and building the thing that gets them there.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/jordan-bastian-resume.pdf" 
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
            <p className="text-slate-600 max-w-2xl mx-auto">How I got from a Nintendo DS to working where people and technology meet.</p>
          </div>

          {/* Master Timeline Container */}
          <div className="relative">
            {/* Main vertical spine */}
            <div className="absolute left-[19px] md:left-[23px] top-2 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-indigo-100 to-transparent rounded-full z-0"></div>

            <div className="space-y-12">
              
              <TimelineItem 
                year="May 3, 2003" 
                title="Hello World (Literally)" 
                desc="I was my parents' first kid. My dad is from Mexico and my mom is from the States, so I grew up with a foot in both cultures. I like to think that gave me a head start on seeing things from other people's point of view (and a pretty good sense of humor)."
                icon={<Coffee className="w-5 h-5" />}
                images={[{ src: '/images/kid.jpg', position: 'center 20%' }]}
                onImageClick={setSelectedImage}
              />

              <TimelineItem 
                year="2006" 
                title="The Spark" 
                desc="I got a Nintendo DS Lite for my 3rd birthday, and that was pretty much it. Between video games and messing around on old PCs, I've been hooked on computers ever since."
                icon={<Gamepad2 className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

              <TimelineItem 
                year="2008 - 2017" 
                title="Foundations" 
                desc={`From kindergarten through 8th grade I was in a dual language program, with classes split between English and Spanish. In middle school we'd take a subject like math in Spanish and history in English for a semester, then switch.

                Between that and speaking both languages at home, I'm fluent in Spanish (reading, writing and speaking), and it still comes in handy at work.`}
                icon={<BookOpen className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

              {/* HS Timeline */}
              <TimelineItem 
                year="2017 - 2021" 
                title="Kamiakin High School & Game Dev" 
                desc="I took every computer class my school offered (hardware engineering, networking, and so on). In the summers I went to programs at WSU and Tri-Tech to learn how to make games in Unity. I was writing code before I could drive."
                icon={<Gamepad2 className="w-5 h-5" />}
                onImageClick={setSelectedImage}
                subs={[
                  {
                    year: "May 2018 - Present",
                    title: "JB's Landscaping and Lawn Care LLC",
                    desc: "My parents' business. I started on a crew mowing lawns and doing a lot of manual labor, and eventually moved into the office as a Technical Project Assistant. Seeing everything that goes into running a business, from hiring crews to dealing with difficult clients, taught me that technology only matters if it actually helps the business."
                  },
                  {
                    year: "Feb 2019",
                    title: "First PC Build",
                    desc: "Picked out the parts and built my first PC: a Ryzen 3 2200G with 16GB of RAM. Putting it together myself is what really got me into hardware."
                  }
                ]}
              />

              {/* College Timeline */}
              <TimelineItem 
                year="Aug 2021 - May 22, 2025" 
                title="Undergraduate Studies at St. Olaf" 
                desc={`I graduated with a dual degree in Computer Science and Psychology, and I'm the first in my family to finish college, which means a lot to all of us. Studying both taught me how software works and why people use it the way they do. I also stayed up way too late, way too often, running on caffeine to finish coding projects. It was exhausting, but it taught me how to keep going on hard problems.

                At St. Olaf I was in the Algorithms Club and Linux Ladies, two small CS groups where we built projects, worked through problems together, and helped each other get better.`}
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
                        I took 2nd place in a "Petal Programming" competition at a Linux Ladies event. I built a flower out of nothing but HTML and CSS, and the prize was a real succulent.
                      </p>
                    </div>
                  </div>
                }
                subs={[
                  {
                    year: "May 2024 - Sep 2024",
                    title: "Frontend Developer Intern @ GBCS Group",
                    desc: "I ended up acting as project lead for a team of 4-6 developers. I took what the business needed and turned it into development tasks the team could pick up and run with, then kept the work lined up with what our stakeholders were actually asking for. On the hands-on side, I built front-end features in TypeScript and tested our APIs with Postman. We usually had several projects going at once, so a lot of my time went into coordinating handoffs between engineering and QA: making sure everything got tested for bugs, the team kept its pace, and what we shipped held up."
                  },
                  {
                    year: "Aug 2024 - May 2025",
                    title: "IT Support & Digital Media Intern",
                    desc: "Did tech support for students and faculty at the St. Olaf library. I resolved 50+ issues and logged software bugs for the central IT department."
                  },
                  {
                    year: "April 2025",
                    title: "Seattle Alumni Connection & Tech Hub Tour",
                    desc: "Went to Seattle for an alumni event and toured the Meta, Microsoft, and Amazon offices. Seeing how those teams work made something clear to me: the part I love is where design and engineering meet. Hearing what users need, prototyping it fast, and building it with the team until it feels right.",
                    images: ['/images/mcsf spring.jpg'],
                    onImageClick: setSelectedImage
                  },
                  {
                    year: "May 22, 2025",
                    title: "Graduation: St. Olaf College",
                    desc: "Walked across the stage with my dual degree in Computer Science and Psychology. Four years of hard projects, research, and late nights, done.",
                    images: [{ src: '/images/grad.jpg', position: 'center 15%' }]
                  }
                ]}
              />

              <TimelineItem 
                year="Nov 2025 - Present" 
                title="Associate, Program Operations @ Element Fleet Management" 
                desc={`I joined Element in November 2025, and most days I'm juggling five or more operational and technical workstreams at once, working with vendors, data analysts, and engineers to keep them all moving. So far, everything I've owned has landed on time.

                I manage two of our vendors directly. That means keeping a close eye on how each one is performing and shifting work between them when things change. When something keeps slowing us down, I dig into the data to find out why. The SQL and Power BI dashboards I built to track those bottlenecks have helped the team get about 20% more work through. I also supported the Armada program, and I jump in on Salesforce cases when they need a hand.`}
                icon={<Briefcase className="w-5 h-5" />}
                onImageClick={setSelectedImage}
              />

            </div>
          </div>

        </div>

        <div id="hobbies" className="max-w-6xl mx-auto px-6 mt-24 border-t border-slate-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Beyond the Screen</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What I'm up to when I'm not working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="h-56 rounded-xl overflow-hidden border border-slate-100">
                  <img 
                    src="/images/cookie.jpg" 
                    alt="Cookie the Chihuahua" 
                    loading="lazy"
                    className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                    onClick={() => setSelectedImage('/images/cookie.jpg')}
                  />
                </div>
                <div className="h-56 rounded-xl overflow-hidden border border-slate-100">
                  <img 
                    src="/images/waffles.jpg" 
                    alt="Waffles the Blue Heeler mix" 
                    loading="lazy"
                    className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                    onClick={() => setSelectedImage('/images/waffles.jpg')}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Furry Friends</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Back home in Washington, I have two dogs: <span className="font-semibold text-slate-800">Cookie</span>, a Chihuahua, and <span className="font-semibold text-slate-800">Waffles</span>, a Blue Heeler mix.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
              <div className="h-56 rounded-xl overflow-hidden border border-slate-100 mb-6">
                <img 
                  src="/images/car.jpg" 
                  alt="Ford Focus ST" 
                  loading="lazy"
                  className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                  onClick={() => setSelectedImage('/images/car.jpg')}
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Performance Daily</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                I think a daily driver should be fun to drive. My <span className="font-semibold text-slate-800">Ford Focus ST</span> is practical enough for every day and still has a turbo, though shifting through stop-and-go traffic gets old fast.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <HobbyCard 
              icon={<Bot className="w-5 h-5 text-indigo-600" />} 
              title="Local LLMs & AI" 
              desc="Running open-source models on my own machine with LM Studio to see what they can do." 
              color="bg-indigo-50" 
            />
            <HobbyCard 
              icon={<Box className="w-5 h-5 text-sky-600" />} 
              title="3D Printing" 
              desc="Designing and printing parts I actually use, plus quick prototypes." 
              color="bg-sky-50" 
            />
            <HobbyCard 
              icon={<Dumbbell className="w-5 h-5 text-emerald-600" />} 
              title="Fitness" 
              desc="I'm a regular at the gym. Sticking to a routine there helps keep the rest of my life balanced." 
              color="bg-emerald-50" 
            />
            <HobbyCard 
              icon={<Activity className="w-5 h-5 text-amber-600" />} 
              title="Pickleball" 
              desc="Playing with friends whenever we can get a court." 
              color="bg-amber-50" 
            />
            <HobbyCard 
              icon={<Cpu className="w-5 h-5 text-violet-600" />} 
              title="Hardware" 
              desc="Always curious about computer hardware and how all the parts fit together." 
              color="bg-violet-50" 
            />
            <HobbyCard 
              icon={<Car className="w-5 h-5 text-rose-600" />} 
              title="Automotive" 
              desc="I'm into how cars are engineered and what makes them fast. I love driving stick, even if my left leg doesn't in heavy traffic." 
              color="bg-rose-50" 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work & Research</h2>
              <p className="text-slate-600">Things I've built and researched, from apps and games to machine learning and data analysis.</p>
            </div>
          </div>

          {/* Habit Featured Project */}
          <HabitShowcase />

          {/* OptiPep Featured Project */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group mb-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-4 h-4" /> Current Project
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">OptiPep</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A mobile app for keeping track of your health in one place: medications, injections, peptides, and supplements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-50 p-1 rounded-md">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-slate-600 text-base">Connects to <span className="font-semibold text-slate-900">Google Health</span> and <span className="font-semibold text-slate-900">Apple Health</span> so your vitals show up next to everything else.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-violet-50 p-1 rounded-md">
                      <BrainCircuit className="w-4 h-4 text-violet-600" />
                    </div>
                    <p className="text-slate-600 text-base">An <span className="font-semibold text-slate-900">AI assistant</span> that looks at your medication and supplement stack and gives suggestions based on your own data.</p>
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

          {/* Garage Log Featured Project (live demo) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <Car className="w-4 h-4" /> Live Demo
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Garage Log</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A Windows app for keeping up with maintenance on any vehicle, with a companion mobile app for iPhone and Android. Track services, fuel and costs, and see at a glance what's due by mileage or by date. The window below is the real desktop app running in your browser with sample data. Click around.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">JavaScript</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Electron</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">three.js</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">pdf.js</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">PWA</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">NHTSA API</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="/garage-demo/index.html" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-amber-700 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" /> Open full screen
                  </a>
                  <a href="https://weeef.github.io/garage/" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                    <Smartphone className="w-4 h-4 mr-2" /> Mobile app
                  </a>
                  <a href="https://github.com/weeef/garage" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                    <Github className="w-4 h-4 mr-2" /> Source
                  </a>
                </div>
              </div>
              <div className="space-y-5 lg:pt-14">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-sky-50 p-1 rounded-md">
                    <Smartphone className="w-4 h-4 text-sky-600" />
                  </div>
                  <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">A mobile app to go with it.</span> Log an oil change or a fill-up from your phone in the parking lot, and it shows up on your PC. The mobile app has the same features, installs from the browser on iPhone or Android with no app store, and works offline.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-amber-50 p-1 rounded-md">
                    <Box className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-slate-600 text-base">A <span className="font-semibold text-slate-900">3D model of your car</span>: either a real model of your exact car from Sketchfab, or one generated to its real dimensions from the VIN, painted your color and carrying your state's license plate. Drag it to spin.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-indigo-50 p-1 rounded-md">
                    <FileText className="w-4 h-4 text-indigo-600" />
                  </div>
                  <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">Imports shop invoices</span> from PDFs, emails and CARFAX history, and maps each line item onto your maintenance schedule.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-50 p-1 rounded-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">Local-first:</span> your data stays on your own devices. The desktop and mobile apps sync through a private GitHub gist, and edits made on both while apart are merged, not lost.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800">
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="ml-3 text-xs font-medium text-slate-400">Garage Log</span>
              </div>
              <ScaledFrame src="/garage-demo/index.html" title="Garage Log live demo" width={1180} height={760} />
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
                A machine learning model that identifies poker hands, built in Python on Google Colab with a research partner. I set the evaluation goals and ran testing across decision trees and neural networks, and our best model hit 99.8% accuracy.
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
                A C++ game with custom art, documentation, and game logic, plus a Python script that deploys and runs it on the university servers. I've been making games since high school and still love it.
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
                  We cleaned and analyzed data on tail length across 31 species in the dog family (Canidae), grouped them by length, and looked at the evolutionary traits behind it.
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
                  (Fall 2023) A research project on why people do or don't trust self-driving cars. I read a lot of research on ethical frameworks for building this kind of software, and looked at the ethical, technical, and social factors that decide whether drivers and pedestrians accept them.
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
            <p className="text-slate-600">Courses I've completed in project management and process improvement.</p>
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
                  The DMAIC method: Define, Measure, Analyze, Improve, Control.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  The basics of Lean and Six Sigma for cutting waste and variation out of a process.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  How to spot where a process can be improved.
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
                  The full project lifecycle, from kickoff and figuring out stakeholders to final delivery.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Running projects with both traditional and Agile approaches.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Communicating with a team and working across departments.
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
                  Starting a project, documenting it, and planning resources.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Managing risk so projects stay on track and meet their SLAs.
                </li>
                <li className="text-sm text-slate-600 flex gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  Tracking progress with data and reporting it to leadership.
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
            <h2 className="text-4xl font-bold">Let's Talk.</h2>
            <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg">
              I'm looking for work where I can listen to users, turn what they need into features, and help the team that builds them. That could be product, program management, or something in between. If that sounds like a fit, reach out.
            </p>

            <div className="space-y-4">
              <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Open to Relocation & Remote Roles</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['California', 'Washington', 'Idaho', 'Colorado', 'Oregon', 'New York', 'Boston', 'Minnesota'].map((loc) => (
                  <span key={loc} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="/jordan-bastian-resume.pdf" 
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
                <button 
                  onClick={copyEmail} 
                  className="bg-slate-800 p-4 rounded-xl hover:bg-emerald-600 transition-colors border border-slate-700 relative group"
                  aria-label="Copy email address"
                >
                  <Mail className="w-6 h-6" />
                  {copied && (
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs py-1 px-3 rounded-lg shadow-xl animate-bounce whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
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

// Habit: screenshots from the running prototype
const HABIT_SHOTS = [
  { src: '/images/habit/plaza.jpg', label: 'The Plaza', alt: 'Habit: avatars chatting by the fountain in the Plaza, with chat on the right', caption: 'The Plaza, a little New York where everyone arrives. The storefronts along the skyline are doors into communities.' },
  { src: '/images/habit/plaza-night.jpg', label: 'Night', alt: 'Habit: the Plaza at night with the skyline lit up', caption: 'The world runs on a shared 24-minute day, and the skyline lights up at dusk.' },
  { src: '/images/habit/board.jpg', label: 'Board', alt: 'Habit: the Plaza board with threads, votes and sort filters', caption: 'Every room has a board. Threads stay, with votes and filters for Latest, Hot and Top.' },
  { src: '/images/habit/signup.jpg', label: 'Sign-up', alt: 'Habit: the sign-up dialog with username, password, birth year and a character creator', caption: 'Sign-up only appears when you try to talk: a username, a password and your character. No email or phone.' },
  { src: '/images/habit/arcade.jpg', label: 'Arcade', alt: 'Habit: the Gaming room, a neon arcade with cabinets and a couch', caption: 'Gaming is a neon arcade with cabinets you can play.' },
  { src: '/images/habit/gym.jpg', label: 'Gym', alt: 'Habit: the Gym room with treadmills, weights and a punching bag', caption: 'The Gym: punching bags, weights and leg-day talk.' },
];

function HabitShowcase() {
  const [active, setActive] = useState(0);
  const shot = HABIT_SHOTS[active];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group mb-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 mb-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" /> Founder · Working prototype
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
            Habit <span className="text-slate-400 font-medium text-2xl md:text-3xl">Walk in. Say hi.</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            A cosy virtual world where every chatroom is a real room. You can see who's inside before you go in, hang out without talking, and join the conversation when you're ready. I started it because joining a Discord server full of strangers feels like crashing a party, and I wanted to find out if a place could make that first hello easier.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Go', 'WebSockets', 'PostgreSQL', 'Canvas 2D', 'JavaScript', 'Argon2id'].map((t) => (
              <span key={t} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:pt-14">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-pink-50 p-1 rounded-md">
              <Users className="w-4 h-4 text-pink-600" />
            </div>
            <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">Designed around the first 60 seconds.</span> Guests can look around and peek through doors without an account. Sign-up only appears when you try to talk. The target I design against: from a shared link to a first message in under a minute.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-violet-50 p-1 rounded-md">
              <Layers className="w-4 h-4 text-violet-600" />
            </div>
            <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">A renderer written from scratch.</span> The world is an isometric voxel renderer on Canvas 2D with no framework. Characters are cached by look, direction and pose, so a crowd of about 255 people draws in roughly 7 ms.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-amber-50 p-1 rounded-md">
              <MessageCircle className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">Live chat, plus boards that last.</span> Speech bubbles and a chat log for the moment, and a board in every room with votes and reply notifications. A Go server moves every avatar on its own tick over WebSockets, and Postgres keeps accounts and threads.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-emerald-50 p-1 rounded-md">
              <Lock className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-slate-600 text-base"><span className="font-semibold text-slate-900">Private by default.</span> No email or phone number. Anonymous names stay the same within a room for a day but can't be linked across rooms, and teen accounts get a personal-info filter.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_220px] gap-6 items-start">
        <figure className="min-w-0">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800">
              <span className="w-3 h-3 rounded-full bg-slate-600" />
              <span className="w-3 h-3 rounded-full bg-slate-600" />
              <span className="w-3 h-3 rounded-full bg-slate-600" />
              <span className="ml-3 text-xs font-medium text-slate-400">Habit · {shot.label}</span>
            </div>
            <img src={shot.src} alt={shot.alt} className="w-full aspect-video object-cover bg-slate-100" />
          </div>
          <figcaption className="mt-3 text-sm text-slate-500 min-h-[2.5rem]">{shot.caption}</figcaption>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Habit screenshots">
            {HABIT_SHOTS.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`w-24 sm:w-28 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${i === active ? 'border-pink-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={s.src} alt="" loading="lazy" className="w-full aspect-video object-cover" />
                <span className="block text-[11px] font-semibold text-slate-600 bg-slate-50 py-1">{s.label}</span>
              </button>
            ))}
          </div>
        </figure>
        <figure className="hidden lg:block">
          <div className="rounded-[2rem] overflow-hidden border-8 border-slate-900 bg-slate-900 shadow-2xl">
            <img src="/images/habit/phone.jpg" alt="Habit on a phone: the Plaza with a first-stops checklist and chat as a bottom sheet" loading="lazy" className="w-full" />
          </div>
          <figcaption className="mt-3 text-sm text-slate-500 text-center">On phones, chat becomes a bottom sheet.</figcaption>
        </figure>
      </div>
    </div>
  );
}

// Hobby Card Component
function HobbyCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <h4 className="font-bold text-slate-800">{title}</h4>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
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