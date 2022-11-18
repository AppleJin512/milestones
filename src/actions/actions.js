import { PAGE_BACKDROP, COUNT_PERCENT } from "./acation_type";

export const pageBackdrop = (payload) => ({
    type: PAGE_BACKDROP,
    payload: payload
});

export const percentCounter = (payload) => ({
    type: COUNT_PERCENT,
    payload: payload
});