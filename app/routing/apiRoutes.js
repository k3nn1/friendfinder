//============================================================================================================
module.exports = function(app) {
    var path = require("path");
    var friendData = require ("../data/friends.js");

    app.get("/api/friends", function (req, res) {
        response.json(friendData);
        // console.log(req);
        // console.log(res);
    });

    app.post("/api/friends", function (req, res) {
        var totalDifference = []; //this will hold results of each total differences in an array
        // var temp = [];
        
        console.log("Your Input: ", req.body);
        console.log("-----------------------------------------\n");

        for (var i = 0; i < friendData.length; i++) {   // we loop through friends score
            var match = friendData[i].scores;
            console.log("friend's name: ", friendData[i].name);
            console.log("friend's score: ", match);

            for (var j = 0; j < match.length; j++) {    // we take the difference between user's input and friend's score
                var difference = 0;
                difference += Math.abs(req.body.scores[j] - match[j]);
                console.log("difference: ", difference);
            }
            // console.log("temp: ",x)

            totalDifference.push(difference);
            console.log("total Difference: ", totalDifference);
            console.log("-----------------------------------------\n");
            
        };
        var index = 0;
        var value = totalDifference[0];
        // loops through the array to find the least number
        function lowestIndex (array) {
            console.log("array: ", array);
            for (var i = 1; i < array.length; i++) {
                if (array[i] < value) {
                    value = array[i];
                    index = i;
                }
            };
            console.log("Index: ", index);
            return index
        };
        console.log("match: ", match);
        var match = friendData[lowestIndex(totalDifference)];
        res.send(match);
        console.log("value: ", value);
    });

};

