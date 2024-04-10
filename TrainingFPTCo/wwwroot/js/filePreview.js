// filePreview.js

// H�m x? l� s? ki?n thay ??i c?a input file v� c?p nh?t ph?n preview
function updateFilePreview(input, previewElementId) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var previewElement = document.getElementById(previewElementId);
        previewElement.src = e.target.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}

// L?ng nghe s? ki?n thay ??i c?a c�c input file v� g?i h�m c?p nh?t preview t??ng ?ng
document.addEventListener("DOMContentLoaded", function () {
    var viewPosterTopicInput = document.getElementById("ViewPosterTopic");
    var documentsInput = document.getElementById("Documents");
    var attachFileInput = document.getElementById("AttachFile");

    viewPosterTopicInput.addEventListener("change", function () {
        updateFilePreview(this, "imgPreviewPosterTopic");
    });

    documentsInput.addEventListener("change", function () {
        updateFilePreview(this, "previewDocuments");
    });

    attachFileInput.addEventListener("change", function () {
        updateFilePreview(this, "previewAttachFile");
    });
});
