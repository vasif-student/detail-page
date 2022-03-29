using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentCar.DAL;
using RentCar.Models.Entities;
using RentCar.Models.ViewModels.Car;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentCar.Controllers
{
    public class CarController : Controller
    {
        private readonly AppDbContext _dbContext;

        public CarController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //***** Detail *****//
        public async Task<IActionResult> Detail(int id)
        {
            var car = await _dbContext.CarModels
                .Include(c => c.Car)
                .Include(c => c.District).ThenInclude(d => d.City)
                .Include(c => c.CarImages)
                .FirstOrDefaultAsync(c => c.Id == id);

            return View(new CarDetailViewModel { 
                CarModel = car
            });
        }
    }
}
