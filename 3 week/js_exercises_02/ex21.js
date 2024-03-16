let populations = [1441, 331, 67, 38];
function populationPercentages(populationsArray) {
    let percentages = [];
    const worldPopulation = 7900;

    for (let i = 0; i < populationsArray.length; i++) {
        let percentage = calculatePercentage(populationsArray[i], worldPopulation);
        percentages.push(percentage);
    }

    return percentages;
}

function calculatePercentage(population, totalPopulation) {
    return (population / totalPopulation) * 100;
}

let percentages = populationPercentages(populations);
console.log(percentages);
