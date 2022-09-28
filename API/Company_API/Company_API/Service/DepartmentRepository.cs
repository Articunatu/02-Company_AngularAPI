using Company_API.Data;
using Company_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Company_API.Service
{
    public class DepartmentRepository : ICompany<Department>
    {
        readonly AppDbContext _context;

        public DepartmentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Department> Create(Department entity)
        {
            var created = await _context.Departments.AddAsync(entity);
            await _context.SaveChangesAsync();
            return created.Entity;
        }

        public async Task<IEnumerable<Department>> ReadAll()
        {
            return await _context.Departments.ToArrayAsync();
        }

        public async Task<Department> ReadSingle(Guid id)
        {
            var singleDepartment = await _context.Departments.FirstOrDefaultAsync(d => d.DepartmentID == id);
            return singleDepartment;
        }

        public async Task<Department> Update(Department entity, Guid id)
        {
            var updatedDepartment = await _context.Departments.FirstOrDefaultAsync(d => d.DepartmentID == entity.DepartmentID);
            updatedDepartment.DepartmentName = entity.DepartmentName;
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<Department> Delete(Guid id)
        {
            var deleted = await _context.Departments.FirstOrDefaultAsync(d => d.DepartmentID == id);
            _context.Departments.Remove(deleted);
            await _context.SaveChangesAsync();
            return deleted;
        }
    }
}
