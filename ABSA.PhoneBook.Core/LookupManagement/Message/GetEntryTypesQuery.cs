using MediatR;
using System.Collections.Generic;
using ABSA.PhoneBook.Model;

namespace ABSA.PhoneBook.Core.LookupManagement.Message
{
    public class GetEntryTypesQuery : IRequest<List<Model.Lookup>>
    {
    }
}
