using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQLTest.Data;
using GraphQLTest.Data.Entities;
using GraphQLTest.GraphQLQueries.Helpers;
using GraphQLTest.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace GraphQLTest.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly IDbContextFactory<iStatContext> _contextFactory;

        public ActivityRepository(IDbContextFactory<iStatContext> dbContextFactory)
        {
            _contextFactory = dbContextFactory;
        }

        public async Task<IEnumerable<Activity>> GetAllActivities()
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                return await iStatContext.LACID.AsNoTracking().ToListAsync();
            }
            
        }

        public async Task<Activity?> GetActivityById(int id)
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                return await iStatContext.LACID.AsNoTracking().SingleOrDefaultAsync(a => a.ID == id);
            }
        }

        public async Task<IEnumerable<Activity>> GetActivitiesByDesc(string desc)
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                return await iStatContext.LACID.AsNoTracking().Where(a => a.DESC.Contains(desc)).ToListAsync();
            }
        }

        public async Task<Activity> AddActivity(ActivityInput activityInput)
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                var activity = new Activity
                {
                    ID = activityInput.ID,
                    DESC = activityInput.DESC ?? "",
                    STKFLW = activityInput.STKFLW ?? "",
                    MEAS = activityInput.MEAS ?? "",
                    SORT = activityInput.SORT ?? ""
                };

                var newActivity = await iStatContext.LACID.AddAsync(activity);
                await iStatContext.SaveChangesAsync();
                return newActivity.Entity;
            }
        }

        public async Task<Activity> UpdateActivity(ActivityInput activityInput)
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                var activity = iStatContext.LACID.SingleOrDefault(a => a.ID == activityInput.ID);

                if (activity == null)
                {
                    throw new KeyNotFoundException("Provided ID value does not exist.");
                }

                activity.DESC = activityInput.DESC ?? activity.DESC;
                activity.MEAS = activityInput.MEAS ?? activity.MEAS;
                activity.STKFLW = activityInput.STKFLW ?? activity.STKFLW;
                activity.SORT = activityInput.SORT ?? activity.SORT;

                await iStatContext.SaveChangesAsync();
                return activity;
            }
        }

        public async Task<bool> DeleteActivity(int id)
        {
            using (var iStatContext = _contextFactory.CreateDbContext())
            {
                var activity = iStatContext.LACID.SingleOrDefault(a => a.ID == id);

                if (activity == null)
                {
                    throw new KeyNotFoundException("Provided ID value does not exist.");
                }

                iStatContext.LACID.Remove(activity);

                return await iStatContext.SaveChangesAsync() > 0;
            }
        }
    }
}