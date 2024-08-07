﻿// <auto-generated />
using GraphQLTest.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GraphQLTest.Data.Migrations
{
    [DbContext(typeof(iStatContext))]
    [Migration("20240709192754_MakeLacidKeyAutoGenerated")]
    partial class MakeLacidKeyAutoGenerated
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("GraphQLTest.Data.Entities.Activity", b =>
                {
                    b.Property<int>("LacidKey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LacidKey"));

                    b.Property<string>("DESC")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ID")
                        .HasColumnType("int");

                    b.Property<string>("MEAS")
                        .HasMaxLength(1)
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("SORT")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("STKFLW")
                        .HasMaxLength(1)
                        .HasColumnType("nvarchar(1)");

                    b.HasKey("LacidKey");

                    b.ToTable("LACID");
                });
#pragma warning restore 612, 618
        }
    }
}
