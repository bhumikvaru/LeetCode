var maxProfit = function (prices) {
  let init = prices[0], //
    maxP = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - init === 0) {
    } else if (prices[i] - init > maxP) maxP = prices[i] - init;
    else if (prices[i] - init < 0) {
      init = prices[i];
    }
  }
  return maxP;
};