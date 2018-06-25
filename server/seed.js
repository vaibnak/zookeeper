
module.exports =  function () {
    let faker = require('faker');
    let _ = require('Lodash');
    return {
        animals: _.times(10, function (num) {
            return {
                id: num,
                name: faker.name.findName(),
                species: faker.company.catchPhrase(),
                gender: faker.helpers.randomize(['m', 'f']),
                age: faker.random.number(100),
            };
        }),
        zookeeper: _.times(20, function(i){
            return{
            id: i,
            name: {
             firstname: faker.name.firstName(),
             lastname: faker.name.lastName(),
            },
            salary: faker.random.number(30000,70000) 

        }
        })
    
    };
}