"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  BarChart3,
  RefreshCw,
  MapPin,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  PieChart,
  Briefcase,
  X,
  Menu,
  ArrowRightLeft,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

type NavItem = {
  name: string;
  icon: any;
  href?: string;
  subItems?: { name: string; href: string }[];
};

const USER_NAV_ITEMS: NavItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  {
    name: "My Wallet",
    icon: Wallet,
    subItems: [
      { name: "All Cards", href: "/dashboard/wallet" },
      { name: "Bank Accounts", href: "/dashboard/wallet/accounts" },
      { name: "Limits & Control", href: "/dashboard/wallet/limits" },
    ],
  },
  {
    name: "Transactions",
    icon: CreditCard,
    subItems: [
      { name: "History", href: "/dashboard/transactions" },
      { name: "Scheduled", href: "/dashboard/transactions/scheduled" },
      { name: "Invoices", href: "/dashboard/transactions/invoices" },
    ],
  },
  {
    name: "Investments",
    icon: PieChart,
    subItems: [
      { name: "Portfolio", href: "/dashboard/investments" },
      { name: "Stocks & ETFs", href: "/dashboard/investments/stocks" },
      { name: "Crypto", href: "/dashboard/investments/crypto" },
    ],
  },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  {
    name: "Services",
    icon: Briefcase,
    subItems: [
      { name: "Loans", href: "/dashboard/services/loans" },
      { name: "Insurance", href: "/dashboard/services/insurance" },
    ],
  },
  { name: "Payments", icon: ArrowRightLeft, href: "/dashboard/transfers" },
  { name: "Exchange", icon: RefreshCw, href: "/dashboard/exchange" },
  { name: "ATM Map", icon: MapPin, href: "/dashboard/map" },
  { name: "Support", icon: MessageCircle, href: "/dashboard/support" },
  {
    name: "Settings",
    icon: Settings,
    subItems: [
      { name: "Profile", href: "/dashboard/settings" },
      { name: "Security", href: "/dashboard/settings/security" },
    ],
  },
];

const ADMIN_NAV_ITEMS: NavItem[] = [
  { name: "Admin Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
  { name: "User Management", icon: Briefcase, href: "/dashboard/admin/users" },
  {
    name: "System Ledger",
    icon: CreditCard,
    href: "/dashboard/admin/transactions",
  },
  { name: "Platform Logs", icon: BarChart3, href: "/dashboard/admin/logs" },
  { name: "Settings", icon: Settings, href: "/dashboard/admin/settings" },
];

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
  collapsed = false,
  setCollapsed,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // MOCK ROLE TOGGLE - In real app, get this from Session
  const [isAdmin, setIsAdmin] = useState(false);

  const navItems = isAdmin ? ADMIN_NAV_ITEMS : USER_NAV_ITEMS;

  const toggleExpand = (name: string) => {
    if (collapsed && setCollapsed) {
      setCollapsed(false);
      setTimeout(() => {
        setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
      }, 50);
    } else {
      setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full 
          bg-[#1C1C1C]/95 backdrop-blur-xl border-r border-[#262626]
          transition-all duration-300 ease-in-out
          flex flex-col
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"}
          ${collapsed ? "lg:w-20" : "lg:w-64"}
        `}
      >
        <div className={`p-6 ${collapsed ? "px-4" : ""}`}>
          {/* Logo */}
          <div
            className={`flex items-center ${collapsed ? "justify-center flex-col gap-4" : "justify-between"} mb-8`}
          >
            <div
              className={`flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}
            >
              <Image
                src="/images/logo.svg"
                alt="YourBank Logo"
                width={30}
                height={30}
              />
              {!collapsed && (
                <Image
                  src="/images/YourBanK.svg"
                  alt="YourBank"
                  width={83}
                  height={13}
                  className="transition-opacity duration-300"
                />
              )}
            </div>

            {/* Desktop Toggle Button */}
            <button
              onClick={() => setCollapsed && setCollapsed(!collapsed)}
              className={`hidden lg:flex items-center justify-center text-[#59595A] hover:text-white transition-colors ${collapsed ? "mt-2" : ""}`}
            >
              {collapsed ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 overflow-x-hidden space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const hasSub = !!item.subItems;
              const isActive =
                pathname === item.href ||
                item.subItems?.some((sub) => pathname === sub.href);
              const isExpanded = expanded[item.name];

              return (
                <div key={item.name} className="mb-1">
                  {hasSub ? (
                    // Item with Submenu
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className={`
                          w-full flex items-center ${collapsed ? "justify-center px-2" : "justify-between px-4"} py-3 rounded-xl transition-all duration-200
                          ${isActive ? "bg-[#CAFF33] text-black" : "text-[#B3B3B3] hover:text-white hover:bg-[#262626]/50"}
                        `}
                      title={collapsed ? item.name : ""}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          className={isActive ? "text-primary" : ""}
                        />
                        {!collapsed && (
                          <span className="font-medium text-sm">
                            {item.name}
                          </span>
                        )}
                      </div>
                      {!collapsed &&
                        (isExpanded ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        ))}
                    </button>
                  ) : (
                    // Regular Link
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex items-center ${collapsed ? "justify-center px-2" : "justify-start gap-3 px-4"} py-3 rounded-xl transition-all duration-200
                        ${
                          isActive
                            ? "bg-primary text-black font-semibold "
                            : "text-[#B3B3B3] hover:text-white hover:bg-[#262626]/50"
                        }
                      `}
                      title={collapsed ? item.name : ""}
                    >
                      <Icon size={20} />
                      {!collapsed && (
                        <span className="font-medium text-sm">{item.name}</span>
                      )}
                    </Link>
                  )}

                  {/* Submenu Items */}
                  {hasSub && !collapsed && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                    >
                      <div className="pl-12 pr-2 space-y-1">
                        {item.subItems!.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={`
                                 block py-2 px-3 rounded-lg text-sm transition-colors
                                 ${
                                   pathname === sub.href
                                     ? "text-white bg-[#262626] font-medium border-l-2 border-primary"
                                     : "text-[#888] hover:text-white hover:bg-[#262626]/30"
                                 }
                               `}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Footer / Toggle & Logout */}
        <div
          className={`mt-auto p-4 border-t border-[#262626] flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}
        >
          {/* Role Switcher (Demo Only) */}
          {!collapsed && (
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="text-xs text-[#59595A] hover:text-white mb-2 text-center"
            >
              [Switch to {isAdmin ? "User" : "Admin"} View]
            </button>
          )}

          <button
            className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} px-4 py-3 text-[#B3B3B3] hover:text-red-400 w-full transition-colors`}
          >
            <LogOut size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Sign Out</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
