/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Flower2, 
  CalendarRange, 
  ArrowRight, 
  Star, 
  Calendar, 
  MessageCircle, 
  Instagram, 
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`text-2xl font-serif italic transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Flower Log
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-on-surface hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white border-none px-6 py-2 rounded-full font-serif text-lg hover:opacity-90 active:scale-95 transition-all shadow-sm">
            Pre-order
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-on-surface' : 'text-white'} /> : <Menu className={isScrolled ? 'text-on-surface' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-t border-outline-variant/10 shadow-xl p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-xl text-on-surface py-2 border-b border-outline-variant/10"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white w-full py-4 rounded-full font-serif text-xl">
              Pre-order
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1652346072098-cfc2e94d30e7?w=1600&auto=format&fit=crop&q=80"
        alt="Sun-drenched floral atelier"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply transition-all" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative z-10 text-center px-4 max-w-4xl mt-32"
    >
      <h1 className="serif-title text-3xl md:text-6xl text-white drop-shadow-2xl leading-snug mb-8">
        꽃으로 기록하는 당신의 순간,<br />
        <span className="italic font-light">플라워로그</span>
      </h1>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex justify-center mt-12"
      >
        <ChevronDown className="text-white w-10 h-10 opacity-80" />
      </motion.div>
    </motion.div>
  </section>
);

const Story = () => (
  <section id="story" className="py-32 px-6 md:px-12 bg-surface">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <div className="inline-block px-5 py-1.5 rounded-full bg-secondary-container text-secondary text-xs font-bold tracking-[0.2em] mb-10 uppercase">
        Our Philosophy
      </div>
      <h2 className="serif-title text-xl md:text-4xl text-on-surface mb-12 leading-relaxed break-keep">
        <span className="block whitespace-nowrap">꽃은 단순한 장식이 아닌,</span>
        <span className="block whitespace-nowrap">그날의 분위기와 감정을 담는 기록입니다.</span>
      </h2>
      <p className="text-on-surface-variant text-lg md:text-xl leading-loose mb-10 font-light break-keep">
        플라워로그는 자연스러운 선과<br />
        계절의 색을 담아 꽃을 만듭니다.<br /><br />
        꾸며진 아름다움보다<br />
        꽃이 피고 지는 순간의 감동을 전합니다.<br /><br />
        당신의 소중한 순간을<br />
        꽃으로 기록해드립니다.
      </p>
      <div className="w-16 h-px bg-primary/30 mx-auto" />
    </motion.div>
  </section>
);

const ServiceCard = ({ title, desc, img, icon: Icon }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-xl"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
    </div>
    <div className="p-10">
      <div className="flex justify-between items-start mb-6">
        <div className="max-w-[70%]">
          <h3 className="serif-title text-2xl md:text-3xl text-on-surface mb-3">{title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="text-primary w-8 h-8" />
        </div>
      </div>
      <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
        Learn More <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 px-6 md:px-12 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <ServiceCard
          title="Bouquet Pre-order"
          desc="일상의 기념일을 특별하게 채우는 맞춤 제작 부케"
          img="https://images.unsplash.com/photo-1522231192900-4fbd354ff773?w=1200&auto=format&fit=crop&q=80"
          icon={Flower2}
        />
        <ServiceCard
          title="One-day Class"
          desc="꽃과 함께 호흡하며 나만의 감각을 깨우는 시간"
          img="https://images.unsplash.com/photo-1712560631952-cb35d4a3872a?w=1200&auto=format&fit=crop&q=80"
          icon={CalendarRange}
        />
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1580547262433-a81fcc58b082?w=1200&auto=format&fit=crop&q=80', alt: 'Yellow', size: 'square' },
    { src: 'https://images.unsplash.com/photo-1620012252641-c66abc865496?w=1200&auto=format&fit=crop&q=80', alt: 'Tulips', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1747555727200-c5333d7a9446?w=1200&auto=format&fit=crop&q=80', alt: 'White Roses', size: 'square' },
    { src: 'https://images.unsplash.com/photo-1657568929885-0f858cd7fb69?w=1200&auto=format&fit=crop&q=80', alt: 'Hydrangea', size: 'square' },
    { src: 'https://images.unsplash.com/photo-1571226596652-17a84cc563d5?w=1200&auto=format&fit=crop&q=80', alt: 'Pink flowers', size: 'square' },
  ];

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="serif-title text-4xl md:text-5xl mb-6">Gallery of Emotions</h2>
            <p className="text-on-surface-variant text-lg">플라워로그가 기록한 계절의 단편들입니다.</p>
          </div>
          <div className="hidden md:block w-32 h-px bg-outline-variant" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden relative group ${img.size === 'tall' ? 'md:row-span-2' : 'aspect-square'}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-zoom-in" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Review = ({ content, author, rating = 5 }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/20 shadow-sm"
  >
    <div className="flex text-primary mb-6 gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-primary' : 'text-primary/30'}`} 
        />
      ))}
    </div>
    <p className="text-on-surface text-lg leading-relaxed mb-8 italic">"{content}"</p>
    <div className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
      <div className="w-6 h-px bg-primary/40" />
      {author}
    </div>
  </motion.div>
);

const Reviews = () => {
  const allReviews = [
    {
      content: "결혼기념일 부케를 주문했는데, 제가 원했던 무드보다 훨씬 더 아름답게 제작해주셨어요. 상담도 너무 친절하셔서 감동이었습니다.",
      author: "김사랑 님"
    },
    {
      content: "원데이 클래스 들었는데, 꽃을 만지는 내내 힐링되는 기분이었어요. 선생님의 감각을 배울 수 있어 행복한 시간이었습니다.",
      author: "이정민 님"
    },
    {
      content: "친구 생일 선물로 배송 부탁드렸는데 포장부터 카드까지 정성이 가득 느껴져서 받는 사람도 보내는 사람도 모두 만족했습니다.",
      author: "박지우 님",
      rating: 4.5
    },
    {
      content: "꽃의 색감이 정말 오묘하고 예뻐요. 다른 곳에서는 볼 수 없는 유니크한 선이 느껴져서 매번 주문하게 됩니다.",
      author: "최유진 님"
    }
  ];

  // Repeat reviews for seamless scrolling
  const displayReviews = [...allReviews, ...allReviews];

  return (
    <section id="reviews" className="py-32 bg-surface-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="serif-title text-4xl md:text-5xl text-center italic text-primary">Customer Stories</h2>
      </div>
      
      <div className="relative">
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {displayReviews.map((review, i) => (
            <div key={i} className="w-[300px] md:w-[450px] flex-shrink-0">
              <Review {...review} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-40 px-6 md:px-12 bg-surface relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="serif-title text-4xl md:text-6xl mb-10">당신의 기록을 시작해보세요</h2>
      <p className="text-on-surface-variant text-xl mb-16 font-light">예약 문의 및 클래스 상담은 아래 버튼을 통해 빠르게 도와드립니다.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="w-full sm:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20">
          Pre-order Now <Calendar className="w-6 h-6" />
        </button>
        <button className="w-full sm:w-auto px-12 py-5 bg-secondary-container text-secondary rounded-full font-bold text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-md">
          KakaoTalk <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
);

const HistoryItem = ({ date, title, desc }: any) => (
  <div className="relative">
    <div className="absolute -left-12 mt-1 w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center z-10">
      <div className="w-3 h-3 bg-secondary rounded-full" />
    </div>
    <div className="text-sm font-extrabold text-secondary mb-2 tracking-wider">{date}</div>
    <h4 className="serif-title text-2xl mb-3">{title}</h4>
    <p className="text-on-surface-variant leading-relaxed">{desc}</p>
  </div>
);

const History = () => (
  <section className="py-24 px-6 md:px-12 bg-surface-container-low border-t border-outline-variant/10">
    <div className="max-w-2xl mx-auto">
      <h3 className="serif-title text-3xl mb-16 text-center text-on-surface-variant italic font-light opacity-60">Flower History</h3>
      <div className="relative pl-12 space-y-16 border-l border-outline-variant/30">
        <HistoryItem
          date="2024. 05. 14"
          title="Summer Breeze Collection Launched"
          desc="여름의 싱그러움을 담은 새로운 시즌 콜렉션이 시작되었습니다."
        />
        <HistoryItem
          date="2024. 03. 20"
          title="Spring Workshop Series"
          desc="봄꽃의 우아함을 배우는 튤립 원데이 클래스가 성료되었습니다."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-16 px-6 md:px-12 bg-white border-t border-outline-variant/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
      <div>
        <div className="text-2xl font-serif italic text-primary mb-6">Flower Log</div>
        <div className="text-on-surface-variant text-sm space-y-2 font-medium">
          <p>서울특별시 성동구 성수동 123-45 플라워로그 아틀리에</p>
          <p>Tel: 010-1234-5678 | Email: hello@flowerlog.com</p>
        </div>
      </div>
      <div className="flex gap-8">
        {[
          { name: 'Instagram', icon: Instagram, href: '#' },
          { name: 'KakaoTalk', icon: MessageCircle, href: '#' },
          { name: 'Location', icon: MapPin, href: '#' },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-semibold"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant/40 text-xs tracking-widest">
      © 2024 Flower Log. Hand-tied with love.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-primary">
      <Navbar />
      <Hero />
      <Story />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <History />
      <Footer />
    </div>
  );
}
