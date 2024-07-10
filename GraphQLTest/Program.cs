using GraphQLTest.Data;
using GraphQLTest.GraphQLQueries;
using GraphQLTest.Interfaces;
using GraphQLTest.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// These lines are for classic REST architecture with controllers
// builder.Services.AddDbContext<iStatContext>(opt => 
//     opt.UseSqlServer("Data Source=Jordan_Maiers;Initial Catalog=iSTAT;Integrated Security=True;TrustServerCertificate=True;command timeout=300"));
//builder.Services.AddScoped<IActivityRepository, ActivityRepository>();

// GraphQL stuff
builder.Services
    .AddPooledDbContextFactory<iStatContext>(opt => 
    opt.UseSqlServer("Data Source=Jordan_Maiers;Initial Catalog=iSTAT;Integrated Security=True;TrustServerCertificate=True;command timeout=300"));
builder.Services.AddTransient<IActivityRepository, ActivityRepository>();
builder.Services
    .AddGraphQLServer()
    .AddQueryType<ActivityQueryResolver>()
    .AddMutationType<ActivityMutationResolver>()
    .AddMutationConventions(applyToAllMutations: true)
    .AddSorting();

var app = builder.Build();

app.MapGraphQL();
app.Run();
