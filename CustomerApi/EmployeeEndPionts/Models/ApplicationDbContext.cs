using Microsoft.EntityFrameworkCore;

namespace EmployeeEndPionts.Models
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {

        }
/*
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().OwnsMany(p => p.Addresses, a =>
            {
                a.WithOwner().HasForeignKey("OwnerId");
                a.Property<string>("Id");
                a.HasKey("Id");
            });
        }*/
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Address> Addresses { get; set; }
    }
}
