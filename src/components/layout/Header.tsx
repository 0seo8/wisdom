"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "@/constants/navigation";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-header-bg)] shadow-sm"
          : "bg-[var(--color-header-bg)]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo variant="default" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.children &&
                  item.children.some((child) => child.href === pathname));

              return (
                <div
                  key={item.label}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors relative ${
                      isActive
                        ? "text-[var(--color-primary)] font-bold"
                        : "text-gray-600 hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Active Indicator positioned at the bottom of the header item */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--color-primary)] rounded-t-sm"></span>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-3 min-w-[200px] overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-6 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                              pathname === child.href
                                ? "text-[var(--color-primary)] font-bold bg-gray-50"
                                : "text-gray-600 hover:text-[var(--color-primary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[var(--color-accent)] transition-colors"
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <MobileMenu
          items={navigation}
          onClose={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
}

function MobileMenu({ items, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-20">
      <nav className="container py-4">
        {items.map((item) => (
          <div key={item.label} className="border-b border-gray-100 last:border-0">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex-1 py-3 text-gray-700 font-medium hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() => toggleExpand(item.label)}
                  className="p-3 text-gray-500 hover:text-[var(--color-accent)]"
                  aria-label="하위 메뉴 펼치기"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedItems.includes(item.label) ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {item.children && expandedItems.includes(item.label) && (
              <div className="pl-4 pb-3 bg-gray-50/50">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={onClose}
                    className="block py-2 text-gray-600 hover:text-[var(--color-accent)]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
