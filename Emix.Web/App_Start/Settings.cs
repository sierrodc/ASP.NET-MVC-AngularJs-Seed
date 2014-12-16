using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Emix.Web.App_Start
{
    public static class Settings
    {
        public static string DefaultLanguage { get { return "it-IT"; } }
        public static string SiteDescription { get; set; }
    }
}