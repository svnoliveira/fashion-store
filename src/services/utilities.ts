export const removeSpaces = (string: string) => {
    if(string === undefined){
        return ""
    }
    const stringWithoutSpaces = string.replace(/\s+/g, "").toLowerCase()
    return stringWithoutSpaces
}

export const isObjEmpty = (object: {}) => {
    return Object.keys(object).length === 0
}