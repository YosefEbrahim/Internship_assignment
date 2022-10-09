using EmployeeEndPionts.Models;
using EmployeeEndPionts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeEndPionts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _service;

        public AddressController(IAddressService service)
        {
            this._service = service;
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var result = _service.Get(id);
            return Ok(result);
        }

        // POST api/<EmloyeeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Address address)
        {
            await _service.CreateAsync(address);
            return Ok();
        }

        // PUT api/<EmloyeeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Address address)
        {
            await _service.UpdateAsync(id, address);
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
