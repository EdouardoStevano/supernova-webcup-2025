import { __commonJS } from './chunk-G3PMV62Z.js';

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
    'node_modules/cross-fetch/dist/browser-ponyfill.js'(exports, module) {
        var __global__ =
            (typeof globalThis !== 'undefined' && globalThis) ||
            (typeof self !== 'undefined' && self) ||
            (typeof global !== 'undefined' && global);
        var __globalThis__ = (function () {
            function F() {
                this.fetch = false;
                this.DOMException = __global__.DOMException;
            }
            F.prototype = __global__;
            return new F();
        })();
        (function (globalThis2) {
            var irrelevant = (function (exports2) {
                var global2 =
                    (typeof globalThis2 !== 'undefined' && globalThis2) ||
                    (typeof self !== 'undefined' && self) ||
                    (typeof global2 !== 'undefined' && global2);
                var support = {
                    searchParams: 'URLSearchParams' in global2,
                    iterable: 'Symbol' in global2 && 'iterator' in Symbol,
                    blob:
                        'FileReader' in global2 &&
                        'Blob' in global2 &&
                        (function () {
                            try {
                                new Blob();
                                return true;
                            } catch (e) {
                                return false;
                            }
                        })(),
                    formData: 'FormData' in global2,
                    arrayBuffer: 'ArrayBuffer' in global2,
                };
                function isDataView(obj) {
                    return obj && DataView.prototype.isPrototypeOf(obj);
                }
                if (support.arrayBuffer) {
                    var viewClasses = [
                        '[object Int8Array]',
                        '[object Uint8Array]',
                        '[object Uint8ClampedArray]',
                        '[object Int16Array]',
                        '[object Uint16Array]',
                        '[object Int32Array]',
                        '[object Uint32Array]',
                        '[object Float32Array]',
                        '[object Float64Array]',
                    ];
                    var isArrayBufferView =
                        ArrayBuffer.isView ||
                        function (obj) {
                            return (
                                obj &&
                                viewClasses.indexOf(
                                    Object.prototype.toString.call(obj)
                                ) > -1
                            );
                        };
                }
                function normalizeName(name) {
                    if (typeof name !== 'string') {
                        name = String(name);
                    }
                    if (
                        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) ||
                        name === ''
                    ) {
                        throw new TypeError(
                            'Invalid character in header field name: "' +
                                name +
                                '"'
                        );
                    }
                    return name.toLowerCase();
                }
                function normalizeValue(value) {
                    if (typeof value !== 'string') {
                        value = String(value);
                    }
                    return value;
                }
                function iteratorFor(items) {
                    var iterator = {
                        next: function () {
                            var value = items.shift();
                            return { done: value === void 0, value };
                        },
                    };
                    if (support.iterable) {
                        iterator[Symbol.iterator] = function () {
                            return iterator;
                        };
                    }
                    return iterator;
                }
                function Headers(headers) {
                    this.map = {};
                    if (headers instanceof Headers) {
                        headers.forEach(function (value, name) {
                            this.append(name, value);
                        }, this);
                    } else if (Array.isArray(headers)) {
                        headers.forEach(function (header) {
                            this.append(header[0], header[1]);
                        }, this);
                    } else if (headers) {
                        Object.getOwnPropertyNames(headers).forEach(function (
                            name
                        ) {
                            this.append(name, headers[name]);
                        }, this);
                    }
                }
                Headers.prototype.append = function (name, value) {
                    name = normalizeName(name);
                    value = normalizeValue(value);
                    var oldValue = this.map[name];
                    this.map[name] = oldValue ? oldValue + ', ' + value : value;
                };
                Headers.prototype['delete'] = function (name) {
                    delete this.map[normalizeName(name)];
                };
                Headers.prototype.get = function (name) {
                    name = normalizeName(name);
                    return this.has(name) ? this.map[name] : null;
                };
                Headers.prototype.has = function (name) {
                    return this.map.hasOwnProperty(normalizeName(name));
                };
                Headers.prototype.set = function (name, value) {
                    this.map[normalizeName(name)] = normalizeValue(value);
                };
                Headers.prototype.forEach = function (callback, thisArg) {
                    for (var name in this.map) {
                        if (this.map.hasOwnProperty(name)) {
                            callback.call(thisArg, this.map[name], name, this);
                        }
                    }
                };
                Headers.prototype.keys = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push(name);
                    });
                    return iteratorFor(items);
                };
                Headers.prototype.values = function () {
                    var items = [];
                    this.forEach(function (value) {
                        items.push(value);
                    });
                    return iteratorFor(items);
                };
                Headers.prototype.entries = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push([name, value]);
                    });
                    return iteratorFor(items);
                };
                if (support.iterable) {
                    Headers.prototype[Symbol.iterator] =
                        Headers.prototype.entries;
                }
                function consumed(body) {
                    if (body.bodyUsed) {
                        return Promise.reject(new TypeError('Already read'));
                    }
                    body.bodyUsed = true;
                }
                function fileReaderReady(reader) {
                    return new Promise(function (resolve, reject) {
                        reader.onload = function () {
                            resolve(reader.result);
                        };
                        reader.onerror = function () {
                            reject(reader.error);
                        };
                    });
                }
                function readBlobAsArrayBuffer(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsArrayBuffer(blob);
                    return promise;
                }
                function readBlobAsText(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsText(blob);
                    return promise;
                }
                function readArrayBufferAsText(buf) {
                    var view = new Uint8Array(buf);
                    var chars = new Array(view.length);
                    for (var i = 0; i < view.length; i++) {
                        chars[i] = String.fromCharCode(view[i]);
                    }
                    return chars.join('');
                }
                function bufferClone(buf) {
                    if (buf.slice) {
                        return buf.slice(0);
                    } else {
                        var view = new Uint8Array(buf.byteLength);
                        view.set(new Uint8Array(buf));
                        return view.buffer;
                    }
                }
                function Body() {
                    this.bodyUsed = false;
                    this._initBody = function (body) {
                        this.bodyUsed = this.bodyUsed;
                        this._bodyInit = body;
                        if (!body) {
                            this._bodyText = '';
                        } else if (typeof body === 'string') {
                            this._bodyText = body;
                        } else if (
                            support.blob &&
                            Blob.prototype.isPrototypeOf(body)
                        ) {
                            this._bodyBlob = body;
                        } else if (
                            support.formData &&
                            FormData.prototype.isPrototypeOf(body)
                        ) {
                            this._bodyFormData = body;
                        } else if (
                            support.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(body)
                        ) {
                            this._bodyText = body.toString();
                        } else if (
                            support.arrayBuffer &&
                            support.blob &&
                            isDataView(body)
                        ) {
                            this._bodyArrayBuffer = bufferClone(body.buffer);
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        } else if (
                            support.arrayBuffer &&
                            (ArrayBuffer.prototype.isPrototypeOf(body) ||
                                isArrayBufferView(body))
                        ) {
                            this._bodyArrayBuffer = bufferClone(body);
                        } else {
                            this._bodyText = body =
                                Object.prototype.toString.call(body);
                        }
                        if (!this.headers.get('content-type')) {
                            if (typeof body === 'string') {
                                this.headers.set(
                                    'content-type',
                                    'text/plain;charset=UTF-8'
                                );
                            } else if (this._bodyBlob && this._bodyBlob.type) {
                                this.headers.set(
                                    'content-type',
                                    this._bodyBlob.type
                                );
                            } else if (
                                support.searchParams &&
                                URLSearchParams.prototype.isPrototypeOf(body)
                            ) {
                                this.headers.set(
                                    'content-type',
                                    'application/x-www-form-urlencoded;charset=UTF-8'
                                );
                            }
                        }
                    };
                    if (support.blob) {
                        this.blob = function () {
                            var rejected = consumed(this);
                            if (rejected) {
                                return rejected;
                            }
                            if (this._bodyBlob) {
                                return Promise.resolve(this._bodyBlob);
                            } else if (this._bodyArrayBuffer) {
                                return Promise.resolve(
                                    new Blob([this._bodyArrayBuffer])
                                );
                            } else if (this._bodyFormData) {
                                throw new Error(
                                    'could not read FormData body as blob'
                                );
                            } else {
                                return Promise.resolve(
                                    new Blob([this._bodyText])
                                );
                            }
                        };
                        this.arrayBuffer = function () {
                            if (this._bodyArrayBuffer) {
                                var isConsumed = consumed(this);
                                if (isConsumed) {
                                    return isConsumed;
                                }
                                if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                                    return Promise.resolve(
                                        this._bodyArrayBuffer.buffer.slice(
                                            this._bodyArrayBuffer.byteOffset,
                                            this._bodyArrayBuffer.byteOffset +
                                                this._bodyArrayBuffer.byteLength
                                        )
                                    );
                                } else {
                                    return Promise.resolve(
                                        this._bodyArrayBuffer
                                    );
                                }
                            } else {
                                return this.blob().then(readBlobAsArrayBuffer);
                            }
                        };
                    }
                    this.text = function () {
                        var rejected = consumed(this);
                        if (rejected) {
                            return rejected;
                        }
                        if (this._bodyBlob) {
                            return readBlobAsText(this._bodyBlob);
                        } else if (this._bodyArrayBuffer) {
                            return Promise.resolve(
                                readArrayBufferAsText(this._bodyArrayBuffer)
                            );
                        } else if (this._bodyFormData) {
                            throw new Error(
                                'could not read FormData body as text'
                            );
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };
                    if (support.formData) {
                        this.formData = function () {
                            return this.text().then(decode);
                        };
                    }
                    this.json = function () {
                        return this.text().then(JSON.parse);
                    };
                    return this;
                }
                var methods = [
                    'DELETE',
                    'GET',
                    'HEAD',
                    'OPTIONS',
                    'POST',
                    'PUT',
                ];
                function normalizeMethod(method) {
                    var upcased = method.toUpperCase();
                    return methods.indexOf(upcased) > -1 ? upcased : method;
                }
                function Request(input, options) {
                    if (!(this instanceof Request)) {
                        throw new TypeError(
                            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                        );
                    }
                    options = options || {};
                    var body = options.body;
                    if (input instanceof Request) {
                        if (input.bodyUsed) {
                            throw new TypeError('Already read');
                        }
                        this.url = input.url;
                        this.credentials = input.credentials;
                        if (!options.headers) {
                            this.headers = new Headers(input.headers);
                        }
                        this.method = input.method;
                        this.mode = input.mode;
                        this.signal = input.signal;
                        if (!body && input._bodyInit != null) {
                            body = input._bodyInit;
                            input.bodyUsed = true;
                        }
                    } else {
                        this.url = String(input);
                    }
                    this.credentials =
                        options.credentials ||
                        this.credentials ||
                        'same-origin';
                    if (options.headers || !this.headers) {
                        this.headers = new Headers(options.headers);
                    }
                    this.method = normalizeMethod(
                        options.method || this.method || 'GET'
                    );
                    this.mode = options.mode || this.mode || null;
                    this.signal = options.signal || this.signal;
                    this.referrer = null;
                    if (
                        (this.method === 'GET' || this.method === 'HEAD') &&
                        body
                    ) {
                        throw new TypeError(
                            'Body not allowed for GET or HEAD requests'
                        );
                    }
                    this._initBody(body);
                    if (this.method === 'GET' || this.method === 'HEAD') {
                        if (
                            options.cache === 'no-store' ||
                            options.cache === 'no-cache'
                        ) {
                            var reParamSearch = /([?&])_=[^&]*/;
                            if (reParamSearch.test(this.url)) {
                                this.url = this.url.replace(
                                    reParamSearch,
                                    '$1_=' +
                                        /* @__PURE__ */ new Date().getTime()
                                );
                            } else {
                                var reQueryString = /\?/;
                                this.url +=
                                    (reQueryString.test(this.url) ? '&' : '?') +
                                    '_=' +
                                    /* @__PURE__ */ new Date().getTime();
                            }
                        }
                    }
                }
                Request.prototype.clone = function () {
                    return new Request(this, { body: this._bodyInit });
                };
                function decode(body) {
                    var form = new FormData();
                    body.trim()
                        .split('&')
                        .forEach(function (bytes) {
                            if (bytes) {
                                var split = bytes.split('=');
                                var name = split.shift().replace(/\+/g, ' ');
                                var value = split.join('=').replace(/\+/g, ' ');
                                form.append(
                                    decodeURIComponent(name),
                                    decodeURIComponent(value)
                                );
                            }
                        });
                    return form;
                }
                function parseHeaders(rawHeaders) {
                    var headers = new Headers();
                    var preProcessedHeaders = rawHeaders.replace(
                        /\r?\n[\t ]+/g,
                        ' '
                    );
                    preProcessedHeaders
                        .split('\r')
                        .map(function (header) {
                            return header.indexOf('\n') === 0
                                ? header.substr(1, header.length)
                                : header;
                        })
                        .forEach(function (line) {
                            var parts = line.split(':');
                            var key = parts.shift().trim();
                            if (key) {
                                var value = parts.join(':').trim();
                                headers.append(key, value);
                            }
                        });
                    return headers;
                }
                Body.call(Request.prototype);
                function Response(bodyInit, options) {
                    if (!(this instanceof Response)) {
                        throw new TypeError(
                            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                        );
                    }
                    if (!options) {
                        options = {};
                    }
                    this.type = 'default';
                    this.status =
                        options.status === void 0 ? 200 : options.status;
                    this.ok = this.status >= 200 && this.status < 300;
                    this.statusText =
                        options.statusText === void 0
                            ? ''
                            : '' + options.statusText;
                    this.headers = new Headers(options.headers);
                    this.url = options.url || '';
                    this._initBody(bodyInit);
                }
                Body.call(Response.prototype);
                Response.prototype.clone = function () {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url,
                    });
                };
                Response.error = function () {
                    var response = new Response(null, {
                        status: 0,
                        statusText: '',
                    });
                    response.type = 'error';
                    return response;
                };
                var redirectStatuses = [301, 302, 303, 307, 308];
                Response.redirect = function (url, status) {
                    if (redirectStatuses.indexOf(status) === -1) {
                        throw new RangeError('Invalid status code');
                    }
                    return new Response(null, {
                        status,
                        headers: { location: url },
                    });
                };
                exports2.DOMException = global2.DOMException;
                try {
                    new exports2.DOMException();
                } catch (err) {
                    exports2.DOMException = function (message, name) {
                        this.message = message;
                        this.name = name;
                        var error = Error(message);
                        this.stack = error.stack;
                    };
                    exports2.DOMException.prototype = Object.create(
                        Error.prototype
                    );
                    exports2.DOMException.prototype.constructor =
                        exports2.DOMException;
                }
                function fetch(input, init) {
                    return new Promise(function (resolve, reject) {
                        var request = new Request(input, init);
                        if (request.signal && request.signal.aborted) {
                            return reject(
                                new exports2.DOMException(
                                    'Aborted',
                                    'AbortError'
                                )
                            );
                        }
                        var xhr = new XMLHttpRequest();
                        function abortXhr() {
                            xhr.abort();
                        }
                        xhr.onload = function () {
                            var options = {
                                status: xhr.status,
                                statusText: xhr.statusText,
                                headers: parseHeaders(
                                    xhr.getAllResponseHeaders() || ''
                                ),
                            };
                            options.url =
                                'responseURL' in xhr
                                    ? xhr.responseURL
                                    : options.headers.get('X-Request-URL');
                            var body =
                                'response' in xhr
                                    ? xhr.response
                                    : xhr.responseText;
                            setTimeout(function () {
                                resolve(new Response(body, options));
                            }, 0);
                        };
                        xhr.onerror = function () {
                            setTimeout(function () {
                                reject(new TypeError('Network request failed'));
                            }, 0);
                        };
                        xhr.ontimeout = function () {
                            setTimeout(function () {
                                reject(new TypeError('Network request failed'));
                            }, 0);
                        };
                        xhr.onabort = function () {
                            setTimeout(function () {
                                reject(
                                    new exports2.DOMException(
                                        'Aborted',
                                        'AbortError'
                                    )
                                );
                            }, 0);
                        };
                        function fixUrl(url) {
                            try {
                                return url === '' && global2.location.href
                                    ? global2.location.href
                                    : url;
                            } catch (e) {
                                return url;
                            }
                        }
                        xhr.open(request.method, fixUrl(request.url), true);
                        if (request.credentials === 'include') {
                            xhr.withCredentials = true;
                        } else if (request.credentials === 'omit') {
                            xhr.withCredentials = false;
                        }
                        if ('responseType' in xhr) {
                            if (support.blob) {
                                xhr.responseType = 'blob';
                            } else if (
                                support.arrayBuffer &&
                                request.headers.get('Content-Type') &&
                                request.headers
                                    .get('Content-Type')
                                    .indexOf('application/octet-stream') !== -1
                            ) {
                                xhr.responseType = 'arraybuffer';
                            }
                        }
                        if (
                            init &&
                            typeof init.headers === 'object' &&
                            !(init.headers instanceof Headers)
                        ) {
                            Object.getOwnPropertyNames(init.headers).forEach(
                                function (name) {
                                    xhr.setRequestHeader(
                                        name,
                                        normalizeValue(init.headers[name])
                                    );
                                }
                            );
                        } else {
                            request.headers.forEach(function (value, name) {
                                xhr.setRequestHeader(name, value);
                            });
                        }
                        if (request.signal) {
                            request.signal.addEventListener('abort', abortXhr);
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === 4) {
                                    request.signal.removeEventListener(
                                        'abort',
                                        abortXhr
                                    );
                                }
                            };
                        }
                        xhr.send(
                            typeof request._bodyInit === 'undefined'
                                ? null
                                : request._bodyInit
                        );
                    });
                }
                fetch.polyfill = true;
                if (!global2.fetch) {
                    global2.fetch = fetch;
                    global2.Headers = Headers;
                    global2.Request = Request;
                    global2.Response = Response;
                }
                exports2.Headers = Headers;
                exports2.Request = Request;
                exports2.Response = Response;
                exports2.fetch = fetch;
                return exports2;
            })({});
        })(__globalThis__);
        __globalThis__.fetch.ponyfill = true;
        delete __globalThis__.fetch.polyfill;
        var ctx = __global__.fetch ? __global__ : __globalThis__;
        exports = ctx.fetch;
        exports.default = ctx.fetch;
        exports.fetch = ctx.fetch;
        exports.Headers = ctx.Headers;
        exports.Request = ctx.Request;
        exports.Response = ctx.Response;
        module.exports = exports;
    },
});
export default require_browser_ponyfill();
//# sourceMappingURL=browser-ponyfill-UDWXRDDV.js.map
