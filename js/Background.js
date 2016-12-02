var pref = Preferences;
var ext = new Process();
ext.init(), chrome.browserAction.onClicked.addListener(function(a) {
    ext.toggle();
}), chrome.extension.onRequest.addListener(function(a, c, b) {
    a.pageLoad && pref.get('enabled') && b({
        parseDOM: !0
    });
}), window.setInterval(function() {
    ext.isPageComplete();
}, 5000);