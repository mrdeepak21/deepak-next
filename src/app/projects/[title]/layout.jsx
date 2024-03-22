import "../../globals.css";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "Deepak Kumar",
  description: "Software Engineer",
  keywords: "php, JavaScript, React, js, Wordpress, wp, wp themes, wp plugins",
  author: "Deepak Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js">
      <body>
        <Preloader />
                {children}
        <script src="js/jquery.min.js"></script>
        <script src="js/modernizr.custom.js"></script>
        <script src="js/animating.js"></script>

        <script src="js/imagesloaded.pkgd.min.js"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>

        <script src='js/perfect-scrollbar.min.js'></script>
        <script src='js/jquery.shuffle.min.js'></script>
        <script src='js/masonry.pkgd.min.js'></script>
        <script src='js/owl.carousel.min.js'></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery.googlemap.js"></script>
        <script src="js/validator.js"></script>
        <script src="js/main.js"></script>
      </body>
    </html>
  );
}