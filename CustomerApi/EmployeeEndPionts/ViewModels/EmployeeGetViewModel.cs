using EmployeeEndPionts.Models;

namespace EmployeeEndPionts.ViewModels
{
    public class EmployeeGetViewModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<Address> Addresses { get; set; }


    }
}
