/*global Ultraviolet*/
self.__uv$config = {
  prefix: "/search/",
  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "/search/uv.handler.js",
  client: "/search/uv.client.js",
  bundle: "/search/uv.bundle.js",
  config: "/search/uv.config.js",
  sw: "/search/uv.sw.js",
};
