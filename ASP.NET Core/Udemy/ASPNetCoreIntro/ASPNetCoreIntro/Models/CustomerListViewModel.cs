using ASPNetCoreIntro.Entities;

namespace ASPNetCoreIntro.Models
{
    public class CustomerListViewModel
    {
        public List<Customer> Customers { get; set; }
        public List<string> Shops { get; set; }
    }
}
