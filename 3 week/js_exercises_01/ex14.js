function countryToLiveIn(language, isIsland, population, country) {
    if (typeof language !== 'string' || typeof isIsland !== 'boolean' ||
        typeof population !== 'number' || typeof country !== 'string') {
        console.log('Please provide valid arguments.');
        return;
    }

    if (language === 'English' && !isIsland && population < 50) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
}