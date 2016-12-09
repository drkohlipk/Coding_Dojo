
using System.ComponentModel.DataAnnotations;

namespace QuotingDojo.Models
{
	public abstract class BaseEntity {}
	public class Quote : BaseEntity
	{
		//These must match your DB column names and the names of the input fields that you use in your cshtml files in order for everything to marry up properly
		public int Id { get; set; }
		[Required] //these values in square brackets are the requirements for that specific input field.  Will throw an error that you can use in your controller to pass to the cshtml page if they don't meet the reqs
		[MinLength(2)]
		public string Name { get; set; }
		[Required]
		[MinLength(1)]
		public string QuoteText { get; set; }
		public int Likes { get; set; }
		public string Created_At{ get; set; }
	}
}