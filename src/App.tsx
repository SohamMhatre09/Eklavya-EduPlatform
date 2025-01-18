import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "./components/AuthContext";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./components/firebase";

import LearningPath from "./components/LearningPath";
import TopicContent from "./components/TopicContent";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative group px-4 py-2 rounded-full transition-all duration-200"
    >
      <div
        className={`flex items-center space-x-2 relative z-10
        ${isActive ? "text-white" : "text-gray-600 hover:text-gray-900"}`}
      >
        {children}
      </div>
      {isActive && (
        <div
          className="absolute inset-0 bg-black rounded-full -z-0 
                      transition-all duration-300 ease-in-out"
        />
      )}
    </Link>
  );
};

interface ProfileDropdownProps {
  user: any;
  handleLogout: () => void;
  handleGoogleLogin: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  user,
  handleLogout,
  handleGoogleLogin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <User className="w-5 h-5" />
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          {user ? (
            <>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleGoogleLogin();
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-2">
                  <img
                    src="./public/google-icon.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </span>
                Continue with Google
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-2 text-black font-semibold text-lg"
              >
                <GraduationCap className="w-6 h-6" />
                <span>Eklavya</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/learning-path">
                <GraduationCap className="w-5 h-5" />
                <span>Learning Path</span>
              </NavLink>
              <ProfileDropdown
                user={user}
                handleLogout={handleLogout}
                handleGoogleLogin={handleGoogleLogin}
              />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/learning-path"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Learning Path
              </Link>
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5 mr-2" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 w-full"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleGoogleLogin();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 w-full"
                >
                  <img
                    src="./public/google-icon.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          {/* Protect the topic and subtopic routes */}
          <Route
            path="/topic/:topicId"
            element={
              <PrivateRoute>
                <TopicContent />
              </PrivateRoute>
            }
          />
          <Route
            path="/topic/:topicId/subtopic/:subtopicId"
            element={
              <PrivateRoute>
                <TopicContent />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;