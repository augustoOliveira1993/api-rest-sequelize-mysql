class AppError {
    static message;
    static statusCode;

    constructor(message, statusCode=400) {
        AppError.message = message;
        this.statusCode = statusCode;
    }
}

export default AppError;
