using Microsoft.EntityFrameworkCore;

namespace QuotingDojoRedux.Models
{
    public class QuotingDojoContext : DbContext
    {
        public QuotingDojoContext(DbContextOptions<QuotingDojoContext> options) : base(options)
        { }
        public DbSet<User> Users { get; set; }
        public DbSet<Quote> Quotes { get; set; }
    }
}