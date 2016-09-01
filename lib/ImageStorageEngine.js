"use strict";

const fs = require("fs");

module.exports = class ImageStorageEngine {
    constructor(options) {
        this.getDestination = options.destination;
    }

    _handleFile(req, file, cb) {
        this.getDestination(req, file, (error, path) {
            if (error) return cb(error);

            const outerStream = fs.createWriteStream();
            file.stream.pipe(outerStream);
            outStream.on("error", cb);
            outStream.on("finish", _ => {
                cb(null, { path, size: outStream.bytesWritten });
            });
        });
    }

    _removeFile(req, file, cb) {
        fs.unlink(file.path, cb);
    }
};
