using System;
using System.Collections.Generic;

namespace ABSA.PhoneBook.Core.Entities
{
    public partial class EntryType
    {
        public EntryType()
        {
            Entry = new HashSet<Entry>();
        }

        public int EntryTypeId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Entry> Entry { get; set; }
    }
}
