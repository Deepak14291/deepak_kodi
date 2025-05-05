import { motion } from 'framer-motion';

const FlipLink = ({ children }) => {

    const DURATION = 0.25;
    const STAGGER = 0.025;
    // border - b - 2 border - gray - 600
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden text-sm uppercase"
            style={{
                lineHeight: 0.75,
            }}
            animate="border"
            transition={{
                duration: 2
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.div >
    );
};

export default FlipLink;