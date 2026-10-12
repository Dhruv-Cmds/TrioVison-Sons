import Navbar from "./Navbar"
import Footer from "./Footer"

const roles = [
    { title: "Content Producer", team: "7hive-media", location: "Remote / India", type: "Full-time" },
    { title: "Creative Strategist", team: "7hive-media", location: "Remote / India", type: "Full-time" },
    { title: "Operations Associate", team: "TrioVision", location: "Mumbai / Hybrid", type: "Full-time" },
]

const Careers = () => (
    <div className="min-h-screen bg-neutral-900 text-white font-poppins">
        <Navbar />

        <main>
            <section className="bg-black">
                <div className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">Careers at TrioVision</p>
                    <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Build work that keeps moving.</h1>
                    <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[1fr_1fr]">
                        <p className="max-w-xl text-xl leading-9 text-white/80 sm:text-2xl">We are a small, ambitious team building responsible businesses and creative platforms with a long view.</p>
                        <p className="max-w-xl leading-7 text-white/55">Bring your point of view, your craft, and your willingness to do the thoughtful work in between the big moments. There is room here to learn, contribute, and shape what comes next.</p>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Open roles</p>
                        <h2 className="mt-5 text-3xl font-medium sm:text-5xl">Find your next chapter.</h2>
                    </div>
                    <div className="border-t border-white/20">
                        {roles.map((role) => (
                            <a key={role.title} href={`mailto:careers@triovision.com?subject=${encodeURIComponent(role.title)}`} className="group grid gap-4 border-b border-white/20 py-7 transition-colors hover:bg-white/4 sm:grid-cols-[1fr_auto] sm:items-center">
                                <div>
                                    <h3 className="text-xl font-medium transition-colors group-hover:text-white/70 sm:text-2xl">{role.title}</h3>
                                    <p className="mt-2 text-sm text-white/50">{role.team} · {role.location}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-white/50"><span>{role.type}</span><span className="text-xl text-white transition-transform group-hover:translate-x-1">↗</span></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-black">
                <div className="mx-auto grid w-full max-w-336 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-3 lg:px-8">
                    <div><p className="text-sm uppercase tracking-[0.3em] text-white/50">How we work</p></div>
                    <p className="text-2xl leading-9 text-white/85">High trust. Clear ownership. Good questions before fast answers.</p>
                    <p className="leading-7 text-white/55">We care about the quality of the result and the way we get there. Different perspectives are welcome, feedback is direct, and sustainable pace matters.</p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="flex flex-col justify-between gap-8 border border-white/15 p-8 sm:p-12 lg:flex-row lg:items-end">
                    <div><p className="text-sm uppercase tracking-[0.3em] text-white/50">Don’t see your role?</p><h2 className="mt-5 max-w-2xl text-3xl font-medium sm:text-5xl">Tell us what you would like to build.</h2></div>
                    <a href="mailto:careers@triovision.com" className="shrink-0 border-b border-white pb-2 text-sm uppercase tracking-[0.2em] transition-colors hover:border-white/50 hover:text-white/60">Say hello <span aria-hidden="true">↗</span></a>
                </div>
            </section>
        </main>

        <Footer />
    </div>
)

export default Careers
