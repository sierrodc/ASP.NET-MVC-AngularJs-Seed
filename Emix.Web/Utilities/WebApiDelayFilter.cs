using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;

namespace Emix.Web.Utilities
{
    public class WebApiDelayFilter :  ActionFilterAttribute
    {
        private TimeSpan timeSpan;

        public WebApiDelayFilter(TimeSpan timeSpan)
        {
            // TODO: Complete member initialization
            this.timeSpan = timeSpan;
        }
        public override void OnActionExecuting(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            base.OnActionExecuting(actionContext);

            System.Threading.Tasks.Task.Delay(timeSpan).Wait();
        }
    }
}