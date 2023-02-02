const isSigned = () => {
    const sessionSignData = sessionStorage.getItem('signData')
    if (sessionSignData) {
        return JSON.parse(sessionSignData)
    } else {
        return { isSigned: false };
    }
};

export default isSigned;