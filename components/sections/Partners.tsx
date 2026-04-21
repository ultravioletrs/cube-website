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

function TickerStrip({ items, speed = 40, direction = 'left' }: { items: { name: string; logo: string }[], speed?: number, direction?: 'left' | 'right' }) {
    const doubled = [...items, ...items];
    const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

    return (
        <div
            className="w-full overflow-hidden flex relative"
            style={{
                // Optional mask for smooth fade at edges
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >
            <div
                className={`flex gap-3 w-max ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((item, i) => (
                    <div
                        key={`${item.name}-${i}`}
                        className="
                            flex items-center gap-3 px-5 py-3 rounded-full
                            border border-border/40
                            bg-background/80 backdrop-blur-sm
                            transition-all duration-300 cursor-default select-none
                            hover:border-border hover:bg-accent/50
                            dark:bg-white/[0.04] dark:border-white/10
                            dark:hover:bg-white/[0.08] dark:hover:border-white/20
                            shrink-0
                        "
                    >
                        <div className="relative h-7 w-16 shrink-0">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain dark:brightness-[1.2] dark:contrast-[1.05]"
                            />
                        </div>
                        <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Partners() {
    return (
        <section className="relative border-y bg-muted/10 overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/10 pointer-events-none" />

            {/* Partners */}
            <div className="py-16 border-b relative">
                <div className="container mx-auto px-4 md:px-6 mb-10">
                    <div className="text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                            Trusted Partners
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                            Collaborating with leading organizations
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm">
                            in confidential computing and secure AI.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <TickerStrip items={partners} speed={40} direction="left" />
                </div>
            </div>

            {/* Memberships — static centered since there are only 2 */}
            <div className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                            Memberships
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                            Proud members of key industry consortia
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {memberships.map((member) => (
                            <div
                                key={member.name}
                                className="
                                    flex items-center gap-4 px-6 py-4 rounded-full
                                    border border-border/40 bg-background/80 backdrop-blur-sm
                                    transition-all duration-300 cursor-default
                                    hover:border-border hover:bg-accent/50
                                    dark:bg-white/[0.04] dark:border-white/10
                                    dark:hover:bg-white/[0.08] dark:hover:border-white/20
                                "
                            >
                                <div className="relative h-9 w-24 shrink-0">
                                    <Image
                                        src={member.logo}
                                        alt={member.name}
                                        fill
                                        className="object-contain dark:brightness-[1.2] dark:contrast-[1.05]"
                                    />
                                </div>
                                <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                                    {member.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
