using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace QuotingDojoRedux.Models
{
	public class QuoteViewModel : BaseEntity
	{
		[Required(ErrorMessage = "Quote cannot be left blank.")]
		[MaxLength(1000, ErrorMessage = "Quote cannot exceed 1000 characters.")]
		[Display(Name = "Your Quote:")]
		public string quotetext { get; set; }
		[HiddenInput]
		public long userid { get; set; }
	}
}