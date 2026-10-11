import Navbar from "./Navbar"
import Footer from "./Footer"

const services = [
    "Content strategy",
    "Recording and production",
    "Video editing",
    "Thumbnail design",
    "Script writing",
    "Channel growth support",
]

const creators = [
    { name: "YouTuber Placeholder 01", category: "Creator / Category" },
    { name: "YouTuber Placeholder 02", category: "Creator / Category" },
    { name: "YouTuber Placeholder 03", category: "Creator / Category" },
]

const Business = () => {
            
    return (
        <section id="business" className="bg-neutral-900 text-white">
            <Navbar />
            <div className="mx-auto w-full max-w-[1344px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="max-w-4xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">Our business</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">7hive-media</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-2xl sm:leading-10">
                        An end-to-end media partner for YouTubers. From the first idea to the final upload, we help creators build better content and stronger channels.
                    </p>
                </div>

                <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                    <div>
                        <h2 className="text-2xl font-semibold sm:text-3xl">Everything behind the channel</h2>
                        <p className="mt-4 leading-7 text-white/65">
                            7hive-media manages the creative workflow so creators can focus on what they do best: connecting with their audience.
                        </p>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                        {services.map((service) => (
                            <li key={service} className="rounded border border-white/15 px-5 py-4 text-white/85 transition-colors hover:border-white/40">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="community" className="mt-24">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/60">Creator community</p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">Creators we work with</h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-white/60">A showcase area for the YouTubers managed by 7hive-media.</p>
                    </div>

                    <div id="newsroom" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {creators.map((creator) => (
                            <article key={creator.name} className="group overflow-hidden border border-white/15 bg-black">
                                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-white/20 via-white/5 to-transparent text-center text-white/50 transition-colors group-hover:from-white/30">
                                    <span className="px-6 text-sm uppercase tracking-[0.2em]">Thumbnail placeholder</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-medium">{creator.name}</h3>
                                    <p className="mt-2 text-sm text-white/50">{creator.category}</p>
                                    <a className="mt-5 inline-block text-sm text-white/70 underline underline-offset-4 hover:text-white" href="#contact">View channel</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Business
