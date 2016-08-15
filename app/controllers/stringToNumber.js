"use strict";

module.exports = props => {
    return (req, res, next) => {
        props.forEach(prop => {
            const v = req.body[prop];
            const pv = parseInt(v, 10);
            if (isNaN(pv)) req.body[prop] = null;
            else req.body[prop] = pv;
        });

        next();
    }
};
