export  type countIncrementType = ReturnType<typeof countIncrementTypeAC>

export  type countResetType = ReturnType<typeof countResetTypeAC>

export const countIncrementTypeAC = () => {

    return {type: 'COUNT_INCREMENT'} as const
}

export const countResetTypeAC = (payload: { minValue: number }) => {
    return {type: 'COUNT_RESET', payload} as const
}

type ActionsType = countIncrementType | countResetType

const initialState = 0

export const counterReducer = (state = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'COUNT_INCREMENT': {
            return state + 1
        }
        case 'COUNT_RESET': {
            console.log(action.payload.minValue)
            return state = action.payload.minValue
        }
        default: {
            return state
        }
    }
}