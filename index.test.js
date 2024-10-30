const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')


describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({name: 'Imagine Dragons', genre: 'Pop Rock'});
        expect(testBand.name).toBe('Imagine Dragons');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: 'Dan Reynolds', instrument: 'voice'});
        expect(testMusician.name).toBe('Dan Reynolds');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const findBand = await Band.findByPk(2);
        let updatedBand = await findBand.update({
            name: 'Coldplay',
            genre: 'Alt Rock'
        })
        expect(updatedBand.genre).toBe('Alt Rock');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const findMusician = await Musician.findByPk(2);
        let updatedMusician = await findMusician.update({
            name: 'Ringo Starr',
            instrument: 'Drums'
        })
        expect(updatedMusician.instrument).toBe('Drums');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const findBand = await Band.findByPk(1);
        let deletedBand = await findBand.destroy();
        expect(deletedBand.name).toBe('Imagine Dragons');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const findMusician = await Musician.findByPk(2);
        let deletedMusician = await findMusician.destroy();
        expect(deletedMusician.name).toBe('Ringo Starr');
    })
})