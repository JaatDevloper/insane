import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Code2, 
  Users, 
  UserPlus, 
  MessageCircle, 
  Github, 
  Instagram, 
  Send 
} from "lucide-react";
import avatarImg from "../assets/avatar.png";
import coverImg from "../assets/cover-bg.png";

export default function ProfileCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md bg-white rounded-[32px] shadow-xl overflow-hidden relative font-sans"
    >
      {/* Cover Section */}
      <div className="h-36 w-full relative">
        <img 
          src={coverImg} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-8 relative">
        
        {/* Avatar */}
        <div className="relative -mt-16 mb-4 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-full p-1.5 bg-white shadow-lg"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white relative">
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
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">INSANE</h1>
            <span className="text-blue-500 bg-blue-50 rounded-full p-0.5" title="Verified">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium mb-1">@insane_dev • he/him</p>
        </div>

        {/* Info Section */}
        <div className="space-y-3 mb-8 px-2">
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
              <MapPin size={16} />
            </div>
            <span>India</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600 text-sm">
             <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <Code2 size={16} />
            </div>
            <span>Android App Developer & Python Programmer</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 text-sm">
             <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
              <Users size={16} />
            </div>
            <span>Jaat Hindu Community</span>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-8 relative py-4 px-6 bg-amber-50/50 rounded-2xl border border-amber-100/50">
          <p className="text-center text-amber-800/90 text-lg leading-relaxed font-serif italic" style={{ fontFamily: '"Noto Serif Devanagari", serif' }}>
            "जाट का खून हूँ, झुकना मेरी फितरत में नहीं।"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-full font-medium text-sm shadow-md shadow-gray-200 hover:shadow-lg transition-all"
            >
              <UserPlus size={18} />
              Add Friend
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded-full font-medium text-sm hover:bg-gray-50 transition-all"
            >
              <MessageCircle size={18} />
              Message
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-2">
            {[Github, Instagram, Send].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, color: "#ea580c" }}
                className="text-gray-400 transition-colors p-2"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
