using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeEndPionts.Models
{
    public class Address
    {
        public Address()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }
        public string City { get; set; }
        public string StreetAddress { get; set; }
        public string Phone { get; set; }
        
        public string EmployeeId { get; set; }
    }
}
