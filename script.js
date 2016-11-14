var theseBrackets = [ {rate: 0.08, minAmount: 0, maxAmount: 20000},
                      {rate: 0.10, minAmount: 20000, MaxAmount: 40000},
                      {rate: 0.15, minAmount: 40000, maxAmount: 60000},
                      {rate: 0.20, minAmount: 60000, maxAmount: Infinity}
  ];

function progressiveTaxCalculator(income, brackets) {

  function bracketAmount(income, rate, minAmount, maxAmount) {
    if (income > minAmount && income <= maxAmount) {
      return rate * (income - minAmount);
    } else if (income > maxAmount) {
      return rate * (maxAmount - minAmount);
    } else {
      return rate * 0;
    }
  }

  var totalTax = 0;

  for (var i = 0; i < brackets.length; i++) {
      totalTax = totalTax + bracketAmount (income, brackets[i].rate, brackets[i].minAmount, brackets[i].maxAmount);
  }

  return totalTax;
}


console.log(progressiveTaxCalculator(10000, theseBrackets));
