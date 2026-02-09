// src/components/ui/Button.jsx
import React from 'react';
import './Button.css';

export function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
    
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer";
  
  const variantStyles = {
    default: "bg-cyan-500 hover:bg-cyan-600 text-white",
    outline: "border-2 bg-transparent"
  };
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}