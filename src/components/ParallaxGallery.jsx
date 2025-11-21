import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const getImages = (start, count) => 
    Array.from({ length: count }).map((_, i) => `https://picsum.photos/300/200?random=${start + i}`);

const galleryData = [
    { images: getImages(0, 6), opacity: 'opacity-20', top: 'top-[20%]', direction: -300 }, 
    { images: getImages(10, 6), opacity: 'opacity-60', top: 'top-[45%]', direction: 300 }, 
    { images: getImages(20, 6), opacity: 'opacity-80', top: 'top-[70%]', direction: -300 }, 
];

function ParallaxGallery() {
    const containerRef = useRef(null);
    const rowRefs = galleryData.map(() => useRef(null));

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        galleryData.forEach((row, index) => {
            tl.to(
                rowRefs[index].current, 
                { x: row.direction, ease: "none" }, 
                0
            );
        });
    }, { scope: containerRef });

    const imageSizeClasses = "w-96 h-60"; 
    const rowLayoutClasses = "w-[200%] -ml-[50%]"; 

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            {galleryData.map((row, index) => (
                <div 
                    key={index}
                    ref={rowRefs[index]} 
                    className={`absolute flex gap-2 select-none ${row.top} ${rowLayoutClasses} ${row.opacity}`}
                >
                    {[...row.images, ...row.images].map((src, i) => (
                        <div 
                            key={i} 
                            className={`flex-shrink-0 ${imageSizeClasses} rounded-lg overflow-hidden transition-all duration-500`}
                        >
                            <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ParallaxGallery;