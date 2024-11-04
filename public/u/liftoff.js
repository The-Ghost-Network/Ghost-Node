/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/u/liftoff/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/u/comet.js',
    client: '/u/atom.js',
    bundle: '/u/space.js',
    config: '/u/liftoff.js',
    sw: '/u/constellation.js',
};