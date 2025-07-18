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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 bg-opacity-40">
            <div className="bg-white p-4 rounded-[20px] shadow max-w-full w-[95vw] sm:w-[400px] relative">
                <button className="absolute top-1 right-5 text-gray-500 text-[3rem] cursor-pointer" onClick={onClose}>×</button>
                <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
                    {children}
                </form>
            </div>
        </div>
    );
};

export default Modal;