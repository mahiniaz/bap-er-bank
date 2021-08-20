document.getElementById('deposit-button').addEventListener
    ('click', function () {
        const depositeInput = document.getElementById('deposit-input')
        const depositeAmountText = depositeInput.value;
        const depositeAmount = parseFloat(depositeAmountText)

        // get current deposit
        const depositeTotal = document.getElementById('deposit-total');
        const depositeTotalText = depositeTotal.innerText;
        const previousDepositeTotal = parseFloat(depositeTotalText);
        depositeTotal.innerText = previousDepositeTotal + depositeAmount;

        // update balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + depositeAmount;
        // clear input field
        depositeInput.value = '';
    });

// handle withdraw button
document.getElementById('withdraw-button').addEventListener
    ('click', function () {
        const withdrawInput = document.getElementById('withdraw-input')
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText);


        // update withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previouswithdrawTotalText = withdrawTotal.innerText;
        const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
        withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

        // update balance after withdraw
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);

        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

        // clear withdraw input field
        withdrawInput.value = '';
    })