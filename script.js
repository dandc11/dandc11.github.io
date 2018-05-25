// Get modal elements
var gbmModal = document.getElementById('gbm-modal');
var wfModal = document.getElementById('wordfeast-modal');
var gbmClose = document.getElementById('gbm-close');
var wfClose = document.getElementById('wf-close');

// Get the button that opens the modal
var gbmBtn = document.getElementById("gbmModalBtn");
var wfBtn = document.getElementById("wordfeastModalBtn");

// Open modals
gbmBtn.onclick = function () {
    gbmModal.style.display = "block";
}

wfBtn.onclick = function () {
    wfModal.style.display = "block";
}

// Close button
gbmClose.onclick = function () {
    gbmModal.style.display = "none";
}

wfClose.onclick = function () {
    wfModal.style.display = "none";
}
window.addEventListener('click', function(event) {
    if (event.target == wfModal) {
        wfModal.style.display = "none";
    }
});

window.addEventListener('click', function(event) {
    if (event.target == gbmModal) {
        gbmModal.style.display = "none";
    }
});

