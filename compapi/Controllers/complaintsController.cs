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
    public class complaintsController : ApiController
    {
        private comp_model db = new comp_model();

        // GET: api/complaints
        public IQueryable<compdetail> Getcompdetails()
        {
            return db.compdetails;
        }

        // GET: api/complaints/5
        [ResponseType(typeof(compdetail))]
        [HttpGet]
        public IHttpActionResult Getcompdetail(int empid)
        {
            // compdetail compdetail = db.compdetails.Find(id);
            List<get_comp_Result> complist = db.get_comp(empid).ToList();
            if (complist == null)
            {
                return NotFound();
            }

            return Ok(complist);
        }

        // PUT: api/complaints/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcompdetail(int id, compdetail compdetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != compdetail.compid)
            {
                return BadRequest();
            }

            db.Entry(compdetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!compdetailExists(id))
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

        // POST: api/complaints
        [ResponseType(typeof(compdetail))]
        [HttpPost]
        public IHttpActionResult Postcompdetail(compdetail cmpdtl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // db.compdetails.Add(compdetail);
            //db.SaveChanges();
            var emp = db.insert(cmpdtl.empid, cmpdtl.dept, cmpdtl.problem, cmpdtl.status, cmpdtl.contact, cmpdtl.date);


            return CreatedAtRoute("DefaultApi", new { id = cmpdtl.compid }, cmpdtl);
        }

        // DELETE: api/complaints/5
        [ResponseType(typeof(compdetail))]
        public IHttpActionResult Deletecompdetail(int id)
        {
            compdetail compdetail = db.compdetails.Find(id);
            if (compdetail == null)
            {
                return NotFound();
            }

            db.compdetails.Remove(compdetail);
            db.SaveChanges();

            return Ok(compdetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool compdetailExists(int id)
        {
            return db.compdetails.Count(e => e.compid == id) > 0;
        }
    }
}