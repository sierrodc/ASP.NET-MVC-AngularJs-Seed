using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Emix.Web.Models.Messages.Out
{
    public class FilesUploadResponse
    {
        public List<FileDescription> Files { get; set; }
    }
}