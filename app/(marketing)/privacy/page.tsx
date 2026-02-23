import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Privacy Policy - Ultraviolet',
    description: 'Privacy Policy for Cube AI Platform',
});

export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
            <p className="text-muted-foreground text-center mb-12">Effective Date: February 19, 2026</p>

            <div className="space-y-8 text-foreground/90">
                <p>
                    This Privacy Policy explains how Ultraviolet (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal data when you use the Cube AI platform (&quot;Platform&quot;). We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
                </p>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. WHO WE ARE</h2>
                    <p>
                        Ultraviolet is a company registered in Serbia with headquarters at Bulevar Arsenija Carnojevica 103, 11000 Belgrade, Serbia. As the data controller under the General Data Protection Regulation (GDPR), we determine the purposes and means of processing your personal data in connection with our Cube AI platform and related services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. WHAT DATA WE COLLECT</h2>
                    <p className="mb-4">We collect and process the following categories of personal data:</p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.1 Account and Identity Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Company name and business information</li>
                                <li>Phone number (if provided)</li>
                                <li>Profile picture (if uploaded)</li>
                                <li>Account preferences and settings</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.2 Authentication and Security Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Username and encrypted passwords</li>
                                <li>API keys and access tokens</li>
                                <li>Login timestamps and session data</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.3 Technical and Usage Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>IP addresses and geolocation data</li>
                                <li>Device information (browser type, operating system, device ID)</li>
                                <li>Platform usage statistics and analytics</li>
                                <li>API calls, requests, and response times</li>
                                <li>Error logs and debugging information</li>
                                <li>Feature usage patterns and user interactions</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.4 Commercial and Billing Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Subscription plans and billing history</li>
                                <li>Invoicing details and tax information</li>
                                <li>Purchase history and transaction records</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">2.5 Communication Data</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Support tickets and correspondence</li>
                                <li>Email communications and responses</li>
                                <li>Chat logs and support interactions</li>
                                <li>Feedback, surveys, and testimonials</li>
                                <li>Marketing communication preferences</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">3. HOW WE USE YOUR DATA</h2>
                    <p className="mb-4">We process your personal data for the following purposes:</p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.1 Service Provision and Platform Operations</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Create and manage user accounts</li>
                                <li>Authenticate users and maintain security</li>
                                <li>Provide access to the Cube AI platform</li>
                                <li>Process and deliver confidential computing services</li>
                                <li>Maintain platform infrastructure and databases</li>
                                <li>Monitor system performance and availability</li>
                                <li>Backup and disaster recovery operations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.2 Customer Support and Communication</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Respond to support requests and technical issues</li>
                                <li>Provide customer service and assistance</li>
                                <li>Send service-related notifications and updates</li>
                                <li>Communicate about account changes or security issues</li>
                                <li>Conduct user training and onboarding</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.3 Billing and Financial Management</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Manage subscription plans and billing cycles</li>
                                <li>Generate invoices and billing statements</li>
                                <li>Maintain financial records for accounting purposes</li>
                                <li>Comply with tax and regulatory requirements</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.4 Platform Improvement and Analytics</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Analyze usage patterns and user behavior</li>
                                <li>Improve platform features and functionality</li>
                                <li>Conduct performance optimization</li>
                                <li>Develop new services and capabilities</li>
                                <li>Generate anonymized statistics and reports</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.5 Security and Fraud Prevention</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Detect and prevent unauthorized access</li>
                                <li>Monitor for suspicious activities</li>
                                <li>Investigate security incidents</li>
                                <li>Implement access controls and authentication</li>
                                <li>Maintain audit logs and compliance records</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.6 Legal Compliance and Regulatory Requirements</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Comply with applicable laws and regulations</li>
                                <li>Respond to legal requests and court orders</li>
                                <li>Maintain records for regulatory audits</li>
                                <li>Report incidents as required by law</li>
                                <li>Protect our legal rights and interests</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">3.7 Marketing and Business Development (with consent)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Send promotional materials and newsletters</li>
                                <li>Conduct market research and surveys</li>
                                <li>Organize events and webinars</li>
                                <li>Develop case studies and testimonials</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">4. LEGAL BASES FOR PROCESSING</h2>
                    <p className="mb-4">
                        Under GDPR Article 6, we process your personal data based on the following legal grounds:
                    </p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">4.1 Contractual Necessity (Article 6(1)(b))</h3>
                            <p className="mb-2">Processing is necessary for the performance of our contract with you, including:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Account creation and management</li>
                                <li>Platform access and service delivery</li>
                                <li>Billing and invoicing</li>
                                <li>Customer support and technical assistance</li>
                                <li>Service-related communications</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">4.2 Legitimate Interests (Article 6(1)(f))</h3>
                            <p className="mb-2">Processing is necessary for our legitimate business interests, which include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Platform security and fraud prevention</li>
                                <li>Service improvement and optimization</li>
                                <li>Business analytics and reporting</li>
                                <li>Network and information security</li>
                                <li>Internal administration and record-keeping</li>
                                <li>Protecting our legal rights and interests</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">4.3 Legal Obligation (Article 6(1)(c))</h3>
                            <p className="mb-2">Processing is necessary to comply with legal obligations, including:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Tax and accounting requirements</li>
                                <li>Regulatory compliance</li>
                                <li>Court orders and legal proceedings</li>
                                <li>Anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
                                <li>Data breach notification obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">4.4 Consent (Article 6(1)(a))</h3>
                            <p className="mb-2">Where we have obtained your explicit consent for:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Marketing communications and newsletters</li>
                                <li>Non-essential cookies and analytics</li>
                                <li>Testimonials and case studies</li>
                                <li>Market research and surveys</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">5. COOKIES AND SIMILAR TECHNOLOGIES</h2>
                    <p className="mb-4">We use cookies and similar technologies to enhance your experience:</p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">5.1 Essential Cookies (No consent required)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Session cookies for authentication and security</li>
                                <li>Login state management</li>
                                <li>Security tokens and CSRF protection</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">5.2 Analytics Cookies (Consent required)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Website usage analytics and user behavior tracking</li>
                                <li>Performance monitoring and optimization</li>
                                <li>Product insights and feature usage analysis</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">6. DATA SHARING AND RECIPIENTS</h2>
                    <p className="mb-4">We do not sell your personal data. We may share data with the following categories of recipients:</p>

                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">6.1 Service Providers and Processors</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Cloud hosting and infrastructure providers</li>
                                <li>Analytics and monitoring tools</li>
                                <li>Email and communication services</li>
                                <li>Customer support platforms</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">6.2 Legal and Regulatory Requirements</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Law enforcement agencies when required by law</li>
                                <li>Regulatory bodies for compliance purposes</li>
                                <li>Tax authorities for reporting obligations</li>
                                <li>Data protection authorities in case of investigations</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">7. DATA TRANSFERS OUTSIDE THE EU</h2>
                    <p className="mb-4">
                        Your data may be processed or stored in the EU or other jurisdictions with adequate protection standards. When we transfer data outside the European Economic Area (EEA), we ensure protection through appropriate safeguards.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">8. DATA RETENTION</h2>
                    <p className="mb-4">
                        We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">9. YOUR RIGHTS UNDER GDPR</h2>
                    <p className="mb-4">Under the GDPR, you have rights regarding your personal data including access, rectification, erasure, restriction of processing, data portability, and the right to object.</p>

                    <p className="mt-4">
                        <strong>To exercise your rights, contact us at:</strong><br />
                        <a href="mailto:privacy@ultraviolet.rs" className="text-primary hover:underline">privacy@ultraviolet.rs</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">10. SECURITY</h2>
                    <p className="mb-4">
                        We implement appropriate technical and organizational measures to protect your personal data, including encryption, access controls, and regular security audits.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">11. CHANGES TO THIS POLICY</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. When we make significant changes, we will notify you via email or through the Platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">12. CONTACT US</h2>
                    <p className="mb-4">
                        If you have questions regarding this Privacy Policy, please contact us:
                    </p>
                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@ultraviolet.rs" className="text-primary hover:underline">privacy@ultraviolet.rs</a></p>
                    <p className="mb-2">
                        <strong>Postal Address:</strong><br />
                        Ultraviolet<br />
                        Bulevar Arsenija Carnojevica 103<br />
                        11000 Belgrade, Serbia
                    </p>
                </section>
            </div>
        </div>
    );
}
