using QuotingDojo.Models;
using System.Collections.Generic;

namespace QuotingDojo.Factory
{
	public interface IFactory<T> where T : BaseEntity
	{
	}
}