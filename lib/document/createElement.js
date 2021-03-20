/**
 * 
 * @param {string} tagname The tagname of the element to be created 
 * @param {object} properties The HTML attributes for the element
 * @param {CSSStyleDeclaration} styles The styling for the element
 * @param {HTMLElement} elementToAppend Element in which the created element should be appended to
 * @param {string} node Text Node to be appended to the the element 
 */
function createElement(tagname, properties, styles, elementToAppend, node) {
    var elem = document.createElement(tagname);

    elem.innerText = node;

    elem.setAttribute(Object.keys(properties).map(prop => prop), properties[Object.keys(properties).map(prop => prop)]);
    
    elem.style.setProperty(Object.keys(styles).map(prop => prop), properties[Object.keys(styles).map(prop => prop)]);

    elementToAppend.appendChild(elem);
}