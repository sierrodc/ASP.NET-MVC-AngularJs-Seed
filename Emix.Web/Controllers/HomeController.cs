using Common.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Emix.Web.Controllers
{
    public class HomeController : Controller
    {
        private ILog log;

        public HomeController(ILog log)
        {
            this.log = log;
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult IndexLte()
        {
            return View();
        }
    }
}