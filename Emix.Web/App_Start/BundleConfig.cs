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
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring0", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring1", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring2", "*.js", true)
                .IncludeDirectory("~/Scripts/Vendor_dev/Ring3", "*.js", true)
                .IncludeDirectory("~/Scripts/Custom", "*.js", true)
                );

            bundles.Add(new ScriptBundle("~/bundles/emixApp")
                .IncludeDirectory("~/ngApp", "*.js", true)
                );


            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/bootstrap/bootstrap.css")
                .Include("~/Content/bootstrap-additions/bootstrap-additions.css")
                .Include("~/Content/fontawesome/font-awesome.css")
                .Include("~/Content/flag-icon/flag-icon.css")
                .Include("~/Content/toastr.css")
                .Include("~/Content/morris.core.css")
                .Include("~/Content/nProgress.css")
                .Include("~/Content/transitions.css")
                .Include("~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}