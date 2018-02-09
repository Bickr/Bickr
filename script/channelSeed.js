const { Channel } = require('../server/db/models')

const seedChannels = async function () {
  const channels = await Promise.all([
    Channel.create({ name: 'Politico', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 2, categoryId: 1, size: 250 }),
    Channel.create({ name: 'NYC Town Hall', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 3, categoryId: 1, size: 200 }),

    Channel.create({ name: 'Anime was a mistake', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 1, categoryId: 2, size: 150 }),

    Channel.create({ name: 'Welcome to the Jungle', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 3, size: 100 }),
    Channel.create({ name: 'EA Lovers', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 5, categoryId: 3, size: 50 }),
    Channel.create({ name: 'Fanboys Xbox vs PS4', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 6, categoryId: 3, size: 200 }),
    Channel.create({ name: 'Get Smashed', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 6, categoryId: 3, size: 125 }),

    Channel.create({ name: 'Winter is Coming', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 5, categoryId: 4, size: 200 }),
    Channel.create({ name: 'Oscar Predictions', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 4, size: 250 }),
    Channel.create({ name: 'Marvel movies = Suck', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 4, size: 75 }),

    Channel.create({
      name: 'SuperBowl predictions', type: 'Debate', description: 'BLANK DESCRIPTION', imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Super_Bowl_logo.svg/1200px-Super_Bowl_logo.svg.png',  userId: 4, categoryId: 5, size: 200 }),
    Channel.create({
      name: 'LeBron the GOAT?', type: 'Debate', description: 'BLANK DESCRIPTION', imageURL: 'http://3.bp.blogspot.com/-gto-4aJ1xUg/VCRGbVidV1I/AAAAAAAAAdA/K9yWOQo2NAU/s1600/Screen%2BShot%2B2014-09-25%2Bat%2B12.44.04%2BPM.png', userId: 7, categoryId: 5, size: 250 }),
    Channel.create({ name: 'Is baseball dying?', type: 'Debate', description: 'BLANK DESCRIPTION', imageURL: 'https://spartanink.org/wp-content/uploads/2017/11/44444.jpg', userId: 3, categoryId: 5, size: 75 }),

    Channel.create({ name: 'The Symbolif Motif', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 5, categoryId: 6, size: 200 }),
    Channel.create({ name: 'themes THemes THEMES', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 7,  categoryId: 6, size: 250 }),
    Channel.create({ name: 'Boo Radley Fan Club', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 8, categoryId: 6, size: 75 }),

    Channel.create({ name: 'Fantasy Pros', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 10, categoryId: 7, size: 200 }),
    Channel.create({ name: 'Worst Fantasy Sport', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 9, categoryId: 7, size: 250 }),
    Channel.create({ name: 'What should be next fantasy sport', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 7, size: 75 }),

    Channel.create({ name: 'Food Truck Fight', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 8, size: 200 }),
    Channel.create({ name: 'Best Wingz', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 4, categoryId: 8, size: 250 }),
    Channel.create({ name: 'Greasy Meals', type: 'Debate', description: 'BLANK DESCRIPTION', userId: 1, categoryId: 8, size: 75 }),
  ])
  await console.log(`seeded ${channels.length} channels`)
}

module.exports = seedChannels;
