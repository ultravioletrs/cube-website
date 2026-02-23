import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
    className?: string;
    mode?: 'light' | 'dark' | 'auto';
    height?: number;
    width?: number;
}

export default function BrandLogo({
    className,
    mode = 'auto',
    height = 32,
    width = 83 // approx 2.6 aspect ratio based on 1300/500
}: BrandLogoProps) {
    return (
        <div className={cn("relative flex items-center", className)}>
            {/* Light mode logo (altLogo - black text) */}
            <Image
                src="/img/logos/altLogo.svg"
                alt="Cube AI"
                width={width}
                height={height}
                className={cn(
                    "transition-opacity duration-200",
                    mode === 'dark' ? "hidden" : (mode === 'auto' ? "dark:hidden block" : "block")
                )}
                priority
            />

            {/* Dark mode logo (sidebarLogo - white text) */}
            <Image
                src="/img/logos/sidebarLogo.svg"
                alt="Cube AI"
                width={width}
                height={height}
                className={cn(
                    "transition-opacity duration-200",
                    mode === 'light' ? "hidden" : (mode === 'auto' ? "hidden dark:block" : "block")
                )}
                priority
            />
        </div>
    );
}
