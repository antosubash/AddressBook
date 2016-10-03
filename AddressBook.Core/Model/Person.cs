using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddressBook.Core.Model
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }

        public string FullName
        {
            get { return string.Format("{0} {1} {2}", this.FirstName, this.MiddleName, this.LastName); } 
        }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Job { get; set; }
        public string Institution { get; set; }
    }
}
