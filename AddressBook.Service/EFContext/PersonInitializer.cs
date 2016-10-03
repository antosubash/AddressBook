using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AddressBook.Core.Model;

namespace AddressBook.Service.EFContext
{
    public class PersonInitializer : DropCreateDatabaseIfModelChanges<PersonDbContext>
    {
        protected override void Seed(PersonDbContext context)
        {
            var people = new List<Person>
            {
                new Person
                {
                    FirstName = "Anto",
                    LastName = "Subash",
                    MiddleName = "J",
                    Address = "Royapuram",
                    Email = "anto@live.com",
                    Job = "Dev",
                    Phone = "12121212"
                },
                new Person
                {
                    FirstName = "Test",
                    LastName = "Name",
                    MiddleName = "J",
                    Address = "Royapuram",
                    Email = "anto1@live.com",
                    Job = "Dev",
                    Phone = "12121212"
                }
            };


            people.ForEach(x => context.People.Add(x));
            context.SaveChanges();
        }
    }
}
