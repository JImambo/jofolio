// src/components/ui/Textarea.jsx
import React from 'react';
import './Textarea.css';

export function Textarea({ placeholder, value, onChange, required = false, rows = 4 }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="textarea"
    />
  );
}