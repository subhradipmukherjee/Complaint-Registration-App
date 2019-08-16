using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using compapi.Models;

namespace compapi.Controllers
{
    public class loginController : ApiController
    {
        private comp_model db = new comp_model();

        public Clogin login(Clogin c)
        {
            var r = db.emps.Where(s => s.username == c.username && s.password == c.password).FirstOrDefault();
            if (r == null) return null;
            Clogin l = new Clogin();
            l.id = r.id;
            l.username = r.username;
            l.password = r.password;
            l.name = r.name;
            l.contact = r.contact;

            return l;
        }
    }
}
