"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eventDate: "",
    service: "The Full Roll (Wedding)",
    location: "",
    notes: ""
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API route, EmailJS, etc.)
    console.log("Booking Request Submitted:", formData);
    alert("Thank you! Your booking request has been received.");
  };

 const frames = [
    { 
      id: "24A", 
      tag: "PORTRAIT · LAGOS", 
      src: "/frame1.jpg", // 👈 Points directly to public/frame1.jpg
      alt: "Your custom description here" 
    },
    { 
      id: "25", 
      tag: "WEDDING · GOLDEN HR", 
      src: "/frame2.jpg", 
      alt: "Your custom description here" 
    },
    { 
      id: "26", 
      tag: "WEDDING · STUDIO", 
      src: "/frame3.jpg", 
      alt: "Your custom description here" 
    },
    { 
      id: "27", 
      tag: "SINGLE · NATURAL LIGHT", 
      src: "/frame4.jpg", 
      alt: "Your custom description here" 
    },
    { 
      id: "28", 
      tag: "SINGLE  · STUDIO", 
      src: "/frame5.jpg", 
      alt: "Your custom description here" 
    },
    { 
      id: "29", 
      tag: "POTRAIT · STUDIO", 
      src: "/frame6.jpg", 
      alt: "Your custom description here" 
    },
  ];

  return (
    <>
      {/* NAVIGATION TIMELINE */}
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line">
        <nav className="flex items-center justify-between py-4 px-8 max-w-[1240px] mx-auto">
          
          {/* LOGO ICON & TYPOGRAPHY BESIDE EACH OTHER */}
          <a href="#top" className="flex items-center gap-2 group select-none">
            <div className="h-10 w-10 overflow-hidden relative flex items-center justify-center bg-transparent">
              <Image 
                src="/logo.jpg" 
                alt="Emmy Photography Icon" 
                width={100} 
                height={100}
                priority 
                className="object-contain h-full w-auto mix-blend-multiply scale-[2.2] -translate-x-[14px]" 
              />
            </div>
            <span className="font-serif text-[22px] font-normal tracking-tight flex items-baseline gap-1.5 transition-colors group-hover:text-rust">
              Emmy <em className="italic text-rust font-light">Photography</em>
            </span>
          </a>
          
          <div className={`flex gap-9 items-center max-[880px]:fixed max-[880px]:inset-[73px_0_0_0] max-[880px]:bg-paper max-[880px]:flex-col max-[880px]:items-start max-[880px]:p-8 max-[880px]:gap-6 max-[880px]:transition-all ${isMenuOpen ? 'max-[880px]:flex' : 'max-[880px]:hidden'}`}>
            <a href="#work" onClick={closeMenu} className="text-sm font-medium text-stone hover:text-ink transition-colors">Work</a>
            <a href="#studio" onClick={closeMenu} className="text-sm font-medium text-stone hover:text-ink transition-colors">Studio</a>
            <a href="#packages" onClick={closeMenu} className="text-sm font-medium text-stone hover:text-ink transition-colors">Packages</a>
            <a href="#words" onClick={closeMenu} className="text-sm font-medium text-stone hover:text-ink transition-colors">Words</a>
            <a href="#contact" onClick={closeMenu} className="font-mono text-xs tracking-[0.06em] py-2 px-[18px] border border-ink rounded-[2px] hover:bg-ink hover:text-paper transition-all">
              Book a session
            </a>
          </div>
          
          <button 
            className="hidden max-[880px]:block bg-none border-none text-[22px] cursor-pointer text-ink"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>
      </header>

      <main id="top">
        {/* HERO STRIP */}
        <section className="grid grid-cols-[1.05fr_0.95fr] max-[880px]:grid-cols-1 items-stretch min-h-[calc(100vh-73px)]">
          <div className="flex flex-col justify-center p-16 max-[880px]:py-14 max-[880px]:px-6 max-w-[600px] mx-auto w-full">
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">Portrait &amp; Editorial Photography — Lagos</span>
            <h1 className="font-serif text-[clamp(42px,5.4vw,74px)] font-normal tracking-tight leading-[1.02] my-6">
              Light finds<br />the <i className="italic text-rust font-light">true</i> shot.
            </h1>
            <p className="text-[17px] text-stone max-w-[420px] leading-relaxed mb-8">
              Emmy Photography makes quiet, honest portraits — for people, couples and brands who'd rather be seen than staged.
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <a href="#contact" className="font-mono text-xs tracking-[0.05em] bg-ink text-paper py-4 px-6 rounded-[2px] hover:bg-rust transition-colors">
                Book a session
              </a>
              <a href="#work" className="text-sm font-medium border-b border-ink pb-0.5">See the work ↓</a>
            </div>
          </div>
          <div className="relative overflow-hidden bg-black min-h-[40vh] max-[880px]:h-[56vh]">
            <img 
              src="hero-shot.jpg" 
              alt="Portrait photograph by Emmy Photography"
              className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber/22 to-rust/28 mix-blend-multiply" />
            <span className="absolute left-5 bottom-5 z-10 font-mono text-[11px] text-[#f3eee4] tracking-[0.05em] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
              EMY · 50mm f/1.8 · ISO 200 · KODAK PORTRA
            </span>
          </div>
        </section>

        {/* FILM STRIP GALLERY */}
        <section className="bg-ink text-paper py-28 max-[880px]:py-20 overflow-hidden" id="work">
          <div className="max-w-[1240px] mx-auto px-8 max-[520px]:px-5">
            <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
              <div>
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-amber">Selected Work</span>
                <h2 className="font-serif text-[clamp(30px,3.6vw,44px)] font-normal text-paper tracking-tight mt-2">The strip, uncut.</h2>
              </div>
              <p className="text-paper/60 text-sm max-w-[360px]">
                Six frames pulled straight from recent rolls — portrait, wedding and editorial sessions, unretouched captions included.
              </p>
            </div>
          </div>
          
          <div className="relative py-3.5">
            {/* Top Sprockets */}
            <div className="flex justify-between px-8 max-[520px]:px-5 mb-0.5 gap-1.5 overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <span key={i} className="flex-shrink-0 w-[11px] h-2 bg-paper rounded-[2px] opacity-90" />
              ))}
            </div>
            
            {/* Film Horizontal Strip */}
            <div className="flex gap-2 overflow-x-auto py-4 px-8 max-[520px]:px-5 scrollbar-thin scrollbar-thumb-amber scrollbar-track-transparent">
              {frames.map((frame, index) => (
                <div key={index} className="flex-none w-[270px] max-[520px]:w-[220px] group relative">
                  <div className="w-[270px] max-[520px]:w-[220px] h-[340px] max-[520px]:h-[280px] overflow-hidden bg-black">
                    <img 
                      src={frame.src} 
                      alt={frame.alt} 
                      className="w-full h-full object-cover grayscale contrast-[1.08] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:grayscale-[0.2] group-hover:contrast-[1.05]" 
                    />
                  </div>
                  <div className="font-mono text-[11px] text-paper/65 flex justify-between pt-2.5 px-0.5 tracking-wide">
                    <b className="text-amber font-medium">{frame.id}</b>
                    <span>{frame.tag}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Sprockets */}
            <div className="flex justify-between px-8 max-[520px]:px-5 mt-0.5 gap-1.5 overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <span key={i} className="flex-shrink-0 w-[11px] h-2 bg-paper rounded-[2px] opacity-90" />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT & STUDIO */}
        <section className="py-28 max-[880px]:py-20" id="studio">
          <div className="max-w-[1240px] mx-auto px-8 max-[520px]:px-5 grid grid-cols-[0.85fr_1.15fr] max-[880px]:grid-cols-1 gap-[72px] max-[880px]:gap-14 items-center">
            <div className="relative">
              <img 
                src="/GGB.jpg" 
                alt="Emmy behind Emmy Photography"
                className="w-full aspect-[4/5] object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute bottom-[-18px] left-[-18px] max-[880px]:static max-[880px]:mt-4 bg-paper border border-line p-3.5 font-mono text-[11px] text-stone max-w-[180px] max-[880px]:max-w-none leading-normal">
                Shot on the same Portra 400 stock Emmy's used since her first roll, 2016.
              </div>
            </div>
            
            <div>
              <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">The Studio</span>
              <h2 className="font-serif text-[clamp(30px,3.6vw,44px)] font-normal tracking-tight my-4">Behind Emmy Photography</h2>
              <p className="font-serif text-2xl italic text-ink leading-relaxed mb-5 max-w-[520px]">
                "I don't ask people to perform for the camera. I wait for the moment where they forget it's there."
              </p>
              <p className="text-[17px] leading-relaxed text-stone mb-5 max-w-[520px]">
                Emmy started shooting on borrowed film cameras a decade ago and has spent every year since chasing the same thing: portraits that feel like they belong to the person in them, not the trend of the season. The studio now works across portrait, wedding and brand editorial — always hands-on, always a small team, always Emmy behind the viewfinder.
              </p>
              
              <div className="flex gap-11 mt-10 flex-wrap">
                <div>
                  <b className="font-serif text-3xl block">9 yrs</b>
                  <span className="font-mono text-[11px] text-stone uppercase tracking-[0.06em]">Behind the lens</span>
                </div>
                <div>
                  <b className="font-serif text-3xl block">300+</b>
                  <span className="font-mono text-[11px] text-stone uppercase tracking-[0.06em]">Sessions shot</span>
                </div>
                <div>
                  <b className="font-serif text-3xl block">1</b>
                  <span className="font-mono text-[11px] text-stone uppercase tracking-[0.06em]">Photographer, every time</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE PACKAGES */}
        <section className="py-28 max-[880px]:py-20 bg-[#eae3d4]" id="packages">
          <div className="max-w-[1240px] mx-auto px-8 max-[520px]:px-5">
            <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
              <div>
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">Packages</span>
                <h2 className="font-serif text-[clamp(30px,3.6vw,44px)] font-normal tracking-tight mt-2">Choose your roll.</h2>
              </div>
              <p className="text-stone text-sm max-w-[360px]">
                Every package includes a pre-shoot call, on-location shooting and a private online gallery.
              </p>
            </div>
          </div>
          
          <div className="max-w-[1240px] mx-auto border border-line">
            <div className="grid grid-cols-3 max-[880px]:grid-cols-1 gap-[1px] bg-line">
              {/* Package 1 */}
              <div className="bg-paper p-11 max-[520px]:p-8 flex flex-col">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">Portrait</span>
                <h3 className="font-serif text-2xl my-3">The Single Frame</h3>
                <div className="font-mono text-sm text-rust mb-4">₦120,000 · 1.5 hrs</div>
                <p className="text-sm text-stone leading-relaxed mb-6">A focused solo or headshot session, one location, built for people who need a handful of portraits that actually look like them.</p>
                <ul className="list-none mb-8 flex-1">
                  <li className="text-sm py-[11px] border-t border-line">1–2 outfit changes</li>
                  <li className="text-sm py-[11px] border-t border-line">30 edited images</li>
                  <li className="text-sm py-[11px] border-t border-line">7-day delivery</li>
                </ul>
                <a href="#contact" className="font-mono text-xs tracking-[0.05em] bg-ink text-paper py-4 text-center rounded-[2px] hover:bg-rust transition-colors">Book this</a>
              </div>

              {/* Package 2 (Featured) */}
              <div className="bg-ink text-paper p-11 max-[520px]:p-8 flex flex-col">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-amber">Most booked</span>
                <h3 className="font-serif text-2xl my-3">The Full Roll</h3>
                <div className="font-mono text-sm text-amber mb-4">₦380,000 · Full day</div>
                <p className="text-sm text-paper/65 leading-relaxed mb-6">Weddings, engagements and milestone days — full coverage from first light to last dance, shot solo by Emmy.</p>
                <ul className="list-none mb-8 flex-1">
                  <li className="text-sm py-[11px] border-t border-line-light">Up to 8 hrs coverage</li>
                  <li className="text-sm py-[11px] border-t border-line-light">250+ edited images</li>
                  <li className="text-sm py-[11px] border-t border-line-light">14-day delivery</li>
                  <li className="text-sm py-[11px] border-t border-line-light">Second shooter on request</li>
                </ul>
                <a href="#contact" className="font-mono text-xs tracking-[0.05em] bg-amber text-ink py-4 text-center rounded-[2px] hover:bg-paper transition-colors">Book this</a>
              </div>

              {/* Package 3 */}
              <div className="bg-paper p-11 max-[520px]:p-8 flex flex-col">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">Brand</span>
                <h3 className="font-serif text-2xl my-3">The Contact Sheet</h3>
                <div className="font-mono text-sm text-rust mb-4">₦260,000 · Half day</div>
                <p className="text-sm text-stone leading-relaxed mb-6">Editorial and product photography for brands who want their visuals to look considered, not stocky.</p>
                <ul className="list-none mb-8 flex-1">
                  <li className="text-sm py-[11px] border-t border-line">Up to 4 hrs shooting</li>
                  <li className="text-sm py-[11px] border-t border-line">60 edited images</li>
                  <li className="text-sm py-[11px] border-t border-line">Commercial usage rights</li>
                </ul>
                <a href="#contact" className="font-mono text-xs tracking-[0.05em] bg-ink text-paper py-4 text-center rounded-[2px] hover:bg-rust transition-colors">Book this</a>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section className="py-28 max-[880px]:py-20 bg-paper" id="words">
          <div className="max-w-[1240px] mx-auto px-8 max-[520px]:px-5">
            <div className="mb-14">
              <span className="font-mono text-xs tracking-[0.14em] uppercase text-rust">Contact Sheet</span>
              <h2 className="font-serif text-[clamp(30px,3.6vw,44px)] font-normal tracking-tight mt-2">What clients circle.</h2>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto border-t border-b md:border border-line">
            <div className="grid grid-cols-3 max-[880px]:grid-cols-1">
              <div className="border border-line p-8 relative">
                <span className="absolute top-3.5 right-4 font-mono text-xs text-amber">✕</span>
                <p className="font-serif italic text-lg leading-relaxed my-5">"Emmy photographed our wedding and somehow got every guest looking like themselves, not posed."</p>
                <div className="font-mono text-[11px] text-stone uppercase tracking-wider">Adaeze &amp; Femi — Wedding</div>
              </div>
              <div className="border border-line p-8 relative">
                <span className="absolute top-3.5 right-4 font-mono text-xs text-amber">✕</span>
                <p className="font-serif italic text-lg leading-relaxed my-5">"The headshots stopped looking like headshots. My team actually asked who took them."</p>
                <div className="font-mono text-[11px] text-stone uppercase tracking-wider">Tola O. — Brand shoot</div>
              </div>
              <div className="border border-line p-8 relative">
                <span className="absolute top-3.5 right-4 font-mono text-xs text-amber">✕</span>
                <p className="font-serif italic text-lg leading-relaxed my-5">"First photographer who didn't make me feel like I was being photographed."</p>
                <div className="font-mono text-[11px] text-stone uppercase tracking-wider">Chidinma B. — Portrait</div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING REQUEST FORM INTEGRATION */}
        <section className="bg-rust py-28" id="contact">
          <div className="max-w-[680px] mx-auto px-6">
            <div className="bg-[#fcfaf4] border border-line rounded-2xl p-10 max-[520px]:p-6 shadow-sm text-ink text-left">
              <h2 className="font-serif text-[32px] tracking-tight mb-8 font-normal">
                Request your booking
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none focus:border-rust transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                      Phone / Whatsapp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0800 000 0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none focus:border-rust transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink outline-none focus:border-rust transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink outline-none focus:border-rust transition-all appearance-none cursor-pointer"
                    >
                      <option value="The Single Frame (Portrait)">The Single Frame (Portrait)</option>
                      <option value="The Full Roll (Wedding)">The Full Roll (Wedding)</option>
                      <option value="The Contact Sheet (Brand)">The Contact Sheet (Brand)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Venue or address (or 'studio')"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none focus:border-rust transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-stone">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Skin type, inspo photos, anything I should know"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full bg-[#f4eeda] border border-line/40 rounded-xl px-4 py-3.5 text-sm text-ink placeholder:text-stone/60 outline-none focus:border-rust transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 font-mono text-xs font-bold uppercase tracking-widest bg-ink text-paper py-4 text-center rounded-xl hover:bg-rust transition-colors shadow-md"
                >
                  Send booking request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-paper/70 py-14">
        <div className="max-w-[1240px] mx-auto px-8 max-[520px]:px-5">
          <div className="flex justify-between pb-10 border-b border-line-light flex-wrap gap-7 items-center max-[880px]:flex-col max-[880px]:items-start">
            
            {/* FOOTER LOGO SIDE BY SIDE */}
            <a href="#top" className="flex items-center gap-2 group select-none">
              <div className="h-9 w-9 overflow-hidden relative flex items-center justify-center bg-paper rounded-[2px] p-0.5">
                <Image 
                  src="/logo.jpg" 
                  alt="Emmy Photography Icon" 
                  width={80} 
                  height={80}
                  className="object-contain h-full w-auto mix-blend-multiply scale-[2.2] -translate-x-[11px]" 
                />
              </div>
              <span className="font-serif text-xl text-paper tracking-tight flex items-baseline gap-1.5">
                Emmy <em className="italic text-amber font-light">Photography</em>
              </span>
            </a>

            <div className="flex gap-8 flex-wrap">
              <a href="#work" className="text-sm text-paper/70 hover:text-paper transition-colors">Work</a>
              <a href="#studio" className="text-sm text-paper/70 hover:text-paper transition-colors">Studio</a>
              <a href="#packages" className="text-sm text-paper/70 hover:text-paper transition-colors">Packages</a>
              <a href="#words" className="text-sm text-paper/70 hover:text-paper transition-colors">Words</a>
              <a href="mailto:Emysoworld@gmail.com" className="text-sm text-paper/70 hover:text-paper transition-colors">Email</a>
              <a href="#" className="text-sm text-paper/70 hover:text-paper transition-colors">Instagram</a>
            </div>
          </div>
          <div className="flex justify-between pt-6 font-mono text-[11px] text-paper/45 flex-wrap gap-2.5 max-[880px]:flex-col">
            <span>© 2026 Emmy Photography. All frames reserved.</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </>
  );
}