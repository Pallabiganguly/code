const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', '4567')
);
const session = driver.session();

session
    .run('CREATE (p:People {name: $name, age: 20})', {name: 'Alice'})
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
