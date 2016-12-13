
using System.ComponentModel.DataAnnotations;

namespace QuotingDojoRedux.Models
{
	public abstract class BaseEntity {}
	public class Quote : BaseEntity
	{
		//These must match your DB column names and the names of the input fields that you use in your cshtml files in order for everything to marry up properly
		public int Id { get; set; }
		public string Name { get; set; }
		[Required(ErrorMessage = "Quote cannot be left blank.")]
		public string QuoteText { get; set; }
		public int Likes { get; set; }
		public string Created_At{ get; set; }
	}
	public class User : BaseEntity
	{
		//These must match your DB column names and the names of the input fields that you use in your cshtml files in order for everything to marry up properly
		public int Id { get; set; }
		[Required(ErrorMessage = "First name cannot be left blank.")]
		[MinLength(2,ErrorMessage = "First name must be at least 2 characters in length.")]
		public string first_name { get; set; }
		[Required(ErrorMessage = "Last name cannot be left blank.")]
		[MinLength(2,ErrorMessage = "Last name must be at least 2 characters in length.")]
		public string last_name { get; set; }
		[Required(ErrorMessage = "Email address cannot be left blank.")]
		[EmailAddress(ErrorMessage = "Email is not in the correct format.")]
		public string email { get; set; }
		[Required(ErrorMessage = "Password cannot be left blank.")]
		[RegularExpression(@"(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&#39;?/&gt;.&lt;,])(?!.*\s).*$", ErrorMessage = "Password must be at least 8 characters and include 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.")]
		[Compare("confirm", ErrorMessage = "Password and confirm password do not match.")]
		public string password { get; set; }
		[Required(ErrorMessage = "Confirm password cannot be left blank.")]
		public string confirm { get; set; }
	}

	public class LogUser : BaseEntity 
	{ //creates class to validate the login fields against
		[Required(ErrorMessage = "Email address cannot be left blank")]
		public string email { get; set; }
		[Required(ErrorMessage = "Password cannot be left blank")]
		public string password { get; set; }
	}
}