export const removeSpaces = (string: string) => {
    if(string === undefined){
        return ""
    }
    const stringWithoutSpaces = string.replace(/\s+/g, "").toLowerCase();
    const normalizedString = stringWithoutSpaces.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return normalizedString;
}

export const validateImage = (url: string) => {
    if (url.includes("cloudinary" || "google" || "catbox")){
        return url;
    } else {
        return "/image-not-found.png";
    }
}

export const isObjEmpty = (object: {}) => {
    return Object.keys(object).length === 0;
}