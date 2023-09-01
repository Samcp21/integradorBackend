/**
 * @author https://jsfiddle.net/yasumodev/5gwm6kup/
 */
module.exports = {
    ObjKeyRename(src, map) {
        const dst = {}
        for (const key in src) {
            if (key.trim() in map) {
                // rename key
                // console.log(src[key] instanceof Array);
                if (src[key] instanceof Array) {
                    dst[map[key.trim()]] = src[key].map((i) => ObjKeyRename(i, map))
                } else {
                    dst[map[key.trim()]] = src[key]
                }
            } else {
                // same key
                dst[key] = src[key]
            }
        }
        return dst
    },
    uno(v) {
        console.log('uno', 1)
    },
    dos(v) {
        console.log('hits ', this)
        console.log('dos', 2)
    },
}
