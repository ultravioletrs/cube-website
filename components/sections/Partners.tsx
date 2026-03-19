import Image from 'next/image';

const partners = [
    { name: 'European Commission', logo: '/img/partners/eu.png' },
    { name: 'Telefónica', logo: '/img/partners/telefonica.png' },
    { name: 'VTT', logo: '/img/partners/vtt.png' },
    { name: 'Fujitsu', logo: '/img/partners/fujitsu.png' },
    { name: 'Fraunhofer', logo: '/img/partners/fraunhofer.png' },
    { name: 'TNO', logo: '/img/partners/tno.png' },
    { name: 'Ericsson', logo: '/img/partners/ericsson.png' },
    { name: 'Nokia', logo: '/img/partners/nokia.png' },
    { name: 'Inserm', logo: '/img/partners/inserm.png' },
    { name: 'TU Eindhoven', logo: '/img/partners/tue.png' },
    { name: 'Thales', logo: '/img/partners/thales.png' },
    { name: 'Imdea', logo: '/img/partners/imdea.svg' },
    { name: 'IF', logo: '/img/partners/if.png' },
    { name: 'ETF', logo: '/img/partners/etf.png' },
];

const memberships = [
    { name: 'Linux Foundation', logo: '/img/partners/lf.png' },
    { name: 'Confidential Computing Consortium', logo: '/img/partners/ccc.png' },
];

export function Partners() {
    return (
        <section className="bg-muted/10 border-y relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
            <div className="py-16 border-b relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Trusted Partners</h2>
                        <p className="text-muted-foreground mt-2 font-medium">
                            Collaborating with leading organizations in confidential computing and secure AI.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        {partners.map((partner) => (
                            <div key={partner.name} className="flex items-center justify-center p-4 h-20 w-32 md:w-40 transition-all duration-300 dark:bg-white/90 dark:rounded-2xl dark:shadow-lg dark:m-1">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    width={160}
                                    height={80}
                                    className="object-contain max-h-12 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Memberships</h2>
                        <p className="text-muted-foreground mt-2 font-medium">
                            Proud members of key industry consortia.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        {memberships.map((member) => (
                            <div key={member.name} className="flex items-center justify-center p-4 h-24 w-40 md:w-48 transition-all duration-300 dark:bg-white/90 dark:rounded-2xl dark:shadow-lg dark:m-1">
                                <Image
                                    src={member.logo}
                                    alt={`${member.name} logo`}
                                    width={200}
                                    height={100}
                                    className="object-contain max-h-16 w-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
