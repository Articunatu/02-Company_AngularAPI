namespace Company_API.Service
{
    public interface ICompany<T>
    {
        Task<T> Create(T entity);
        Task<IEnumerable<T>> ReadAll();
        Task<T> ReadSingle(int id);
        Task<T> Update(T entity);
        Task<T> Delete(T entity);
       
    }
}
