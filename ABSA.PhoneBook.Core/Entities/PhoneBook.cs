using System;
using System.Collections.Generic;

namespace ABSA.PhoneBook.Core.Entities
{
    public partial class PhoneBook
    {
        public PhoneBook()
        {
            Entry = new HashSet<Entry>();
        }

        public int PhoneBookId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Entry> Entry { get; set; }
    }
}
