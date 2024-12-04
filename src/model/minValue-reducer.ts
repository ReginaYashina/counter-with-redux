type setMinValueType = ReturnType<typeof setMinValueAC>

type ActionType = setMinValueType

export const setMinValueAC = (payload: { value: string }) => {
    return {type: 'SET_MIN_VALUE', payload} as const
}

const initialState = '0'

export const setMinValueReducer = (state = initialState, action: ActionType): any => {
    switch (action.type) {
        case 'SET_MIN_VALUE': {
            console.log('min-val-red '+action.payload.value)
            return state = action.payload.value
        }
        default: {
            return state
        }
    }
}