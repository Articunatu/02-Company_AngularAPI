using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Company_API.Models
{
    public class Department
    {
        [Key]
        public Guid DepartmentID { get; set; } = new Guid();
        public string DepartmentName { get; set; }
    }
}
