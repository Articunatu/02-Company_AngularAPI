using Company_API.Data;
using Company_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Company_API.Service
{
    public class EmployeeRepository : ICompany<Employee>
    {
        readonly AppDbContext _context;

        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }

        public Task<Employee> Create(Employee entity)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Employee>> ReadAll()
        {
            return await _context.Employees.ToArrayAsync();
        }

        public Task<Employee> ReadSingle(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Employee> Update(Employee entity)
        {
            throw new NotImplementedException();
        }

        public Task<Employee> Delete(Employee entity)
        {
            throw new NotImplementedException();
        }
    }
}
