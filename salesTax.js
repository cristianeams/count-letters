var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var result = {};
  function add (a, b) {
    return a + b;
  }
  for(var i = 0; i < salesData.length; i++) {
      var salesArray = salesData[i].sales;
      //Use reduce method to get a single value
      var totSales = salesArray.reduce(add);
      //Access province in Object
      var prov = salesData[i].province;
      //Calculate taxes
      var totTaxes = salesTaxRates[prov] * totSales;
      var companyName = salesData[i].name;

      // console.log(Object.keys(result).indexOf(companyName));
      //Check if company name exists as a key in results Object. If it doesn't returns -1
      //Creates a new object and passes totalSales and totalTaxes as keys
      if (Object.keys(result).indexOf(companyName) === -1 ) {
        result[companyName] = {
          totalSales: totSales,
          totalTaxes: totTaxes
        };
        //Adds the totals of sales and taxes if companyName already exists
      } else {
        result[companyName].totalSales += totSales;
        result[companyName].totalTaxes += totTaxes;
      }
  }
  return result;
};

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/