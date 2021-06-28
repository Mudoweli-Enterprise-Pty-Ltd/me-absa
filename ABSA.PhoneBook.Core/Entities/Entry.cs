using System;
using System.Collections.Generic;

namespace ABSA.PhoneBook.Core.Entities
{
    public partial class Entry
    {
        public int EntryId { get; set; }
        public int PhoneBookId { get; set; }
        public string PhoneNumber { get; set; }
        public int EntryTypeId { get; set; }

        public virtual EntryType EntryType { get; set; }
        public virtual PhoneBook PhoneBook { get; set; }
    }
}
