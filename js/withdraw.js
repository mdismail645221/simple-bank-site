document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputWithdrawFeild = inputValueFeild('user-withdraw');
    if (isNaN(inputWithdrawFeild)) {
       return alert('NUMBER ADD')
   }
    const withdrawAmount = innerTextElementId('withdrawElement');
    const totalWithdrawAmount = withdrawAmount + inputWithdrawFeild;
    setInnerValue('withdrawElement', totalWithdrawAmount);

    //withdraw balanced set
    const totalBalanced = innerTextElementId('balanced-deposite');
    const totalWithdrawBalanced = totalBalanced - inputWithdrawFeild;
    setInnerValue('balanced-deposite', totalWithdrawBalanced);
    
})