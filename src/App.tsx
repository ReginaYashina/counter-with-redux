import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {SettingsBoard} from './components/SettingsBoard';
import {counterReducer, countIncrementTypeAC, countResetType, countResetTypeAC} from './model/counter-reducer';
import {setMinValueAC, setMinValueReducer} from './model/minValue-reducer';
import {setMaxValueAC, setMaxValueReducer} from './model/maxValue-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {useAppSelector} from './app/hooks';

function App() {
    const dispatch = useDispatch()

    const maxVal = useAppSelector(state => state.maxValue)
    const minVal = useAppSelector(state => state.minValue)
    const count = useAppSelector(state => state.counter)

    // const [maxVal, dispatchToMaxVal] = useReducer(setMaxValueReducer,'5');
    // const [minVal, dispatchToMinVal] = useReducer(setMinValueReducer,'0');

    const maxValue = JSON.parse(maxVal);
    const minValue = JSON.parse(minVal);
    console.log(minValue)

    // const [count, dispatchToCount] = useReducer(counterReducer, minValue)
    const [isClicked, setIsClicked] = useState(true)

    //=================================== localStorage ======================================================
    // useEffect(() => {
    //     const localStorageMaxValue = localStorage.getItem('max value')
    //     const localStorageMinValue = localStorage.getItem('start value')
    //     if (localStorageMaxValue) {
    //         setMaxVal(localStorageMaxValue)
    //     }
    //     if (localStorageMinValue) {
    //         setMinVal(localStorageMinValue)
    //         setCount(JSON.parse(localStorageMinValue))
    //     }
    // }, []);
    // ======================================================================================================

    // count
    const setCountInc = () => {
        dispatch(countIncrementTypeAC())
    }

    // count
    const setCountReset = () => {
        dispatch(countResetTypeAC({minValue}))
    }

    // maxVal
    const setMaxValHandler = (value: string) => {
        dispatch(setMaxValueAC({value}))
        setIsClicked(false)
    }

    // minVal
    const setMinValHandler = (value: string) => {
        dispatch(setMinValueAC({value}))
        setIsClicked(false)
    }

    const setValues = () => {
        // localStorage.setItem('start value', minValue)
        // localStorage.setItem('max value', maxValue)
        // setCountReset()
        dispatch(countResetTypeAC({minValue}))
        setIsClicked(true)
    }


    return (
        <div className="App">
            <SettingsBoard
                maxVal={maxVal}
                minVal={minVal}
                isSet={isClicked}
                setMaxVal={setMaxValHandler}
                setMinVal={setMinValHandler}
                setValues={setValues}
            />
            <Counter
                count={count}
                // setCount={setCount}
                maxValue={maxValue}
                minValue={minValue}
                isSet={isClicked}
                setCountInc={setCountInc}
                setCountReset={setCountReset}
            />
        </div>
    );
}

export default App;
