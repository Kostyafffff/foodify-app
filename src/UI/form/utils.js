export const isFormValid = (...params) => Array.from(params).every(it => it.length > 0);
