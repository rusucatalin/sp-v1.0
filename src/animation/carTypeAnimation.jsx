import { motion } from 'framer-motion';

export function CarTypeAnimation({ index, children }) {
    return (
        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{
                delay: index * 0.3,
                type: "spring",
                stiffness: 150,
                damping: 25,
            }}
            className="flex flex-col items-center"
        >
            {children}
        </motion.div>
    );
}
