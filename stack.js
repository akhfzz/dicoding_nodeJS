class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError"
    }
}

let json = '{"nama": "akhmad faizal", "nim": 192102002}';

// module.exports = {array, listData};
// export default array
export {ValidationError, json}