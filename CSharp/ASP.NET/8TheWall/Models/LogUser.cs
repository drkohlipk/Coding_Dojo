using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
	public class LogUser : BaseEntity 
	{ //creates class to validate the login fields against
		[Required(ErrorMessage = "Email address cannot be left blank")]
		public string email { get; set; }
		[Required(ErrorMessage = "Password cannot be left blank")]
		public string password { get; set; }
	}
}