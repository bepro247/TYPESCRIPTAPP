// defining a class
class Youtube {

    videoName : string;
     Genre : string;
     starCast: string;
    rDate : string;
    vlength :number;
    views :number;
    likes : number;
    vRelated : string;
    offWeb:string;
    comments:number;
    channel:string;
    
    
    constructor (videoTitle : string,Genre : string,star:string,rDate : string,duration:number,views:number,likes:number,related:string,web:string,comm:number,ychannel:string){
       this.videoName = videoTitle;
       this.Genre = Genre;
       this.starCast=star;
       this.rDate = rDate;
       this.vlength = duration;
       this.views = views;
       this.likes= likes;
       this.vRelated=related;
       this.offWeb=web;
       this.comments=comm;
       this.channel=ychannel;
    }// end constructor
    
    // method.
    getMovieName = ()=>{
        return this.videoName;
        

    }
    getGenre = ()=>{
        return this.Genre;
        

    }
    getDate = ()=>{
        return this.rDate;
        

    }
    getDuration = ()=>{
        return this.vlength;
        

    }
    getViews = ()=>{
        return this.views;
        

    }
    getLikes = ()=>{
        return this.likes;
        

    }
    getRelated = ()=>{
        return this.vRelated;
        

    }
    getWeb = ()=>{
        return this.offWeb;
        

    }
    getComments = ()=>{
        return this.comments;
        

    }
    getStars = ()=>{
        return this.starCast;
        

    }
    getChannel = ()=>{
        return this.channel;
        

    }
    
    }// end class 
    
    
    let youOne = new Youtube("Fast And The Furious-7 | Official Trailer 2015 ","Crime/Thriller","Vin Diesel,Paul Walker,Dwayne Johnson,Jason Statham,Tyrese Gibson","3rd April 2015",2.43,69,327,"FAST & FURIOUS BEHIND THE SCENES,ALL CLIPS OF F&F 2015","www.furious7.com",29,"FAST & FURIOUS")
    let youTwo = new Youtube("Avengers: INFINITY WAR | Official Trailer 2018","Sci-Fi","Robert Downey jr.,Bennedict Cumberbatch,Chris Pratt,Scarlett Johansson,Chris Hemsworth,Chris Evans ","29th November 2017",2.24,202,3.3,"INFINITY WAR BEHIND THE SCENES,ALL FIGHT SCENES","www.Marvel.com",449,"MARVEL ENTERTAINMENT")
    let v1 = youOne.getMovieName()
    let v2 = youOne.getGenre();
    let v3 = youOne.getDate();
    let v4 = youOne.getDuration();
    let v5 = youOne.getViews();
    let v6 = youOne.getLikes();
    let v7 = youOne.getRelated();
    let v8 = youOne.getWeb();
    let v9 = youOne.getComments();
    let v10= youOne.getStars();
    let v11= youOne.getChannel();
    console.log("MOVIE TITLE: " + v1);
    console.log("GENRE: "+v2);
    console.log("STAR CAST: "+v10);
    console.log("RELEASED DATE: "+v3);
    console.log("TRAILER RUNNING TIME: "+v4+" Min");
    console.log("VIEWS: "+v5+"M");
    console.log("LIKES: " +v6+"K");
    console.log("RELATED VIDEOS: "+v7);
    console.log("OFFICIAL WEBSITE: "+v8);
    console.log("COMMENTS: "+v9+"K");
    console.log("YOUTUBE CHANNEL: "+v11);

   console.log("      ")

    let r1 = youTwo.getMovieName()
    let r2 = youTwo.getGenre();
    let r3 = youTwo.getDate();
    let r4 = youTwo.getDuration();
    let r5 = youTwo.getViews();
    let r6 = youTwo.getLikes();
    let r7 = youTwo.getRelated();
    let r8 = youTwo.getWeb();
    let r9 = youTwo.getComments();
    let r10= youTwo.getStars();
    let r11= youTwo.getChannel();
    console.log("MOVIE TITLE: " + r1);
    console.log("GENRE: "+r2);
    console.log("STAR CAST: "+r10);
    console.log("RELEASED DATE: "+r3);
    console.log("TRAILER RUNNING TIME: "+r4+" Min");
    console.log("VIEWS: "+r5+"M");
    console.log("LIKES: " +r6+"M");
    console.log("RELATED VIDEOS: "+r7);
    console.log("OFFICIAL WEBSITE: "+r8);
    console.log("COMMENTS: "+r9+"K");
    console.log("YOUTUBE CHANNEL: "+r11);
    
