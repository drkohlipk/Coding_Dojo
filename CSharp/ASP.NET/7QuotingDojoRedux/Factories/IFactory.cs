using QuotingDojoRedux.Models;
using System.Collections.Generic;

namespace QuotingDojoRedux.Factory
{
	public interface IFactory<T> where T : BaseEntity
	{
	}
}