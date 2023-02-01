using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public HttpResponseMessage Get()
        {
            var retVal = new { key1 = "value1", key2 = "value2" };
            return Request.CreateResponse(HttpStatusCode.OK,retVal);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

       
    }
}
