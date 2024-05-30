using System;
using System.IO;

namespace ImageApi.Helpers
{
    public static class ImageHelper
    {
        public static string GetImageBase64(string imagePath)
        {
            if (!File.Exists(imagePath))
            {
                throw new FileNotFoundException("Image not found.", imagePath);
            }

            byte[] imageBytes = File.ReadAllBytes(imagePath);
            return Convert.ToBase64String(imageBytes);
        }
    }
}