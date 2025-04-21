import { motion } from 'framer-motion';

export function ScrollRevealAnimation({ index, children }) {
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{
                delay: index * 0.3,
                type: "spring",
                stiffness: 150,
                damping: 25,
            }}
            className="w-[6rem] h-[6rem] rounded-md overflow-hidden"
        >
            {children}
        </motion.div>
    );
}
