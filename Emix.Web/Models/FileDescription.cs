using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Emix.Web.Models
{
    public class FileDescription
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public long Size { get; set; }

        public string Url { get; set; }

        public string Error { get; set; }
    }
}