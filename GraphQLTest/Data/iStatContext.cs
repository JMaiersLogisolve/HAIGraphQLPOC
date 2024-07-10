using GraphQLTest.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace GraphQLTest.Data
{
    public class iStatContext : DbContext
    {
        public iStatContext(DbContextOptions<iStatContext> options) : base(options)
        {
        }

        public DbSet<Activity> LACID { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}