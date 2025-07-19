"use client"
import React from "react";

type ModalProps = {
    open: boolean;
    children: React.ReactNode;
    onSubmit: () => void;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, children, onSubmit, onClose }) => {
    if (!open) return null;
    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[5px] transition-[backdrop-filter] duration-300 ease-in-out"
        >
            <div 
                onClick={e => e.stopPropagation()}
                className="bg-[var(--card-color)] p-4 rounded-[20px] shadow w-[95vw] max-h-[90vh] max-w-[40%] relative overflow-y-scroll overflow-x-hidden max-[1100px]:max-w-[90%]" 
            >
                <button className="absolute top-1 right-5 text-gray-500 text-[3rem] cursor-pointer" onClick={onClose}>×</button>
                <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default Modal;