using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;
using AddressBook.Core.Contract;
using AddressBook.Core.Model;
using AddressBook.Service.EFContext;

namespace AddressBook.Service.Implementation
{
    public class PersonService: IPersonService
    {
        private readonly PersonDbContext _db = new PersonDbContext();
        public List<Person> GetPersons()
        {
           return _db.People.ToList();
        }

        public Task<Person> GetPerson(int id)
        {
            return _db.People.FindAsync(id);
        }

        public async Task UpdatePerson(int id, Person person)
        {
            if (id != person.Id)
            {
                throw new Exception("Id cannot be different");
            }

            _db.Entry(person).State = EntityState.Modified;

            try
            {
                 await _db.SaveChangesAsync();
            }
            catch (Exception)
            {
                if (!PersonExists(id))
                {
                    throw new Exception("Person not found");
                }
                throw;
            }
        }

        public async Task CreatePerson(Person person)
        {
            _db.People.Add(person);
            await _db.SaveChangesAsync();
        }

        public async Task DeletePerson(int id)
        {
            Person person = _db.People.Find(id);
            if (person == null)
            {
                throw new Exception("Person Not Found");
            }

            _db.People.Remove(person);
            await _db.SaveChangesAsync();
        }

        public bool PersonExists(int id)
        {
            return _db.People.Count(x => x.Id == id) > 0;
        }
    }
}
