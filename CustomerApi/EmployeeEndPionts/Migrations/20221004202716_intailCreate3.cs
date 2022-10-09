using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeEndPionts.Migrations
{
    /// <inheritdoc />
    public partial class intailCreate3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_Employees_OwnerId",
                table: "Addresses");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_OwnerId",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Addresses");

            migrationBuilder.AddColumn<string>(
                name: "EmployeeId",
                table: "Addresses",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_EmployeeId",
                table: "Addresses",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_Employees_EmployeeId",
                table: "Addresses",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_Employees_EmployeeId",
                table: "Addresses");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_EmployeeId",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "Addresses");

            migrationBuilder.AddColumn<string>(
                name: "OwnerId",
                table: "Addresses",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_OwnerId",
                table: "Addresses",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_Employees_OwnerId",
                table: "Addresses",
                column: "OwnerId",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
