//////////////using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ABSA.PhoneBook.Core.LookupManagement.Message;
using ABSA.PhoneBook.Core.PhoneBookManagement.Message;
using ABSA.PhoneBook.Model;
using ABSA.PhoneBook.WebApp.ViewModels;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ABSA.PhoneBook.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimpleController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public SimpleController(IMediator mediator, IMapper mapper)
        {
            this._mediator = mediator;
            this._mapper = mapper;
        }

        [HttpGet]
        [Route("api/[controller]/GetPhoneBook")]
        [ProducesResponseType(typeof(Model.PhoneBook), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetPhoneBook(int phoneBookId)
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _mediator.Send(new GetPhoneBookQuery
            {
                PhoneBookId = phoneBookId
            });

            return Ok(result);
        }

        [HttpGet]
        [Route("api/[controller]/GetPhoneBooks")]
        [ProducesResponseType(typeof(IEnumerable<Model.PhoneBook>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetPhoneBooks()
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _mediator.Send(new GetPhoneBooksQuery
            {
            });

            return Ok(result);
        }

        [HttpGet]
        [Route("api/[controller]/GetEntryTypes")]
        [ProducesResponseType(typeof(IEnumerable<Lookup>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetEntryTypes()
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _mediator.Send(new GetEntryTypesQuery
            {
            });

            return Ok(result);
        }

        [HttpPost]
        [Route("api/[controller]/AddPhoneBook")]
        public async Task<IActionResult> AddPhoneBook([FromBody] PhoneBookViewModel viewModel)
        {
            if (!ModelState.IsValid) return BadRequest();

            var result = await _mediator.Send(new AddPhoneBookCommand
            {
                PhoneBook = _mapper.Map<Model.PhoneBook>(viewModel)
            });

            if (result.Any())
                return StatusCode(StatusCodes.Status406NotAcceptable, result.First().Key);
            else
                return Ok();
        }
    }
}
