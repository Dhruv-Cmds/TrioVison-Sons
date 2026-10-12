import Navbar from "./Navbar"
import Footer from "./Footer"

const stories = [
    { date: "October 2026", category: "Inside TrioVision", title: "Building the systems behind better creative work", text: "A look at the principles shaping how we support creators and the teams around them." },
    { date: "September 2026", category: "Perspective", title: "Why sustainable growth starts with clarity", text: "The habits that help ambitious businesses make better decisions over the long term." },
    { date: "August 2026", category: "7hive-media", title: "From first idea to final upload", text: "What an end-to-end creative partnership looks like behind the scenes." },
]

const Newsroom = () => (
    <div className="min-h-screen bg-black text-white font-poppins">
        <Navbar />

        <main>
            <section className="border-b border-white/10">
                <div className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">Newsroom</p>
                    <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Ideas, updates, and the work behind the work.</h1>
                    <p className="mt-10 max-w-2xl text-lg leading-8 text-white/65 sm:text-2xl sm:leading-10">A closer look at TrioVision, our group companies, and the people building what comes next.</p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm uppercase tracking-[0.3em] text-white/50">Latest stories</p><h2 className="mt-4 text-3xl font-medium sm:text-5xl">What we’re thinking about.</h2></div><p className="max-w-sm text-sm leading-6 text-white/50">Perspectives from across our business and community.</p></div>
                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    {stories.map((story, index) => (
                        <article key={story.title} className={`${index === 0 ? "lg:col-span-2" : ""} group flex min-h-96 flex-col justify-between border border-white/15 bg-neutral-900 p-6 transition-colors hover:border-white/40 sm:p-8`}>
                            <div><div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/40"><span>{story.category}</span><span>{story.date}</span></div><h3 className={`${index === 0 ? "sm:max-w-2xl sm:text-4xl" : "sm:text-3xl"} mt-16 max-w-xl text-2xl font-medium leading-tight`}>{story.title}</h3><p className="mt-5 max-w-lg leading-7 text-white/55">{story.text}</p></div>
                            <a href="mailto:triovisioncontact@gmail.com" className="mt-10 inline-flex items-center gap-3 text-sm text-white/70 transition-colors group-hover:text-white">Read story <span aria-hidden="true">↗</span></a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-white/10 bg-neutral-900">
                <div className="mx-auto grid w-full max-w-336 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:px-8"><div><p className="text-sm uppercase tracking-[0.3em] text-white/50">Media enquiries</p><h2 className="mt-4 text-3xl font-medium sm:text-4xl">Need more information?</h2></div><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><p className="max-w-md leading-7 text-white/60">For interviews, company information, or partnership enquiries, our team would be happy to help.</p><a href="mailto:triovisioncontact@gmail.com" className="shrink-0 border-b border-white pb-2 text-sm uppercase tracking-[0.2em] hover:border-white/50 hover:text-white/60">Contact press <span aria-hidden="true">↗</span></a></div></div>
            </section>
        </main>

        <Footer />
    </div>
)

export default Newsroom
