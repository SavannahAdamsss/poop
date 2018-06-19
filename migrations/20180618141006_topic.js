exports.up = function(knex, Promise) {
    return knex.schema.createTable("topic", topic => {
        topic.increments();
        topic.string("title");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("topic")
};
