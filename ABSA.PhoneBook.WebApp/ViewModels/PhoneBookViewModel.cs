using ABSA.PhoneBook.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABSA.PhoneBook.WebApp.ViewModels
{
    public class PhoneBookViewModel
    {
        //public PhoneBook Model { get; set; }

        public int PhoneBookId { get; set; }
        public string Name { get; set; }
        public List<Entry> Entries { get; set; }
    }
}
