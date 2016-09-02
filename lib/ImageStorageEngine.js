"use strict";

const fs = require("fs");
const gm = require("gm");
const path = require("path");

module.exports = class ImageStorageEngine {
    constructor(options) {
        this.destination = options.destination;
        this.filename = options.filename;
    }

    _handleFile(req, file, cb) {
        this.destination(req, file, (error, dir) => {
            if (error) return cb(error);

            this.filename(req, file, (error, name) => {
                if (error) return cb(error);

                const finalPath = path.join(dir, name);
                const ws = fs.createWriteStream(finalPath);

                gm(file.stream, name).minify(1).stream().pipe(ws);

                ws.on("error", cb);
                ws.on("finish", _ => {
                    cb(null, { path: finalPath, size: ws.bytesWritten, filename: name});
                });
            });
        });
    }

    _removeFile(req, file, cb) {
        fs.unlink(file.path, cb);
    }
};
