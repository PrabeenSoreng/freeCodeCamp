function checkCashRegister(price, cash, cid) {
  let amount = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let currencyUnit = cid.map(cur => cur[0]);
  let cidAmount = cid.map(cur => cur[1]);
  let changeAmount = cash - price;
  let change = [];
  for (let i = amount.length - 1; i >= 0; i--) {
    if (
      changeAmount / amount[i] >= 1 &&
      changeAmount / cidAmount[i] !== Infinity
    ) {
      if (changeAmount >= cidAmount[i]) {
        change.push([currencyUnit[i], cidAmount[i]]);
        let altAmount = changeAmount;
        changeAmount = changeAmount - cidAmount[i];
        cidAmount[i] = altAmount - cidAmount[i];
      } else {
        change.push([
          currencyUnit[i],
          parseInt(changeAmount / amount[i]) * amount[i]
        ]);
        changeAmount = Number((changeAmount % amount[i]).toFixed(2));
      }
    }
  }
  let cidClosed = cidAmount.every(el => el <= 0);
  if (cidClosed)
    return {
      status: "CLOSED",
      change: cid
    };
  if (changeAmount == 0) {
    return {
      status: "OPEN",
      change
    };
  } else if (changeAmount > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
