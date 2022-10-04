using Company_API.Data;
using Company_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Company_API.Service
{
    public class GenderRepository : ICompany<Gender>
    {
        readonly AppDbContext _context;

        public GenderRepository(AppDbContext context)
        {
            _context = context;
        }

        public Task<Gender> Create(Gender entity)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Gender>> ReadAll()
        {
            return await _context.Genders.ToArrayAsync();
        }

        public async Task<Gender> ReadSingle(Guid id)
        {
            var singleGender = await _context.Genders.FirstOrDefaultAsync(g => g.GenderID == id);
            return singleGender;
        }

        public Task<Gender> Update(Gender entity, Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Gender> Delete(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
