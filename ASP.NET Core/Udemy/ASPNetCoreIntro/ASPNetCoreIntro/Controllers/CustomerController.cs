using ASPNetCoreIntro.Entities;
using ASPNetCoreIntro.Models;
using ASPNetCoreIntro.Service.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ASPNetCoreIntro.Controllers
{
    public class CustomerController : Controller
    {
        IMyLogger _logger;
        public CustomerController(IMyLogger logger)
        {
            _logger = logger;
        }

        public IActionResult Index3()
        {
            _logger.Log("");
            List<Customer> customer = new List<Customer>
            {
                new Customer {Id = 1, FirstName="Engin", LastName="Demiroğ", City="Ankara"},
                new Customer {Id = 2, FirstName="Ahmet", LastName="Güneş", City="Denizli"},
                new Customer {Id = 3, FirstName="Mehmet", LastName="Kara", City="Muğla"}
            };

            List<string> shops = new List<string> { "Ankara", "İstanbul", "İzmir" };

            var model = new CustomerListViewModel
            {
                Customers = customer,
                Shops = shops
            };

            return View(model);
        }

        // belirtilmezse varsayılan olarak [HttpGet] 'dir.
        public IActionResult SaveCustomer()
        {
            return View(new SaveCustomerViewModel
            {
                Cities = new List<SelectListItem>
                {
                    new SelectListItem{Text="Ankara",Value="06"},
                    new SelectListItem{Text="İstanbul",Value="34"},
                    new SelectListItem{Text="İzmir",Value="35"}
                }
            });
        }

        [HttpPost]
        public string SaveCustomer(Customer customer)
        {
            return "Kaydedildi";
        }
    }
}
