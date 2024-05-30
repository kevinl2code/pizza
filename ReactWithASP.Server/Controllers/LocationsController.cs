using Microsoft.AspNetCore.Mvc;
using ImageApi.Helpers;
namespace ReactWithASP.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : ControllerBase
    {

        //private static string GetImage(string name)
        //{
        //    string imagePath;
        //    imagePath = Path.Combine(Environment.CurrentDirectory, "Assets/Images", name);
        //    Console.WriteLine(imagePath);

        //    string imageBase64 = ImageHelper.GetImageBase64(imagePath);

        //    return imageBase64;

        //}





        private static readonly Location[] Locations = new[]
        {
            new Location
            {
                LocationId = "0",
                Title = "VIA 313",
                Description = "Local pizzeria chain known for its square, Detroit-style pizzas & inventive toppings.",
                Price = "$10–20",
                Rating = 4.3,
                Favorite = false,
                Contact = "(512) 817-3133",
                IsSpecial = true,
                //Images = new string[]
                //{
                //    GetImage("via1.jpg"),
                //    GetImage("via2.jpg"),
                //    GetImage("via3.jpg"),

                //},
                Images =
                [
                    "via1.jpg",
                    "via2.jpg",
                    "via3.jpg",
                ],
                //Thumbnail = GetImage("via-thumb.jpg"),
                Thumbnail = "via-thumb.jpg",
                Address = new Address
                {
                    Street = "1335 E Whitestone Blvd Ste 200",
                    City = "Cedar Park",
                    State = "TX",
                    PostalCode = 78613
                },
                Coordinates = new Coordinates
                {
                    Latitude = 30.527289637470204,
                    Longitude = -97.81590023437946
                }

            },
            new Location
            {
                LocationId = "1",
                Title = "Pizza Tova",
                Description = "Austin Highest rated pizza. Serving Italian Pizza in Cedar Park, Austin Leander & Round Rock.",
                Price = "$10–20",
                Rating = 4.8,
                Favorite = true,
                Contact = "(512) 296-2280",
                IsSpecial = true,
                //Images = new string[]
                //{
                //    GetImage("tova1.jpg"),
                //    GetImage("tova2.jpg"),
                //    GetImage("tova3.jpg"),

                //},
                Images =
                [
                    "tova1.jpg",
                    "tova2.jpg",
                    "tova3.jpg",
                ],
                //Thumbnail = GetImage("tova-thumb.jpg"),
                Thumbnail = "tova-thumb.jpg",
                Address = new Address
                {
                    Street = "200 Buttercup Creek Blvd # 128",
                    City = "Cedar Park",
                    State = "TX",
                    PostalCode = 78613
                },
                Coordinates = new Coordinates
                {
                    Latitude = 30.503841467721337,
                    Longitude = -97.82048637301257
                }

            },
            new Location
            {
                LocationId = "2",
                Title = "Marco's Pizza",
                Description = "Counter-serve chain serving up a menu of specialty or custom pizzas for takeout or delivery.",
                Price = "$10–20",
                Rating = 4.1,
                Favorite = false,
                Contact = "(512) 250-3400",
                IsSpecial = false,
                //Images = new string[]
                //{
                //    GetImage("marco1.jpg"),
                //    GetImage("marco2.jpg"),
                //    GetImage("marco3.jpg"),

                //},
                Images =
                [
                    "marco1.jpg",
                    "marco2.jpg",
                    "marco3.jpg",
                ],
                //Thumbnail = GetImage("marco-thumb.jpg"),
                Thumbnail = "marco-thumb.jpg",
                Address = new Address
                {
                    Street = "2011 Little Elm Trail",
                    City = "Cedar Park",
                    State = "TX",
                    PostalCode = 78613
                },
                Coordinates = new Coordinates
                {
                    Latitude = 30.4805907078025, 
                    Longitude = -97.82917483068385
                }

            },

            new Location
            {
                LocationId = "3",
                Title = "Milano Pizza",
                Description = "For over 30 years, Milano Pizza has been sating hungry Austinites cravings for great, homemade pizza.",
                Price = "$10–20",
                Rating = 4.5,
                Favorite = false,
                Contact = "(512) 770-1400",
                IsSpecial = false,
                //Images = new string[]
                //{
                //    GetImage("milano1.jpg"),
                //    GetImage("milano2.jpg"),
                //    GetImage("milano3.jpg"),

                //},
                Images =
                [
                    "milano1.jpg",
                    "milano2.jpg",
                    "milano3.jpg",
                ],
                //Thumbnail = GetImage("milano-thumb.jpg"),
                Thumbnail = "milano-thumb.jpg",
                Address = new Address
                {
                    Street = "251 N Bell Blvd Suite 117",
                    City = "Cedar Park",
                    State = "TX",
                    PostalCode = 78613
                },
                Coordinates = new Coordinates
                {
                    Latitude = 30.5124679046631,
                    Longitude =  -97.82433264232914
                }

            },
        };

        private readonly ILogger<LocationsController> _logger;


        public LocationsController(ILogger<LocationsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "locations")]
        public IEnumerable<Location> Get()
        {
            return Locations;
        }
    }
}
