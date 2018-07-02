import { SEARCH_PROPERTY } from '../actions/index';
// var parser = require('xml2json');

export default function (state = [], action) {
    switch (action.type) {
        case SEARCH_PROPERTY:
            const data = action.payload.data;
            console.log(data);
            // console.log(parser.toJson(data, options));
            // const jsonRes = parser.toJson(action.payload.data);
            // console.log(jsonRes);
            return state.concat([data])

            // return state.concat([action.payload.data]);
            // cannot use push because push change the state directly!
            // concat return a new array which combines 2 arrays
            // return [action.payload.data, ...state];
            // same as above -> return a new array, ... flatens state array out into item1,item2, ...

            break;
        default:

    }
    return state;
}
