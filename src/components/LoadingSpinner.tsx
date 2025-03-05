// components/LoadingSpinner.tsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className=" flex items-center justify-center min-h-screen bg-white">
            <motion.div
                className="w-20 h-20 border-t-4 border-primary border-solid rounded-full"
                animate={{ rotate: 360 }}
                transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
            />
        </div>
    );
};

export default LoadingSpinner;