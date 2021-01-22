const initialState = {
    categories: [],
    history: [],
    opened: false,
    sum: "",
    comment: ""

}

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case "add/category":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }

        case "add/consumption":
            return {
                ...state,
                history: [...state.history, action.payload]
            }

        case "get/sum":
            return {
                ...state,
                sum: action.payload
            }

        case "get/comment":
            return {
                ...state,
                comment: action.payload
            }

        case "clear/input":
            return {
                ...state,
                sum: "...",
                comment: "..."
            }

        case "toggle/window":
            return {
                ...state,
                opened: !state.opened
            }

        default:
            return state;
    }
}
