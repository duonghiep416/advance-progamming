namespace TrainingFPTCo.Models
{
    public class FileUtilities
    {
        public static bool IsVideoFile(string fileName)
        {
            string[] videoExtensions = { ".mp4", ".avi", ".mkv", ".webm", ".mov" };
            string fileExtension = Path.GetExtension(fileName).ToLower();
            return videoExtensions.Contains(fileExtension);
        }

        public static bool IsImageFile(string fileName)
        {
            string[] imageExtensions = { ".jpg", ".jpeg", ".png", ".gif", ".bmp" };
            string fileExtension = Path.GetExtension(fileName).ToLower();
            return imageExtensions.Contains(fileExtension);
        }

        public static bool IsAudioFile(string fileName)
        {
            string[] audioExtensions = { ".mp3", ".wav", ".ogg" };
            string fileExtension = Path.GetExtension(fileName).ToLower();
            return audioExtensions.Contains(fileExtension);
        }
    }
}
