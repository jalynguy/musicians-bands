const { sequelize } = require('./db')
const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
const bandSeed = [
    {
        name: 'Coldplay',
        genre: 'Alternative Rock'
    },
    {
        name: 'The Beatles',
        genre: 'Rock'
    },
    {
        name: 'Wu-Tang Clan',
        genre: 'Rap'
    }
]

const musicianSeed =[
    {
        name: 'Chris Martin',
        instrument: 'voice'
    },
    {
        name: 'John Lennon',
        instrument: 'voice'
    },
    {
        name: 'RZA',
        instrument: 'voice'
    },
]

const initialize = async ()=>{
    await sequelize.sync({force:true});
    let allBands = Band.bulkCreate(bandSeed);
    let allMusicians = Musician.bulkCreate(musicianSeed);
}
// A musician can only belong to one band
// but a band can have many musicians.
Musician.belongsTo(Band);
Band.hasMany(Musician);

initialize();

module.exports = {
    Band,
    Musician,
    Song
};
