import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Code2, 
  Users, 
  UserPlus, 
  MessageCircle, 
  Send,
  Quote,
  Globe,
  Mail
} from "lucide-react";
import avatarImg from "../assets/avatar.png";
import coverImg from "../assets/cover-bg.png";

const jaatQuotes = [
  "जाट का खून हूँ, झुकना मेरी फितरत में नहीं।",
  "खेती करना हमारा शौक है, और रौब झाड़ना हमारा खानदानी हक।",
  "जाट के ठाठ देख के दुनिया जलती है, और जलना भी चाहिए क्योंकि हमारी चाल ही निराली है।",
  "शेर की दहाड़ और जाट की ललकार, अच्छे-अच्छों के पसीने छुड़ा देती है।",
  "हथियार तो शौक के लिए रखते हैं, खौफ के लिए तो जाट का नाम ही काफी है।",
  "हमारी सादगी ही हमारा श्रृंगार है, और हमारा एटीट्यूड हमारा स्वाभिमान।",
  "जाट की दोस्ती और जाट की दुश्मनी, दोनों ही बड़ी भारी पड़ती हैं।",
  "सिस्टम कोई भी हो, चलेगा तो जाट के हिसाब से ही।",
  "लोहे को लोहा काटता है, और बदमाश को जाट काटता है।",
  "दुनिया कहती है 'रुक जाओ', पर जाट का दिल कहता है 'एक बार और कोशिश कर'।",
  "दब दब के जीना जाट की आदत नहीं, हम तो शान से जीते हैं और शान से मरते हैं।"
];

export default function ProfileCard() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % jaatQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden relative font-sans border border-gray-100"
    >
      {/* Cover Section */}
      <div className="h-40 w-full relative">
        <img 
          src={coverImg} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-8 relative">
        
        {/* Avatar */}
        <div className="relative -mt-20 mb-4 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-full p-1.5 bg-white shadow-xl"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white relative shadow-inner">
              <img 
                src={avatarImg} 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Name & Badge */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">INSANE</h1>
            <span className="text-blue-500 bg-blue-50 rounded-full p-1 shadow-sm" title="Verified">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
          </div>
          <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-1">@dovxo • he/him</p>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 gap-2.5 mb-8 px-2">
          <div className="flex items-center gap-4 text-gray-700 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default">
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
              <MapPin size={20} />
            </div>
            <span className="font-semibold text-sm">India</span>
          </div>
          
          <div className="flex items-center gap-4 text-gray-700 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default">
             <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
              <Code2 size={20} />
            </div>
            <span className="font-semibold text-sm leading-tight">Android App Developer & Python Programmer</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default">
             <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
              <Users size={20} />
            </div>
            <span className="font-semibold text-sm">Jaat Hindu Community</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default">
             <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
              <Globe size={20} />
            </div>
            <a href="https://MrJaat.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:text-emerald-600 transition-colors">MrJaat.com</a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 bg-gray-50/50 p-3 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all cursor-default">
             <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 shadow-sm">
              <Mail size={20} />
            </div>
            <a href="mailto:Mrjaat16x7@gmail.com" className="font-semibold text-sm hover:text-rose-600 transition-colors">Mrjaat16x7@gmail.com</a>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-8 relative py-6 px-8 bg-zinc-900 rounded-3xl overflow-hidden shadow-lg group">
          <div className="absolute top-2 left-4 text-white/10 group-hover:text-white/20 transition-colors">
            <Quote size={40} />
          </div>
          <div className="relative h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center text-white text-lg font-bold leading-relaxed italic" 
                style={{ fontFamily: '"Noto Serif Devanagari", serif' }}
              >
                "{jaatQuotes[currentQuoteIndex]}"
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {jaatQuotes.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${i === currentQuoteIndex ? 'w-4 bg-orange-500' : 'w-1 bg-white/20'}`}
              />
            ))}
          </div>
          <p className="absolute bottom-2 right-4 text-[10px] text-white/30 uppercase tracking-[0.2em] font-black italic">— Jaat</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-gray-200 hover:shadow-2xl transition-all"
            >
              <UserPlus size={18} />
              Add Friend
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-900 text-gray-900 py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-md"
            >
              <MessageCircle size={18} />
              Message
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 pt-4">
            <motion.a
              href="https://t.me/dovxo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.2, color: "#0088cc" }}
              className="text-gray-400 transition-all p-2"
              title="Telegram"
            >
              <Send size={28} strokeWidth={2.5} />
            </motion.a>
            <motion.a
              href="https://MrJaat.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.2, color: "#10b981" }}
              className="text-gray-400 transition-all p-2"
              title="Website"
            >
              <Globe size={28} strokeWidth={2.5} />
            </motion.a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
