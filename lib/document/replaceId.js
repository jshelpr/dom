/**
 * 
 * @param {string} id target element
 * @param {string} replaceValue the value to be replaced
 * @returns replace the element's id with replaceValue
 */
function replaceId(id, replaceValue) {
    if (document.getElementById(id) !== undefined && document.getElementById('id')) {
        return document.getElementById(id).id = replaceValue;
    } else {
        return "Element not in the document";
    }
}

export default replaceId;