using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Emix.Web.ControllersWepApi
{
    public class TestController : ApiController
    {
        public TestController()
        {
        }

        [HttpGet]
        public string SayHello(string name)
        {
            System.Threading.Thread.Sleep(1000);

            return string.Format("Hello {0}", name);
        }
    }
}
