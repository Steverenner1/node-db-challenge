
exports.seed = function(knex, Promise) {
  return knex('resources').insert([
        {
          resource_name: "this is a resource",
          resource_description: "this is a resource description"
        },
        {
          resource_name: "this is a resource also",
          resource_description: "this is a resource description also"
        },
        {
          resource_name: "this is yet a 3rd resource",
          resource_description: "this is a resource description for the 3rd"
        },
        {
          resource_name: "another resource?",
          resource_description: "this is getting crazy"
        },
        {
          resource_name: "no more resources please",
          resource_description: "this has to be the last one"
        },
        {
          resource_name: "last resource",
          resource_description: "last one promise"
        }
      ]);
};
