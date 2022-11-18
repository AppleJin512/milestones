import { PAGE_BACKDROP } from "../actions/acation_type";

const Backdrop = (state = false, action) => {
    switch (action.type) {
        case PAGE_BACKDROP:
            return action.payload;
        default:
            return state;
    }
}

export default Backdrop;