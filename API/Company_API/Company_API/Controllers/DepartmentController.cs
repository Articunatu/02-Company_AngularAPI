using Company_API.Models;
using Company_API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Company_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : Controller
    {
        readonly ICompany<Department> _company;

        public DepartmentController(ICompany<Department> company)
        {
            _company = company;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDepartment([FromBody] Department department)
        {
            var created = await _company.Create(department);
            return CreatedAtAction(nameof(ReadSingleDepartment), new { id = department.DepartmentID }, department);
        }

        [HttpGet]
        public async Task<IActionResult> ReadAllDepartments()
        {
            var allDepartments = await _company.ReadAll();
            return Ok(allDepartments);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("ReadSingleDepartment")]
        public async Task<IActionResult> ReadSingleDepartment([FromRoute] Guid id)
        {
            var department = await _company.ReadSingle(id);
            if (department != null)
            {
                return Ok(department);
            }
            return NotFound("Vald anställd fanns ej!");
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateDepartment([FromRoute] Guid id, Department department)
        {
            var updated = await _company.Update(department, id);
            if (department != null)
            {
                return Ok(updated);
            }
            return NotFound("Kunde ej hitta en vald anställd att updatera!");
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteDepartment([FromRoute] Guid id)
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
