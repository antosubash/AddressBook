using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AddressBook.Core.Contract;
using AddressBook.Core.Model;
using AddressBook.Web.Models;

namespace AddressBook.Web.Controllers
{
    [RoutePrefix("api/person")]
    public class PersonController : ApiController
    {
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        // GET: api/Person
        [Route("GetAll")]
        public IQueryable<Person> GetPeople()
        {
            return _personService.GetPersons().AsQueryable();
        }

        [Route("GetById/{id}")]
        [ResponseType(typeof(Person))]
        public async Task<IHttpActionResult> GetPerson([FromUri]int id)
        {
            Person person = await _personService.GetPerson(id);
            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        [ResponseType(typeof(void))]
        [Route("Update/{id}")]
        public async Task<IHttpActionResult> PutPerson([FromUri]int id, Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.Id)
            {
                return BadRequest();
            }

            await _personService.UpdatePerson(id,person);

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("Create")]
        [ResponseType(typeof(Person))]
        public async Task<IHttpActionResult> PostPerson(Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _personService.CreatePerson(person);

            return Ok(person);
        }

        [Route("DeleteById/{id}")]
        [ResponseType(typeof(Person))]
        public async Task<IHttpActionResult> DeletePerson([FromUri]int id)
        {
            Person person = await _personService.GetPerson(id);
            if (person == null)
            {
                return NotFound();
            }

            await _personService.DeletePerson(id);

            return Ok(person);
        }

    }
}