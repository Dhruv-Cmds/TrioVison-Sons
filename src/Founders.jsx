import Navbar from "./Navbar"
import Footer from "./Footer"

const founders = [
    {
        name: "Twinspy",
        person: "Naitik Pal & Naman Pal",
        image: "/images/founders/twinspy.jpg",
        alt: "Naitik Pal and Naman Pal, founders of Twinspy",
        story: "Twinspy brings curiosity, experimentation, and a sharp eye for what makes an idea connect with people.",
    },
    {
        name: "aaryanuque",
        person: "Aaryan Tiwari",
        image: "/images/founders/aaryanuque.jpg",
        alt: "Aaryan Tiwari, founder of aaryanuque",
        story: "Aaryan adds a distinct creative voice and a builder’s mindset to the TrioVision journey.",
    },
    {
        name: "daku ad",
        person: "Vikash Yadav",
        image: "/images/founders/daku-ad.jpg",
        alt: "Vikash Yadav, founder of daku ad",
        story: "Vikash brings bold thinking, practical energy, and a commitment to creating work that moves people.",
    },
]

const FounderImage = ({ founder }) => (
    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
        <img
            src={founder.image}
            alt={founder.alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(event) => {
                event.currentTarget.style.display = "none"
                event.currentTarget.nextElementSibling?.classList.remove("hidden")
            }}
        />
        <div className="absolute inset-0 hidden flex items-center justify-center p-8 text-center text-sm leading-6 text-white/55">
            <span>Add image at<br /><strong className="font-medium text-white/80">public{founder.image}</strong></span>
        </div>
    </div>
)

const Founders = () => (
    <div className="min-h-screen bg-black text-white font-poppins">
        <Navbar />

        <main>
            <section className="border-b border-white/10">
                <div className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">The people behind TrioVision</p>
                    <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Built by creators who chose to build together.</h1>
                    <p className="mt-10 max-w-2xl text-lg leading-8 text-white/65 sm:text-2xl sm:leading-10">TrioVision was founded by three independent voices with a shared belief: meaningful companies grow from strong ideas, honest collaboration, and the courage to start.</p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-336 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-white/50">Our founders</p>
                        <h2 className="mt-5 max-w-sm text-3xl font-medium leading-tight sm:text-5xl">Different paths. One long view.</h2>
                    </div>
                    <div className="space-y-6 text-lg leading-8 text-white/65 sm:text-xl">
                        <p>TrioVision brings together the people and ideas behind Twinspy, aaryanuque, and daku ad. What started with individual creative journeys is growing into a shared platform for responsible business and better creative work.</p>
                        <p>Each founder brings a different perspective. Together, they are shaping a company that values imagination, ownership, and sustainable growth.</p>
                    </div>
                </div>

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {founders.map((founder) => (
                        <article key={founder.name} className="group border border-white/15 bg-neutral-900 transition-colors hover:border-white/40">
                            <FounderImage founder={founder} />
                            <div className="p-6 sm:p-8">
                                <p className="text-sm uppercase tracking-[0.2em] text-white/45">{founder.name}</p>
                                <h3 className="mt-3 text-2xl font-medium">{founder.person}</h3>
                                <p className="mt-5 leading-7 text-white/55">{founder.story}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-white/10 bg-neutral-900">
                <div className="mx-auto grid w-full max-w-336 gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">The founders’ story</p>
                    <p className="max-w-3xl text-2xl leading-9 text-white/85 sm:text-3xl sm:leading-10">We believe the best companies leave room for curiosity, craft, and people who care deeply about the work.</p>
                </div>
            </section>
        </main>

        <Footer />
    </div>
)

export default Founders
