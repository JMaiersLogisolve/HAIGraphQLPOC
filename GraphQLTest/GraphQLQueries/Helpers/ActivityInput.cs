using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraphQLTest.GraphQLQueries.Helpers
{
    public class ActivityInput
    {
        public int ID { get; set; }
        public string? DESC { get; set; }
        public string? STKFLW { get; set; }
        public string? MEAS { get; set; }
        public string? SORT { get; set; }
    }
}