import React from 'react'

const btnVariant = {
    primary: "bg-primary-900 text-secondary-900",
    secondary: "bg-secondary-100 text-secondary-900",
    outline:
        "bg-transparent text-secondary-100 border-[1px] border-secondary-100",
};

export default function Button({ children, variant = "secondary", className , onClick,disabled, ...rest }) {
    return (
        <button onClick={onClick} disabled={disabled} className={`${className} ${btnVariant[variant]} active:scale-90 transition-all duration-200 text-normal`} {...rest}>
            {children}
        </button>
    );
}
