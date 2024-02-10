const calculateBtn = document.querySelector('#calc-btn');
const amountInput = document.querySelector('#amount');
const provincialTaxAmount = document.querySelector('#provincial-tax-amount');
const federalTaxAmount = document.querySelector('#federal-tax-amount');
const totalTaxAmount = document.querySelector('#total-tax-amount');
const afterTaxAmount = document.querySelector('#after-tax-amount');

calculateBtn.addEventListener('click', function() {
  const amount = Number(amountInput.value);
  const provincialTax = amount * 0.08;
  const federalTax = amount * 0.05;
  const totalTax = provincialTax + federalTax;
  const afterTax = amount + totalTax;

  provincialTaxAmount.innerHTML = provincialTax.toFixed(2);
  federalTaxAmount.innerHTML = federalTax.toFixed(2);
  totalTaxAmount.innerHTML = totalTax.toFixed(2);
  afterTaxAmount.innerHTML = afterTax.toFixed(2);
});


calculateBtn.addEventListener('click', function(){
    if(amount.value === "" || isNaN(amount.value)){
        // showing red border for invalid input
        amount.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            amount.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
       amount.value = "";
    }
})

