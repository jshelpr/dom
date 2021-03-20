function replaceClass(classname, replaceValue, index) {
    if (elementIsPresentClass(classname)) {
        return document.getElementsByClassName(classname)[index].className = replaceValue;
    }
}