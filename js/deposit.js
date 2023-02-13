 
//  step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField =document.getElementById('user-Field');
    // console.log(depositField.value)
    const newDepositAmountString = depositField.value;
    const   newDepositAmount=parseFloat(newDepositAmountString)
    //console.log(typeof newDepositAmount)
    //console.log(depositAmount)
    // step-3:get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalString = depositTotalElement.innerText;
    const  preDepositTotal =parseFloat(preDepositTotalString)
    //console.log(typeof preDepositTotal)
   // console.log(depositTotal)
    //  step-4:set the total deposit balance
      const currentDepositTotal =preDepositTotal+newDepositAmount;
      depositTotalElement.innerText=currentDepositTotal ;

    //step-5:to add total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString =balanceTotalElement.innerText;
    const preBalanceTotal =parseFloat(preBalanceTotalString)
    // step-6:set the total balance

    const currentTotalBalance= preBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText=currentTotalBalance;

//step-7 clear the deposit field
    depositField.value= '';
})

 