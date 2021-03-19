/**
 * 
 * @param {string} id takes an argument id of a element which is present or not
 * @returns 
 */
function elementIsPresent(id) {
    return document.getElementById(id) ? true : false;
}