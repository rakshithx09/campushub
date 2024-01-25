
const formatter = new Intl.DateTimeFormat("en-US");


export function pretiffyDateTime(datetimeStr:string){
    const dateObj = new Date(datetimeStr);
    return formatter.format(dateObj);
}