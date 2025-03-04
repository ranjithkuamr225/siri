import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Search, Users, Sparkles, ArrowRight, Lightbulb, BookCheck, GraduationCap, Award, Globe, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-950 dark:to-dark-background opacity-50 dark:opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary-400 dark:bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-20 w-48 h-48 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 rounded-full text-primary-700 dark:text-primary-300 font-medium text-sm mb-2">
                The Ultimate Educational Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Learn, Share, <span className="text-primary-600 dark:text-primary-400 relative">
                  Grow
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-300 dark:text-primary-700" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,0 Q50,12 100,0" fill="currentColor" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                Your central hub for educational materials and resources. Connect with faculty,
                access course content, and enhance your learning experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link
                  to="/register"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/20 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 dark:hover:bg-dark-border transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Students learning together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium">Empower your educational journey</p>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-dark-card p-4 rounded-lg shadow-lg transform rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <BookCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-medium">Course materials</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-6 bg-white dark:bg-dark-card p-4 rounded-lg shadow-lg transform -rotate-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Video className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm font-medium">Video lectures</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-dark-card p-4 rounded-lg shadow-lg transform rotate-12 animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">Global access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md dark:shadow-primary-900/10 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">10k+</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Students</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md dark:shadow-primary-900/10 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">500+</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Courses</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md dark:shadow-primary-900/10 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">250+</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Instructors</p>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md dark:shadow-primary-900/10 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">50+</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 rounded-full text-primary-700 dark:text-primary-300 font-medium text-sm mb-4">
            Powerful Features
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Discover What Makes Us Different</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to enhance your learning experience in one place
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md dark:shadow-primary-900/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-b-4 border-primary-500 dark:border-primary-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Educational Materials</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Access a wide range of course materials, notes, and resources uploaded by faculty.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md dark:shadow-primary-900/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-b-4 border-primary-500 dark:border-primary-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Video Content</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Watch educational videos and lectures from your courses anytime, anywhere.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md dark:shadow-primary-900/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-b-4 border-primary-500 dark:border-primary-700">
            <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">Smart Search</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Find exactly what you need with our powerful search and filtering system.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-dark-background dark:to-dark-card rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 rounded-full text-primary-700 dark:text-primary-300 font-medium text-sm mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to be intuitive and easy to use
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-md dark:shadow-primary-900/10 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-bl-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">For Students</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Access course materials and videos organized by department and subject</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Search across all available content with powerful filtering options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Get notifications for new uploads in your subscribed subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Stream video content directly in the browser without downloads</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-md dark:shadow-primary-900/10 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-bl-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">For Faculty</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Upload and manage course content with easy categorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Organize materials by department, subject, and custom tags</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Track student engagement with detailed analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Manage access permissions for different student groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 rounded-full text-primary-700 dark:text-primary-300 font-medium text-sm mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md dark:shadow-primary-900/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "EduShare has completely transformed how I access course materials. Everything is organized and easy to find!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">JS</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">John Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md dark:shadow-primary-900/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "As a professor, I can easily upload and organize my course materials. My students love how accessible everything is."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">LD</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Lisa Davis</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Engineering Professor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md dark:shadow-primary-900/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "The search functionality is incredible. I can find exactly what I need for my research in seconds."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">MJ</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Michael Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-700 dark:to-blue-700 text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            
            <div className="relative">
              <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students and faculty members already using EduShare to enhance their educational journey.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="bg-primary-700/50 hover:bg-primary-700 text-white border border-white/20 px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                <span className="text-lg font-bold text-gray-800 dark:text-white">EduShare</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The ultimate platform for educational content sharing and management.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Materials</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Videos</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Search</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Departments</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Tutorials</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">support@edushare.com</li>
                <li className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} EduShare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}