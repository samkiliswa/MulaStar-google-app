/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Video, 
  MousePointer2, 
  PenTool, 
  HelpCircle, 
  BookOpen, 
  Gamepad2, 
  DollarSign,
  ChevronRight,
  Star,
  Wallet,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface EarningCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  reward: string;
  category: string;
}

const REGISTER_URL = "https://mulastar.com/register.php?ref=samkiliswa";

const EarningCard: React.FC<EarningCardProps> = ({ icon: Icon, title, description, reward, category }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{category}</span>
    </div>
    <h3 className="text-lg font-bold mb-2 text-neutral-800">{title}</h3>
    <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{description}</p>
    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
      <div className="flex items-center gap-1 text-emerald-600 font-bold">
        <DollarSign size={16} />
        <span>{reward}</span>
      </div>
      <a 
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:text-emerald-600 transition-colors"
      >
        Start <ChevronRight size={16} />
      </a>
    </div>
  </motion.div>
);

export default function App() {
  const [balance, setBalance] = useState(124.50);

  const opportunities = [
    {
      icon: Video,
      title: "Video Rewards",
      description: "Watch TikTok and YouTube videos to earn credits instantly.",
      reward: "0.50 / video",
      category: "Media"
    },
    {
      icon: MousePointer2,
      title: "Ad Clicks",
      description: "Click and view premium advertisements from our global partners.",
      reward: "0.10 / click",
      category: "Ads"
    },
    {
      icon: PenTool,
      title: "Blogging",
      description: "Share your thoughts and earn based on article engagement.",
      reward: "5.00 / post",
      category: "Content"
    },
    {
      icon: HelpCircle,
      title: "Trivia Master",
      description: "Answer daily trivia questions correctly to win the jackpot.",
      reward: "2.00 / quiz",
      category: "Knowledge"
    },
    {
      icon: TrendingUp,
      title: "Forex Tutorials",
      description: "Learn professional trading strategies with our premium guides.",
      reward: "Bonus Access",
      category: "Finance"
    },
    {
      icon: BookOpen,
      title: "E-Book Library",
      description: "Access enlightening e-books on wealth creation and mindset.",
      reward: "Knowledge",
      category: "Education"
    },
    {
      icon: Gamepad2,
      title: "Chess & Draughts",
      description: "Compete in high-stakes matches and win tournament prizes.",
      reward: "10.00 / win",
      category: "Games"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Star fill="currentColor" size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter text-neutral-900">MulaStar</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Dashboard</a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Earnings</a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Academy</a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Support</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-neutral-400 leading-none">Balance</span>
                <span className="text-sm font-bold text-emerald-600">${balance.toFixed(2)}</span>
              </div>
              <a 
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200"
              >
                Withdraw
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-[2rem] overflow-hidden bg-emerald-900 p-8 md:p-16 text-white">
          <div className="relative z-10 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <TrendingUp size={14} />
              <span>New Opportunities Available</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black leading-[0.9] mb-6 tracking-tighter"
            >
              Turn Your Time Into <span className="text-emerald-400 italic">Mula.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-emerald-100/80 mb-8 max-w-lg"
            >
              Join the elite community of earners. From watching videos to mastering Forex, MulaStar is your gateway to financial freedom.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-400 text-emerald-950 px-8 py-4 rounded-2xl font-black text-lg hover:bg-emerald-300 transition-all flex items-center gap-2 group"
              >
                Get Started Now
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                View Tutorials
              </a>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px]" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Wallet size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Total Earned</p>
              <p className="text-2xl font-black text-neutral-900">$1,240.50</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Tasks Completed</p>
              <p className="text-2xl font-black text-neutral-900">482</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Star size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">User Rank</p>
              <p className="text-2xl font-black text-neutral-900">Gold Star</p>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-neutral-900">Earn Opportunities</h2>
              <p className="text-neutral-500">Choose your preferred way to make money today.</p>
            </div>
            <a 
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-emerald-600 hover:underline"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunities.map((opt, idx) => (
              <EarningCard 
                key={idx} 
                icon={opt.icon}
                title={opt.title}
                description={opt.description}
                reward={opt.reward}
                category={opt.category}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-neutral-900 rounded-[2rem] p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Ready to boost your earnings?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Join thousands of users who are already making a living online with MulaStar. Our platform is safe, secure, and pays out daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all"
            >
              Create Free Account
            </a>
            <a 
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-neutral-700 transition-all border border-neutral-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Star fill="currentColor" size={16} />
              </div>
              <span className="text-lg font-black tracking-tighter text-neutral-900">MulaStar</span>
            </div>
            <p className="text-sm text-neutral-500">© 2026 MulaStar. All rights reserved. Make money responsibly.</p>
            <div className="flex gap-6 text-sm font-medium text-neutral-400">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Privacy</a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Terms</a>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
