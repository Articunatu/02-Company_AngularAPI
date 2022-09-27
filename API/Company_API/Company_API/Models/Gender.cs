using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Company_API.Models
{
    public class Gender
    {
        [Key]
        public Guid GenderID { get; set; } = new Guid();
        public string GenderName { get; set; }
    }
}
