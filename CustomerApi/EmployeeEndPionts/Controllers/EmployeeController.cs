using EmployeeEndPionts.Models;
using EmployeeEndPionts.Services;
using EmployeeEndPionts.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeEndPionts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeSer _service;

        public EmployeeController(IEmployeeSer service)
        {
            this._service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
          var result=  _service.GetALL();
            return Ok(result);
        }

        // GET api/<EmloyeeController>/5
        [HttpGet("{id}")]
        public IActionResult Get([FromRoute]string id)
        {
            var result = _service.GetbyId(id);
            return Ok(result);
        }

        // POST api/<EmloyeeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EmployeeViewModel emp)
        {
            var obj = new Employee
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Country = emp.Country
            };
            await _service.CreateAsync(obj);
            return Ok();
        }

        // PUT api/<EmloyeeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] EmployeeViewModel emp)
        {
            var obj = new Employee
            {
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                Country = emp.Country,
  
            };
            await _service.UpdateAsync(id,obj);
            return Ok();
        }

        // DELETE api/<EmloyeeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _service.DeleteAsync(id);
            return Ok();
        }
    }
}
