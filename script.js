var finances = [
  { Date : 'Jan-2010', profitLoss : 867884},
  { Date : 'Feb-2010', profitLoss : 984655},
  { Date : 'Mar-2010', profitLoss : 322013},
  { Date : 'Apr-2010', profitLoss : -69417},
  { Date : 'May-2010', profitLoss : 310503},
  { Date : 'Jun-2010', profitLoss : 522857},
  { Date : 'Jul-2010', profitLoss : 1033096},
  { Date : 'Aug-2010', profitLoss : 604885},
  { Date : 'Sep-2010', profitLoss : -216386},
  { Date : 'Oct-2010', profitLoss : 477532},
  { Date : 'Nov-2010', profitLoss : 893810},
  { Date : 'Dec-2010', profitLoss : -80353},
  { Date : 'Jan-2011', profitLoss : 779806},
  { Date : 'Feb-2011', profitLoss : -335203},
  { Date : 'Mar-2011', profitLoss : 697845},
  { Date : 'Apr-2011', profitLoss : 793163},
  { Date : 'May-2011', profitLoss : 485070},
  { Date : 'Jun-2011', profitLoss : 584122},
  { Date : 'Jul-2011', profitLoss : 62729},
  { Date : 'Aug-2011', profitLoss : 668179},
  { Date : 'Sep-2011', profitLoss : 899906},
  { Date : 'Oct-2011', profitLoss : 834719},
  { Date : 'Nov-2011', profitLoss : 132003},
  { Date : 'Dec-2011', profitLoss : 309978},
  { Date : 'Jan-2012', profitLoss : -755566},
  { Date : 'Feb-2012', profitLoss : 1170593},
  { Date : 'Mar-2012', profitLoss : 252788},
  { Date : 'Apr-2012', profitLoss : 1151518},
  { Date : 'May-2012', profitLoss : 817256},
  { Date : 'Jun-2012', profitLoss : 570757},
  { Date : 'Jul-2012', profitLoss : 506702},
  { Date : 'Aug-2012', profitLoss : -1022534},
  { Date : 'Sep-2012', profitLoss : 475062},
  { Date : 'Oct-2012', profitLoss : 779976},
  { Date : 'Nov-2012', profitLoss : 144175},
  { Date : 'Dec-2012', profitLoss : 542494},
  { Date : 'Jan-2013', profitLoss : 359333},
  { Date : 'Feb-2013', profitLoss : 321469},
  { Date : 'Mar-2013', profitLoss : 67780},
  { Date : 'Apr-2013', profitLoss : 471435},
  { Date : 'May-2013', profitLoss : 565603},
  { Date : 'Jun-2013', profitLoss : 872480},
  { Date : 'Jul-2013', profitLoss : 789480},
  { Date : 'Aug-2013', profitLoss : 999942},
  { Date : 'Sep-2013', profitLoss : -1196225},
  { Date : 'Oct-2013', profitLoss : 268997},
  { Date : 'Nov-2013', profitLoss : -687986},
  { Date : 'Dec-2013', profitLoss : 1150461},
  { Date : 'Jan-2014', profitLoss : 682458},
  { Date : 'Feb-2014', profitLoss : 617856},
  { Date : 'Mar-2014', profitLoss : 824098},
  { Date : 'Apr-2014', profitLoss : 581943},
  { Date : 'May-2014', profitLoss : 132864},
  { Date : 'Jun-2014', profitLoss : 448062},
  { Date : 'Jul-2014', profitLoss : 689161},
  { Date : 'Aug-2014', profitLoss : 800701},
  { Date : 'Sep-2014', profitLoss : 1166643},
  { Date : 'Oct-2014', profitLoss : 947333},
  { Date : 'Nov-2014', profitLoss : 578668},
  { Date : 'Dec-2014', profitLoss : 988505},
  { Date : 'Jan-2015', profitLoss : 1139715},
  { Date : 'Feb-2015', profitLoss : 1029471},
  { Date : 'Mar-2015', profitLoss : 687533},
  { Date : 'Apr-2015', profitLoss : -524626},
  { Date : 'May-2015', profitLoss : 158620},
  { Date : 'Jun-2015', profitLoss : 87795},
  { Date : 'Jul-2015', profitLoss : 423389},
  { Date : 'Aug-2015', profitLoss : 840723},
  { Date : 'Sep-2015', profitLoss : 568529},
  { Date : 'Oct-2015', profitLoss : 332067},
  { Date : 'Nov-2015', profitLoss : 989499},
  { Date : 'Dec-2015', profitLoss : 778237},
  { Date : 'Jan-2016', profitLoss : 650000},
  { Date : 'Feb-2016', profitLoss : -1100387},
  { Date : 'Mar-2016', profitLoss : -174946},
  { Date : 'Apr-2016', profitLoss : 757143},
  { Date : 'May-2016', profitLoss : 445709},
  { Date : 'Jun-2016', profitLoss : 712961},
  { Date : 'Jul-2016', profitLoss : -1163797},
  { Date : 'Aug-2016', profitLoss : 569899},
  { Date : 'Sep-2016', profitLoss : 768450},
  { Date : 'Oct-2016', profitLoss : 102685},
  { Date : 'Nov-2016', profitLoss : 795914},
  { Date : 'Dec-2016', profitLoss : 60988},
  { Date : 'Jan-2017', profitLoss : 138230},
  { Date : 'Feb-2017', profitLoss : 671099},
];

// Variables:
  // total number of months
  // rolling total of profits
  // greatest increase (month and amount)
  // greatest decrease (Month and amount)
  // average of the changes


  function analyzeFinancialData(finances) {
    let totalMonths = finances.length;
    let netChange = 0;
    let greatestIncrease = { amount: 0 };
    let greatestDecrease = { amount: 0 };
    let totalChange = 0;
    
    for (let i = 0; i < finances.length; i++) {
      const profitLoss = finances[i].profitLoss;
    
      // Calculate total Profit/Losses
      netChange += profitLoss;
    
      // Calculate greatest increase and decrease
    if (i > 0) {
      const change = profitLoss - finances[i - 1].profitLoss;
      totalChange += change;
  
      if (change > greatestIncrease.amount) {
        greatestIncrease.amount = change;
        greatestIncrease.date = finances[i].Date;
      }
      if (change < greatestDecrease.amount) {
        greatestDecrease.amount = change;
        greatestDecrease.date = finances[i].Date;
      }
    }
  }

  // Calculate average change (totalmonths - 1 because change has to occur after first value)
  let averageChange = totalChange / (totalMonths - 1); 

  return {
    totalMonths,
    netChange,
    averageChange,
    greatestIncrease,
    greatestDecrease,
  };
}

// Calling function and store the results in a variable
const analysisResult = analyzeFinancialData(finances);

// Display the analysis result
console.log("Financial Analysis")
console.log("-------------------")
console.log('Total Months: ' + analysisResult.totalMonths);
console.log('Total: $' + analysisResult.netChange);
console.log('Average Change: $'+ analysisResult.averageChange.toFixed(2)); // toFixed(2) displays the number to 2dp.
console.log('Greatest Increase in Profits/Losses:', analysisResult.greatestIncrease.date, '($'+ analysisResult.greatestIncrease.amount + ')');
console.log('Greatest Decrease in Profits/Losses:', analysisResult.greatestDecrease.date, '($'+ analysisResult.greatestDecrease.amount +')'); 