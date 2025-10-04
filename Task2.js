const costCalculation = (itemCode, money) => {
  let chocolateCost = 350;
  let crispsCost = 150;
  let sodaCost = 100;

  if (itemCode == "A1") {
    if (money > chocolateCost) {
      let change = money - chocolateCost;
      console.log(`Kindly collect your Chocolate and Rs.${change} change.`);
    } else if (money < chocolateCost) {
      let restamount = chocolateCost - money;
      console.log(`Chocolate's cost is Rs.${chocolateCost}.Kindly add ${restamount} Rupees more.`);
    } else {
      console.log(`You are Buying Chocolate and submitted ${money}Rs.`);
      console.log("Thanks for Purchase...");
    }
  } else if (itemCode == "A2") {
    if (money > crispsCost) {
      let change = money - crispsCost;
      console.log(`Kindly collect your Crisps and Rs.${change} change.`);
    } else if (money < crispsCost) {
      let restamount = crispsCost - money;
      console.log(`Crisps' cost is Rs.${crispsCost}.Kindly add ${restamount} Rupees more.`);
    } else {
      console.log(`You are Buying Crisps and submitted ${money}Rs.`);
      console.log("Thanks for Purchase...");
    }
  } else if (itemCode == "A3") {
    if (money > sodaCost) {
      let change = money - sodaCost;
      console.log(`Kindly collect your Soda and Rs.${change} change.`);
    } else if (money < sodaCost) {
      let restamount = sodaCost - money;
      console.log(`Soda's cost is Rs.${sodaCost}.Kindly add ${restamount} Rupees more.`);
    } else {
      console.log(`You are Buying Soda and submitted ${money}Rs.`);
      console.log("Thanks for Purchase...");
    }
  } else {
    console.log("Invalid Choice...Please Select Correct Item");
  }
};

costCalculation("A3", 100);