using Company_API.Models;
using Company_API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Company_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        readonly ICompany<Employee> _company;

        public EmployeeController(ICompany<Employee> company)
        {
            _company = company;
        }

        [HttpGet]
        public async Task<IActionResult> ReadAllEmployees()
        {
            var allEmployees = await _company.ReadAll();
            return Ok(allEmployees);
        }
    }
}
