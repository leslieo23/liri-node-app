
//twitter
var Twitter=require('twitter')
var client= new Twitter({
  consumer_key: 'BIt2KElP7Aj7OE4KQj3f6qgca',
  consumer_secret: 'lCgMZOJzPEw1q87cbJDfwQUOFKInkfOiHaERsKUk7b2ME2yCrX',
  access_token_key: '85712067-EywXuKo6fcEijG17SEAAcKGvKVPLpNluVGuewuvIx',
  access_token_secret: 'cEcupBsNhJWbwtaSTthFb5AxKRmvRKy1V6aqe8v94w44L',
})
var params = {screen_name: 'leslieo23',count:20};//parameters of twitter handle and number of tweets you want to show
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {for(var i=0;i<tweets.length;i++){
  console.log(tweets[i].created_at)//timestamp
  console.log("Leslie tweeted:"+tweets[i].text);//prints out the tweets from 0-20
	}
 }
 });

var request = require('request');
request('http://www.omdbapi.com/?t=the+notebook&y=&plot=short&r=json', function (error, response, body) {
 if (!error && response.statusCode == 200) {
   var json = JSON.parse(body);
   console.log("imbd rating: "+json.imdbRating)
   console.log("synopsis: "+json.imdbPlot) 
   
 }
})