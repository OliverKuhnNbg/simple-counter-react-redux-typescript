import React from 'react';
import { useDispatch } from 'react-redux'; 
import { increment, decrement } from './store/counterStore'; 
import logo from './logo.svg'; //example for logo import
import './App.scss';
import CounterResult from './components/counterresult/CounterResult';
import CounterButton from './components/counterbutton/CounterButton';
import CounterValueField from './components/countervaluefield/CounterValueField';

function App() {
    const dispatch = useDispatch(); // Hook um Aktionen zu dispatchen

    const handleIncrement = () => {
        dispatch(increment()); // Dispatche die increment Aktion
    };

    const handleDecrement = () => {
        dispatch(decrement()); // Dispatche die decrement Aktion
    };
    return (
        <div className="container-fluid mt-5">
            <CounterResult />

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <CounterButton label='+' onClick={handleIncrement} />
                    <CounterButton label='-' onClick={handleDecrement} />
                </div>
            </div>

            <CounterValueField />
        </div>
    );
}

export default App;
