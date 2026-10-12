import Navbar from "./Navbar"
import Footer from "./Footer"

const initiatives = [
    {
        number: "01",
        title: "Create with purpose",
        text: "We back people who use creativity to make ideas easier to understand, share, and act on.",
    },
    {
        number: "02",
        title: "Learn in public",
        text: "Open conversations, useful resources, and honest lessons help every member move forward.",
    },
    {
        number: "03",
        title: "Grow together",
        text: "Our community is built around generous collaboration, not competition for attention.",
    },
]

const Community = () => (
    <div className="min-h-screen bg-black text-white font-poppins">
        <Navbar />

        <main>
            <section className="border-b border-white/10">
                <div className="mx-auto grid w-full max-w-336 gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8 lg:py-36">
                    <div>
                        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">The TrioVision community</p>
                        <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Better ideas happen together.</h1>
                    </div>
                    <div className="lg:pb-2">
                        <p className="max-w-xl text-lg leading-8 text-white/70 sm:text-2xl sm:leading-10">A growing network of creators, builders, partners, and curious minds sharing the energy to make meaningful work.</p>
                        <a href="mailto:triovisioncontact@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-white pb-2 text-sm uppercase tracking-[0.2em] transition-colors hover:border-white/50 hover:text-white/70">Join the conversation <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50">What brings us together</p>
                        <h2 className="mt-5 max-w-sm text-3xl font-medium leading-tight sm:text-5xl">A space for momentum.</h2>
                    </div>
                    <div className="grid gap-0 border-t border-white/20">
                        {initiatives.map((initiative) => (
                            <article key={initiative.number} className="grid gap-5 border-b border-white/20 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
                                <span className="text-sm text-white/40">{initiative.number}</span>
                                <div>
                                    <h3 className="text-xl font-medium sm:text-2xl">{initiative.title}</h3>
                                    <p className="mt-3 max-w-xl leading-7 text-white/60">{initiative.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
                <div className="relative overflow-hidden bg-neutral-900 px-6 py-12 sm:px-12 sm:py-16 lg:px-20">
                    <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
                    <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border border-white/10" />
                    <p className="relative text-sm uppercase tracking-[0.3em] text-white/50">Community notes</p>
                    <h2 className="relative mt-5 max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">The best work starts with a good question.</h2>
                    <p className="relative mt-6 max-w-xl leading-7 text-white/60">Follow along for ideas from our teams and partners on creativity, responsible growth, and the work behind the work.</p>
                    <a href="mailto:triovisioncontact@gmail.com?subject=Community%20updates" className="relative mt-8 inline-block border border-white/30 px-5 py-3 text-sm transition-colors hover:bg-white hover:text-black">Get community updates</a>
                </div>
            </section>
        </main>

        <Footer />
    </div>
)

export default Community
