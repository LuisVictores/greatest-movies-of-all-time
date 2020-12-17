/* eslint no-restricted-globals: 'off' */

//Iteration 1: Ordering by year - Order by year, ascending(in growing order)
function orderByYear(arr) {
    sortedArr = arr.sort(
        function (a, b) {
            return a.year - b.year;
        });
    return sortedArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    filteredArr = arr.filter(function (movie) {
        return (
            movie.director.includes("Steven Spielberg")
            && movie.genre.includes("Drama")
        )
    });
    return filteredArr;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    var arrTitles = arr.map(function (movie) {
        return movie.title;
    })
    var sortedArrTitles = arrTitles.sort();
    return sortedArrTitles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    var arrRates = arr.map(function (movie) {
        return movie.rate;
    });
    var sumRates = arrRates.reduce(function (a, b) {
        return a + b;
    })
    var avgRates = sumRates / arr.length;
    avgRates = avgRates.toFixed(2);
    return avgRates;
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var dramaMovies = arr.filter(function (movie) {
        return (
            movie.genre.includes("Drama")
        )
    })
    var dramaMovieRatings = dramaMovies.map(function (movie) {
        return movie.rate;
    });
    var sumRates = dramaMovieRatings.reduce(function (a, b) {
        return a + b;
    })
    var avgRates = sumRates / arr.length;
    avgRates = avgRates.toFixed(2);
    return avgRates;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    var newArray = arr;
    var i = 0;
    while (i < newArray.length) {
        var hours = newArray[i].duration.charAt(0);
        var minutes = newArray[i].duration.slice(3,5);
        minutes = parseInt(minutes) + (parseInt(hours) * 60);
        newArray[i].duration = minutes;
        i++
    }
    return newArray;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
