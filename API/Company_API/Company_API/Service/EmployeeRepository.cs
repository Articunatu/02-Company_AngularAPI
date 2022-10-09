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

        public async Task<Employee> Create(Employee entity)
        {
            entity.EmployeeID = new Guid();
            var created = await _context.Employees.AddAsync(entity);
            await _context.SaveChangesAsync();
            return created.Entity;
        }

        public async Task<IEnumerable<Employee>> ReadAll()
        {
            return await _context.Employees.OrderBy(e => e.LastName).
                Include(d => d.Department).Include(g => g.Gender).ToArrayAsync();
        }

        public async Task<Employee> ReadSingle(Guid id)
        {
            var singleEmployee = await _context.Employees.Include(d => d.Department).Include(g => g.Gender).
                FirstOrDefaultAsync(e => e.EmployeeID == id);
            return singleEmployee;
        }

        public async Task<Employee> Update(Employee entity, Guid id)
        {
            var updated = await _context.Employees.FirstOrDefaultAsync(e => e.EmployeeID == entity.EmployeeID);
            updated.Address = entity.Address;
            updated.PhoneNumber = entity.PhoneNumber;
            updated.EMail = entity.EMail;
            updated.Salary = entity.Salary;
            updated.SecurityNumber = entity.SecurityNumber;
            await _context.SaveChangesAsync();
            return updated;
        }

        public async Task<Employee> Delete(Guid id)
        {
            var deleted = await _context.Employees.FirstOrDefaultAsync(e => e.EmployeeID == id);
            _context.Employees.Remove(deleted);
            await _context.SaveChangesAsync();
            return deleted;
        }
    }
}
