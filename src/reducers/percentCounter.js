import { COUNT_PERCENT } from "../actions/acation_type";

const PercentCounter = (state = 0, action) => {
    switch (action.type) {
        case COUNT_PERCENT:
            return action.payload;
        default:
            return state;
    }
}

export default PercentCounter;