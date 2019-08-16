using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace compapi.Models
{
    public class Clogin
    {
        public int sno { get; set; }
        public int id { get; set; }
        public string name { get; set; }
        public Nullable<long> contact { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}