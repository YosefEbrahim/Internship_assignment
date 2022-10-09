using EmployeeEndPionts.Models;

namespace EmployeeEndPionts.Services
{
    public interface IEmployeeSer
    {
        IEnumerable<Employee> GetALL();
       Employee GetbyId(string employeeId);
        Task<Employee> UpdateAsync(string employeeid, Employee emp);
        Task<Employee> DeleteAsync(string employeeid);
        Task<Employee> CreateAsync(Employee emp);

    }
}
