using GraphQLTest.Data;
using GraphQLTest.Data.Entities;
using GraphQLTest.GraphQLQueries.Helpers;
using GraphQLTest.Interfaces;

namespace GraphQLTest.GraphQLQueries
{
    public class ActivityQueryResolver
    {
        private readonly IActivityRepository _activityRepository;
        public ActivityQueryResolver(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        [UseSorting]
        public async Task<IEnumerable<Activity>> GetAllActivities()
        {
            return await _activityRepository.GetAllActivities();
        }

        public async Task<Activity?> GetActivityById(int id)
        {
            return await _activityRepository.GetActivityById(id);
        }

        public async Task<IEnumerable<Activity>> GetActivityByDesc(string desc)
        {
            return await _activityRepository.GetActivitiesByDesc(desc);
        }

        
    }
}