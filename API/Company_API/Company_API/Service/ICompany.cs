namespace Company_API.Service
{
    public interface ICompany<T>
    {
        Task<T> Create(T entity);
        Task<IEnumerable<T>> ReadAll();
        Task<T> ReadSingle(Guid id);
        Task<T> Update(T entity, Guid id);
        Task<T> Delete(Guid id);
       
    }
}
