var findLonely = function (nums) {
    const counts = {};
    const results = [];

    // Count occurrences of each number
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Identify lonely numbers based on counts and neighbors
    for (const num of Object.keys(counts)) {
        const n = Number(num); // Convert key to number for comparison
        if (counts[n] === 1 && !counts[n - 1] && !counts[n + 1]) {
            results.push(n);
        }
    }

    return results; // Return the array of lonely numbers
};