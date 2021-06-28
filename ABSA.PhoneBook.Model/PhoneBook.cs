using System.Collections.Generic;

namespace ABSA.PhoneBook.Model
{
    public class PhoneBook
    {
        public int PhoneBookId { get; set; }
        public string Name { get; set; }
        public List<Entry> Entries { get; set; }
    }
}
