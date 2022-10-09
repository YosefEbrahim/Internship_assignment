using EmployeeEndPionts.Models;

namespace EmployeeEndPionts.Services
{
    public interface IAddressService
    {
        Address Get(string Id);
        Task<Address> UpdateAsync(string employeeid, Address address);
        Task<Address> DeleteAsync(string addressid);
        Task<Address> CreateAsync(Address address);
    }
}
