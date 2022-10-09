using EmployeeEndPionts.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeEndPionts.Services
{
    public class EmployeeSer : IEmployeeSer
    {
        private readonly ApplicationDbContext _context;

        public EmployeeSer(ApplicationDbContext context)
        {
            this._context = context;
        }

        public IEnumerable<Employee> GetALL()
        {
            return _context.Employees.ToList();
        }

        public  Employee GetbyId(string employeeId)
        {   if(employeeId!=null)
            {
                var result=  _context.Employees.Include(n => n.Addresses).FirstOrDefault(n => n.Id == employeeId);
                return result;
            }

            return null;
        }

        public async Task<Employee> CreateAsync(Employee emp)
        {
            if (emp != null)
            {
                await _context.Employees.AddAsync(emp);
                await _context.SaveChangesAsync();
                return emp;
            }
            return null;
        
        }

        public async Task<Employee> DeleteAsync(string employeeid)
        {
            var selectedemp = await _context.Employees.Include(n => n.Addresses).FirstOrDefaultAsync(n => n.Id == employeeid);
            if (selectedemp != null)
            {
                _context.Employees.Remove(selectedemp);
                await _context.SaveChangesAsync();
                return selectedemp;
            }
            return null;
        }

        public async Task<Employee> UpdateAsync(string employeeid, Employee emp)
        {
            var selectedemp = await _context.Employees.FirstOrDefaultAsync(n => n.Id == employeeid);
            if (selectedemp != null)
            {
                selectedemp.FirstName = emp.FirstName;
                selectedemp.LastName = emp.LastName;
                selectedemp.Country = emp.Country;
                _context.Employees.Update(selectedemp);
                await _context.SaveChangesAsync();
                return selectedemp;
            }
            return null;
        }
    }
}
