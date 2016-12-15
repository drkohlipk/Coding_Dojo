using System;
using System.Collections.Generic;

namespace QuotingDojoRedux.Models
{
	public abstract class BaseEntity {}
	public class User : BaseEntity
	{
		public long userid { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
		public string email { get; set; }
		public string password { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }
		public ICollection<Quote> quotes { get; set; }
		public User()
		{
			quotes = new List<Quote>();
		}
	}
}