'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.d9a0c4ea-8034-4122-a37a-ad5158458c4d';

const SKILL_NAME = 'New year Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a new year fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const facts = [
    'Some people wear adult diapers while celebrating New Year at Time Square due to the lack of toilets.',
    'Ethiopia has 13 months. Their current year is still 2006 and they celebrate New Years on September 11.',
    'Until 2006, the Space Shuttle never flew on New Year’s day or eve because its computers couldn’t handle a year rollover.',
    'In an effort to reduce drunk driving, every New Year’s Eve the AAA will tow your car and give you a lift home for free, even if you’re not a member.',
    'Beethoven’s 9th Symphony was introduced to Japan by German POWs in WWI (who played it for them), and it is now a national tradition to perform it every New Year’s.',
    'When religion was suppressed in Soviet Russia, Santa/St. Nick was replaced with Grandfather Frost, called the spirit of winter, who brought gifts on New Year’s and placed them under the “New Year tree.',
    'In Korea and some other Asian countries, when you are born, you are considered one year old and everyone’s age increases one year on New Year’s. So if you were born on December 29th, on New Year’s day, you will be considered 2 years old.',
    'In 2010, a “Black Widow” suicide bomber planned a terrorist attack in central Moscow on New Year’s Eve, but was killed when a spam message from her mobile phone operator wishing her a happy new year received just hours before the planned attack triggered her suicide belt, killing her, but nobody else.',
    'On New Year’s Day in 1976, a man named Danny Finegood changed the Hollywood sign to “Hollyweed” as a college prank in order to celebrate the decriminalization of marijuana and got an “A” for it.',
    'There is a music festival every New Year’s eve in the Antarctic called icestock.',
    'In Thailand, they celebrate their traditional New Year’s Day with a state sponsored multiple day water fight.',
    'Prior to 1753, Britain and its possessions celebrated the New Year on March 25 (Annunciation Day). Furthermore, 1752 only lasted nine months, as the dates from 01/01 to 03/24 (as well as September 3 to 13) were skipped in order for 1753 to begin on 01/01 like in other countries.',
    'Russians celebrate the New Year twice, once on January 1st and then again on January 14th.',
    'Hogmanay is the term for New Year’s Eve in Scotland. In a place called Stonehaven, it is honored through fireballs swinging and first-footing into a friend or neighbor’s threshold.',
    'There is a 1000-year-long song in the making known as “Longplayer.” The song began on Jan. 1, 2000 and will continue until Dec. 31, 2999, where it will come back to the starting point of the song and begin again.',
    'On New Year’s Eve, residents in a small neighborhood in Johannesburg, South Africa collect old appliances, carry them up to apartment building rooftops and toss them down to the streets far below.',
    'The Reykjavik (capital of Iceland) fireworks display on New Year’s Eve is one of the largest in the world, and most fireworks sales fund rescue operations in the country.',
    'Since New Year’s Eve 2008, the city of Mobile, Alabama raises a 12 foot tall lighted mechanical Moon Pie to celebrate the coming of the New Year.',
    'On New Year’s Day in Akita, Japan there is a tradition where men dress as mountain demons, get drunk, and terrorize children for being lazy or disobeying their parents.',
    'Every December 25th a town in Peru celebrates “Takanakuy”. Men, women, and children settle grudges with fistfights. Then everyone goes drinking together, ready to start the New Year with a clean slate.',
    'Instead of lowering a giant ball of lights on New Year’s Eve, Brasstown, North Carolina lowers a possum. It’s known as “The Possum Drop”',
    'There are only 14 possible calendars. In 2014, you can re-use calendars from these years: 2003, 1997, 1986, 1975, 1969, 1958, 1947, 1941, 1930, and 1919.',
    'After the French revolution, France briefly used a new calendar based on a decimal system; 10 days a week, 10 hours a day, 100 minutes per hour and 100 seconds per minute, and starting at Year 1.',
    'North Korea does not use the normal Gregorian calendar like most of the world. Instead it uses a different calendar system called the Juche calendar for numbering the years and year one of this calendar began on Kim Il Sung’s (The foun1der of North Korea) birthday.',
    'New Year celebrations are not new. The concept actually dates back to 2000 BC. The Mesopotamians used to celebrate New Year',
    '1st January as New Year was never a standard practice. Romans for instance celebrated March 1 as New Year. Some other cultures went for winter solstice or summer equinox.',
    'The Roman Catholic Church was the one to adopt 1st January as New Year. Well, 1st January as New Year was marked by Georgian Calendar.',
    '1st January was accepted as New Year in 46 BC by Julius Caesar. England and the American colonies of England adopted the date long time later in 1752.',
    'The month of January derives its name from a two-faced God named Janus. Janus’ one face looked forward while the other looked backward.',
    'New Year is usually considered to be the best time for making resolutions. Resolutions usually mean people want to give up some bad habits and pick up some good habits but resolutions may not necessarily be about habits.',
    'New Year gifts also date back to ancient times when the Persians used to gift eggs symbolizing productivity.',
    'Whatever New Year traditions we speak of are actually meant for bringing good luck. For instance, eating black-eyed peas on the day of New Year is believed to bring good luck in several parts of the United States.',
    'Speaking of traditions, we cannot miss out on the Estonian practice of eating 7, 9 or 12 meals on the eve of New Year. They believe that eating that many meals will give them the strength of that many people in the year that follows.',
    'Finnish people have a weird tradition which goes by the name molybdomancy. This is all about telling fortunes. A small amount of led is melted in a small pan using a small stove. The melted metal is then thrown into a bowl full of cold water. The liquid metal solidifies and the resulting shape of the solid metal is then analyzed in candle light to tell the fortune of a person in the coming year.',
    'People of Denmark practice throwing dishes at the doorsteps of other people. This is believed to bring many new friends to the person on whose doorsteps the dishes are thrown.',
    'Denmark also has a custom of making an evening meal ending with Kransekage. This is actually the name of a dessert which is actually a cone-shaped cake with a steep slope. The cake is then decorated with flags and firecrackers.',
    'Spanish tradition is to eat 12 grapes at midnight of 31st December. While eating these grapes, Spaniards will make wishes. This tradition is believed to bring good luck for those who practice it. This grape eating tradition started back in 1895.',
    'Then we have Japan where the bells in Buddhist Temples are rung 108 times. They do this to welcome the God of New Year known as Toshigami.',
    'Talk of Greek traditions and you will find kremmida or onions hanging on their doors. They hang the onions on their doors on New Year’s Eve wishing their children’s goodwill.',
    'Greeks also have the tradition of breaking pomegranates right at their doorsteps. This tradition is believed to bring good luck and prosperity.',
    'New Year’s Eve has a special name in Belgium. It is known as Sint Sylvester Vooranvond. People in this country toast with customary champagne and children write letters to godparents or parents on the day of New Year.',
    'New Year is celebrated by several special foods in different countries. For example, in Southern US, Ireland, Germany and Italy leafy greens and legumes are associated with financial fortune.',
    'Japanese eat long noodles on New Year. Long noodles signify long life.',
    'In Portugal, Hungary, Austria and Cuba, pork is a standard New Year food and it signifies prosperity and progress.',
    'Greece, Mexico and Netherlands go for ring-shaped pastries and cakes which signify that the year has come to a full circle.',
    'For ancient Greeks, flooding of Nile every year marked the beginning of New Year.',
    'By popping open a bubbly bottle is how many people celebrate the New Year. In America alone, during the holiday season, 360 million glasses of sparkling wine are consumed every year.    ',
    'The most common New Year resolutions include ‘quit smoking’, ‘lose weight’, ‘stay healthy and fit’, ‘save more money’ and ‘get (more) organized’.',
    'Most English speakers traditionally sing the song ‘Auld Lang Syne’. It is actually a very old song from Scotland and was first published in 1796 poet Robert Burns in the book titled Scots Musical Museum. The literal translation of ‘Auld Lang Syne’ is ‘old long since’ and actually means ‘times gone by’.',
    'The Dutch people launch fireworks and burn Christmas tree bonfires on street during the New Year Eve. The reason they do this is that burning Christmas tree bonfires signify purging of the old and launching fireworks refer to welcoming the new.',
    'As far as United States is concerned, the most popular tradition is that of dropping the New Year Ball in New York City’s Times Square exactly at 11:59 PM. The ball goes through a minute-long descent and hits the ground at the stroke of midnight.',
    'The dropping of the New Year Ball is actually pretty new tradition that started only in 1907. Though currently the ball is made of Waterford Crystal, it was originally made of wood and iron.',
    'America has another pretty popular New Year tradition, which is known as the Rose Bowl. The tradition started back in 1890 featuring the Rose Parade is California’s Pasadena. The parade features floats festooned with eighteen (18) million flowers.',
    'In Australia’s Sydney Harbour, the shoreline stretching 40 miles is crowded by more than a million people just for watching the fireworks show.'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'factIntent': function () {
        const factArr = facts;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};