/**
 * 
 * @param {string} id takes an argument id of a element which is present or not
 * @returns true if it is present
 */
function elementIsPresent(id) {
    return document.getElementById(id) ? true : false;
}

/**
 * 
 * @param {string} classname 
 * @returns true if it is present
 */
function elementIsPresentClass(classname) {
    return document.getElementsByClassName(classname).length > 0 ? true : false; 
}

/**
 * 
 * @param {string} tagname 
 * @returns true if it is present
 */
function elementIsPresentTagName(tagname) {
    return document.getElementsByTagName(tagname).length > 0 ? true : false;
}

/**
 * 
 * @param {string} name 
 * @returns true if the element is present in the document
 */
function elementIsPresentName(name) {
    return document.getElementsByName(name).length > 0 ? true : false;
}

export { elementIsPresentClass, elementIsPresentName, elementIsPresentTagName, elementIsPresent };
export default elementIsPresent;