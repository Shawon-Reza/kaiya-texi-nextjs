"use client";


import SplitText from '@/components/ui/SplitText';

const HeroSectionTextAnimation1 = ({text}:{text: string}) => {
    return (
        <div>
            <SplitText
                text={text}
                className=""
                delay={20}
                duration={.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="start"
                onLetterAnimationComplete
            // showCallback
            />
        </div>
    )
}

export default HeroSectionTextAnimation1