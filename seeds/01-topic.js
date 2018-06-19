exports.seed = function(knex, Promise) {
    return knex("topic").del().then(() => {
            return knex("topic").insert([{
                id: 1, 
                title: "DOM Event Handling"
            },{
                id: 2, 
                title: "Intro to HTML"
            },{
              id: 3, 
              title: "Intro to fetch"
            }]).then(() => {
                knex.raw("ALTER SEQUENCE topic_seq_id RESTART WITH 4");
            });
    });
};
