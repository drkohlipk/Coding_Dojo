using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
	public class Message : BaseEntity
	{
		//These must match your DB column names and the names of the input fields that you use in your cshtml files in order for everything to marry up properly
		public long id { get; set; }
		[Required(ErrorMessage = "Message cannot be left blank.")]
		[MaxLength(1000, ErrorMessage = "Message cannot exceed 1000 characters.")]
		public string message_text { get; set; }
		public string updated_at{ get; set; }
		public long user_id { get; set; }
		public User user { get; set; }
		public ICollection<Comment> comments { get; set; }
		public Message() {
			comments = new List<Comment>();
		}
	}
}