exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { username: 'student1', role: "student", password: "$2a$14$wPEPCD3elVl4KgpNkim8g.7mPAIylWWUebI7YRuEYlDL7hfBCO4j6" },
          { username: 'helper1', role: "helper", password: "$2a$14$wPEPCD3elVl4KgpNkim8g.7mPAIylWWUebI7YRuEYlDL7hfBCO4j6" },
          
        ]);
      });
  };