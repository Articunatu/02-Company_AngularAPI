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

        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee employee)
        {
            var created = await _company.Create(employee);
            return CreatedAtAction(nameof(ReadSingleEmployee), new { id = employee.EmployeeID }, employee);
        }

        [HttpGet]
        public async Task<IActionResult> ReadAllEmployees()
        {
            var allEmployees = await _company.ReadAll();
            return Ok(allEmployees);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("ReadSingleEmployee")]
        public async Task<IActionResult> ReadSingleEmployee([FromRoute] Guid id)
        {
            var employee = await _company.ReadSingle(id);
            if (employee != null)
            {
                return Ok(employee);
            }
            return NotFound("Vald anställd fanns ej!");
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee employee)
        {
            var updated = await _company.Update(employee, id);
            if (employee != null)
            {
                return Ok(updated);
            }
            return NotFound("Kunde ej hitta en vald anställd att updatera!");
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var deleted = await _company.Delete(id);
            if (deleted != null)
            {
                return Ok(deleted);
            }
            return NotFound("Kunde ej hitta en vald anställd att radera!");
        }
    }
}
