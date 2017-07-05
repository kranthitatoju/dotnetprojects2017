using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEndProject.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        public IEnumerable<Models.Message> Get()
        {
            return new Models.Message[]
            {
                new Models.Message
                {
                  Owner = "kranthi",
                  Text = "this is my message from api asp.net "
                },
                new Models.Message
                {
                    Owner = "unknown person",
                    Text = "he wrote nothing"
                }
            }; 
        }
    }
}