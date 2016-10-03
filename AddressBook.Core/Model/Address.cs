using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddressBook.Core.Model
{
    public class Address
    {
        public int AddressID { get; set; }
        public int PersonID { get; set; }
        public string AddressText { get; set; }
        public string Locality { get; set; }
        public string  District { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }

        public virtual Person Person { get; set; }
    }
}
