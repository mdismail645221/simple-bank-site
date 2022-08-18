
document.getElementById('deposite-btn').addEventListener('click', function () {
    const userDepositeValueNumber = inputValueFeild('user-deposite');
    if (isNaN(userDepositeValueNumber)) {
        return alert('NUMBER ADD')
    }
    
    const depositePreAmountNumber = innerTextElementId('deposite-pre-amount');
    
    const totalDeposite = depositePreAmountNumber + userDepositeValueNumber;
    
   setInnerValue('deposite-pre-amount', totalDeposite)
   
    // balanced 
    const balancedAmount = innerTextElementId('balanced-deposite');
    const totalBalanced = balancedAmount + userDepositeValueNumber;
    setInnerValue('balanced-deposite', totalBalanced);
    
    
})