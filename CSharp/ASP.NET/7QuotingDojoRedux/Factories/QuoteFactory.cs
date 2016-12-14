using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using QuotingDojoRedux.Models;
using Microsoft.Extensions.Options;

namespace QuotingDojoRedux.Factory
{
	/*****************Added as part of DB Config********************/
	public class QuoteFactory : IFactory<Quote> 
	{
		private readonly IOptions<MySqlOptions> mysqlConfig;
		
		public QuoteFactory(IOptions<MySqlOptions> conf) {
			mysqlConfig = conf;
		}
		
		internal IDbConnection Connection {
			get {
				return new MySqlConnection(mysqlConfig.Value.ConnectionString);
			}
		}
		/*****************Added as part of DB Config********************/
		
		public void Add(Quote item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query = "INSERT INTO quotes (quotetext, user_id, created_at, updated_at) VALUES (@quotetext, @user_id, NOW(), NOW())";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<Quote> FindAll()
        { //this function will return a Quote object based on the class I've made in models.  MAKE SURE THAT YOUR DB COLUMN NAMES ARE THE SAME AS THE KEY NAMES OF YOUR QUOTE OBJECT IN MODELS (THE NAMES OF YOUR VARIABLES IN YOUR QUOTE CLASS)!!  If you don't, you won't be able to use them when this object is retrieved because the returned Quote object is auto-populated with the values brought forward from the database.
            using (IDbConnection dbConnection = Connection)
            {
				// var query = "SELECT quoteid, quotetext, DATE_FORMAT(quotes.updated_at, '%l:%i%p %M %e, %Y') AS updated_at, user_id FROM quotes LEFT JOIN users ON quotes.user_id WHERE users.userid = quotes.user_id ORDER BY quotes.created_at DESC;";
				var query = "SELECT * FROM quotes LEFT JOIN users ON quotes.user_id WHERE users.userid = quotes.user_id ORDER BY quotes.created_at DESC;";
                dbConnection.Open();
				var quotes = dbConnection.Query<Quote, User, Quote>(query, (quote, user) => { 
					quote.user = user; return quote; 
					},
					splitOn: "userid"
				);
				return quotes;
            }
        }
        public Quote FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<Quote>("SELECT * FROM quotes WHERE quoteid = @Id", new { Id = id }).FirstOrDefault();
            }
        }
		public void Update(Quote item)
		{
			using (IDbConnection dbConnection = Connection)
			{ //the @Name, @QuoteText, and @Id are based on Quote object named item (see parameters of this function).  In the Execute function, you are sending both the query and the Quote object 'item' (that's where the injects come from)
				string query = "UPDATE quotes SET quoteText = @quotetext, updated_at = NOW() WHERE quoteid = @quoteid";
                dbConnection.Open();
                dbConnection.Execute(query, item);
			}
		}
		public void DeleteByID(int id)
		{
			using (IDbConnection dbConnection = Connection)
			{
				string query = $"DELETE FROM quotes WHERE quoteid = {id}";
				dbConnection.Open();
				dbConnection.Execute(query);
			}
		}
	}
}