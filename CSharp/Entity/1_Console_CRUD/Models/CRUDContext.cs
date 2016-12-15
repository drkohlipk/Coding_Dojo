using Microsoft.EntityFrameworkCore;
using MySQL.Data.EntityFrameworkCore.Extensions;
namespace ConsoleCRUD.Models
{
    public class CRUDContext : DbContext
    {
		public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string Server = "localhost";
            string Port = "8889"; //or 8889 on Mac
            string Database = "ConsoleCRUD";
            string UserId = "root";
            string Password = "root";
            string Connection = $"Server={Server};port={Port};database={Database};uid={UserId};pwd={Password};SslMode=None;";
            optionsBuilder.UseMySQL(Connection);
        }
    }
}