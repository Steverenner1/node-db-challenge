
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
        {
         task_description: "Watch a show",
         task_notes: "good show",
         completed: 0,
         project_id: 1
        },
        {
        task_description: "Go on a jog",
        task_notes: "good jog",
        completed: 0,
        project_id: 1
        },
        {
        task_description: "do work",
        task_notes: "good work",
        completed: 0,
        project_id: 2
        },
        {
        task_description: "finish a marathon",
        task_notes: "tough work",
        completed: 0,
        project_id: 2
        },
        {
        task_description: "finish a book",
        task_notes: "good book",
        completed: 0,
        project_id: 3
        },
        {
        task_description: "do something else",
        task_notes: "good work man",
        completed: 0,
        project_id: 3
        }

      ]);
};
