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
    }]))
    .then(events => console.log(`${events.length} events created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
