import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Eye, EyeOff, Lock, User as UserIcon } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userId: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [userId, setUserId] = useState('Vibrant');
  const [password, setPassword] = useState('654321');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userId);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0B2217]">
      {/* Left Hero section with aerial green landscape background */}
      <div
        className="relative md:w-3/5 p-12 flex flex-col justify-between bg-cover bg-center overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,34,23,0.85), rgba(0,107,62,0.75)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')`
        }}
      >
        {/* Top Logo Badge */}
        <div className="relative z-10 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl w-fit border border-white/20 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/90 flex items-center justify-center text-xl font-bold shadow-lg">
            🌿
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">Vibrant LAMS</h1>
            <p className="text-[10px] text-emerald-200 font-medium">Land Asset Management System</p>
          </div>
        </div>

        <div className="relative z-10 my-auto max-w-xl py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            Land Asset Management System
          </h1>
          <p className="text-emerald-100 text-lg font-medium tracking-wide drop-shadow-sm">
            Manage | Monitor | Protect | Grow your land assets with precision intelligence.
          </p>
        </div>

        <div className="relative z-10 text-xs text-emerald-200/80 font-medium">
          © 2024 Vibrant. All rights reserved.
        </div>
      </div>

      {/* Right Login Form section */}
      <div className="md:w-2/5 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          {/* Logo badge recreation */}
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-500/30 flex items-center justify-center text-3xl shadow-md mb-3 text-emerald-700">
              🌿🗺️
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
            <p className="text-xs text-gray-500 mt-1 font-medium">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">User ID</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <UserIcon className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium"
                  placeholder="Enter User ID"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-medium"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
                />
                <span className="text-gray-600 text-xs font-medium">Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to registered email.'); }} className="text-xs text-primary font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 bg-[#006B3E] hover:bg-[#005632] font-semibold text-sm shadow-md">
              Login
            </Button>
          </form>

          <div className="mt-8 text-center text-[11px] text-gray-400 font-medium">
            © 2024 Vibrant. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
