using System;
using System.ComponentModel.DataAnnotations;

namespace QuotingDojoRedux.Models
{
	public class Quote : BaseEntity
	{
		public long quoteid { get; set; }
		public int user_id { get; set; }
		[Required(ErrorMessage = "Quote cannot be left blank.")]
		[MaxLength(1000, ErrorMessage = "Quote cannot exceed 1000 characters.")]
		public string quotetext { get; set; }
		public DateTime created_at{ get; set; }
		public DateTime updated_at{ get; set; }
		public User user { get; set; }
	}
}