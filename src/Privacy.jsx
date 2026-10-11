import Navbar from "./Navbar"
import Footer from "./Footer"

const Privacy = () => {
    return (
        <div className="min-h-screen bg-black text-white font-poppins">
            <Navbar />

            <main className="mx-auto w-full max-w-336 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">Legal</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Privacy Policy</h1>
                    <p className="mt-6 text-sm text-white/55">Last updated: October 11, 2026</p>
                </div>

                <div className="mt-14 max-w-3xl space-y-10 text-white/75 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_li]:leading-7">
                    <section>
                        <h2>1. Overview</h2>
                        <p className="mt-4">TrioVision (“TrioVision”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we handle information when you visit this website, contact us, or interact with our business and media-related services.</p>
                    </section>

                    <section>
                        <h2>2. Information we may collect</h2>
                        <p className="mt-4">Depending on how you use the website, we may receive:</p>
                        <ul className="mt-4">
                            <li>Contact details, such as your name, email address, company, and the contents of your message.</li>
                            <li>Technical information, such as your browser, device type, approximate location, and pages viewed.</li>
                            <li>Information you choose to share when discussing partnerships, creator services, employment, or other business enquiries.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How we use information</h2>
                        <p className="mt-4">We may use information to respond to enquiries, provide and improve our services, operate and secure the website, understand website usage, communicate about relevant business matters, and meet legal or regulatory obligations.</p>
                    </section>

                    <section>
                        <h2>4. Sharing and third parties</h2>
                        <p className="mt-4">We do not sell personal information. We may share information with trusted service providers who help us operate the website or respond to you, with group companies where appropriate for a business enquiry, or where disclosure is required by law. Those parties are expected to handle information only for the relevant purpose.</p>
                    </section>

                    <section>
                        <h2>5. Cookies and analytics</h2>
                        <p className="mt-4">This website may use essential technologies and, if enabled, analytics or similar tools to understand how the site is used. You can control cookies through your browser settings. Disabling some technologies may affect website functionality.</p>
                    </section>

                    <section>
                        <h2>6. Retention and security</h2>
                        <p className="mt-4">We retain information only for as long as reasonably necessary for the purposes described here, including business, legal, accounting, or security requirements. We use reasonable safeguards, but no internet transmission or storage system can be guaranteed to be completely secure.</p>
                    </section>

                    <section>
                        <h2>7. Your choices</h2>
                        <p className="mt-4">You may contact us to ask about, correct, or request deletion of personal information we hold about you, subject to applicable law. You may also opt out of non-essential communications at any time.</p>
                    </section>

                    <section>
                        <h2>8. Children and external links</h2>
                        <p className="mt-4">Our website is not directed to children. The site may contain links to third-party websites or social platforms. Their privacy practices are governed by their own policies, not this one.</p>
                    </section>

                    <section>
                        <h2>9. Contact</h2>
                        <p className="mt-4">Questions about this Privacy Policy can be sent to <a className="underline underline-offset-4 hover:text-white" href="mailto:info@triovision.com">info@triovision.com</a>.</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Privacy
