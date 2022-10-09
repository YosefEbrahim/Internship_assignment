using System.ComponentModel.DataAnnotations;

namespace EmployeeEndPionts.Models
{
    public class Employee
    {
        public Employee()
        {
            Id = Guid.NewGuid().ToString();
            CreatedDate = DateTime.Now;

        }
        public string Id { get; set; }
        public string FirstName{ get; set; }
        public string LastName{ get; set; }
        public DateTime CreatedDate { get; set; }
        public string Country { get; set; }
        public ICollection<Address>?  Addresses{ get; set; }
    }
}
