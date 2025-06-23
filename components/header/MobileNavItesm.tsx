"use client";

import { NAV_ITEMS } from "@/constant";
import { INav } from "@/types";
import { cn } from "@/utils/cn";
import { ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import OpenGetQuoteDialog from "../Utils/OpenGetQuoteDialog";
import Image from "next/image";

interface IMobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IMobileNavListProps {
  items: INav[];
  onItemClick: () => void;
  level?: number;
}

function MobileNavList({ items, onItemClick, level = 0 }: IMobileNavListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <div className="flex items-center justify-between">
            <Link
              href={item.slug}
              onClick={onItemClick}
              className={cn(
                "flex-1 flex items-center gap-3 py-3 px-4 rounded-lg font-jost font-[450] text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 relative overflow-hidden group",
                level > 0 && "ml-4 text-sm"
              )}
            >
              <div className="bg-amber-300/20 w-[60%] h-[100%] rotate-[45deg] absolute -left-[100%] transition-all duration-[800ms] group-hover:left-[100%]"></div>
              <span className="relative z-10">{item.name}</span>
            </Link>

            {item.submenu && item.submenu.length > 0 && (
              <button
                onClick={() => toggleExpanded(item.id.toLocaleString())}
                className="p-2 mr-2 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                aria-label={`Toggle ${item.name} submenu`}
              >
                <ChevronDown
                  size={18}
                  className={cn(
                    "transform transition-transform duration-300",
                    expandedItems.has(item.id.toLocaleString()) && "rotate-180"
                  )}
                />
              </button>
            )}
          </div>

          {item.submenu && item.submenu.length > 0 && (
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                expandedItems.has(item.id.toLocaleString())
                  ? "max-h-[50rem] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className="bg-amber-25 rounded-lg p-2 ml-4">
                <MobileNavList
                  items={item.submenu}
                  onItemClick={onItemClick}
                  level={level + 1}
                />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileSidebar({ isOpen, onClose }: IMobileSidebarProps) {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 min-h-screen bg-black/50 flex items-start justify-end backdrop-blur-sm z-[999] transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      >
        {/* Sidebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "h-screen flex flex-col overflow-y-auto w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
            isOpen ? "translate-x-0" : "translate-x-[110%]"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-amber-100">
            <Image
              className="w-[9rem]"
              src={"/logo4.png"}
              height={500}
              width={500}
              alt="Green Space Logo"
            />

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <div className="p-4 flex-1 overflow-y-auto pb-20">
            <nav>
              <MobileNavList items={NAV_ITEMS} onItemClick={onClose} />
            </nav>
            {/* Footer */}
            <div className="p-4 bg-gradient-to-t from-white to-transparent">
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <p className="text-sm text-gray-600 font-jost">
                  Ready to start your project?
                </p>
                <OpenGetQuoteDialog isOpen>
                  <button className="mt-2 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Booking & Consultation
                  </button>
                </OpenGetQuoteDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Menu Toggle Button Component
interface IMobileMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

function MobileMenuButton({ onClick, isOpen }: IMobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors duration-200 relative overflow-hidden group"
      aria-label="Toggle mobile menu"
    >
      <div className="bg-amber-300/20 w-[60%] h-[100%] rotate-[45deg] absolute transition-all duration-[800ms] group-hover:left-[100%]"></div>
      <Menu
        size={24}
        className={cn(
          "text-gray-700 transition-transform duration-300 relative z-10",
          isOpen && "rotate-90"
        )}
      />
    </button>
  );
}

// Main Hook for Mobile Navigation
export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
}

// Export components
export { MobileSidebar, MobileMenuButton };
