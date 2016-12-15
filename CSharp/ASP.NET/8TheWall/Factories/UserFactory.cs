using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using TheWall.Models;
using Microsoft.Extensions.Options;

namespace TheWall.Factory
{
	/*****************Added as part of DB Config********************/
	public class UserFactory : IFactory<User> {

		private readonly IOptions<MySqlOptions> mysqlConfig;
		
		public UserFactory(IOptions<MySqlOptions> conf) {
				mysqlConfig = conf;
		}
		
		internal IDbConnection Connection {
			get {
				return new MySqlConnection(mysqlConfig.Value.ConnectionString);
			}
		}
		/*****************Added as part of DB Config********************/
		
		public void Add(User item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query = "INSERT INTO quotes (name, quoteText, likes, created_at, updated_at) VALUES (@Name, @QuoteText, @Likes, NOW(), NOW())";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<User> FindAll()
        { //this function will return a Quote object based on the class I've made in models.  MAKE SURE THAT YOUR DB COLUMN NAMES ARE THE SAME AS THE KEY NAMES OF YOUR QUOTE OBJECT IN MODELS (THE NAMES OF YOUR VARIABLES IN YOUR QUOTE CLASS)!!  If you don't, you won't be able to use them when this object is retrieved because the returned Quote object is auto-populated with the values brought forward from the database.
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<User>("SELECT id, name, quotetext, likes, DATE_FORMAT(created_at, '%l:%i%p %M %e %Y') AS created_at FROM quotes ORDER BY likes DESC");
            }
        }
        public User FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<User>("SELECT * FROM quotes WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
		public void LikeByID(int id)
		{
			using (IDbConnection dbConnection = Connection)
			{
				string query = $"UPDATE quotes SET likes = likes + 1 WHERE id = {id}";
				dbConnection.Open();
				dbConnection.Execute(query);
			}
		}
		public void Update(User item)
		{
			using (IDbConnection dbConnection = Connection)
			{ //the @Name, @QuoteText, and @Id are based on Quote object named item (see parameters of this function).  In the Execute function, you are sending both the query and the Quote object 'item' (that's where the injects come from)
				string query = "UPDATE quotes SET name = @Name, quoteText = @QuoteText WHERE id = @Id";
                dbConnection.Open();
                dbConnection.Execute(query, item);
			}
		}
		public void DeleteByID(int id)
		{
			using (IDbConnection dbConnection = Connection)
			{
				string query = $"DELETE FROM quotes WHERE id = {id}";
				dbConnection.Open();
				dbConnection.Execute(query);
			}
		}
	}
}