"use strict";

module.exports = class Result {
    constructor(errorCode, reasonPhrase) {
        this.errorCode = errorCode;
        this.reasonPhrase = reasonPhrase;
    }

    toJSON() {
        return {
            error_code: this.errorCode,
            reason_phrase: this.reasonPhrase
        };
    }
};
