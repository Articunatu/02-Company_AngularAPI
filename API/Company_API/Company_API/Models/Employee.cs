using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Company_API.Models
{
    public class Employee
    {
        [Key]
        public Guid EmployeeID { get; set; } = new Guid();
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string EMail { get; set; }
        public string PhoneNumber { get; set; }
        public string SecurityNumber { get; set; }
        public decimal Salary { get; set; }
        public Guid DepartmentID { get; set; }
        public Guid GenderID { get; set; }
        public Department? Department { get; set; }
        public Gender? Gender { get; set; }
    }
}
