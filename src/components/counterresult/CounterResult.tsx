import React from "react";
import {useSelector} from "react-redux";
import { CounterInitState, setCounterValue } from "../../store/counterStore";

interface CounterResultProps {
    count?: number
}

function CounterResult({count}: CounterResultProps) {
    const countValue = useSelector((state: { counter: CounterInitState }) => state.counter.value);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3 text-center">{countValue}</div>
            </div>
        </div>
    );
}

export default CounterResult;

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
