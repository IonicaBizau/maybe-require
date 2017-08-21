"use strict"

const abs = require("abs")

/**
 * maybeRequire
 * Require a file if it exists.
 *
 * @name maybeRequire
 * @function
 * @param {String} path The path to the file.
 * @param {Boolean} thr Whether to throw errors (except the `MODULE_NOT_FOUND`). `false`, by default.
 * @returns {Any} The exported value.
 */
module.exports = function maybeRequire (path, thr) {
    try {
        return require(abs(path))
    } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND" && thr) {
            throw e
        }
    }
    return {}
};
