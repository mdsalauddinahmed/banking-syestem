// console.log("withdraw activated")
// step-1 event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){
//     if (typeof newWithdrawAmount != 'number' ||   withdrawField.value=='' ) {
//         alert("Please enter a  number") ;
//             return;
//    }


    const withdrawField =document.getElementById('user-withdraw');
    // console.log(depositField.value)
    const newWithdrawAmountString = withdrawField.value;
    //console.log(newWithdrawAmountString)
    const   newWithdrawAmount=parseFloat(newWithdrawAmountString)
    withdrawField.value='';
    if(isNaN(newWithdrawAmount)){
        alert('please provide number')
        return;
    }
    
    //console.log(typeof  newWithdrawAmount)
    const preWithdrawElement =document.getElementById('withdraw-total');
    const preWithdrawAmountString = preWithdrawElement.innerText;
    const preWithdrawAmount=parseFloat(preWithdrawAmountString)
    // console.log(preWithdrawAmount)
     
  

     //step-5:to add total balance
     const balanceTotalElement = document.getElementById('balance-total');
     const preBalanceTotalString =balanceTotalElement.innerText;
     const preBalanceTotal =parseFloat(preBalanceTotalString)
     withdrawField.value='';
     if(newWithdrawAmount>preBalanceTotal){
        alert('you have  insufficient balance ')
        return;
     }
     const currentWithdrawTotal = preWithdrawAmount+newWithdrawAmount;
     preWithdrawElement.innerText=currentWithdrawTotal;
     // step-6:set the total balance
 
     const currentTotalBalance= preBalanceTotal-newWithdrawAmount;
     balanceTotalElement.innerText=currentTotalBalance;


    //  step-7
    withdrawField.value='';
})