// defining a class
var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, Genre, star, rDate, duration, views, likes, related, web, comm, ychannel) {
        var _this = this;
        // method.
        this.getMovieName = function () {
            return _this.videoName;
        };
        this.getGenre = function () {
            return _this.Genre;
        };
        this.getDate = function () {
            return _this.rDate;
        };
        this.getDuration = function () {
            return _this.vlength;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getRelated = function () {
            return _this.vRelated;
        };
        this.getWeb = function () {
            return _this.offWeb;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getStars = function () {
            return _this.starCast;
        };
        this.getChannel = function () {
            return _this.channel;
        };
        this.videoName = videoTitle;
        this.Genre = Genre;
        this.starCast = star;
        this.rDate = rDate;
        this.vlength = duration;
        this.views = views;
        this.likes = likes;
        this.vRelated = related;
        this.offWeb = web;
        this.comments = comm;
        this.channel = ychannel;
    } // end constructor
    return Youtube;
}()); // end class 
var youOne = new Youtube("Fast And The Furious-7 | Official Trailer 2015 ", "Crime/Thriller", "Vin Diesel,Paul Walker,Dwayne Johnson,Jason Statham,Tyrese Gibson", "3rd April 2015", 2.43, 69, 327, "FAST & FURIOUS BEHIND THE SCENES,ALL CLIPS OF F&F 2015", "www.furious7.com", 29, "FAST & FURIOUS");
var youTwo = new Youtube("Avengers: INFINITY WAR | Official Trailer 2018", "Sci-Fi", "Robert Downey jr.,Bennedict Cumberbatch,Chris Pratt,Scarlett Johansson,Chris Hemsworth,Chris Evans ", "29th November 2017", 2.24, 202, 3.3, "INFINITY WAR BEHIND THE SCENES,ALL FIGHT SCENES", "www.Marvel.com", 449, "MARVEL ENTERTAINMENT");
var v1 = youOne.getMovieName();
var v2 = youOne.getGenre();
var v3 = youOne.getDate();
var v4 = youOne.getDuration();
var v5 = youOne.getViews();
var v6 = youOne.getLikes();
var v7 = youOne.getRelated();
var v8 = youOne.getWeb();
var v9 = youOne.getComments();
var v10 = youOne.getStars();
var v11 = youOne.getChannel();
console.log("MOVIE TITLE: " + v1);
console.log("GENRE: " + v2);
console.log("STAR CAST: " + v10);
console.log("RELEASED DATE: " + v3);
console.log("TRAILER RUNNING TIME: " + v4 + " Min");
console.log("VIEWS: " + v5 + "M");
console.log("LIKES: " + v6 + "K");
console.log("RELATED VIDEOS: " + v7);
console.log("OFFICIAL WEBSITE: " + v8);
console.log("COMMENTS: " + v9 + "K");
console.log("YOUTUBE CHANNEL: " + v11);
console.log("      ");
var r1 = youTwo.getMovieName();
var r2 = youTwo.getGenre();
var r3 = youTwo.getDate();
var r4 = youTwo.getDuration();
var r5 = youTwo.getViews();
var r6 = youTwo.getLikes();
var r7 = youTwo.getRelated();
var r8 = youTwo.getWeb();
var r9 = youTwo.getComments();
var r10 = youTwo.getStars();
var r11 = youTwo.getChannel();
console.log("MOVIE TITLE: " + r1);
console.log("GENRE: " + r2);
console.log("STAR CAST: " + r10);
console.log("RELEASED DATE: " + r3);
console.log("TRAILER RUNNING TIME: " + r4 + " Min");
console.log("VIEWS: " + r5 + "M");
console.log("LIKES: " + r6 + "M");
console.log("RELATED VIDEOS: " + r7);
console.log("OFFICIAL WEBSITE: " + r8);
console.log("COMMENTS: " + r9 + "K");
console.log("YOUTUBE CHANNEL: " + r11);
