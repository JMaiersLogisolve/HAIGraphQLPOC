using GraphQLTest.Data.Entities;
using GraphQLTest.GraphQLQueries.Helpers;
using GraphQLTest.Interfaces;

namespace GraphQLTest.GraphQLQueries
{
    public class ActivityMutationResolver
    {
        private readonly IActivityRepository _activityRepository;
        public ActivityMutationResolver(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        public async Task<Activity> AddActivity(ActivityInput activityInput)
        {
            return await _activityRepository.AddActivity(activityInput);
        }

        [Error(typeof(KeyNotFoundException))]
        public async Task<Activity?> UpdateActivity(ActivityInput activityInput)
        {
            return await _activityRepository.UpdateActivity(activityInput);
        }

        [Error(typeof(KeyNotFoundException))]
        public async Task<bool> DeleteActivity(int id)
        {
            return await _activityRepository.DeleteActivity(id);
        }
    }
}