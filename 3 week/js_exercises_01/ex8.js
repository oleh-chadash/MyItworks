function percentageOfWorld1(population) {
    const worldPopulation = 7.9e9;
    return (population / worldPopulation) * 100;
}

const percentageChina = percentageOfWorld1(1.441e9);
const percentageUSA = percentageOfWorld1(331e6);
const percentageRussia = percentageOfWorld1(146.7e6); 

console.log(`China's population is about ${percentageChina.toFixed(2)}% of the world population.`);
console.log(`USA's population is about ${percentageUSA.toFixed(2)}% of the world population.`);
console.log(`Russia's population is about ${percentageRussia.toFixed(2)}% of the world population.`);

const percentageOfWorld2 = function(population) {
    return (population / 7.9e9) * 100;
};

const percentageChina2 = percentageOfWorld2(1.441e9);
const percentageUSA2 = percentageOfWorld2(331e6);
const percentageRussia2 = percentageOfWorld2(146.7e6);


console.log(`China's population is about ${percentageChina2.toFixed(2)}% of the world population.`);
console.log(`USA's population is about ${percentageUSA2.toFixed(2)}% of the world population.`);
console.log(`Russia's population is about ${percentageRussia2.toFixed(2)}% of the world population.`);
