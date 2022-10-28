var mainPage = document.getElementById("main-page");
var add_DepositBTN = document.getElementById("add_DepositBTN");
add_DepositBTN.addEventListener("click",function(){
     
    var deposit_input = document.getElementById("deposit_input").value;
    var depositNewInput = parseFloat(deposit_input);

    var total_deposit = document.getElementById("total-deposit").innerText;
    var totalNewDeposit = parseFloat(total_deposit);

    var TotalDeposit = depositNewInput+totalNewDeposit;
    console.log(TotalDeposit);

    document.getElementById("total-deposit").innerHTML=TotalDeposit.toFixed(2);

    var total_balance = document.getElementById("total_balance").innerText;
    var NewTotalBalance = parseFloat(total_balance);

    var TotalNewBalance = depositNewInput +  NewTotalBalance;
    console.log(TotalNewBalance);

    document.getElementById("total_balance").innerHTML=TotalNewBalance.toFixed(2);
}
);

    var withdrawBtn = document.getElementById("withdrawBtn");
    withdrawBtn.addEventListener("click",function() {
    var withdrawInput = document.getElementById("withdrawInput").value;
    var NewWithdrawInput = parseFloat(withdrawInput);

    var  withdrawTotal = document.getElementById("withdrawTotal").innerText;
    var NewWithdrawTotal = parseFloat(withdrawTotal);

    var TotalWithdraw = NewWithdrawTotal+NewWithdrawInput;
    console.log(TotalWithdraw);

    document.getElementById("withdrawTotal").innerHTML=TotalWithdraw.toFixed(2);
    
    var total_balance = document.getElementById("total_balance").innerText;
    var NewTotalBalance = parseFloat(total_balance);
    var multiply = NewTotalBalance - NewWithdrawInput ;
    console.log( multiply);
    document.getElementById("total_balance").innerHTML= multiply.toFixed(2);
});