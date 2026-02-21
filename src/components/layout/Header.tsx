"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "@/constants/navigation";

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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 bg-[var(--color-header-bg)] ${
        isScrolled ? "shadow-sm" : ""
      }`}
      style={{ padding: "8px 10px" }}
    >
      {/* Inner container matching original max-width: 1300px */}
      <div className="mx-auto flex items-center" style={{ maxWidth: 1300 }}>
        {/* Logo column - 20% width on desktop */}
        <div className="w-[20%] shrink-0 hidden lg:flex items-center">
          <Link href="/">
            <Image
              src="https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/header-logo.png"
              alt="지혜의밭"
              width={214}
              height={130}
              style={{ width: "70px", height: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Mobile logo - visible only on mobile */}
        <div className="lg:hidden flex items-center">
          <Link href="/">
            <Image
              src="https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/header-logo.png"
              alt="지혜의밭"
              width={214}
              height={130}
              style={{ width: "70px", height: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - 80% width, items justified/spread evenly */}
        <nav className="hidden lg:flex items-center w-[80%]">
          <ul className="flex w-full list-none m-0 p-0">
            {navigation.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.children &&
                  item.children.some((child) =>
                    child.href === pathname ||
                    (child.href.includes("#") && pathname === item.href)
                  ));

              return (
                <li
                  key={item.label}
                  className="relative flex-1 flex items-center justify-center"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center justify-center gap-1 w-full
                      py-3 transition-colors duration-200 relative
                      ${isActive ? "text-[#0440F9]" : "text-white hover:text-white/80"}
                    `}
                    style={{
                      fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-4 h-4 ml-1 opacity-90" strokeWidth={2.5} />
                    )}
                  </Link>

                  {/* Underline indicator (pointer-underline style) */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0440F9]
                      transition-all duration-300 ease-out
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                    `}
                  />

                  {/* Hover underline for non-active items */}
                  {!isActive && (
                    <span
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gray-400
                        transition-all duration-300 ease-out
                        ${activeDropdown === item.label ? "w-full opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 pt-0 z-50 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                      style={{ minWidth: "10em" }}
                    >
                      <div className="bg-white shadow-lg py-2" style={{ borderTop: "2px solid #0440F9" }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2 text-[14px] text-gray-700 hover:text-[#0440F9] hover:bg-gray-50 transition-colors font-[var(--font-noto-sans-kr)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto p-2 text-white hover:text-white/80 transition-colors"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
                className="flex-1 py-3 text-gray-700 font-medium hover:text-[#0440F9]"
              >
                {item.label}
              </Link>
              {item.children && (
                <button
                  onClick={() => toggleExpand(item.label)}
                  className="p-3 text-gray-500 hover:text-[#0440F9]"
                  aria-label="하위 메뉴 펼치기"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedItems.includes(item.label) ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.5}
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
                    className="block py-2 text-gray-600 hover:text-[#0440F9]"
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
