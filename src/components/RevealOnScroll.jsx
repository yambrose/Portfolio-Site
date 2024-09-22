import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';

export default function RevealOnScroll({ children }) {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: .5, ease: 'easeOut', delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
}