using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Controllers
{
    public class GameScoresController : ApiController
    {

        [Route("api/Matches")]
        [HttpGet]
        public HttpResponseMessage GetAllMatchScores()
        {
            string query = @"EXEC GetAllMatchResults";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["GamesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
