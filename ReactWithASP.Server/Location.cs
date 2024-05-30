namespace ReactWithASP.Server
{
    public class Location
    {
        public required string LocationId { get; set; }

        public required string Title { get; set; }

        public required string Description { get; set; }

        public required string Price  { get; set; }
        
        public required double Rating { get; set;}

        public required bool Favorite { get; set;}

        public required string Contact { get; set;}

        public required bool IsSpecial { get; set;}

        public required string[] Images { get; set; }

        public required string Thumbnail { get; set; }

        public required Address Address { get; set;}

        public required Coordinates Coordinates { get; set;}
    }

    public class Address
    {
        public required string Street { get; set; }
        public required string City { get; set; }

        public required string State { get; set; }

        public required int PostalCode { get; set;}
    }

    public class Coordinates { 
        public required double Latitude { get; set; }

        public required double Longitude { get; set;}
    }
}
