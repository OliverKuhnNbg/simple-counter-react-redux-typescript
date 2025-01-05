import React, {ChangeEvent, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterInitState, setCounterValue } from "../../store/counterStore";

interface CounterValueFieldProps {
}

function CounterValueField() {
    const inputValue = useSelector((state: { counter: CounterInitState }) => state.counter.inputValue);

    const dispatch = useDispatch();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10) || 0;
        dispatch(setCounterValue(newValue)); // Dispatch the action to update the store
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="input-group mb-3">
                        <span className="input-group-text fw-bolder" id="basic-addon1">current calulation value</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="value"
                            aria-label="value"
                            value={inputValue}
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterValueField;
