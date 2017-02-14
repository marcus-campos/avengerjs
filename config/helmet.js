//============================================
//# HELMET CONFIGS
//============================================

/*
 * Read about CSP in:
 * -> https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
 * -> http://scottksmith.com/blog/2014/09/21/protect-your-node-apps-noggin-with-helmet/
 */

/*
 *  CSP VALUES:
 *
 * 'none' will match nothing
 * 'self' will match the current origin but not subdomains
 * 'unsafe-inline' allows inline JavaScript and CSS
 * 'unsafe-eval' allows things like eval() to work
 */

const csp = {
    // Specify directives as normal.
    directives: {
        defaultSrc: ["'self'", 'default.com'],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ['style.com'],
        fontSrc: ["'self'", 'fonts.com'],
        imgSrc: ['img.com', 'data:'],
        sandbox: ['allow-forms', 'allow-scripts'],
        reportUri: '/report-violation',
        objectSrc: ["'none'"],
        upgradeInsecureRequests: true
    },

    // This module will detect common mistakes in your directives and throw errors
    // if it finds any. To disable this, enable "loose mode".
    loose: false,

    // Set to true if you only want browsers to report errors, not block them.
    // You may also set this to a function(req, res) in order to decide dynamically
    // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
    reportOnly: false,

    // Set to true if you want to blindly set all headers: Content-Security-Policy,
    // X-WebKit-CSP, and X-Content-Security-Policy.
    setAllHeaders: false,

    // Set to true if you want to disable CSP on Android where it can be buggy.
    disableAndroid: false,

    // Set to false if you want to completely disable any user-agent sniffing.
    // This may make the headers less compatible but it will be much faster.
    // This defaults to `true`.
    browserSniff: true
}

module.exports.csp = csp