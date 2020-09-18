exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { username: 'student1', role: "student", password: "password" },
          { username: 'helper1', role: "helper", password: "password" },
          
        ]);
      });
  };