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
        private static TableData tableData;
        private static Random randomGenerator;

        static TestController()
        {
            tableData = new TableData()
            {
               Columns = { "Product1", "Product2", "Product3", "Product4" },
               Rows = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" },
               Data = new List<List<decimal>>() {
                    new List<decimal>(){ 1m,        2m,             3m,         4m }, //Jan
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Feb
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Mar
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Apr
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //May
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Jul
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Aug
                    new List<decimal>(){ 1m,        2m,             3m,         4m}, //Jun
               }
            };

            randomGenerator = new Random();
        }

        private decimal getRandom()
        {
            double val = randomGenerator.NextDouble();
            return (decimal)val * 1000;
        }

        public TestController() { }

        [HttpGet]
        public object SayHello(string name)
        {
            System.Threading.Thread.Sleep(1000);

            return new
            {
                Message = string.Format("Hello {0}", name)
            };
        }

        [HttpGet]
        public TableData GetTable()
        {
            var newRowsIdx = randomGenerator.Next(0, TestController.tableData.Rows.Count - 1);
            var newColIdx = randomGenerator.Next(0, TestController.tableData.Columns.Count - 1);

            TestController.tableData.Data[newRowsIdx][newColIdx] = getRandom();

            return TestController.tableData;
        }

        [HttpPost]
        public TableData AddRandomRow()
        {
            var newRowName = "R=" + DateTime.Now.ToString("mm:ss.fff");

            var newRowsIdx = randomGenerator.Next(0, TestController.tableData.Rows.Count - 1);

            TestController.tableData.Rows.Insert(newRowsIdx, newRowName);

            var newRow = new List<decimal>();
            foreach(var col in TestController.tableData.Columns)
            {
                newRow.Add(getRandom());
            }

            TestController.tableData.Data.Insert(newRowsIdx, newRow);
            
            return TestController.tableData;
        }

        [HttpPost]
        public TableData AddRandomColumn()
        {
            var newColName = "C=" +  DateTime.Now.ToString("mm:ss.fff");
            var newColIdx = randomGenerator.Next(0, TestController.tableData.Columns.Count - 1);

            TestController.tableData.Columns.Insert(newColIdx, newColName);
            foreach(var row in TestController.tableData.Data)
            {
                row.Insert(newColIdx, getRandom());
            }

            return TestController.tableData;
        }
    }

    public class TableData
    {
        public TableData()
        {
            this.Columns = new List<string>();
            this.Rows = new List<string>();
            this.Data = new List<List<decimal>>();
        }

        public List<string> Columns { get; set; }

        public List<string> Rows { get; set; }

        //list of rows
        public List<List<decimal>> Data { get; set; }
    }
 }
