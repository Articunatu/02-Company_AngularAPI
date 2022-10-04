using Company_API.Data;
using Company_API.Models;
using Company_API.Service;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("DatabaseConnection")));

builder.Services.AddCors(
    (setup) => {
        setup.AddPolicy("default", (options) =>
        {
            options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
        });
    });

builder.Services.AddScoped<ICompany<Employee>, EmployeeRepository>();
builder.Services.AddScoped<ICompany<Department>, DepartmentRepository>();
builder.Services.AddScoped<ICompany<Gender>, GenderRepository>();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

app.UseCors();
