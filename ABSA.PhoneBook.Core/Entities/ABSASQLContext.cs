using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ABSA.PhoneBook.Core.Entities
{
    public partial class ABSASQLContext : DbContext
    {
        public ABSASQLContext()
        {
        }

        public ABSASQLContext(DbContextOptions<ABSASQLContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Entry> Entry { get; set; }
        public virtual DbSet<EntryType> EntryType { get; set; }
        public virtual DbSet<PhoneBook> PhoneBook { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\;Database=ABSA.SQL;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Entry>(entity =>
            {
                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.EntryType)
                    .WithMany(p => p.Entry)
                    .HasForeignKey(d => d.EntryTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Entry_EntryType");

                entity.HasOne(d => d.PhoneBook)
                    .WithMany(p => p.Entry)
                    .HasForeignKey(d => d.PhoneBookId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Entry_PhoneBook");
            });

            modelBuilder.Entity<EntryType>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("UQ_EntryType_Name")
                    .IsUnique();

                entity.Property(e => e.EntryTypeId).ValueGeneratedNever();

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PhoneBook>(entity =>
            {
                entity.HasIndex(e => e.Name)
                    .HasName("UQ_PhoneBook_Name")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
