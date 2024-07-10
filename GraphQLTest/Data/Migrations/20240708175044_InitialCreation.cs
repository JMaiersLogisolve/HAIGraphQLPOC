using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GraphQLTest.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LACID",
                columns: table => new
                {
                    LacidKey = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID = table.Column<int>(type: "int", nullable: false),
                    DESC = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    STKFLW = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    MEAS = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    SORT = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LACID", x => x.LacidKey);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LACID");
        }
    }
}
