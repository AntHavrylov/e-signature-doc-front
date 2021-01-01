var canvas = document.querySelector("canvas");

var signaturePad = new SignaturePad(canvas, {
    minWidth: 1,
    maxWidth: 2,
    penColor: "rgb(33,33,33)"
});

var requestData = {

};

let dataSignatureReady = false;
let SelectedBankElementReady = true;
let bankSelected = false;

// input fields data
const fullNameInput = document.getElementById('fullNameInput');
const idNumberInput = document.getElementById('idNumberInput');
const moneyAmountInput = document.getElementById('moneyAmountInput');
const datepickerInput = document.getElementById('datepickerInput');
const selectedBank = document.getElementById('SelectedBank');
const bankBranchInput = document.getElementById('bankBranchInput');
const bankAccountInput = document.getElementById('bankAccountInput');

// select bank variables
const SelectBankBox = document.getElementById('SelectBankBox');
const SelectedBankElement = document.getElementById('SelectedBank');
const SelectBankHapoalim = document.getElementById('BankHapoalim');
const SelectBankLeumi = document.getElementById('BankLeumi');
const SelectIsraelDiscountBank = document.getElementById('IsraelDiscountBank');
const SelectBankMizrahiTefahot = document.getElementById('BankMizrahiTefahot');
const SelectFirstInternationalBankOfIsrael = document.getElementById('FirstInternationalBankOfIsrael');
const SelectMercantileDiscountBank = document.getElementById('MercantileDiscountBank');
const SelectBankOtsarHaHayal = document.getElementById('BankOtsarHaHayal');
const SelectBankYahavForGovernmentEmployeesLtd = document.getElementById('BankYahavForGovernmentEmployeesLtd');
const SelectBankMassadLtd = document.getElementById('BankMassadLtd');

// signature variables
const signatureWrapper = document.getElementById('signature-wrapper');
const signaturePadPanel = document.getElementById('signature-pad');
const signaturePadOpenButton = document.getElementById('signaturePadOpenButton');
const signatureSaveButton = document.getElementById('signatureSaveButton');
const signatureClearButton = document.getElementById('signatureClearButton');

// select bank activity
SelectedBankElement.addEventListener('click', event => {
    if (SelectedBankElementReady) {
        SelectBankBox.style.zIndex = "1";
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "1" });
        SelectedBankElementReady = false;
        bankSelected = false;
    }
});
// set bank
SelectBankHapoalim.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankHapoalim.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectBankLeumi.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankLeumi.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectIsraelDiscountBank.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectIsraelDiscountBank.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectBankMizrahiTefahot.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankMizrahiTefahot.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectFirstInternationalBankOfIsrael.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectFirstInternationalBankOfIsrael.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectMercantileDiscountBank.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectMercantileDiscountBank.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectBankOtsarHaHayal.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankOtsarHaHayal.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectBankYahavForGovernmentEmployeesLtd.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankYahavForGovernmentEmployeesLtd.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});
SelectBankMassadLtd.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to('.bank-select-box', { opacity: "0" });
        tl.to('.bank-select-box', { zIndex: "-1" });
        SelectedBankElement.innerHTML = SelectBankMassadLtd.innerHTML;
        bankSelected = true;
        setTimeout(() => { SelectedBankElementReady = true; }, 1000);
    }
});



// signature pad activity
signaturePadOpenButton.addEventListener('click', (event) => {
    let signatureForm = document.getElementById("signatureInputForm");
    signatureForm.style.zIndex = "1";
    //const pad = document.getElementById("signatureInputForm");
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    //tl.to('.signature-input-form',{zIndex:"1"},"-=2.5s");
    tl.to('.signature-input-form', { opacity: "1" }, "-=0.5s");

});
signatureSaveButton.addEventListener('click', function (event) {
    requestData.pictureData = signaturePad.toDataURL('image/png');
    dataSignatureReady = true;
    //const pad = document.getElementById("signatureInputForm");
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to('.signature-input-form', { opacity: "0", zIndex: "-1" });
});
signatureClearButton.addEventListener('click', function (event) {
    signaturePad.clear();
});

// get data from datepicker
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});

// submit data functionality
$(document).ready(function () {
    const Url = 'http://localhost:3000/doc-data';
    $('#submit').click(function () {


        const regexAnyLetterExistance = /[a-zA-z]+/g;   // check letters in input
        const regexId = /[0-9]{9}/g;            // check and get 9 digits

        // check fullname doesn't empty
        if (fullNameInput.value.toString().trim().length < 1) {
            alert('Please fill full name field.');
            return
        }

        // check that id doesn't contain letters
        if (idNumberInput.value.match(regexAnyLetterExistance)) {
            alert("Id field must countain only digits.");
            return;
        }
        // check if id has 9 digits
        if (!idNumberInput.value.match(regexId)) {
            alert("Id field must have length of 9 digits.");
            return;
        }
        // check if amount money field has any letter
        if (moneyAmountInput.value.match(regexAnyLetterExistance) || moneyAmountInput.value.toString().trim().length<1 ) {
            alert("Amout money field can't be empty and must countain only digits.");
            return;
        }

        //check date that latter than today

        // check bank chosen 
        if(!bankSelected){
            alert("Need to chose a bank.");
            return;
        }

        // check bank branch
        if(bankBranchInput.value.match(regexAnyLetterExistance) || bankBranchInput.value.toString().trim().length<1){
            alert("Bank Branch field can't be empty and must countain only digits.");
            return;
        }

        // check account number
        if(bankAccountInput.value.match(regexAnyLetterExistance) || bankAccountInput.value.toString().trim().length<1){
            alert("Bank Account field can't be empty and must countain only digits.");
            return;
        }
        // check account number length

        // signature check
        if(!dataSignatureReady){
            alert("Please add your electronic signature.");
            return;
        }
        // check account number length

        requestData.fullNameInput = fullNameInput.value;
        requestData.idNumberInput = idNumberInput.value.match(regexId);
        requestData.moneyAmountInput = moneyAmountInput.value;
        requestData.datepickerInput = datepickerInput.value;
        requestData.selectedBank = selectedBank.value;
        requestData.bankBranchInput = bankBranchInput.value;
        requestData.bankAccountInput = bankAccountInput.value;

        if (dataSignatureReady) {
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

            alert('sent');
        } else {
            alert("Can't send request check entered data.");
        }
    })
})
