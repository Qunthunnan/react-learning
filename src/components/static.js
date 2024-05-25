class StaticReference {
    static staticValue = 'Super';
    static staticMethod = () => {
        console.log('Static method');
    }
}

console.log(StaticReference.staticValue);
StaticReference.staticMethod();