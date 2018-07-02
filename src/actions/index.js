import axios from 'axios';

const ZWS_ID = 'X1-ZWz1dyb53fdhjf_6jziz';
const ROOT_URL = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${ZWS_ID}`;

export const SEARCH_PROPERTY = 'SEARCH_PROPERTY';
export function searchProperty(fullAddress){

    console.log(fullAddress);
    const url = `${ROOT_URL}&address=${fullAddress.address}&citystatezip=${fullAddress.city}, ${fullAddress.state} ${fullAddress.zip}`;
    const encodedUrl = encodeURI(url);
    const request = axios.get(encodedUrl);
    console.log('Request : ', request);
    return {
        type: SEARCH_PROPERTY,
        payload: request
    };
}
