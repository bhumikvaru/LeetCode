var maxProfit = function(prices) {
    let profit = 0;
    let initial = prices[0];
    for(let i=1;i<prices.length;i++)
    {
    	if(prices[i]>initial)
    	{
    		if(prices[i+1]>prices[i])
    		{

    		}
    		else
    		{
    			profit = profit + prices[i]-initial;
    			initial = prices[i+1];
    			i++;
    		}
    	}
    	else if(prices[i]<initial)
    	{
    		initial = prices[i];
    	}
    }
    if(initial === prices[0] && profit === 0)
    profit = prices[prices.length-1]-initial;
    return profit
};