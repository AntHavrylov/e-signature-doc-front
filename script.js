var canvas = document.querySelector("canvas");

var signaturePad = new SignaturePad(canvas, {
    minWidth: 1,
    maxWidth: 2,
    penColor: "rgb(33,33,33)"
});

var requestData = {
    
};
let dataReady = false;

let signatureWrapper = document.getElementById('signature-wrapper');
let signaturePadPanel = document.getElementById('signature-pad');

var signaturePadOpenButton = document.getElementById('openSignaturePad');
var signatureSaveButton = document.getElementById('signatureSaveButton');
var signatureClearButton = document.getElementById('signatureClearButton');

const signaturePadWidth = 400;
const signaturePadHeight = 200;

signaturePadOpenButton.addEventListener('click', (event) => {
    signaturePadPanel.style.visibility =
        signatureWrapper.style.visibility =
        signatureSaveButton.style.visibility =
        signatureClearButton.style.visibility = 'visible';

    signaturePadPanel.style.width = signaturePadWidth+'px'
        signatureWrapper.style.width = (signaturePadWidth+5)+'px';
    signaturePadPanel.style.height =signaturePadHeight+'px'
        signatureWrapper.style.height = (signaturePadHeight+5)+'px';

    signatureSaveButton.style.width = signatureClearButton.style.width = "100px";
    signatureSaveButton.style.height = signatureClearButton.style.height = "27px";
})

signatureSaveButton.addEventListener('click', function (event) {
    requestData.pictureData = signaturePad.toDataURL('image/png');
    dataReady = true;

    signaturePadPanel.style.visibility =
        signatureWrapper.style.visibility =
        signatureSaveButton.style.visibility =
        signatureClearButton.style.visibility = 'hidden';

    signaturePadPanel.style.width =
        signatureWrapper.style.width =
        signatureSaveButton.style.width =
        signatureClearButton.style.width = '0px';


    signaturePadPanel.style.height =
        signatureWrapper.style.height =
        signatureSaveButton.style.height =
        signatureClearButton.style.height = '0px';

});

signatureClearButton.addEventListener('click', function (event) {
    signaturePad.clear();
});

$(document).ready(function () {
    const Url = 'http://localhost:3000/doc-data';
    $('#submit').click(function () {
        if (dataReady) {
            $.ajax({
                url: Url,
                type: "POST",
                data: requestData,
                success: function (result) {
                    console.log(result)
                },
                error: function (error) {
                    console.log(`Error ${error}`)
                }
            })
        } else {
            alert("data isn't ready.");
        }
    })
})