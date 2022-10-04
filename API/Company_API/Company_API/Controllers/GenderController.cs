using Company_API.Models;
using Company_API.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Company_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenderController : Controller
    {
        readonly ICompany<Gender> _company;
        
        public GenderController(ICompany<Gender> company)
        {
            _company = company;
        }

        [HttpGet]
        public async Task<IActionResult> ReadAllGenders()
        {
            var allGenders = await _company.ReadAll();
            return Ok(allGenders);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("ReadSingleDepartment")]
        public async Task<IActionResult> ReadSingleGender([FromRoute] Guid id)
        {
            var gender = await _company.ReadSingle(id);
            if (gender != null)
            {
                return Ok(gender);
            }
            return NotFound("Valt kön fanns ej!");
        }
    }
}
