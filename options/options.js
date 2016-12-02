window.addEventListener('load', initialise);
var email;
function initialise() {
    document.getElementById("signup").addEventListener("click", saveOptions);
    loadOptions();
}

function loadOptions() {


    chrome.storage.sync.get("email", function (obj) {
        email = obj.email;
    });

}

function saveOptions() {
    var email = document.getElementById("email").value;
    chrome.storage.sync.set("email", email);
}
