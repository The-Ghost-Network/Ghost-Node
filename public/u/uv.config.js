/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/u/query/',
    bare: 'https://lightgo.app/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: '/u/uv.handler.js',
    client: '/u/uv.client.js',
    bundle: '/u/uv.bundle.js',
    config: '/u/uv.config.js',
    sw: '/u/uv.sw.js',
};