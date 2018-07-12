const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Event = require('../models/event');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Event.create([{
      name: 'Croatia vs England @ BST Hyde Park ',
      date: '2018-07-11',
      image: 'https://www.bst-hydepark.com/assets/img/BST-Football-Event-900x560-a6957ce2a4.jpg',
      description: 'We are thrilled to share the news that the Mayor of London and Secretary of State have officially announced a huge public screening of Croatia v England at Barclaycard presents British Summer Time Hyde Park.',
      location: { lat: 51.507923, lng: -0.165730 }
    }, {
      name: 'Bestival 2018',
      date: '2018-08-02',
      image: 'https://ents24.imgix.net/image/000/307/642/6ffbe95df6aa40cbc64f99def0fbe279fe23649c.jpg?w=358&h=268&auto=format',
      description: 'Bestival takes place between Thursday 2nd and Sunday 5th August at The Lulworth Estate – an enchanting, wooded country estate on Dorset’s Jurassic Coast.',
      location: { lat: 50.639285, lng: -2.208757 }
    }, {
      name: 'Lovebox',
      date: '2018-07-13',
      image: 'https://media.timeout.com/images/102150183/1372/772/image.jpg',
      description: 'Consistently one of the finest festivals in London, catering for cool kids and party monsters alike, Lovebox 2018 packs as much fun into two days as many festivals manage in three. After 13 years in east London’s Victoria Park, Lovebox is heading south for 2018, to Gunnersbury Park. It’s a change in location, but the music policy will no doubt remain the same eclectic, enticing mix of, well, everything really – from DJs to arty bands to feelgood pop to indie, plus the usual mix of kooky entertainment and activities alongside.',
      location: { lat: 51.498204, lng: -0.292464 }
    }, {
      name: 'July React London Meetup',
      date: '2018-07-31',
      image: 'https://rb-website.cdn.prismic.io/rb-website/a337ea29ee9e837e6401a2d002e20a5978ca3eaa_react-poster.jpg',
      description: 'React is having a huge impact on the way we think about Web UI development. These monthly Meetups are an opportunity to learn why and share experiences. This is a sociable group and very welcoming to newcomers',
      location: { lat: 51.5169128, lng: -0.1364268 }
    }, {
      name: 'Coding for women',
      date: '2018-08-07',
      image: 'https://www.popwebdesign.net/popart_blog/wp-content/uploads/2015/11/women-and-coding3.jpg',
      description: 'Come and join us for our regular Tuesday evening meetup and participate in any one of a number of peer-led JavaScript coding activities, including freecodecamp and codewars challenges. This meetup is for women who want to learn to code. During the meetup we encourage participants to work together with another meetup attendee on one laptop (pair programming). Students from the current cohort of Founders & Coders will be available for questions and support.',
      location: { lat: 51.5635499, lng: -0.1078269 }
    }, {
      name: 'Arsenal v Manchester City',
      date: '2018-08-12',
      image: 'https://as01.epimg.net/en/imagenes/2017/03/31/football/1490959169_888552_1490959224_noticia_normal.jpg',
      description: 'Reigning Premier League champions Manchester City kick off the new season at the Emirates in North London for what will surely be an action packed match. Will be odd for the Arsenal fans not having Arsene Wenger in the dugout after 20+ years at the helm.',
      location: { lat: 51.5548885, lng: -0.108438 }
    }]))
    .then(events => console.log(`${events.length} events created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
