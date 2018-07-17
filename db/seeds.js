const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Event = require('../models/event');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Event.create([{
      name: 'Croatia vs England @ BST Hyde Park ',
      date: '2018-07-11',
      startTime: '17:00',
      status: 'Selling',
      price: 10.00,
      type: 'Sport',
      image: 'https://www.bst-hydepark.com/assets/img/BST-Football-Event-900x560-a6957ce2a4.jpg',
      description: 'We are thrilled to share the news that the Mayor of London and Secretary of State have officially announced a huge public screening of Croatia v England at Barclaycard presents British Summer Time Hyde Park.',
      location: { lat: 51.507923, lng: -0.165730 }
    }, {
      name: 'Bestival 2018',
      date: '2018-08-02',
      startTime: '13:00',
      type: 'Music',
      status: 'Selling',
      price: 80.00,
      image: 'https://ents24.imgix.net/image/000/307/642/6ffbe95df6aa40cbc64f99def0fbe279fe23649c.jpg?w=358&h=268&auto=format',
      description: 'Bestival takes place between Thursday 2nd and Sunday 5th August at The Lulworth Estate – an enchanting, wooded country estate on Dorset’s Jurassic Coast.',
      location: { lat: 50.639285, lng: -2.208757 }
    }, {
      name: 'Lovebox',
      date: '2018-07-13',
      startTime: '14:00',
      type: 'Music',
      status: 'Selling',
      price: 80.00,
      image: 'https://media.timeout.com/images/102150183/1372/772/image.jpg',
      description: 'Consistently one of the finest festivals in London, catering for cool kids and party monsters alike, Lovebox 2018 packs as much fun into two days as many festivals manage in three. After 13 years in east London’s Victoria Park, Lovebox is heading south for 2018, to Gunnersbury Park. It’s a change in location, but the music policy will no doubt remain the same eclectic, enticing mix of, well, everything really – from DJs to arty bands to feelgood pop to indie, plus the usual mix of kooky entertainment and activities alongside.',
      location: { lat: 51.498204, lng: -0.292464 }
    }, {
      name: 'July React London Meetup',
      date: '2018-07-31',
      startTime: '19:00',
      status: 'Selling',
      price: 0.00,
      type: 'Learning',
      image: 'https://rb-website.cdn.prismic.io/rb-website/a337ea29ee9e837e6401a2d002e20a5978ca3eaa_react-poster.jpg',
      description: 'React is having a huge impact on the way we think about Web UI development. These monthly Meetups are an opportunity to learn why and share experiences. This is a sociable group and very welcoming to newcomers',
      location: { lat: 51.5169128, lng: -0.1364268 }
    }, {
      name: 'Coding for women',
      date: '2018-08-07',
      startTime: '19:30',
      status: 'Selling',
      price: 0.00,
      type: 'Learning',
      image: 'https://www.popwebdesign.net/popart_blog/wp-content/uploads/2015/11/women-and-coding3.jpg',
      description: 'Come and join us for our regular Tuesday evening meetup and participate in any one of a number of peer-led JavaScript coding activities, including freecodecamp and codewars challenges. This meetup is for women who want to learn to code. During the meetup we encourage participants to work together with another meetup attendee on one laptop (pair programming). Students from the current cohort of Founders & Coders will be available for questions and support.',
      location: { lat: 51.5635499, lng: -0.1078269 }
    }, {
      name: 'Arsenal v Manchester City',
      date: '2018-08-12',
      startTime: '16:00',
      status: 'Selling',
      price: 0.00,
      type: 'Sport',
      image: 'https://as01.epimg.net/en/imagenes/2017/03/31/football/1490959169_888552_1490959224_noticia_normal.jpg',
      description: 'Reigning Premier League champions Manchester City kick off the new season at the Emirates in North London for what will surely be an action packed match. Will be odd for the Arsenal fans not having Arsene Wenger in the dugout after 20+ years at the helm.',
      location: { lat: 51.5548885, lng: -0.108438 }
    }, {
      name: 'London Dungeons & Dragons Meetup',
      date: '2018-07-21',
      startTime: '13:30',
      status: 'Selling',
      price: 0.00,
      type: 'Gaming',
      image: 'https://www.retroreport.org/uploads/1460935513521_RR276_THUMB_ALT2_D&D_DRAGON_PLAYER_MANUAL.jpg',
      description: 'There is no charge, membership fee or subscription. However, a collection tin may be circulated by the Organiser/Assistant Organiser towards the running of the Meetup. Contributions are purely voluntary though: you are under no obligation. We do not record who donates what. You do not have to have previous experience of D&D or another tabletop role-playing game. You do not have to bring or prepare anything. We can lend you everything you need including a pre-generated character. If you do have dice, paper and pencils, please bring them though.',
      location: { lat: 51.5132819, lng: -0.0873233 }
    }, {
      name: 'Ryder Cup 2018',
      date: '2018-09-28',
      startTime: '07:00',
      status: 'Selling',
      price: 100.00,
      type: 'Sport',
      image: 'https://www.gogolfing.net.au/wp-content/uploads/2017/10/2018-Ryder-Cup-Course-Graphic.jpg',
      description: 'The 42nd Ryder Cup Matches will be held in France from 28–30 September 2018 at the Albatros Course of Le Golf National in Saint-Quentin-en-Yvelines, a suburb southwest of Paris. It will be the second Ryder Cup to be held in Continental Europe, after the 1997 contest, which was held in Spain. The United States is the defending champion, but has lost the last five matches in Europe, having last won there in 1993.',
      location: { lat: 48.750536, lng: 2.077941 }
    }, {
      name: 'Hip Hop Karaoke',
      date: '2018-07-26',
      startTime: '19:00',
      status: 'Selling',
      price: 5.00,
      type: 'Music',
      image: 'http://www.hiphopkaraoke.co.uk/wp-content/uploads/2017/05/QOH17-copy.jpg',
      description: 'We’re super excited to announce that the UK’s Original Hip Hop Karaoke and one of London’s most legendary weekly events takes a NEW WEEKLY Thursday residency at the Queen Of Hoxton! Over the years Hip Hop Karaoke has established itself as a a true ‘bucket list’ experience at both their London and national residencies and all major UK festivals and has seen thousands of amateurs and more than a few celebs on stage with DJ Rob Pursey, Host Bobby Champagne Jr. and the extended Hip Hop Karaoke family. Whether you want to go classic with some Biggie, Missy or The Fugees or keep it right now with Drake, Kendrick Lamar or Kanye, this is your chance to live out your rap fantasies to London’s most loving crowd. With hundreds of rap songs to choose from, all those years of rapping along in clubs, in the car, or in front of a mirror have lead to this moment! Lose yourself!',
      location: { lat: 51.522135, lng: -0.0834237 }
    }, {
      name: 'Taste of London Festive Edition',
      date: '2018-11-15',
      startTime: '18:00',
      status: 'Selling',
      price: 30.00,
      type: 'Food & Drink',
      image: 'https://c.ststat.net/content/EntImg/Tour/taste-of-london-the-festive-edition-757763021-300x300.png',
      description: 'Taste of London is the highlight of the summer foodie calendar, as London’s latest, greatest and most exciting restaurants serve up taster size signature dishes, world-class chefs cook up a storm live on stage and, as always, many opportunities to get hands-on with interactive masterclasses and shop from an array of more than 200 food and drink purveyors. Taste of London: The Festive Edition, the little sister to the summer festival, is the perfect way to kick off the Christmas season in style. Between 15 – 18 November 2018 East London’s stunning Tobacco Dock will be transformed into a foodie wonderland brimming with London’s tastiest food, festive tipples, a fantastic chef line-up, loads of masterclasses to get involved with and all the shopping you need to get set for the Christmas season.',
      location: { lat: 51.5081761, lng: -0.0595714 }
    }, {
      name: 'Oktoberfest',
      date: '2018-09-22',
      startTime: '11:00',
      status: 'Selling',
      price: 30.00,
      type: 'Food & Drink',
      image: 'https://www.oktoberfest.net/wp-content/uploads/2012/09/Hippodrome-oktoberfest.jpg',
      description: 'On Saturday, September 22nd, the Schottenhamel tent is the place to be, if you want to catch the official opening ceremonies. At noon, the Mayor of Munich will have the honor of tapping the first keg of Oktoberfest beer. Once the barrel has been tapped, all visitors will then be allowed to quench their thirst. It pays to arrive early in order to experience the festivities up close and personal and it\'s quite common for visitors to come around 9 am to secure good seats. The festival will go until October 7th.',
      location: { lat: 48.1304812, lng: 11.5464351 }
    }, {
      name: 'Childish Gambino @ 02 Arena',
      date: '2018-11-04',
      startTime: '19:00',
      status: 'Selling',
      price: 50.00,
      type: 'Music',
      image: 'http://www.brooklynvegan.com/files/2018/07/gambino.jpg?w=630&h=397&zc=1&s=0&a=t&q=89',
      description: ' Donald Glover’s set features bold choreography, chilling falsetto screams and dramatised facial expressions reminiscent of those in the viral video for his polemic hit This Is America – with which he ends the show, to scenes of synchronised thumping chaos. Throughout, Gambino manages to apply a newfound scale to himself and his music, and in doing so, reinforces his position as an unstoppable entity on the brink of another new, exciting chapter.',
      location: { lat: 51.503038, lng: 0.0031543 }
    }, {
      name: 'Play Expo Manchester',
      date: '2019-05-04',
      startTime: '11:00',
      status: 'Selling',
      price: 22.00,
      type: 'Gaming',
      image: 'https://cdn.arstechnica.net/wp-content/uploads/2014/05/arcade-9.jpg',
      description: 'The UK’s favourite arcade, indie and retro games show will return in 2019! Close to 1000 consoles, handhelds, computers, arcades, pinballs and PC\'s all running the very best in classic and modern video games and all free to play! Organised by experienced video game events specialists Replay Events the show will be full with features, exhibitors and more gaming mayhem than Manchester has ever seen. Jam packed with everything you love about gaming and popular culture, the show has something for everyone. PLAY Expo Manchester - Modern Gaming, Indie, Retro, Arcade, Pinball, Minecraft, VR, LAN, Guests, Merchandise, Cosplay, Tournaments, Education, Communities, Tabletop Gaming, Photo Shoots and More!',
      location: { lat: 53.4765664, lng: -2.2464412 }
    }, {
      name: 'Star Wars Burlesque : Empire Strips Back',
      date: '2019-06-05',
      startTime: '11:00',
      status: 'Selling',
      price: 60.00,
      type: 'Theatre',
      image: 'http://www.4search.com/cache/images/web/featured/fullsize/www.dailynews.com/4070373-fullsize.jpg',
      description: 'As part of the act’s sojourn across the Golden State, it will make stops at Los Angeles’ The Theatre at Ace Hotel and San Francisco’s The Warfield. Tickets for these bawdy, hilarious and strictly 18 and over performances are on sale now. The Empire Strips Back: A Burlesque Parody” is the brainchild of Australian theatre auteur Russall S. Beattie. Initially created as a gag, “Empire Strips Back” is a titillating and profoundly funny burlesque show that brings elements of striptease, song and dance numbers and comedy to iconic “Star Wars” cinematic universe. As such, attendees can expect such delights as “sexy storm troopers, a Darth with a different kind of dark side and the droids you’re looking for and much more.',
      location: { lat: 37.7821989, lng: -122.4131746 }
    }, {
      name: 'England v South Africa Autumn International',
      date: '2018-11-03',
      startTime: '15:00',
      status: 'Selling',
      price: 55.00,
      type: 'Sport',
      image: 'http://www.atstickets.com/manager/categoryimages/category_1106.jpg',
      description: 'England will face South Africa at Twickenham Stadium on Saturday 3rd November during the Quilter Internationals 2018. This will be the first of four autumn internationals to be played by England in 2018. England recently completed a three-test series against the Springboks. South Africa won the first two tests, 42-39 in Johannesburg and 23-12 in Bloemfontein, whilst England won the third test 25-10 in Cape Town. England and South Africa have contested a total of 41 rugby test matches since their first meeting in 1906. England have won 14 of those matches, whilst South Africa have won 25 matches. There have also been two drawn matches between the two sides.',
      location: { lat: 51.4552073, lng: -0.3427826 }
    }, {
      name: 'Hamilton',
      date: '2019-02-04',
      startTime: '15:00',
      status: 'Selling',
      price: 75.00,
      type: 'Theatre',
      image: 'https://16909fb34572fd4ac952-c35bae122d75558469a2aaccf4fd315e.ssl.cf3.rackcdn.com/artistpic_254000-1497448057.jpg',
      description: 'Hamilton: An American Musical is a sung and rapped through musical about the life of American Founding Father Alexander Hamilton, with music, lyrics, and book by Lin-Manuel Miranda, inspired by the 2004 biography Alexander Hamilton by historian Ron Chernow. Incorporating hip hop, R&B, pop, soul, traditional-style show tunes, and color-conscious casting of non-white actors as the Founding Fathers and other historical figures, the musical achieved both critical acclaim and box office success.',
      location: { lat: 51.496876, lng: -0.1425189 }
    }, {
      name: 'The Great British Beer Festival',
      date: '2018-08-07',
      startTime: '12:00',
      status: 'Selling',
      price: 11.00,
      type: 'Food & Drink',
      image: 'https://olympia.london/sites/default/files/styles/sidebar_variable__wide/public/events/GBBF_LOGO_new.png?itok=fjcg3RGE',
      description: 'Living up to its reputation as Britain/’s ultimate beer festival, The Great British Beer Festival will showcase over 900 real ales and other craft beers including ciders, perries, fine wines and gin; all served from over 30 bars.Tutored tasting sessions to help you learn more about the brews you’re sampling will be available and can be enjoyed alongside some fantastic street food. Enjoy live music and partake in pub quizzes as well as find out which beer will be crowned the 2018 Champion Beer of Britain, one of the most prestigious beer competitions in the world.',
      location: { lat: 51.4965005, lng: -0.2106881 }
    }, {
      name: 'Euro 2020 Final',
      date: '2020-06-24',
      startTime: '19:00',
      status: 'Selling',
      price: 200.00,
      type: 'Sport',
      image: 'http://www.faw.cymru/files/5615/1265/9256/EURO_2020.png',
      description: 'It\'s coming home...',
      location: { lat: 51.5560208, lng: -0.2795188 }
    }]))
    .then(events => console.log(`${events.length} events created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
