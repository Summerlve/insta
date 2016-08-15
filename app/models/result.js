module.exports = class Result {
    constrcutor(errorCode, reasonPhrase) {
        this.errorCode = errorCode;
        this.reasonPhrase = reasonPhrase;
    }

    toJSON() {
        return {
            error_code: this.errorCode
            reason_phrase: this.reasonPhrase
        };
    }
}
