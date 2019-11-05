const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', '4567')
);
const session = driver.session();



function createPeople(name, age) {
    session.run('CREATE (p:People {name: $name, age: $age})', {name: name, age: age})
        .subscribe({
            onNext: function(record) {
                console.log(record.get('name'))
            },
            onCompleted: function() {
                session.close()
            },
            onError: function(error) {
                console.log(error)
            }
        });
    return true;
}

module.exports = createPeople;