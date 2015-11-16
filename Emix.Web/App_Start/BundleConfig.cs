using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Emix.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor")
#if DEBUG
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring0", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring1", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring2", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring3", "*.js", true)
#else
                .IncludeDirectory("~/Scripts/Vendor/Ring0", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor/Ring1", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor/Ring2", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor/Ring3", "*.js", true)
#endif
                .IncludeDirectory("~/Scripts/Custom", "*.js", true)
                );

            bundles.Add(new ScriptBundle("~/bundles/emixApp")
                .IncludeDirectory("~/ngApp", "*.js", true)
                );


            bundles.Add(new StyleBundle("~/Content/Styles/css")
                .Include("~/Content/bootstrap/bootstrap-3.3.5.css")
                .Include("~/Content/bootstrap-additions/bootstrap-additions.css")
                .Include("~/Content/fontawesome/font-awesome-4.4.0.css")
                .Include("~/Content/flag-icon/flag-icon.css")
                .Include("~/Content/toastr.css")
                .Include("~/Content/morris.core.css")
                .Include("~/Content/nProgress.css")
                .Include("~/Content/transitions.css")
                .Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/Styles/Ltecss")
                .Include("~/Content/bootstrap/bootstrap-3.3.5.css")
                .Include("~/Content/bootstrap-additions/bootstrap-additions.css")
                .Include("~/Content/fontawesome/font-awesome-4.4.0.css")
                .Include("~/Content/flag-icon/flag-icon.css")
                .Include("~/Content/ionicons/ionicons.css")
                .Include("~/Content/toastr.css")
                .Include("~/Content/morris.core.css")
                .Include("~/Content/nProgress.css")
                .Include("~/Content/fullcalendar.css")
                .Include("~/Content/transitions.css")
                .Include("~/Content/AdminLte-2.0.2/AdminLte.css")
                .Include("~/Content/AdminLte-2.0.2/skins/skin-blue.css")
                .Include("~/Content/site.css"));
        }
    }
}