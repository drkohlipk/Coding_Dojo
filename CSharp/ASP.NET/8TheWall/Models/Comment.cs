using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
	public class Comment : BaseEntity
	{
		//These must match your DB column names and the names of the input fields that you use in your cshtml files in order for everything to marry up properly
		public long id { get; set; }
		[Required(ErrorMessage = "Comment cannot be left blank.")]
		[MaxLength(1000, ErrorMessage = "Comment cannot exceed 1000 characters.")]
		public string comment_text { get; set; }
		public string updated_at{ get; set; }
		public long message_id { get; set; }
		public Message message { get; set; }
		public long user_id { get; set; }
		public User user { get; set; }
	}
}