// defining a class
class faceBook {

    profileName : string;
    profilePic: string;
    birthDay: string;
    Status : string;
    Friends :number;
    Messages :number;
    likes : number;
    Online : string;
    Ads:string;
    comments:number;
    channel:string;
    
    
    constructor (profile : string, profilePic: string,birthDay:string,Status : string,Friends:number,Messages:number,likes:number,Online:string,Ads:string,comm:number,ychannel:string){
       this.profileName = profile;
       this.profilePic = profilePic;
       this.birthDay=birthDay;
       this.Status = Status;
       this.Friends = Friends;
       this.Messages = Messages;
       this.likes= likes;
       this.Online=Online;
       this.Ads=Ads;
       this.comments=comm;
       this.channel=ychannel;
    }// end constructor
    
    // method.
    getMovieName = ()=>{
        return this.profileName;
        

    }
    getprofilePic = ()=>{
        return this.profilePic;
        

    }
    getStatus = ()=>{
        return this.Status;
        

    }
    getFriends = ()=>{
        return this.Friends;
        

    }
    getMessages = ()=>{
        return this.Messages;
        

    }
    getLikes = ()=>{
        return this.likes;
        

    }
    getOnline = ()=>{
        return this.Online;
        

    }
    getAds = ()=>{
        return this.Ads;
        

    }
    getComments = ()=>{
        return this.comments;
        

    }
    getbirthDays = ()=>{
        return this.birthDay;
        

    }
    getChannel = ()=>{
        return this.channel;
        

    }
    
    }// end class 
    
    
    let faceOne = new faceBook("AKASH TRIPATHI"," : ) ","23rd June 1992","WHERE THERE IS WILL THERE IS WAY..!!",243,169,327,"ONLINE","JABONG.COM,MYNTRA.COM,FLASH SALE",229,"akku@RISINGSTAR")
    let faceTwo = new faceBook("RISHI MALHOTRA"," : ) ","3rd September 1994","ROCKING LIFE..!!",643,469,128,"OFFLINE","JABONG.COM,MYNTRA.COM,FLASH SALE",876,"RISHU@KING")
    let v1 = faceOne.getMovieName()
    let v2 = faceOne.getprofilePic();
    let v3 = faceOne.getStatus();
    let v4 = faceOne.getFriends();
    let v5 = faceOne.getMessages();
    let v6 = faceOne.getLikes();
    let v7 = faceOne.getOnline();
    let v8 = faceOne.getAds();
    let v9 = faceOne.getComments();
    let v10= faceOne.getbirthDays();
    let v11= faceOne.getChannel();
    console.log("PROFILE NAME: " + v1);
    console.log("Profile Picture: "+v2);
    console.log("BirthDay : "+v10);
    console.log("Status : "+v3);
    console.log("FRIENDS : "+v4);
    console.log("Messages: "+v5);
    console.log("LIKES : " +v6+"K");
    console.log("Online : "+v7);
    console.log("Ads : "+v8);
    console.log("COMMENTS : "+v9+"K");
    console.log("YOUTUBE CHANNEL: "+v11);

   console.log("      ")

    let r1 = faceTwo.getMovieName()
    let r2 = faceTwo.getprofilePic();
    let r3 = faceTwo.getStatus();
    let r4 = faceTwo.getFriends();
    let r5 = faceTwo.getMessages();
    let r6 = faceTwo.getLikes();
    let r7 = faceTwo.getOnline();
    let r8 = faceTwo.getAds();
    let r9 = faceTwo.getComments();
    let r10= faceTwo.getbirthDays();
    let r11= faceTwo.getChannel();
    console.log("PROFILE NAME: " + r1);
    console.log("Profile Picture : "+r2);
    console.log("BirthDay : "+r10);
    console.log("Status : "+r3);
    console.log("FRIENDS : "+r4);
    console.log("Messages: "+r5);
    console.log("LIKES: " +r6+"M");
    console.log("Online : "+r7);
    console.log("Ads : "+r8);
    console.log("COMMENTS : "+r9+"K");
    console.log("MY YOUTUBE CHANNEL : "+r11);
    
