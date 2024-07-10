For the first step, you'll need to update the ConnectionString in Program.cs to match your local machine, if you simply change the Data Source, EntityFramework _should_ build the database and the LACID table for you, but you'll need to populate the LACID table with data, I've included a SQL file with inserts in the Scripts folder (I know that's not super clean, it should be seeded data, but w/e).

In order to run, you'll need two command prompts open, one in the GraphQLTest directory and one in the GraphQLTestUI directory (I know the names are bad). In the GraphQLTest command prompt, run `dotnet watch --no-hot-reload` and in the GraphQLTestUI directory, run `ng serve`.

You should then be able to navigate to http://localhost:4200 to see the UI. You should also be able to navigate to http://localhost:5084/graphql to access the "Banana Cake Pop" UI that Hot Chocolate provides to play around with GraphQL
