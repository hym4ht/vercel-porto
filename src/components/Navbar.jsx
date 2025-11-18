import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react'; // Menggunakan ikon untuk tampilan yang lebih baik

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "text-white bg-black/20"
      : "text-slate-300 hover:text-white hover:bg-black/20"; 
  };

  const commonLinkProps = "px-2 py-1 rounded-md text-sm font-medium transition-colors";

  return (
    <nav className="sticky top-8 z-50 mx-auto max-w-6xl rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
     <div className="flex-shrink-0">
  <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold">
    <img 
      src="/figma.png"
      alt="Profile"
      className="w-9 h-9 rounded-full object-cover"
    />
 
              <span>Hym4ht</span>
                 </Link>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={(props) => `${commonLinkProps} ${getNavLinkClass(props)}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={(props) => `${commonLinkProps} ${getNavLinkClass(props)}`}>
                About
              </NavLink>
              <NavLink to="/projects" className={(props) => `${commonLinkProps} ${getNavLinkClass(props)}`}>
                Projects
              </NavLink>
            </div>
          </div>
          
          {/* Tombol CTA Desktop */}
          <div className="hidden md:block">
             <Link 
                to="/contact" 
                className="ml-4 px-4 py-2 rounded-full text-sm font-semibold text-black bg-white hover:bg-slate-200 transition-all"
              >
                Contact Me
              </Link>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={(props) => `block ${commonLinkProps} ${getNavLinkClass(props)}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={(props) => `block ${commonLinkProps} ${getNavLinkClass(props)}`}>
              About
            </NavLink>
            <NavLink to="/projects" className={(props) => `block ${commonLinkProps} ${getNavLinkClass(props)}`}>
              Projects
            </NavLink>
            <Link 
              to="/contact" 
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-black bg-white hover:bg-slate-200 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
