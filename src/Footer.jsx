import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="mt-24 border-t border-white/20 bg-black text-white font-poppins">

            <div className="mx-auto flex w-full max-w-336 flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between">
                <div>
                    <div className="text-2xl font-semibold tracking-[0.25em]">TRIOVISION</div>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                        Guiding responsible investment and sustainable business growth.
                    </p>

                    <div className="mt-6 flex items-center gap-5 text-white/70">
                        <a aria-label="Facebook" className="transition-colors hover:text-white" href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" /></svg>
                        </a>
                        <a aria-label="X" className="transition-colors hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">
                            <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-6.6L6.1 22H3l7.3-8.4L2.3 2h6.4l4.5 6 5.7-6Zm-1.1 17.7h1.7L7.8 4.2H6L17.8 19.7Z" /></svg>
                        </a>
                        <a aria-label="YouTube" className="transition-colors hover:text-white" href="https://www.youtube.com" target="_blank" rel="noreferrer">
                            <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
                        </a>
                        <a aria-label="Instagram" className="transition-colors hover:text-white" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16a4.5 4.5 0 0 1 0-9Zm0 2A2.5 2.5 0 1 0 12 14a2.5 2.5 0 0 0 0-4.5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" /></svg>
                        </a>
                        <a aria-label="Email" className="transition-colors hover:text-white" href="mailto:info@triovision.com">
                            <svg aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4" /><path d="m3 6 9 7 9-7" /></svg>
                        </a>
                    </div>
                </div>

                <nav aria-label="Footer navigation">
                    <ul className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/80 md:grid-cols-3">
                        <li><a onClick={() => navigate("/business")} className="cursor-pointer transition-colors hover:text-white">Business</a></li>
                        <li><a onClick={() => navigate("/community")} className="cursor-pointer transition-colors hover:text-white">Community</a></li>
                        <li><a onClick={() => navigate("/about")} className="cursor-pointer transition-colors hover:text-white">About Us</a></li>
                        <li><a onClick={() => navigate("/newsroom")} className="cursor-pointer transition-colors hover:text-white">Newsroom</a></li>
                        <li><a onClick={() => navigate("/careers")} className="cursor-pointer transition-colors hover:text-white">Careers</a></li>
                    </ul>
                </nav>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex w-full max-w-336 flex-col gap-3 px-4 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <span>© {new Date().getFullYear()} TrioVision. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a className="hover:text-white" href="#privacy">Privacy Policy</a>
                        <a className="hover:text-white" href="#terms">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
