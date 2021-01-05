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
let selectedBankValue = "";

// input fields data
const fullNameInput = document.getElementById('fullNameInput');
const idNumberInput = document.getElementById('idNumberInput');
const moneyAmountInput = document.getElementById('moneyAmountInput');
const datepickerInput = document.getElementById('datepickerInput');
const selectedBank = document.getElementById('SelectedBank');
const bankBranchInput = document.getElementById('bankBranchInput');
const bankAccountInput = document.getElementById('bankAccountInput');
const limitedAccessCheckbox = document.getElementById('limitedAccessCheckbox');

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


const limitInputBox = document.getElementById('limitInputBox');

//limitedAccessCheckbox  event listener
limitedAccessCheckbox.addEventListener('click', event => {

    const tl = gsap.timeline({
        defaults: {
            ease: "power2.inOut"
        }
    })

    if (limitedAccessCheckbox.checked) {
        tl.to('.limit-access-input-box', {
            opacity: "0",
            height: "0",
            zIndex: "-1"
        });

        //limitInputBox.style.visibility = 'hidden';
    } else {
        limitInputBox.style.zIndex = "1";
        tl.to('.limit-access-input-box', {
            opacity: "1",
            height: "150px"
        });
        //limitInputBox.style.visibility = 'visible';
    }
});



// select bank activity
SelectedBankElement.addEventListener('click', event => {
    if (SelectedBankElementReady) {
        SelectBankBox.style.zIndex = "1";
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "1"
        });
        SelectedBankElementReady = false;
        bankSelected = false;
    }
});
// set bank
SelectBankHapoalim.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankHapoalim.innerHTML;
        bankSelected = true;
        selectedBankValue = "הפועלים 12";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectBankLeumi.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankLeumi.innerHTML;
        bankSelected = true;
        selectedBankValue = "לאומי 10";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectIsraelDiscountBank.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectIsraelDiscountBank.innerHTML;
        bankSelected = true;
        selectedBankValue = "בנק ישראל דיסקונט 11";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectBankMizrahiTefahot.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankMizrahiTefahot.innerHTML;
        bankSelected = true;
        selectedBankValue = "מיזרחי טפחות 20";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectFirstInternationalBankOfIsrael.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectFirstInternationalBankOfIsrael.innerHTML;
        bankSelected = true;
        selectedBankValue = "הבנק של ישראל 31 ";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectMercantileDiscountBank.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectMercantileDiscountBank.innerHTML;
        bankSelected = true;
        selectedBankValue = "מרכנתיל דיסקונט 17";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectBankOtsarHaHayal.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankOtsarHaHayal.innerHTML;
        bankSelected = true;
        selectedBankValue = "אוצר החייל 14";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectBankYahavForGovernmentEmployeesLtd.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankYahavForGovernmentEmployeesLtd.innerHTML;
        bankSelected = true;
        selectedBankValue = "בנק יהב 4";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});
SelectBankMassadLtd.addEventListener('click', (event) => {
    if (!bankSelected) {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut"
            }
        });
        tl.to('.bank-select-box', {
            opacity: "0"
        });
        tl.to('.bank-select-box', {
            zIndex: "-1"
        });
        SelectedBankElement.innerHTML = SelectBankMassadLtd.innerHTML;
        bankSelected = true;
        selectedBankValue = "מסד 46";
        setTimeout(() => {
            SelectedBankElementReady = true;
        }, 1000);
    }
});



// signature pad activity
signaturePadOpenButton.addEventListener('click', (event) => {
    let signatureForm = document.getElementById("signatureInputForm");
    signatureForm.style.zIndex = "1";
    //const pad = document.getElementById("signatureInputForm");
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.inOut"
        }
    });
    //tl.to('.signature-input-form',{zIndex:"1"},"-=2.5s");
    tl.to('.signature-input-form', {
        opacity: "1"
    }, "-=0.5s");

});
signatureSaveButton.addEventListener('click', function (event) {
    requestData.pictureData = signaturePad.toDataURL('image/png');
    dataSignatureReady = true;
    //const pad = document.getElementById("signatureInputForm");
    const tl = gsap.timeline({
        defaults: {
            ease: "power2.inOut"
        }
    });
    tl.to('.signature-input-form', {
        opacity: "0",
        zIndex: "-1"
    });
});
signatureClearButton.addEventListener('click', function (event) {
    dataSignatureReady.false;
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

    let checkDate = (date) => {
        if (date.trim().length < 1) {
            return false;
        }
        let datepickerDate = date.split('/');
        //console.log(`bank: ${selectedBank.value}`);
        //console.log(`datePickerdata: month-${datepickerDate[0]}, day-${datepickerDate[1]}, year-${datepickerDate[2]}`);
        let dateNow = new Date();
        let dayNow = dateNow.getDate();
        let monthNow = dateNow.getMonth() + 1;
        let yearNow = dateNow.getFullYear();

        if (parseInt(datepickerDate[2]) < parseInt(yearNow)) {
            return false;
        }
        if (parseInt(datepickerDate[0]) < parseInt(monthNow)) {
            return false;
        }
        if (parseInt(datepickerDate[1]) < parseInt(dayNow)) {
            return false;
        }

        //console.log(`today: ${dayNow}/${monthNow}/${yearNow}`);
        return true;
    }


    $('#submit').click(function () {

        const regexAnyLetterExistance = /[a-zA-z]+/g; // check letters in input
        const regexId = /[0-9]{9}/g; // check and get 9 digits

        // check fullname doesn't empty
        if (fullNameInput.value.toString().trim().length < 1) {
            alert('בבקשה נא למלא שם ושם משפחה');
            return
        }

        // check that id doesn't contain letters  and has length of 9 digits
        if (
            idNumberInput.value.match(regexAnyLetterExistance) ||
            idNumberInput.value.toString().trim().length != 9
        ) {
            alert(" בבקשה להוסיף תעודת זהות תקינה עם 9 ספרות");
            return;
        }



        if (!limitedAccessCheckbox.checked) {
            //set unlimited access
            requestData.unlimitedAccess = false;

            // check if amount money field has any letter and isn't empty
            if (
                moneyAmountInput.value.match(regexAnyLetterExistance) ||
                moneyAmountInput.value.toString().trim().length < 1) {
                alert("בבקשה נא להכניס סכום החיוב במספרים");
                return;
            }

            //check date that latter than today
            let validDate = checkDate(datepickerInput.value);
            if (!validDate) {
                alert('בבקשה לבחור תאריך קיעת תוקף');
                return;
            }
        } else {
            requestData.unlimitedAccess = true;
        }

        // check bank chosen 
        if (!bankSelected) {
            alert("בבקשה לבחור בנק");
            return;
        }

        // check bank branch
        if (
            bankBranchInput.value.match(regexAnyLetterExistance) ||
            bankBranchInput.value.toString().trim().length != 3
        ) {
            alert(" בבקשה הכנס מספר סניף הבנק, מספר סניף הבנק חייב להכיל רק 3 ספרות");
            return;
        }

        // check account number
        if (bankAccountInput.value.match(regexAnyLetterExistance) || bankAccountInput.value.toString().trim().length < 1) {
            alert("בבקשה הכנס מספר חשבון הבנק ");
            return;
        }
        // check account number length

        // signature check
        if (!dataSignatureReady) {
            alert("בבקשה הוסף חתימה אלקטרונית");
            return;
        }

        let isEmptyPicture = checkEmptySign(requestData.pictureData);
        if(isEmptyPicture){
            alert("Please retake signature");
            return;
        }

        requestData.fullNameInput = fullNameInput.value;
        requestData.idNumberInput = idNumberInput.value.match(regexId);
        requestData.moneyAmountInput = moneyAmountInput.value;
        requestData.datepickerInput = datepickerInput.value;
        requestData.selectedBank = selectedBankValue;
        requestData.bankBranchInput = bankBranchInput.value;
        requestData.bankAccountInput = bankAccountInput.value;
        requestData.bankNumberInput = selectedBankValue.split(" ")[selectedBankValue.split(" ").length - 1];


        if (dataSignatureReady) {


            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
            tl.to('.info-block', {
                opacity: "0", zIndex: "-2"
            }, "-=0.5s");
            tl.to('.data-collect-section', {
                opacity: "0", zIndex: "-2"
            }, "-=0.5s");
            tl.to('.success-message', {
                opacity: "1", zIndex: "1"
            }, "-=0.5s");

            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

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

            //alert('sent');


        } else {
            alert("Can't send request check entered data.");
        }
    })
})


function checkEmptySign(signature) {
    let aCounter = 0;
    for (let i = 0; i < signature.length; i++) {
        if (signature[i] == 'A' && signature[i + 1] == 'A') {
            aCounter++;
            if (aCounter == 400) {
                return true;
            }
        } else {
            aCounter = 0;
        }
    }
    return false;
}