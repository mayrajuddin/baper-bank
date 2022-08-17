// login validation
document.getElementById('form-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password)
    if (email === 'mayraj@gmail.com' && password === "password") {
        window.location.href = 'bank.html';
    } else {
        alert('wrong information');
    }
})
// add money js start
document.getElementById('depo-btn').addEventListener('click', function () {
    // input field
    const depoField = document.getElementById('depo-field');
    const depoValue = depoField.value;
    const givenAmmount = parseFloat(depoValue);

    // set value in deposit value from input field
    const mainDepo = document.getElementById('depo-bls');
    const mainDepoValue = mainDepo.innerText;
    const mainBalance = parseFloat(mainDepoValue);
    const totalDeposite = mainBalance + givenAmmount;
    mainDepo.innerText = totalDeposite;

    // set total ammount in totat 
    const totalBalanceEle = document.getElementById('total-bls');
    const totalblsString = totalBalanceEle.innerText;
    const ammount = parseFloat(totalblsString);
    const totalBankAmmount = ammount + givenAmmount;
    totalBalanceEle.innerText = totalBankAmmount;
    depoField.value = '';
})
// add money js end

// withdraw money js start 
