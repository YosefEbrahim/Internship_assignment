using EmployeeEndPionts.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace EmployeeEndPionts.Services
{
    public class AddressService : IAddressService
    {
        private readonly ApplicationDbContext _context;

        public AddressService(ApplicationDbContext context)
        {
            this._context = context;
        }
        public  Address Get(string Id)
        {
            if (Id != null)
            {
                return  _context.Addresses.Find(Id);
            }
            return null;
        }

        public async Task<Address> CreateAsync(Address address)
        {
            if(address!=null)
            {
              await _context.Addresses.AddAsync(address);
              await  _context.SaveChangesAsync();
                return address;
            }
            return null;
        }

        public async Task<Address> DeleteAsync(string addressid)
        {
            var selectedaddr = await _context.Addresses.FindAsync(addressid);
            if (selectedaddr != null)
            {
                _context.Addresses.Remove(selectedaddr);
                await _context.SaveChangesAsync();
                return selectedaddr;
            }
            return null;
        }


        public async Task<Address> UpdateAsync(string addressid, Address address)
        {
            var selectedaddr = await _context.Addresses.FindAsync(addressid);
            if (selectedaddr != null)
            {
                selectedaddr.StreetAddress = address.StreetAddress;
                selectedaddr.Phone = address.Phone;
                selectedaddr.City = address.City;
                _context.Addresses.Update(selectedaddr);
                await _context.SaveChangesAsync();
                return selectedaddr;
            }
            return null;
        }
    }
}
