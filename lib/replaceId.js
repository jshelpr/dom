function replaceId(id, replaceValue) {
    if (document.getElementById(id) !== undefined) {
        return document.getElementById(id).id = replaceValue;
    }
}