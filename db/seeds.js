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
      image: 'https://ents24.imgix.net/image/000/307/642/6ffbe95df6aa40cbc64f99def0fbe279fe23649c.jpg?w=358&h=268&auto=format',
      description: 'Bestival takes place between Thursday 2nd and Sunday 5th August at The Lulworth Estate – an enchanting, wooded country estate on Dorset’s Jurassic Coast.',
      location: { lat: 50.639285, lng: -2.208757 }
    }, {
      name: 'Lovebox',
      date: '2018-07-13',
      startTime: '14:00',
      type: 'Music',
      status: 'Selling',
      image: 'https://media.timeout.com/images/102150183/1372/772/image.jpg',
      description: 'Consistently one of the finest festivals in London, catering for cool kids and party monsters alike, Lovebox 2018 packs as much fun into two days as many festivals manage in three. After 13 years in east London’s Victoria Park, Lovebox is heading south for 2018, to Gunnersbury Park. It’s a change in location, but the music policy will no doubt remain the same eclectic, enticing mix of, well, everything really – from DJs to arty bands to feelgood pop to indie, plus the usual mix of kooky entertainment and activities alongside.',
      location: { lat: 51.498204, lng: -0.292464 }
    }, {
      name: 'July React London Meetup',
      date: '2018-07-31',
      startTime: '19:00',
      status: 'Selling',
      type: 'Learning',
      image: 'https://rb-website.cdn.prismic.io/rb-website/a337ea29ee9e837e6401a2d002e20a5978ca3eaa_react-poster.jpg',
      description: 'React is having a huge impact on the way we think about Web UI development. These monthly Meetups are an opportunity to learn why and share experiences. This is a sociable group and very welcoming to newcomers',
      location: { lat: 51.5169128, lng: -0.1364268 }
    }, {
      name: 'Coding for women',
      date: '2018-08-07',
      startTime: '19:30',
      status: 'Selling',
      type: 'Learning',
      image: 'https://www.popwebdesign.net/popart_blog/wp-content/uploads/2015/11/women-and-coding3.jpg',
      description: 'Come and join us for our regular Tuesday evening meetup and participate in any one of a number of peer-led JavaScript coding activities, including freecodecamp and codewars challenges. This meetup is for women who want to learn to code. During the meetup we encourage participants to work together with another meetup attendee on one laptop (pair programming). Students from the current cohort of Founders & Coders will be available for questions and support.',
      location: { lat: 51.5635499, lng: -0.1078269 }
    }, {
      name: 'Arsenal v Manchester City',
      date: '2018-08-12',
      startTime: '16:00',
      status: 'Selling',
      type: 'Sport',
      image: 'https://as01.epimg.net/en/imagenes/2017/03/31/football/1490959169_888552_1490959224_noticia_normal.jpg',
      description: 'Reigning Premier League champions Manchester City kick off the new season at the Emirates in North London for what will surely be an action packed match. Will be odd for the Arsenal fans not having Arsene Wenger in the dugout after 20+ years at the helm.',
      location: { lat: 51.5548885, lng: -0.108438 }
    }, {
      name: 'London Dungeons & Dragons Meetup',
      date: '2018-07-21',
      startTime: '13:30',
      status: 'Selling',
      type: 'Gaming',
      image: 'https://www.retroreport.org/uploads/1460935513521_RR276_THUMB_ALT2_D&D_DRAGON_PLAYER_MANUAL.jpg',
      description: 'There is no charge, membership fee or subscription. However, a collection tin may be circulated by the Organiser/Assistant Organiser towards the running of the Meetup. Contributions are purely voluntary though: you are under no obligation. We do not record who donates what. You do not have to have previous experience of D&D or another tabletop role-playing game. You do not have to bring or prepare anything. We can lend you everything you need including a pre-generated character. If you do have dice, paper and pencils, please bring them though.',
      location: { lat: 51.5132819, lng: -0.0873233 }
    }, {
      name: 'Ryder Cup 2018',
      date: '2018-09-28',
      startTime: '07:00',
      status: 'Selling',
      type: 'Sport',
      image: 'https://www.gogolfing.net.au/wp-content/uploads/2017/10/2018-Ryder-Cup-Course-Graphic.jpg',
      description: 'The 42nd Ryder Cup Matches will be held in France from 28–30 September 2018 at the Albatros Course of Le Golf National in Saint-Quentin-en-Yvelines, a suburb southwest of Paris. It will be the second Ryder Cup to be held in Continental Europe, after the 1997 contest, which was held in Spain. The United States is the defending champion, but has lost the last five matches in Europe, having last won there in 1993.',
      location: { lat: 48.750536, lng: 2.077941 }
    }, {
      name: 'Hip Hop Karaoke',
      date: '2018-07-26',
      startTime: '19:00',
      status: 'Selling',
      type: 'Music',
      image: 'http://www.hiphopkaraoke.co.uk/wp-content/uploads/2017/05/QOH17-copy.jpg',
      description: 'We’re super excited to announce that the UK’s Original Hip Hop Karaoke and one of London’s most legendary weekly events takes a NEW WEEKLY Thursday residency at the Queen Of Hoxton! Over the years Hip Hop Karaoke has established itself as a a true ‘bucket list’ experience at both their London and national residencies and all major UK festivals and has seen thousands of amateurs and more than a few celebs on stage with DJ Rob Pursey, Host Bobby Champagne Jr. and the extended Hip Hop Karaoke family. Whether you want to go classic with some Biggie, Missy or The Fugees or keep it right now with Drake, Kendrick Lamar or Kanye, this is your chance to live out your rap fantasies to London’s most loving crowd. With hundreds of rap songs to choose from, all those years of rapping along in clubs, in the car, or in front of a mirror have lead to this moment! Lose yourself!',
      location: { lat: 51.522135, lng: -0.0834237 }
    }]))
    .then(events => console.log(`${events.length} events created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
