using ABSA.PhoneBook.Core.Entities;
using ABSA.PhoneBook.Core.LookupManagement.Message;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ABSA.PhoneBook.Core.LookupManagement.Query
{
    public class GetEntryTypeQueryHandler : IRequestHandler<GetEntryTypesQuery, List<Model.Lookup>>
    {
        private readonly ABSASQLContext _dbContext;
        private readonly IMapper _mapper;

        public GetEntryTypeQueryHandler(ABSASQLContext dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        public async Task<List<Model.Lookup>> Handle(GetEntryTypesQuery request, CancellationToken cancellationToken)
        {
            var entities = await _dbContext.EntryType.ToListAsync(cancellationToken);

            var result = _mapper.Map<List<Model.Lookup>>(entities);

            return result;
        }
    }
}
