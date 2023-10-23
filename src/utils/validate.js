// check valid data
export const checkValidData = ( email, password) => {
    if(!email || !password ) return 'Please fill all fields';
    // if(name) {
    //     console.log(name);
    //     const isNameValid = /^[a-zA-Z\s]+$/.test(name);
    //     console.log(isNameValid);
    //     if(!isNameValid) return 'Name is not valid';
    // }
    const isEmailValid  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';

    return null;

};