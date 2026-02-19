import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Terms of Service - Ultraviolet',
    description: 'Terms of Service for Cube AI Platform',
});

export default function TermsPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
            <div className="text-center text-muted-foreground mb-12">
                <p>Effective Date: February 19, 2026</p>
            </div>

            <div className="space-y-8 text-foreground/90">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. INTRODUCTION</h2>
                    <p className="mb-4">
                        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cube AI Platform (&quot;Platform&quot; or &quot;Services&quot;), a software-as-a-service offering operated by Ultraviolet (&quot;Ultraviolet,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                    </p>
                    <p className="mb-4">
                        By creating an account, accessing, or using the Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">2. DEFINITIONS</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>&quot;Account&quot;</strong> means your registered account on the Platform.</li>
                        <li><strong>&quot;Customer&quot;</strong> means the company or individual who registers for an account to use the Platform.</li>
                        <li><strong>&quot;Customer Data&quot;</strong> means all data, content, and information uploaded, transmitted, or processed through the Platform by you.</li>
                        <li><strong>&quot;Platform&quot;</strong> means the Cube AI Platform and all related services, software, and infrastructure.</li>
                        <li><strong>&quot;Services&quot;</strong> means the hosted Cube AI Platform and associated features provided by Ultraviolet.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">3. ACCOUNT REGISTRATION</h2>
                    <p className="mb-4">
                        You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your Account.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">4. ACCESS AND LICENSE</h2>
                    <p className="mb-4">
                        Ultraviolet grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform in accordance with these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">5. ACCEPTABLE USE</h2>
                    <p className="mb-4">
                        You agree not to use the Platform for any illegal or unauthorized purpose, or in any way that violates these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">6. INTELLECTUAL PROPERTY</h2>
                    <p className="mb-4">
                        The Platform and its original content, features, and functionality are and will remain the exclusive property of Ultraviolet.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">7. TERMINATION</h2>
                    <p className="mb-4">
                        We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">8. LIMITATION OF LIABILITY</h2>
                    <p className="mb-4">
                        In no event shall Ultraviolet be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">9. GOVERNING LAW</h2>
                    <p className="mb-4">
                        These Terms shall be governed and construed in accordance with the laws of Serbia, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">10. CONTACT US</h2>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at <a href="mailto:legal@ultraviolet.rs" className="text-primary hover:underline">legal@ultraviolet.rs</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
