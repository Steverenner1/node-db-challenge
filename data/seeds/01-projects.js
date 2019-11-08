
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
        {
          project_name: "Mow the lawn",
          project_description: "Cutting grass",
          completed: 0
        },
        {
          project_name: "Do the Dishes",
          project_description: "Getting dishes clean",
          completed: 0
        },
        {
          project_name: "Vacuum the floors",
          project_description: "Vacuuming is fun",
          completed: 0
        }
      ]);
};
