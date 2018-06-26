// defining a class
var faceBook = /** @class */ (function () {
    function faceBook(profile, profilePic, birthDay, Status, Friends, Messages, likes, Online, Ads, comm, ychannel) {
        var _this = this;
        // method.
        this.getMovieName = function () {
            return _this.profileName;
        };
        this.getprofilePic = function () {
            return _this.profilePic;
        };
        this.getStatus = function () {
            return _this.Status;
        };
        this.getFriends = function () {
            return _this.Friends;
        };
        this.getMessages = function () {
            return _this.Messages;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getOnline = function () {
            return _this.Online;
        };
        this.getAds = function () {
            return _this.Ads;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getbirthDays = function () {
            return _this.birthDay;
        };
        this.getChannel = function () {
            return _this.channel;
        };
        this.profileName = profile;
        this.profilePic = profilePic;
        this.birthDay = birthDay;
        this.Status = Status;
        this.Friends = Friends;
        this.Messages = Messages;
        this.likes = likes;
        this.Online = Online;
        this.Ads = Ads;
        this.comments = comm;
        this.channel = ychannel;
    } // end constructor
    return faceBook;
}()); // end class 
var faceOne = new faceBook("AKASH TRIPATHI", " : ) ", "23rd June 1992", "WHERE THERE IS WILL THERE IS WAY..!!", 243, 169, 327, "ONLINE", "JABONG.COM,MYNTRA.COM,FLASH SALE", 229, "akku@RISINGSTAR");
var faceTwo = new faceBook("RISHI MALHOTRA", " : ) ", "3rd September 1994", "ROCKING LIFE..!!", 643, 469, 128, "OFFLINE", "JABONG.COM,MYNTRA.COM,FLASH SALE", 876, "RISHU@KING");
var v1 = faceOne.getMovieName();
var v2 = faceOne.getprofilePic();
var v3 = faceOne.getStatus();
var v4 = faceOne.getFriends();
var v5 = faceOne.getMessages();
var v6 = faceOne.getLikes();
var v7 = faceOne.getOnline();
var v8 = faceOne.getAds();
var v9 = faceOne.getComments();
var v10 = faceOne.getbirthDays();
var v11 = faceOne.getChannel();
console.log("PROFILE NAME: " + v1);
console.log("Profile Picture: " + v2);
console.log("BirthDay : " + v10);
console.log("Status : " + v3);
console.log("FRIENDS : " + v4);
console.log("Messages: " + v5);
console.log("LIKES : " + v6 + "K");
console.log("Online : " + v7);
console.log("Ads : " + v8);
console.log("COMMENTS : " + v9 + "K");
console.log("YOUTUBE CHANNEL: " + v11);
console.log("      ");
var r1 = faceTwo.getMovieName();
var r2 = faceTwo.getprofilePic();
var r3 = faceTwo.getStatus();
var r4 = faceTwo.getFriends();
var r5 = faceTwo.getMessages();
var r6 = faceTwo.getLikes();
var r7 = faceTwo.getOnline();
var r8 = faceTwo.getAds();
var r9 = faceTwo.getComments();
var r10 = faceTwo.getbirthDays();
var r11 = faceTwo.getChannel();
console.log("PROFILE NAME: " + r1);
console.log("Profile Picture : " + r2);
console.log("BirthDay : " + r10);
console.log("Status : " + r3);
console.log("FRIENDS : " + r4);
console.log("Messages: " + r5);
console.log("LIKES: " + r6 + "M");
console.log("Online : " + r7);
console.log("Ads : " + r8);
console.log("COMMENTS : " + r9 + "K");
console.log("MY YOUTUBE CHANNEL : " + r11);
