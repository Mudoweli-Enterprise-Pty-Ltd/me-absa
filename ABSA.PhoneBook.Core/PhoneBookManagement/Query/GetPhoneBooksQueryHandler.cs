using ABSA.PhoneBook.Core.Entities;
using ABSA.PhoneBook.Core.PhoneBookManagement.Message;
using ABSA.PhoneBook.Model;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ABSA.PhoneBook.Core.PhoneBookManagement.Query
{
    public class GetPhoneBooksQueryHandler : IRequestHandler<GetPhoneBooksQuery, List<Model.PhoneBook>>
    {
        private readonly ABSASQLContext _dbContext;
        private readonly IMapper _mapper;

        public GetPhoneBooksQueryHandler(ABSASQLContext dbContext, IMapper mapper)
        {
            this._dbContext = dbContext;
            this._mapper = mapper;
        }

        public async Task<List<Model.PhoneBook>> Handle(GetPhoneBooksQuery request, CancellationToken cancellationToken)
        {
            var entities = await _dbContext.PhoneBook
                .Include(i => i.Entry)
                .ThenInclude(i => i.EntryType)
                .ToListAsync(cancellationToken);

            var result = _mapper.Map<List<Model.PhoneBook>>(entities);

            return result;
        }
    }
}
