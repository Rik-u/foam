"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

export default function AddItemPopup({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dimmed background */}
      <div
        className="absolute inset-0 bg-black/50 "
        onClick={onClose} // Close when clicking outside
      />

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-lg p-6 w-96">
        {children}

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          
        </button>
      </div>
    </div>
  );
}