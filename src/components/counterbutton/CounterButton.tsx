import React from "react";

interface CounterButtonProps {
    label?: string
    onClick?:  () => void
}

function CounterButton({label, onClick}: CounterButtonProps) {
    return (
        <div className="col-3 text-center">
            <button type="button" onClick={onClick} className="btn btn-primary w-100">{label}</button>
        </div>
    );
}

export default CounterButton;