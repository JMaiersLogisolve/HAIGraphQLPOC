using GraphQLTest.Data.Entities;
using GraphQLTest.GraphQLQueries.Helpers;

namespace GraphQLTest.Interfaces
{
    public interface IActivityRepository
    {
        Task<IEnumerable<Activity>> GetAllActivities();
        Task<Activity?> GetActivityById(int id);
        Task<IEnumerable<Activity>> GetActivitiesByDesc(string desc);
        Task<Activity> AddActivity(ActivityInput activityInput);
        Task<Activity> UpdateActivity(ActivityInput activityInput);
        Task<bool> DeleteActivity(int id);
    }
}