
//twitter
var keys=require
var command=process.argv[2]
var Twitter=require('twitter')
var client= new Twitter({//twitter keys
  consumer_key: 'BIt2KElP7Aj7OE4KQj3f6qgca',
  consumer_secret: 'lCgMZOJzPEw1q87cbJDfwQUOFKInkfOiHaERsKUk7b2ME2yCrX',
  access_token_key: '85712067-EywXuKo6fcEijG17SEAAcKGvKVPLpNluVGuewuvIx',
  access_token_secret: 'cEcupBsNhJWbwtaSTthFb5AxKRmvRKy1V6aqe8v94w44L',
})

if(command=="my-tweets"){
var params = {screen_name: 'leslieo23',count:20};//parameters of twitter handle and number of tweets you want to show
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {for(var i=0;i<tweets.length;i++){
  console.log(tweets[i].created_at)//timestamp
  console.log("Leslie tweeted:"+tweets[i].text);//prints out the tweets from 0-20
	}
 }
 });
}
if(command=="movie-this"){
var movie= process.argv[3];
var request = require('request');//needs request downloaded from npm
request('http://www.omdbapi.com/?t='+ movie +'&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
 if (!error && response.statusCode == 200) {//if there is no error
   var json = JSON.parse(body);//json parse the body and console.log the following
   console.log("Title: "+json.Title)
   console.log("imbd rating: "+json.imdbRating)
   console.log("Actors: " +json.Actors)
   console.log("Year: "+json.Year)
   console.log("Plot: "+json.Plot)
   console.log("Rotten Tomatoes: "+json.tomatoRating)
   }
 })
}

if (command=="spotify-this-song"){

	var songName=process.argv[3] //song name is the third item 
	var spotify = require('spotify'); //needs spotify npm
	if(songName===undefined){//if the song is undefined show the song whats my age again
		songName="whats my age again";
	}
	spotify.search({ type: 'track', query: songName }, function(err, data) {
    	if ( err ) {//if there is an error, return error occrred and what the error is
        console.log('Error occurred: ' + err);
        return;
    }
 var items = data.tacks.items; //items is the info from the tacks
    for(var i=0;i < items.length; i++){ //loops through length of items
    	console.log("Song Name: "+items[i].name)
    for (var a=0 ;a< items[i].artists.length; a++){//goes through artists array 
    	console.log("Artist: "+items[i]+artists[a].name);
    	console.log("Album: "+items[i]+album.name);
    	console.log("Link: "+items[i]+preview_url);

    }
    }
});
}