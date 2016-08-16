"use strict";

module.exports = props => {
    return (req, res, next) => {
        props.forEach(prop => {
            const v = req.query[prop];
            const pv = parseInt(v, 10);
            if (isNaN(pv)) req.body[prop] = null;
            else req.query[prop] = pv;
        });

        next();
    }
};
