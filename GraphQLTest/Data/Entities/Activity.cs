using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GraphQLTest.Data.Entities
{
    public class Activity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LacidKey { get; set; }
        public int ID  { get; set; }
        [Required]
        public required string DESC { get; set; }
        [MaxLength(1)]
        public required string STKFLW { get; set; }
        [MaxLength(1)]
        public required string MEAS { get; set; }
        [Required]
        public required string SORT { get; set; }
    }
}