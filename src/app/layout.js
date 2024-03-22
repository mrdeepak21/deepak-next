import "./globals.css";
import Background from "@/components/Background";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Mobile from "@/components/Navigation/Mobile";

export const metadata= {
  title:  'Deepak Kumar | Software Engineer',
  description: "Experienced Software Engineer with a versatile skill set including  PHP, JavaScript, SQL, AWS, and a range of other  technologies. Demonstrated track record of delivering exceptional results, ensuring client satisfaction through innovative and high-performance software solutions.",
  keywords: "php, JavaScript, React, js, Wordpress, wp, wp themes, wp plugins",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="no-js">
      <body>
        <Background />
        <Preloader />
        <div className="page">
          <div className="page-content">
            <Header />
            <Mobile />
            <div className="content-area">
              <div className="animated-sections">
                {children}
              </div>
            </div>
          </div>
        </div>
        <script src="js/jquery.min.js"></script>
        {/* <script src="js/modernizr.custom.js"></script> */}
        {/* <script src="js/animating.js"></script> */}


        {/* <script src='js/masonry.pkgd.min.js'></script> */}
        {/* <script src="js/jquery.magnific-popup.min.js"></script> */}
        <script src="js/main.js"></script>
      </body>
    </html>
  );
}