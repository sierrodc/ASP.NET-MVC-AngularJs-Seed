using Emix.Web.Models;
using Emix.Web.Models.Messages.Out;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Emix.Web.ControllersWepApi
{
    public class FileUploadController : ApiController
    {
        static List<FileDescription> StaticFileStore = new List<FileDescription>();

        public async Task<FilesUploadResponse> UploadFiles()
        {
            List<FileDescription> newFiles = new List<FileDescription>();

            if (!Request.Content.IsMimeMultipartContent())
                throw new Exception(); // divided by zero

            var provider = new MultipartMemoryStreamProvider();
            await Request.Content.ReadAsMultipartAsync(provider);
            foreach (var file in provider.Contents)
            {
                var filename = file.Headers.ContentDisposition.FileName.Trim('\"');
                var buffer = await file.ReadAsByteArrayAsync();
                //Do whatever you want with filename and its binaray data.

                var id = Guid.NewGuid();               
                newFiles.Add(new FileDescription()
                {
                    Id = id,
                    Name = filename,
                    Size = buffer.LongLength,
                    Url = "#"
                });
            }

            StaticFileStore.AddRange(newFiles);

            return new FilesUploadResponse { Files = newFiles };
        }

        [HttpDelete]
        public bool DeleteFile(Guid id)
        {
            return StaticFileStore.RemoveAll(t => t.Id == id) > 0;
        }


    }
}
