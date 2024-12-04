import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from '../model/counter-reducer';
import {setMaxValueReducer} from '../model/maxValue-reducer';
import {setMinValueReducer} from '../model/minValue-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer,
    minValue: setMinValueReducer,
    maxValue: setMaxValueReducer,
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer)

// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store