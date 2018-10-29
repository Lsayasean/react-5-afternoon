const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REALESTATE = 'UPDATE_REALESTATE';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWN = 'UPDATE_DOWN';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDY1 = 'UPDATE_ADDY1';
const UPDATE_ADDY2 = 'UPDATE_ADDY2';
const UPDATE_ADDY3 = 'UPDATE_ADDY3';
const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return { ...state, loanType: action.payload }
        case UPDATE_PROPERTY_TYPE:
            return { ...state, propertyType: action.payload }
        case UPDATE_CITY:
            return { ...state, city: action.payload }
        case UPDATE_PROP:
            return { ...state, propToBeUsedOn: action.payload }
        case UPDATE_FOUND:
            return { ...state, found: action.payload }
        case UPDATE_REALESTATE:
            return { ...state, realEstateAgent: action.payload }
        case UPDATE_COST:
            return {...state, cost: action.payload}
        case UPDATE_DOWN:
            return {...state, downPayment: action.payload}
        case UPDATE_CREDIT:
            return {...state, credit: action.payload}
        case UPDATE_HISTORY:
            return {...state, history: action.payload}
        case UPDATE_ADDY1:
            return {...state, addressOne: action.payload}
        case UPDATE_ADDY2:
            return {...state, addressTwo: action.payload}
        case UPDATE_ADDY3:
            return {...state, addressThree: action.payload}
        case UPDATE_FIRST:
            return {...state, firstName: action.payload}
        case UPDATE_LAST:
            return {...state, lastName: action.payload}
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
        default:
            return state

    }
}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateReal(real) {
    return {
        type: UPDATE_REALESTATE,
        payload: real
    }
}

export function updateCost(cost){
    return{
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDown(down){
    return{
        type: UPDATE_DOWN,
        payload: down
    }
}

export function updateCredit(credit){
    return{
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function ad1(ad){
    return{
        type: UPDATE_ADDY1,
        payload: ad
    }
}

export function ad2(ad){
    return{
        type: UPDATE_ADDY2,
        payload: ad
    }
}

export function ad3(ad){
    return{
        type: UPDATE_ADDY3,
        payload: ad
    }
}

export function first(first){
    return{
        type: UPDATE_FIRST,
        payload: first
    }
}

export function last(last){
    return{
        type: UPDATE_LAST,
        payload: last
    }
}

export function email(email){
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}