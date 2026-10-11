import Navbar from "./Navbar"
import Footer from "./Footer"

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-black text-white font-poppins">
            <Navbar />

            <main className="mx-auto w-full max-w-336 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">Legal</p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Terms of Use</h1>
                    <p className="mt-6 text-sm text-white/55">Last updated: October 11, 2026</p>
                </div>

                <div className="mt-14 max-w-3xl space-y-10 text-white/75 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_li]:leading-7">
                    <section>
                        <h2>1. Acceptance of these terms</h2>
                        <p className="mt-4">By accessing or using the TrioVision website, you agree to these Terms of Use. If you do not agree, please do not use the website. These terms apply to the website and its general content; separate written agreements may apply to specific services.</p>
                    </section>

                    <section>
                        <h2>2. About the website</h2>
                        <p className="mt-4">TrioVision is a holding and investment entity that guides and supports its group companies. The website provides general information about TrioVision and its business activities, including the services described for 7hive-media.</p>
                    </section>

                    <section>
                        <h2>3. No professional advice or offer</h2>
                        <p className="mt-4">Website content is provided for general information only. It is not legal, financial, investment, tax, employment, or other professional advice, and it does not constitute an offer, solicitation, or guarantee. Please obtain appropriate professional advice before making decisions based on website content.</p>
                    </section>

                    <section>
                        <h2>4. Acceptable use</h2>
                        <p className="mt-4">You agree to use the website lawfully and responsibly. You must not:</p>
                        <ul className="mt-4">
                            <li>Attempt to gain unauthorised access to the website or its systems.</li>
                            <li>Interfere with the website, introduce malicious code, or use automated tools in a way that burdens our systems.</li>
                            <li>Copy, republish, alter, or commercially exploit content without permission.</li>
                            <li>Use the website to infringe another person’s rights or violate applicable law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Intellectual property</h2>
                        <p className="mt-4">Unless stated otherwise, the website and its text, branding, graphics, layout, and other content belong to TrioVision or its licensors. You may view the website for personal or internal business purposes, but no ownership rights are transferred to you.</p>
                    </section>

                    <section>
                        <h2>6. Third-party links and content</h2>
                        <p className="mt-4">The website may link to third-party websites, social platforms, or creator channels. Those links are provided for convenience. TrioVision does not control or endorse all third-party content and is not responsible for their availability, accuracy, or terms.</p>
                    </section>

                    <section>
                        <h2>7. Availability and disclaimers</h2>
                        <p className="mt-4">We aim to keep the website accurate and available, but content may change and the website may occasionally be unavailable. To the extent permitted by law, the website is provided without warranties of any kind, and we do not guarantee that it will always be complete, current, secure, or error-free.</p>
                    </section>

                    <section>
                        <h2>8. Limitation of liability</h2>
                        <p className="mt-4">To the extent permitted by applicable law, TrioVision and its group companies will not be liable for indirect, incidental, special, or consequential loss arising from your use of, or inability to use, the website or reliance on its content.</p>
                    </section>

                    <section>
                        <h2>9. Changes and governing law</h2>
                        <p className="mt-4">We may update these terms as the website or our business changes. The updated version will be posted on this page with a new “Last updated” date. These terms are governed by the laws applicable in the jurisdiction where TrioVision is established, unless mandatory law requires otherwise.</p>
                    </section>

                    <section>
                        <h2>10. Contact</h2>
                        <p className="mt-4">Questions about these Terms of Use can be sent to <a className="underline underline-offset-4 hover:text-white" href="mailto:info@triovision.com">info@triovision.com</a>.</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default TermsOfUse
