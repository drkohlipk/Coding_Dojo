using System;

namespace QuotingDojoRedux.Models
{
	public class Quote : BaseEntity
	{
		public long quoteid { get; set; }
		public string quotetext { get; set; }
		public DateTime created_at{ get; set; }
		public DateTime updated_at{ get; set; }
		public long userid { get; set; }
		public User user { get; set; }
	}
}