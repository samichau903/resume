/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sun, Moon, FileText, Menu, X, ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  printMode: boolean;
  setPrintMode: (print: boolean) => void;
}

export default function Header({ darkMode, setDarkMode, printMode, setPrintMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Spotlight", href: "#spotlight" },
    { label: "A/B Test Playground", href: "#ab-playground" },
    { label: "Experience", href: "#experience" },
    { label: "Skills Matrix", href: "#skills" },
    { label: "Publications", href: "#publications" }
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        printMode
          ? "hidden"
          : scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/30 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Headline */}
          <div className="flex flex-col">
            <a
              href="#spotlight"
              onClick={(e) => handleScrollClick(e, "#spotlight")}
              className="text-lg font-display font-bold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              id="header-logo-lnk"
            >
              {PERSONAL_DETAILS.name}
            </a>
            <span className="text-xs font-mono text-indigo-650 dark:text-indigo-400 tracking-wider">
              {PERSONAL_DETAILS.title}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="px-4 py-2 text-sm font-sans font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-md"
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="header-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-650 dark:text-slate-300 hover:text-indigo-650 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-full transition-all border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Print / Export Mode */}
            <button
              id="header-print-toggle"
              onClick={() => setPrintMode(!printMode)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded border transition-all ${
                printMode
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-650 dark:hover:text-indigo-300 text-slate-600 dark:text-slate-300"
              }`}
              title="Convert to Standard Print View"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Print Friendly</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-theme-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-605 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-450 rounded-full border border-slate-200 dark:border-slate-800"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-nav-panel">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                id={`mob-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
              <button
                id="mobile-print-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPrintMode(true);
                }}
                className="flex items-center gap-2 px-4 py-2.5 w-full text-sm font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Switch to Print View</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
