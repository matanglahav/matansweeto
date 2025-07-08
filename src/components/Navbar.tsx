import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-gradient-to-r from-cyan-500 to-teal-400 shadow-lg px-4 py-2 text-white font-semibold">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-2xl font-extrabold tracking-wide" style={{ fontFamily: "'Montserrat', Quicksand, sans-serif" }}>
          Matan Sweeto
        </Link>
      </div>
      <div className="flex-none">
        {/* Hamburger menu for mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white/90 text-cyan-900 rounded-box w-52 z-50"
          >
            <li>
              <Link href="/" className="hover:text-teal-600 font-medium">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-600 font-medium">About</Link>
            </li>
            <li>
              <Link href="/sponsorship" className="hover:text-teal-600 font-medium">Sponsorship</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-600 font-medium">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Horizontal menu for desktop */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href="/" className="hover:text-yellow-200 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-200 transition">About</Link>
          </li>
          <li>
            <Link href="/sponsorship" className="hover:text-yellow-200 transition">Sponsorship</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-200 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}