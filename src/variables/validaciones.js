export const nombre_completo = (value)=>{
    return !/[^A-Za-z\s\,]/.test(value);
}

export const email = (value)=>{
    return !/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(value);
}

