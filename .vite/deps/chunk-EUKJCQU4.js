import { require_react_dom } from './chunk-J7XUA7TT.js';
import { __commonJS } from './chunk-G3PMV62Z.js';

// node_modules/react-dom/client.js
var require_client = __commonJS({
    'node_modules/react-dom/client.js'(exports) {
        var m = require_react_dom();
        if (false) {
            exports.createRoot = m.createRoot;
            exports.hydrateRoot = m.hydrateRoot;
        } else {
            i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            exports.createRoot = function (c, o) {
                i.usingClientEntryPoint = true;
                try {
                    return m.createRoot(c, o);
                } finally {
                    i.usingClientEntryPoint = false;
                }
            };
            exports.hydrateRoot = function (c, h, o) {
                i.usingClientEntryPoint = true;
                try {
                    return m.hydrateRoot(c, h, o);
                } finally {
                    i.usingClientEntryPoint = false;
                }
            };
        }
        var i;
    },
});

export { require_client };
//# sourceMappingURL=chunk-EUKJCQU4.js.map
