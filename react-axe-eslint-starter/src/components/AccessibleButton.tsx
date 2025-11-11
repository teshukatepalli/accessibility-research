import React from 'react';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({ label, ...props }) => {
  return (
    <button {...props} aria-label={label}>
      {label}
    </button>
  );
};

export default AccessibleButton;