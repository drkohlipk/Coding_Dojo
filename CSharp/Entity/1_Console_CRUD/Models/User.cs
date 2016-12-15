using System;

namespace ConsoleCRUD.Models
{
	public class User
	{
		public int id { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }
	}
}