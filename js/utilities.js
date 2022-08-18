

function inputValueFeild(inputValue) {
    const userDeposite = document.getElementById(inputValue);
    const userDepositeValueString = userDeposite.value;
    const userDepositeValueNumber = parseFloat(userDepositeValueString);
    userDeposite.value = '';  
    return userDepositeValueNumber;
}

function innerTextElementId(innerText) {
    const depositePreAmount = document.getElementById(innerText);
    const depositePreAmountInnerText = depositePreAmount.innerText;
    const depositePreAmountNumber = parseFloat(depositePreAmountInnerText);
   
    return depositePreAmountNumber;
}

function setInnerValue(elementId, setValue) {
    const depositePreAmount = document.getElementById(elementId);
    depositePreAmount.innerText = setValue;  
    return depositePreAmount;
}