//seeder.js
const Dog = require('./models/Dog');
const User = require('./models/User');
const PossibleMatchesModel = require("./models/matches/PossibleMatches");
const PendingMatchesModel = require("./models/matches/PendingMatches");
const RequestedMatchesModel = require("./models/matches/RequestedMatches");
const MatchesModel = require("./models/matches/Matches");
const bcrypt = require('bcryptjs');


const seed = async () => {
    //Users
    // User.collection.deleteMany({})

    const demoUser = await new User({
        handle: 'demoUser',
        email: 'demoUser@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(demoUser.password, salt, async (err, hash) => {
            if (err) throw err;
            demoUser.password = hash;
            const savedUser = await demoUser.save()
            res.json(savedUser)
        })
    })

    const user1 = await new User({
        handle: 'alexUser',
        email: 'demoUser1@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user1.password, salt, async (err, hash) => {
            if (err) throw err;
            user1.password = hash;
            const savedUser1 = await user1.save()
            res.json(savedUser1)
        })
    })

    const user2 = await new User({
        handle: 'danielUser',
        email: 'demoUser2@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user2.password, salt, async (err, hash) => {
            if (err) throw err;
            user2.password = hash;
            const savedUser2 = await user2.save()
            res.json(savedUser2)
        })
    })

    const user3 = await new User({
        handle: 'jaronUser',
        email: 'demoUser3@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user3.password, salt, async (err, hash) => {
            if (err) throw err;
            user3.password = hash;
            const savedUser3 = await user3.save()
            res.json(savedUser3)
        })
    })

    const user4 = await new User({
        handle: 'jordanUser',
        email: 'demoUser4@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user4.password, salt, async (err, hash) => {
            if (err) throw err;
            user4.password = hash;
            const savedUser4 = await user4.save()
            res.json(savedUser4)
        })
    })

    const user5 = await new User({
        handle: 'kennethUser',
        email: 'demoUser5@doge.com',
        password: 'password'
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user5.password, salt, async (err, hash) => {
            if (err) throw err;
            user5.password = hash;
            const savedUser5 = await user5.save()
            res.json(savedUser5)
        })
    })


    // const demoUser = new User({
    //     handle: 'demoUser',
    //     email: 'demoUser@doge.com',
    //     password: 'password'
    // });
    // demoUser.save();

    // const user1 = new User({
    //     handle: 'alexUser',
    //     email: 'demoUser1@doge.com',
    //     password: 'password'
    // });
    // user1.save();

    // const user2 = new User({
    //     handle: 'danielUser',
    //     email: 'demoUser2@doge.com',
    //     password: 'password'
    // })
    // user2.save();
    // const user3 = new User({
    //     handle: 'jaronUser',
    //     email: 'demoUser3@doge.com',
    //     password: 'password'
    // })
    // user3.save();
    // const user4 = new User({
    //     handle: 'jordanUser',
    //     email: 'demoUser4@doge.com',
    //     password: 'password'
    // })
    // user4.save();
    // const user5 = new User({
    //     handle: 'kennethUser',
    //     email: 'demoUser5@doge.com',
    //     password: 'password'
    // })
    // user5.save();






    //Dogs

    // Dog.collection.deleteMany({})
    // PendingMatchesModel.collection.deleteMany({})
    // PossibleMatchesModel.collection.deleteMany({})

    // RequestedMatchesModel.collection.deleteMany({})
    // MatchesModel.collection.deleteMany({})






    const dog6 = new Dog({
        user: user1._id,
        name: "Snooki",
        description: "Who let the dog out?",
        breed: "Pomeranian",
        birthDate: 2012-04-22,
        size: "Smol",
        gender: "Female",
        activeness: "High",
        personality: "Impish",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Pomeranian.jpeg"
    })
    const savedDog6 = await dog6.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches6 = new PendingMatchesModel({
        dogId: savedDog6._id,
        pendingMatches: [],
    });
    newPendingMatches6.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches6 = new RequestedMatchesModel({
        dogId: savedDog6._id,
        requestedMatches: [],
    });
    newRequestedMatches6.save()
    //CREATE MATCHES ARRAY
    const newMatches6 = new MatchesModel({
        dogId: savedDog6._id,
        matches: [],
    });
    newMatches6.save()


    const dog7 = new Dog({
        user: user1._id,
        name: "Nymeria",
        description: "Famous dog. $5 per autograph",
        breed: "Siberian Husky",
        birthDate: 1998-01-01,
        size: "Big Boi",
        gender: "Female",
        activeness: "Hyperactive",
        personality: "Adamant",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Nymeria-S7.png"
    })
    const savedDog7 = await dog7.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches7 = new PendingMatchesModel({
        dogId: savedDog7._id,
        pendingMatches: [],
    });
    newPendingMatches7.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches7 = new RequestedMatchesModel({
        dogId: savedDog7._id,
        requestedMatches: [],
    });
    newRequestedMatches7.save()
    //CREATE MATCHES ARRAY
    const newMatches7 = new MatchesModel({
        dogId: savedDog7._id,
        matches: [],
    });
    newMatches7.save()


    const dog8 = new Dog({
        user: user1._id,
        name: "Snoop",
        description: "AKA Snoop Lion. The more medicated the more dedicated",
        breed: "Greyhound",
        birthDate: 1971-10-20,
        size: "Large",
        gender: "Male",
        activeness: "Lazy",
        personality: "Relaxed",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/snoop.png"
    })
    const savedDog8 = await dog8.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches8 = new PendingMatchesModel({
        dogId: savedDog8._id,
        pendingMatches: [],
    });
    newPendingMatches8.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches8 = new RequestedMatchesModel({
        dogId: savedDog8._id,
        requestedMatches: [],
    });
    newRequestedMatches8.save()
    //CREATE MATCHES ARRAY
    const newMatches8 = new MatchesModel({
        dogId: savedDog8._id,
        matches: [],
    });
    newMatches8.save()


    const dog9 = new Dog({
        user: user1._id,
        name: "Lotus",
        description: "I like urban sledding.",
        breed: "Alaskan Malamute",
        birthDate: 2019-10-21,
        size: "Large",
        gender: "Female",
        activeness: "Hyperactive",
        personality: "Brave",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/room8.jpg"
    })
    const savedDog9 = await dog9.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches9 = new PendingMatchesModel({
        dogId: savedDog9._id,
        pendingMatches: [],
    });
    newPendingMatches9.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches9 = new RequestedMatchesModel({
        dogId: savedDog9._id,
        requestedMatches: [],
    });
    newRequestedMatches9.save()
    //CREATE MATCHES ARRAY
    const newMatches9 = new MatchesModel({
        dogId: savedDog9._id,
        matches: [],
    });
    newMatches9.save()



    const dog10 = new Dog({
        user: user1._id,
        name: "Growly",
        description: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
        breed: "Chow Chow",
        birthDate: 1996-02-27,
        size: "Smol",
        gender: "Male",
        activeness: "Hyperactive",
        personality: "Bold",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/growlithe.jpg"
    })
    const savedDog10 = await dog10.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches10 = new PendingMatchesModel({
        dogId: savedDog10._id,
        pendingMatches: [],
    });
    newPendingMatches10.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches10 = new RequestedMatchesModel({
        dogId: savedDog10._id,
        requestedMatches: [],
    });
    newRequestedMatches10.save()
    //CREATE MATCHES ARRAY
    const newMatches10 = new MatchesModel({
        dogId: savedDog10._id,
        matches: [],
    });
    newMatches10.save()


    const dog11 = new Dog({
        user: user2._id,
        name: "Clifford",
        description: "Biggest dog in the house. The big red one.",
        breed: "Labrador Retriever",
        birthDate: 2016-09-04,
        size: "Big Boi",
        gender: "Male",
        activeness: "Normal",
        personality: "Jolly",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Clifford.jpg"
    })
    const savedDog11 = await dog11.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches11 = new PendingMatchesModel({
        dogId: savedDog11._id,
        pendingMatches: [],
    });
    newPendingMatches11.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches11 = new RequestedMatchesModel({
        dogId: savedDog11._id,
        requestedMatches: [],
    });
    newRequestedMatches11.save()
    //CREATE MATCHES ARRAY
    const newMatches11 = new MatchesModel({
        dogId: savedDog11._id,
        matches: [],
    });
    newMatches11.save()



    
    const dog12 = new Dog({
        user: user2._id,
        name: "Lady",
        description: "Lowkey trying to get outside the house. Like musicals",
        breed: "Pomsky",
        birthDate: 2001-05-29,
        size: "Small",
        gender: "Female",
        activeness: "Low",
        personality: "Modest",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Pomsky-Feature.jpg"
    })
    const savedDog12 = await dog12.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches12 = new PendingMatchesModel({
        dogId: savedDog12._id,
        pendingMatches: [],
    });
    newPendingMatches12.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches12 = new RequestedMatchesModel({
        dogId: savedDog12._id,
        requestedMatches: [],
    });
    newRequestedMatches12.save()
    //CREATE MATCHES ARRAY
    const newMatches12 = new MatchesModel({
        dogId: savedDog12._id,
        matches: [],
    });
    newMatches12.save()



    const dog13 = new Dog({
        user: user2._id,
        name: "Bagel",
        description: "Baby",
        breed: "Beagle",
        birthDate: 2020-02-10,
        size: "Small",
        gender: "Male",
        activeness: "High",
        personality: "Naughty",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Image+from+iOS.jpg"
    })
    const savedDog13 = await dog13.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches13 = new PendingMatchesModel({
        dogId: savedDog13._id,
        pendingMatches: [],
    });
    newPendingMatches13.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches13 = new RequestedMatchesModel({
        dogId: savedDog13._id,
        requestedMatches: [],
    });
    newRequestedMatches13.save()
    //CREATE MATCHES ARRAY
    const newMatches13 = new MatchesModel({
        dogId: savedDog13._id,
        matches: [],
    });
    newMatches13.save()


    const dog14 = new Dog({
        user: user2._id,
        name: "Lucky",
        description: "Michelle’s obvious favorite",
        breed: "Corgi",
        birthDate: 2010-08-10,
        size: "Small",
        gender: "Male",
        activeness: "Low",
        personality: "Relaxed",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Image+from+iOS+(1).jpg"
    })
    const savedDog14 = await dog14.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches14 = new PendingMatchesModel({
        dogId: savedDog14._id,
        pendingMatches: [],
    });
    newPendingMatches14.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches14 = new RequestedMatchesModel({
        dogId: savedDog14._id,
        requestedMatches: [],
    });
    newRequestedMatches14.save()
    //CREATE MATCHES ARRAY
    const newMatches14 = new MatchesModel({
        dogId: savedDog14._id,
        matches: [],
    });
    newMatches14.save()



    const dog15 = new Dog({
        user: user2._id,
        name: "Max aka ChocolateJr.",
        description: "I roam the streets with no leash, and have a huge stash of treats",
        breed: "Mutt",
        birthDate: 2013-09-08,
        size: "Medium",
        gender: "Male",
        activeness: "Normal",
        personality: "Brave",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/screenshot_20200904-124912_video_player.jpg"
    })
    const savedDog15 = await dog15.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches15 = new PendingMatchesModel({
        dogId: savedDog15._id,
        pendingMatches: [],
    });
    newPendingMatches15.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches15 = new RequestedMatchesModel({
        dogId: savedDog15._id,
        requestedMatches: [],
    });
    newRequestedMatches15.save()
    //CREATE MATCHES ARRAY
    const newMatches15 = new MatchesModel({
        dogId: savedDog15._id,
        matches: [],
    });
    newMatches15.save()



    const dog16 = new Dog({
        user: user3._id,
        name: "Buster",
        description: "Noise makes me anxious",
        breed: "Labrador Retriever",
        birthDate: 2016-07-16,
        size: "Large",
        gender: "Male",
        activeness: "Low",
        personality: "Impish",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/How-Long-Do-Labrador-Retriever-Live-long.jpg"
    })
    const savedDog16 = await dog16.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches16 = new PendingMatchesModel({
        dogId: savedDog16._id,
        pendingMatches: [],
    });
    newPendingMatches16.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches16 = new RequestedMatchesModel({
        dogId: savedDog16._id,
        requestedMatches: [],
    });
    newRequestedMatches16.save()
    //CREATE MATCHES ARRAY
    const newMatches16 = new MatchesModel({
        dogId: savedDog16._id,
        matches: [],
    });
    newMatches16.save()





    const dog17 = new Dog({
        user: user3._id,
        name: "Luna",
        description: "Don't get barking mad at me if I walk in your house barefoot",
        breed: "Shih Tzu",
        birthDate: 2014-06-15,
        size: "Smol",
        gender: "Female",
        activeness: "Normal",
        personality: "Quiet",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/shih_tzu_dog_running.jpg"
    })
    const savedDog17 = await dog17.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches17 = new PendingMatchesModel({
        dogId: savedDog17._id,
        pendingMatches: [],
    });
    newPendingMatches17.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches17 = new RequestedMatchesModel({
        dogId: savedDog17._id,
        requestedMatches: [],
    });
    newRequestedMatches17.save()
    //CREATE MATCHES ARRAY
    const newMatches17 = new MatchesModel({
        dogId: savedDog17._id,
        matches: [],
    });
    newMatches17.save()



    const dog18 = new Dog({
        user: user3._id,
        name: "Garfield",
        description: "Not even a dog, just fishing",
        breed: "Mutt",
        birthDate: 1978-06-19,
        size: "Medium",
        gender: "Male",
        activeness: "Lazy",
        personality: "Sassy",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/garfield.jpg"
    })
    const savedDog18 = await dog18.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches18 = new PendingMatchesModel({
        dogId: savedDog18._id,
        pendingMatches: [],
    });
    newPendingMatches18.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches18 = new RequestedMatchesModel({
        dogId: savedDog18._id,
        requestedMatches: [],
    });
    newRequestedMatches18.save()
    //CREATE MATCHES ARRAY
    const newMatches18 = new MatchesModel({
        dogId: savedDog18._id,
        matches: [],
    });
    newMatches18.save()


    const dog19 = new Dog({
        user: user3._id,
        name: "Goofy",
        description: "Gawrsh! Ah-hyuck!",
        breed: "Mutt",
        birthDate: 1932-11-11,
        size: "Big Boi",
        gender: "Male",
        activeness: "Lazy",
        personality: "Gentle",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/elke-vogelsang-1.jpg"
    })
    const savedDog19 = await dog19.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches19 = new PendingMatchesModel({
        dogId: savedDog19._id,
        pendingMatches: [],
    });
    newPendingMatches19.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches19 = new RequestedMatchesModel({
        dogId: savedDog19._id,
        requestedMatches: [],
    });
    newRequestedMatches19.save()
    //CREATE MATCHES ARRAY
    const newMatches19 = new MatchesModel({
        dogId: savedDog19._id,
        matches: [],
    });
    newMatches19.save()





    const dog20 = new Dog({
        user: user3._id,
        name: "Chowder",
        description: "smol white doge",
        breed: "Shih Tzu",
        birthDate: 2020-06-15,
        size: "Smol",
        gender: "Male",
        activeness: "Low",
        personality: "Mild",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Small+White+Dog.png"
    })
    const savedDog20 = await dog20.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches20 = new PendingMatchesModel({
        dogId: savedDog20._id,
        pendingMatches: [],
    });
    newPendingMatches20.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches20 = new RequestedMatchesModel({
        dogId: savedDog20._id,
        requestedMatches: [],
    });
    newRequestedMatches20.save()
    //CREATE MATCHES ARRAY
    const newMatches20 = new MatchesModel({
        dogId: savedDog20._id,
        matches: [],
    });
    newMatches20.save()



    const dog21 = new Dog({
        user: user4._id,
        name: "Shadow",
        description: "tougher than I look",
        breed: "Mutt",
        birthDate: 2012-07-11,
        size: "Medium",
        gender: "Female",
        activeness: "Normal",
        personality: "Sassy",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/shadow.jpg"
    })
    const savedDog21 = await dog21.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches21 = new PendingMatchesModel({
        dogId: savedDog21._id,
        pendingMatches: [],
    });
    newPendingMatches21.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches21 = new RequestedMatchesModel({
        dogId: savedDog21._id,
        requestedMatches: [],
    });
    newRequestedMatches21.save()
    //CREATE MATCHES ARRAY
    const newMatches21 = new MatchesModel({
        dogId: savedDog21._id,
        matches: [],
    });
    newMatches21.save()



    const dog22 = new Dog({
        user: user4._id,
        name: "Akamaru",
        description: "Spirit bomb! Wait wrong reference. Nvm.",
        breed: "Mutt",
        birthDate: 2015-07-07,
        size: "Smol",
        gender: "Male",
        activeness: "Hyperactive",
        personality: "Bold",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/akamaru.jpg"
    })
    const savedDog22 = await dog22.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches22 = new PendingMatchesModel({
        dogId: savedDog22._id,
        pendingMatches: [],
    });
    newPendingMatches22.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches22 = new RequestedMatchesModel({
        dogId: savedDog21._id,
        requestedMatches: [],
    });
    newRequestedMatches22.save()
    //CREATE MATCHES ARRAY
    const newMatches22 = new MatchesModel({
        dogId: savedDog22._id,
        matches: [],
    });
    newMatches22.save()





    const dog23 = new Dog({
        user: user4._id,
        name: "Rocket",
        description: "good boi",
        breed: "Mutt",
        birthDate: 2015-12-04,
        size: "Medium",
        gender: "Male",
        activeness: "High",
        personality: "Jolly",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/kevross.jpeg"
    })
    const savedDog23 = await dog23.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches23 = new PendingMatchesModel({
        dogId: savedDog23._id,
        pendingMatches: [],
    });
    newPendingMatches23.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches23 = new RequestedMatchesModel({
        dogId: savedDog23._id,
        requestedMatches: [],
    });
    newRequestedMatches23.save()
    //CREATE MATCHES ARRAY
    const newMatches23 = new MatchesModel({
        dogId: savedDog23._id,
        matches: [],
    });
    newMatches23.save()




    const dog24 = new Dog({
        user: user4._id,
        name: "Kim Pawssible",
        description: "Poodle. Poodle. Poodle. Poodle!",
        breed: "Poodle",
        birthDate: 2016-12-25,
        size: "Small",
        gender: "Female",
        activeness: "Hyperactive",
        personality: "Naive",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Standard_Poodle_Brown.jpeg"
    })
    const savedDog24 = await dog24.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches24 = new PendingMatchesModel({
        dogId: savedDog24._id,
        pendingMatches: [],
    });
    newPendingMatches24.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches24 = new RequestedMatchesModel({
        dogId: savedDog24._id,
        requestedMatches: [],
    });
    newRequestedMatches24.save()
    //CREATE MATCHES ARRAY
    const newMatches24 = new MatchesModel({
        dogId: savedDog24._id,
        matches: [],
    });
    newMatches24.save()



    const dog25 = new Dog({
        user: user4._id,
        name: "Oreo",
        description: "Supa Cool",
        breed: "Papillion",
        birthDate: 2004-06-12,
        size: "Smol",
        gender: "Male",
        activeness: "Lazy",
        personality: "Relaxed",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/0.jpg"
    })
    const savedDog25 = await dog25.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches25 = new PendingMatchesModel({
        dogId: savedDog25._id,
        pendingMatches: [],
    });
    newPendingMatches25.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches25 = new RequestedMatchesModel({
        dogId: savedDog2._id,
        requestedMatches: [],
    });
    newRequestedMatches25.save()
    //CREATE MATCHES ARRAY
    const newMatches25 = new MatchesModel({
        dogId: savedDog25._id,
        matches: [],
    });
    newMatches25.save()




    const dog26 = new Dog({
        user: user5._id,
        name: "Harry",
        description: "Wingardium Leviosa",
        breed: "Jack Russel Terrier",
        birthDate: 1980-07-31,
        size: "Medium",
        gender: "Male",
        activeness: "Normal",
        personality: "Modest",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/jack-russell-terrier.jpg"
    })
    const savedDog26 = await dog26.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches26 = new PendingMatchesModel({
        dogId: savedDog26._id,
        pendingMatches: [],
    });
    newPendingMatches26.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches26 = new RequestedMatchesModel({
        dogId: savedDog26._id,
        requestedMatches: [],
    });
    newRequestedMatches26.save()
    //CREATE MATCHES ARRAY
    const newMatches26 = new MatchesModel({
        dogId: savedDog26._id,
        matches: [],
    });
    newMatches26.save()


    const dog27 = new Dog({
        user: user5._id,
        name: "Abu Boo Duff Duffington the 3rd",
        description: "Whiney Boi",
        breed: "Mutt",
        birthDate: 2020-10-03,
        size: "Big Boi",
        gender: "Male",
        activeness: "High",
        personality: "Timid",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/abu+boo.png"
    })
    const savedDog27 = await dog27.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches27 = new PendingMatchesModel({
        dogId: savedDog27._id,
        pendingMatches: [],
    });
    newPendingMatches27.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches27 = new RequestedMatchesModel({
        dogId: savedDog27._id,
        requestedMatches: [],
    });
    newRequestedMatches27.save()
    //CREATE MATCHES ARRAY
    const newMatches27 = new MatchesModel({
        dogId: savedDog27._id,
        matches: [],
    });
    newMatches27.save()




    const dog28 = new Dog({
        user: user5._id,
        name: "Pongo",
        description: "Have 100 brothes and sisters.",
        breed: "Dalmatian",
        birthDate: 1996-11-27,
        size: "Big Boi",
        gender: "Male",
        activeness: "Normal",
        personality: "Sassy",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/dalmatian.jpg"
    })
    const savedDog28 = await dog28.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches28 = new PendingMatchesModel({
        dogId: savedDog28._id,
        pendingMatches: [],
    });
    newPendingMatches28.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches28 = new RequestedMatchesModel({
        dogId: savedDog28._id,
        requestedMatches: [],
    });
    newRequestedMatches28.save()
    //CREATE MATCHES ARRAY
    const newMatches28 = new MatchesModel({
        dogId: savedDog28._id,
        matches: [],
    });
    newMatches28.save()



    const dog29 = new Dog({
        user: user5._id,
        name: "Roxy",
        description: "Short-hair, brindle , and full of energy",
        breed: "American Staffordshire Terrier",
        birthDate: 2014-08-15,
        size: "Medium",
        gender: "Female",
        activeness: "Hyperactive",
        personality: "Gentle",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Roxy.jpg"
    })
    const savedDog29 = await dog29.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches29 = new PendingMatchesModel({
        dogId: savedDog29._id,
        pendingMatches: [],
    });
    newPendingMatches29.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches29 = new RequestedMatchesModel({
        dogId: savedDog29._id,
        requestedMatches: [],
    });
    newRequestedMatches29.save()
    //CREATE MATCHES ARRAY
    const newMatches29 = new MatchesModel({
        dogId: savedDog29._id,
        matches: [],
    });
    newMatches29.save()



    const dog30 = new Dog({
        user: user5._id,
        name: "Jacqueline",
        description: "Picky eater!",
        breed: "Corgi",
        birthDate: 2020-02-27,
        size: "Small",
        gender: "Female",
        activeness: "Normal",
        personality: "Sassy",
        imageURL: "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/corgi.jpg"
    })
    const savedDog30 = await dog30.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches30 = new PendingMatchesModel({
        dogId: savedDog30._id,
        pendingMatches: [],
    });
    newPendingMatches30.save()
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches30 = new RequestedMatchesModel({
        dogId: savedDog30._id,
        requestedMatches: [],
    });
    newRequestedMatches30.save()
    //CREATE MATCHES ARRAY
    const newMatches30 = new MatchesModel({
        dogId: savedDog30._id,
        matches: [],
    });
    newMatches30.save()



    const dog1 = new Dog({
      user: demoUser._id,
      name: "Lama",
      description: "I wanna be a slumdog millionaire.",
      breed: "Dachshund",
      birthDate: 2018 - 01 - 15,
      size: "Medium",
      gender: "Male",
      activeness: "Hyperactive",
      personality: "Naughty",
      imageURL:
        "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/dachshund-exercise.jpg",
    });
    const savedDog1 = await dog1.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches1 = new PendingMatchesModel({
      dogId: savedDog1._id,
      pendingMatches: [savedDog10._id],
    });
    newPendingMatches1.save();
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches1 = new RequestedMatchesModel({
      dogId: savedDog1._id,
      requestedMatches: [savedDog20._id],
    });
    newRequestedMatches1.save();
    //CREATE MATCHES ARRAY
    const newMatches1 = new MatchesModel({
      dogId: savedDog1._id,
      matches: [savedDog30._id],
    });
    newMatches1.save();

    const dog2 = new Dog({
      user: demoUser._id,
      name: "Butters",
      description: "Curious about fireworks. Don't wanna go outside.",
      breed: "Beagle",
      birthDate: 2019 - 02 - 21,
      size: "Small",
      gender: "Male",
      activeness: "Low",
      personality: "Calm",
      imageURL:
        "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/beagle-1024x731.jpg",
    });
    const savedDog2 = await dog2.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches2 = new PendingMatchesModel({
      dogId: savedDog2._id,
      pendingMatches: [savedDog11._id],
    });
    newPendingMatches2.save();
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches2 = new RequestedMatchesModel({
      dogId: savedDog2._id,
      requestedMatches: [savedDog21._id],
    });
    newRequestedMatches2.save();
    //CREATE MATCHES ARRAY
    const newMatches2 = new MatchesModel({
      dogId: savedDog2._id,
      matches: [savedDog25._id],
    });
    newMatches2.save();

    const dog3 = new Dog({
      user: demoUser._id,
      name: "Jacky",
      description: "Gotta go fast! Sonic speed!",
      breed: "Rottweiler",
      birthDate: 2015 - 08 - 08,
      size: "Big Boi",
      gender: "Male",
      activeness: "Hyperactive",
      personality: "Sassy",
      imageURL:
        "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/rottweiler-747859_960_720.jpg",
    });
    const savedDog3 = await dog3.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches3 = new PendingMatchesModel({
      dogId: savedDog3._id,
      pendingMatches: [savedDog12._id],
    });
    newPendingMatches3.save();
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches3 = new RequestedMatchesModel({
      dogId: savedDog3._id,
      requestedMatches: [savedDog22._id],
    });
    newRequestedMatches3.save();
    //CREATE MATCHES ARRAY
    const newMatches3 = new MatchesModel({
      dogId: savedDog3._id,
      matches: [savedDog26._id],
    });
    newMatches3.save();

    const dog4 = new Dog({
      user: demoUser._id,
      name: "Simba",
      description: "I eat alot. Share your food pls.",
      breed: "Shiba Inu",
      birthDate: 2013 - 12 - 18,
      size: "Medium",
      gender: "Female",
      activeness: "Normal",
      personality: "Hasty",
      imageURL:
        "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/Shiba+Inu.jpg",
    });
    const savedDog4 = await dog4.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches4 = new PendingMatchesModel({
      dogId: savedDog4._id,
      pendingMatches: [savedDog13._id],
    });
    newPendingMatches4.save();
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches4 = new RequestedMatchesModel({
      dogId: savedDog4._id,
      requestedMatches: [savedDog23._id],
    });
    newRequestedMatches4.save();
    //CREATE MATCHES ARRAY
    const newMatches4 = new MatchesModel({
      dogId: savedDog4._id,
      matches: [savedDog27._id],
    });
    newMatches4.save();

    const dog5 = new Dog({
      user: demoUser._id,
      name: "Scooby",
      description: "2 Scooby snacks != enough",
      breed: "Great Dane",
      birthDate: 1969 - 01 - 01,
      size: "Big Boi",
      gender: "Male",
      activeness: "Lazy",
      personality: "Timid",
      imageURL:
        "https://bonemeatskibble-pro.s3-us-west-1.amazonaws.com/great+dane.jpg",
    });
    const savedDog5 = await dog5.save();
    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches5 = new PendingMatchesModel({
      dogId: savedDog5._id,
      pendingMatches: [savedDog14._id],
    });
    newPendingMatches5.save();
    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches5 = new RequestedMatchesModel({
      dogId: savedDog5._id,
      requestedMatches: [savedDog24._id],
    });
    newRequestedMatches5.save();
    //CREATE MATCHES ARRAY
    const newMatches5 = new MatchesModel({
      dogId: savedDog5._id,
      matches: [savedDog28._id],
    });
    newMatches5.save();






    const allDogs = await Dog.find().lean().exec();
    const allDogIds = allDogs.map(pojo => pojo._id);

    //CREATE POSSIBLE MATCHES ARRAY
    const newPossibleMatches1 = new PossibleMatchesModel({
        dogId: savedDog1._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches1.save()

    const newPossibleMatches2 = new PossibleMatchesModel({
        dogId: savedDog2._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches2.save()

    const newPossibleMatches3 = new PossibleMatchesModel({
        dogId: savedDog3._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches3.save()

    const newPossibleMatches4 = new PossibleMatchesModel({
        dogId: savedDog4._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches4.save()

    const newPossibleMatches5 = new PossibleMatchesModel({
        dogId: savedDog5._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches5.save()

    const newPossibleMatches6 = new PossibleMatchesModel({
        dogId: savedDog6._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches6.save()

    const newPossibleMatches7 = new PossibleMatchesModel({
        dogId: savedDog7._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches7.save()

    const newPossibleMatches8 = new PossibleMatchesModel({
        dogId: savedDog8._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches8.save()

    const newPossibleMatches9 = new PossibleMatchesModel({
        dogId: savedDog9._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches9.save()

    const newPossibleMatches10 = new PossibleMatchesModel({
        dogId: savedDog10._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches10.save()

    const newPossibleMatches11 = new PossibleMatchesModel({
        dogId: savedDog11._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches11.save()

    const newPossibleMatches12 = new PossibleMatchesModel({
        dogId: savedDog12._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches12.save()

    const newPossibleMatches13 = new PossibleMatchesModel({
        dogId: savedDog13._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches13.save()

    const newPossibleMatches14 = new PossibleMatchesModel({
        dogId: savedDog14._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches14.save()

    const newPossibleMatches15 = new PossibleMatchesModel({
        dogId: savedDog15._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches15.save()

    const newPossibleMatches16 = new PossibleMatchesModel({
        dogId: savedDog16._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches16.save()

    const newPossibleMatches17 = new PossibleMatchesModel({
        dogId: savedDog17._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches17.save()

    const newPossibleMatches18 = new PossibleMatchesModel({
        dogId: savedDog18._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches18.save()

    const newPossibleMatches19 = new PossibleMatchesModel({
        dogId: savedDog19._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches19.save()

    const newPossibleMatches20 = new PossibleMatchesModel({
        dogId: savedDog20._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches20.save()

    const newPossibleMatches21 = new PossibleMatchesModel({
        dogId: savedDog21._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches21.save()

    const newPossibleMatches22 = new PossibleMatchesModel({
        dogId: savedDog22._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches22.save()

    const newPossibleMatches23 = new PossibleMatchesModel({
        dogId: savedDog23._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches23.save()

    const newPossibleMatches24 = new PossibleMatchesModel({
        dogId: savedDog24._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches24.save()

    const newPossibleMatches25 = new PossibleMatchesModel({
        dogId: savedDog25._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches25.save()

    const newPossibleMatches26 = new PossibleMatchesModel({
        dogId: savedDog26._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches26.save()

    const newPossibleMatches27 = new PossibleMatchesModel({
        dogId: savedDog27._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches27.save()

    const newPossibleMatches28 = new PossibleMatchesModel({
        dogId: savedDog28._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches28.save()

    const newPossibleMatches29 = new PossibleMatchesModel({
        dogId: savedDog29._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches29.save()

    const newPossibleMatches30 = new PossibleMatchesModel({
        dogId: savedDog30._id,
        possibleMatches: allDogIds,
        rejectedMatches: [],
    });
    newPossibleMatches30.save()

}

module.exports = seed