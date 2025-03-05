import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`flex flex-col bg-white border-b-4 border-primary rounded-t-2xl shadow-lg bg-opacity-90 transition-transform transform hover:scale-105 hover:border-secondary ${className}`}>
            {children}
        </div>
    );
};

export const CardContent = ({ children, className }: CardProps) => {
    return <div className={`p-4 text-black text-sm sm:text-md flex-grow w-full ${className}`}>{children}</div>;
};

