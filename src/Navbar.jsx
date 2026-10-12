import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="bg-black p-4 text-lg text-white sm:text-xl">
            <div className="mx-auto flex max-w-336 items-center justify-between  font-poppins">
                <span>Logo</span>

                <button
                    type="button"
                    className="rounded p-2 hover:bg-white/10 md:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block h-0.5 w-6 bg-white" />
                    <span className="mt-1.5 block h-0.5 w-6 bg-white" />
                    <span className="mt-1.5 block h-0.5 w-6 bg-white" />
                </button>

                <nav className={`${menuOpen ? "block" : "hidden"} absolute left-0 right-0 top-17 z-10 bg-black px-4 pb-4 md:static md:block md:bg-transparent md:p-0`}>
                    <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-x-10">
                        <li><a onClick={() => { closeMenu(); navigate("/business"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">Business</a></li>

                        <li><a onClick={() => { closeMenu(); navigate("/community"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">Community</a></li>

                        <li><a onClick={() => { closeMenu(); navigate("/"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">About Us</a></li>

                        <li><a onClick={() => { closeMenu(); navigate("/careers"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">Careers</a></li>

                        <li><a onClick={() => { closeMenu(); navigate("/newsroom"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">Newsroom</a></li>

                        <li><a onClick={() => { closeMenu(); navigate("/founders"); }} className="block rounded-2xl px-3 py-2 hover:bg-gray-50 hover:text-black cursor-pointer">Founders</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
