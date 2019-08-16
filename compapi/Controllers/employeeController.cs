using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using compapi.Models;

namespace compapi.Controllers
{
    public class employeeController : ApiController
    {
        private comp_model db = new comp_model();

        // GET: api/employee
        public IQueryable<emp> Getemps()
        {
            return db.emps;
        }

        // GET: api/employee/5
        [ResponseType(typeof(emp))]
        public IHttpActionResult Getemp(int id)
        {
            emp emp = db.emps.Find(id);
            if (emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }

        // PUT: api/employee/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putemp(int id, emp emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emp.id)
            {
                return BadRequest();
            }

            db.Entry(emp).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!empExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/employee
        [ResponseType(typeof(emp))]
        public IHttpActionResult Postemp(emp emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.emps.Add(emp);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (empExists(emp.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = emp.id }, emp);
        }

        // DELETE: api/employee/5
        [ResponseType(typeof(emp))]
        public IHttpActionResult Deleteemp(int id)
        {
            emp emp = db.emps.Find(id);
            if (emp == null)
            {
                return NotFound();
            }

            db.emps.Remove(emp);
            db.SaveChanges();

            return Ok(emp);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool empExists(int id)
        {
            return db.emps.Count(e => e.id == id) > 0;
        }
    }
}