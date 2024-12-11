import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SnapFolio</h3>
            <p className="text-sm">Create your professional portfolio in minutes with our easy-to-use templates.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#templates" className="hover:text-white">Templates</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/benihin-Dev" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="https://wa.me/0772206069" className="hover:text-white"><FaWhatsapp className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/benihin-mahendra" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} SnapFolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}