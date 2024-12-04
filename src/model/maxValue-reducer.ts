type setMaxValueType = ReturnType<typeof setMaxValueAC>

type ActionType = setMaxValueType

export const setMaxValueAC = (payload: { value: string }) => {
    return {type: 'SET_MAX_VALUE', payload} as const
}

const initialState = '5'

export const setMaxValueReducer = (state = initialState, action: ActionType): any => {
    switch (action.type) {
        case 'SET_MAX_VALUE': {
            return state = action.payload.value
        }
        default: {
            return state
        }
    }
}