var maxProfit = function (prices) {
  let buy = prices[0], //
    maxP = 0;
  for (let i = 1; i < prices.length; i++) {
    let sell = prices[i];
    if(sell-buy>0)
    {
        maxP = Math.max(maxP,sell-buy)
    }
    else
        buy = prices[i];
  }
  return maxP;
};