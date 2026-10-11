import Navbar from "./Navbar"
import Footer from "./Footer"

const AboutUs = () => {
    return (
        <>
            <div id="about" className="min-h-screen flex flex-col scroll-smooth bg-black text-white font-poppins">

                <Navbar />

                <div className="mx-auto mt-8 w-full max-w-336 px-4 sm:mt-10 sm:px-6 lg:px-8">

                    <div className="flex flex-col gap-2 font-medium sm:flex-row sm:gap-4">

                        <span className="text-6xl leading-none sm:text-8xl">T</span>

                        <p className="wrap-break-words text-lg leading-relaxed tracking-wide sm:mt-8 sm:text-2xl sm:tracking-wider">rioVision serves as the central holding and investment entity, guiding and supporting its group companies through strategic leadership, responsible investments, and sustainable business growth.</p>

                    </div>

                    <div className="mt-12 space-y-6 wrap-break-words tracking-wide sm:mt-20">

                        <h1 className="text-xl font-semibold sm:text-2xl">Governance Philosophy</h1>

                        <p className="font-medium">"At TrioVision, our governance philosophy is built on integrity, transparency, accountability, and ethical business practices. We strive to create lasting value by safeguarding the interests of our clients, employees, partners, and all other stakeholders. We are committed to complying with applicable laws and regulations while upholding high standards of professionalism, responsible decision-making, and trust in every aspect of our business."</p>

                        <p>TrioVision’s relationship with its group companies is built on shared values, responsible business practices, and a commitment to sustainable growth. This relationship is guided by:</p>

                        <ul className="list-disc space-y-6 pl-5 tracking-wide">

                            <li>
                                Shareholding in Group Companies: TrioVision serves as the principal investment holding company and promoter of its group companies, supporting their strategic direction and long-term development
                            </li>

                            <li>
                                Ethical Business Practices and Brand Values: Companies associated with TrioVision are expected to uphold high standards of integrity, transparency, accountability, and professional excellence. We encourage responsible business conduct, compliance with applicable laws, and ethical decision-making across all operations, fostering trust among stakeholders and promoting sustainable growth.
                            </li>
                        </ul>

                    </div>

                </div>

                <Footer />

            </div>
        </>
    )
}

export default AboutUs
