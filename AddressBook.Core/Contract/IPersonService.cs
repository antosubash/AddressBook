using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AddressBook.Core.Model;

namespace AddressBook.Core.Contract
{
    public interface IPersonService
    {
        List<Person> GetPersons();
        Task<Person> GetPerson(int id);

        Task UpdatePerson(int id, Person person);
        Task CreatePerson(Person person);
        Task DeletePerson(int id);
        bool PersonExists(int id);
    }
}
