//seeder.js
const Dog = require('./models/Dog');
const User = require('./models/User');

const seed = async () => {
    // Users
    await User.collection.deleteMany({})
    // const demoUser = new User({
    //     handle: 'demoUser',
    //     email: 'demoUser@doge.com',
    //     password: 'password'
    // });


    // demoUser.save();

    const testUser = await new User({
        handle: 'alexUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(testUser.password, salt, async (err, hash) => {

            if (err) throw err;
            testUser.password = hash;
            const savedUser = await testUser.save()
            res.json(savedUser)
        })
    })


    const user2 = new User({
        handle: 'danielUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })
    user2.save();
    const user3 = new User({
        handle: 'jaronUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })
    user3.save();
    const user4 = new User({
        handle: 'jordanUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })
    user4.save();
    const user5 = new User({
        handle: 'kennethUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })
    user5.save();


    // dogs
    Tree.collection.deleteMany({})
    const SFInstructors = new Tree({
        name: "San Francisco Instructors",
        creator: SFAdmin
    })
    SFInstructors.save();
    const NYInstructors = new Tree({
        name: "New York Instructors",
        creator: NYAdmin
    })
    NYInstructors.save();

    // matches
}
module.exports = seed