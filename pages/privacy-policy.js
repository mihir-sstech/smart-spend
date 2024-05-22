// privacy-policy.js
import "../app/globals.css";
import "./main.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Social from "../app/home/social";
import Header from "../app/Header";
import { Roboto } from "next/font/google";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* <header className="bg-#FFFFFF text-black lg:px-4 lg:px-[72px] xl:px-[190px] 2xl:px-[270px] " key="header12" style={{ backgroundColor: 'white' }}>
                <div className=" mx-auto flex flex-col md:flex-row justify-between items-center " key="container">
                    <div className="flex items-center " key="logo">
                        <Link href="/smart-spend">
                            <Image src="/Smart-Expesne--01.svg" alt="Icon" width={280} height={80} />
                        </Link>
                    </div>
                    <nav className="flex flex-col md:flex-row" key="nav">
                        <Link href="/smart-spend" className="mx-4 mb-2 md:mb-0 font-body font-semibold">
                            Home
                        </Link>
                    </nav >
                </div >
            </header > */}

      <header
        className="bg-#FFFFFF text-black lg:px-[40px] xl:px-[165px] 2xl:px-[270px] "
        key="header12"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="container mx-auto flex flex-col md:flex-row justify-between items-center  bg-#FFFFFF"
          key="container"
        >
          <div className="flex items-center" key="logo">
            <Link href="#">
              <Image
                src="/smart-spend/Smart-Expesne--01.svg"
                alt="Icon"
                width={280}
                height={80}
              />
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row" key="nav">
            <Link
              href="/smart-spend"
              className="mx-4 mb-2 md:mb-0 font-body font-semibold"
              style={{ fontFamily: "Roboto, sans-serif", textDecoration: 'none' }}
            >
              Home
            </Link>
            <Link
              href="/smart-spend"
              className="mx-4 mb-2 md:mb-0 font-body font-semibold"
              style={{ fontFamily: "Roboto, sans-serif", textDecoration: 'none' }}
            >
              About
            </Link>
            {/* <button
              className="mx-4 mb-2 md:mb-0 font-body font-semibold"
              style={{ fontFamily: "Roboto, sans-serif" }}
              onClick={() => scrollToSection("about")}
              key="about-button"
            >
              About
            </button> */}
            <Link
              href="/smart-spend"
              className="mx-4 mb-2 md:mb-0 font-body font-semibold"
              style={{ fontFamily: "Roboto, sans-serif", textDecoration: 'none' }}
            >
              Features
            </Link>
            {/* <button
              className="mx-4 mb-2 md:mb-0 font-medium font-semibold"
              style={{ fontFamily: "Roboto, sans-serif" }}
              onClick={() => scrollToSection("features")}
              key="features-button"
            >
              {" "}
              Features
            </button> */}
            {/* <button
              className="mx-4 mb-2 md:mb-0 font-body font-semibold"
              style={{ fontFamily: "Roboto, sans-serif" }}
              onClick={() => scrollToSection("screenshots")}
              key="screenshots-button"
            >
              Screenshots
            </button> */}

            {/* <button
              className="mx-0 mb-2 md:mb-0 font-body font-semibold"
              onClick={() => scrollToSection("contact-us")}
              key="contact-us"
            ></button> */}
          </nav>
        </div>
      </header>

      <div className="privacy-policy-container  mx-auto lg:px-4 lg:px-[72px] xl:px-[190px] 2xl:px-[270px] ">
        <div
          className="w-full h-auto flex justify-center items-center "
          key="privacy-policy-section"
        >
          <div className="container mx-auto px-2 py-8">
            <h1 className="text-4xl font-extrabold text-center  mb-3">
              Privacy Policy
            </h1>
            <br></br>
            <div className="text-xl  md:text-base mb-4">
              <p>
                By using our applications you consent to the collection and use
                of this information by privacy policy physical, electronic and
                managerial procedures have been employed to safeguard the
                security and integrity of any personal information entered in
                the applications.
              </p>
            </div>
            {/* Contact Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Personal Information Collection
              </h2>
              <p>
                The two basic types of information is collected which is
                personal information and non-personal identifiable information
                which includes first name, surname, username and password, email
                address, contact information, country of residence, job title
                and other information that you provide us when you create an
                account on the sites.
              </p>
              <br></br>
              <p>
                The two basic types of information is collected which is
                personal information and non-personal identifiable information
                which includes first name, surname, username, password, contact
                information, country of residence, job title, e-mail addresses,
                phone numbers and other information that you provide us when you
                create an account. We may also collect business information,
                some of which could constitute personal information.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p>
                We ensure the privacy of any information you submit through the
                applications. We use encryption to protect sensitive information
                transmitted online, we also protect your information offline.
                Access to your personally identifiable information will be
                granted to perform a specific job (for e.g. billing or customer
                service) The servers in which we store personally identifiable
                information are kept in a secure environment.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                How we use collected Information
              </h2>
              <p>
                User collected information is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Member management and identification</li>
                <li>
                  Performance of contract and service fee settlement regarding
                  provision of services demanded by the users.
                </li>
                <li>
                  To improve existing services and updation of new services
                </li>
                <li>
                  To detect and stop unauthorized or fraudulent use of or abuse
                  of the service.
                </li>
                <li>
                  To help you connect with other users that you know with your
                  permission.
                </li>
                <li>
                  Performance of contract and service fee settlement regarding
                  provision of services demanded by the users.
                </li>
                <li>
                  To provide information on promotional events as well as
                  opportunity to participate.
                </li>
                <li>To comply with applicable laws or legal obligation.</li>
                <li>
                  Make notice of function or applications or matters on policy
                  change.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Share of Information collected with others
              </h2>
              <p>
                Your collected personal information is not share outside, except
                in certain cases.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                When you allow us to share the information
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  When you elect to share your personal information with
                  affiliates, third party partners, and service providers. They
                  can send you information, offers, products delivery and
                  dispute resolution on payment and promotions about their
                  products and services.
                </li>
                <li>
                  When the user selects to share their personal information with
                  third parties or their sites or social networking sites of
                  other companies.
                </li>
                <li>
                  In other circumstances where the user gives prior permission
                  for sharing their personal information.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Sharing of information required by the laws up
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  When sharing of information is required to be disclosed by the
                  laws and regulations.
                </li>
                <li>
                  If the investigative agencies required it to be disclosed for
                  detecting crimes in accordance with the procedure and method
                  prescribed in the laws and regulations.
                </li>
              </ul>{" "}
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p>
                Cookies are very small text files sent to the browsers of the
                users by the server that enable us to track and target the
                interests of our users to enhance the experience on our apps. It
                is stored on your device’s internal memory. Usage of a cookie is
                in no way linked to any personally identifiable information on
                our apps. The app may use third party code and libraries that
                use cookies to collect information and improve their services.
                You can either accept or refuse these cookies and know when a
                cookie is being sent to your device. If you choose to refuse our
                cookies, you may not be able to use some portions of this
                service.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                We use cookies for other extra purposes :
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  We use cookies to understand how people interact with our
                  website, mobile application and to improve content and
                  services we offer through the sites. Optimize user experience,
                  make it more user-friendly
                </li>
                <li>
                  We use cookies to track website usage patterns, to record
                  request for subscriptions to our services.
                </li>
                <li>
                  To maintain privacy and security when you pay a visit to our
                  website or mobile application.
                </li>
                <li>To prevent illegal, unlawful activity</li>
                <li>To enhance security</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                We restrict the use of Cookies for :
              </h2>
              <br></br>
              <ul className="list-disc pl-6">
                <li>
                  To collect any personal identifiable information without your
                  sanction/consent.
                </li>
                <li>
                  To collect any sensitive information without your
                  sanction/consent.
                </li>
                <li>Pass your sensitive information to third parties.</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Particular Use of Cookies
              </h2>
              <br></br>
              <p>
                The information collected by means of Cookies is used for the
                following purposes :
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Functional Cookies :
              </h2>
              <br></br>
              <p>
                A number of cookies support the functioning of website, identify
                pc or end device on a unique but anonymous basis. These cookies
                remember your language preferences or recognize an individual’s
                activity within a single session.
              </p>
              <br></br>
              <p>
                When you register for a site, we use a cookie to connect your
                presence with a specific user name, password or account. If you
                ask us to do we may use continual cookie to recognize you
                automatically each time you return. We may also use cookies to
                prepopulate your form you fill out on the site with information
                you have already provided.{" "}
              </p>
              <br></br>
              <p>
                We may analyse user traffic to measure the use of our sites and
                to improve the content of our websites and our services. These
                analysis will be performed through the use of IP addresses and
                cookies. Functional cookies are important for the operation of
                our website, and enable a smooth user experience.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Essential Cookies :
              </h2>
              <p>
                We may use a restricted number of cookies essential to
                particular services you have requested or for security purposes.
                We may use a cookie to authenticate the pc or mobile device that
                you use.
              </p>
              <br></br>
              <p>
                Statistics and analytics: We use cookies to compile statistics
                on the number of visitors to our webpages and our services.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Performance Cookies :
              </h2>
              <p>
                We permit third parties to set analytics, or performance,
                cookies to collect and report aggregate information. We utilize
                the aggregate reports to understand how our web sites are used
                and improve their usefulness to our audiences.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                How to control use of cookies?
              </h2>
              <p>
                If you continue to use our website, we consider you accept the
                use of cookies. You can delete all cookies that are already on
                your device and can set most browsers to prevent them from being
                placed. You may decline to accept cookies from our site at any
                time by altering the setting on your browser to turn down
                cookies.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Links to Other Sites
              </h2>
              <p>
                This service may contain links to other sites. Please note that
                we are not responsible for the content or privacy practices of
                such other sites, as these external sites are not operated by
                us. Therefore we strongly advise our users to review the privacy
                policy of these sites. We have no control over and take no
                responsibility for the content, privacy policies, or practices
                of any third party sites or services.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Children’s Privacy
              </h2>
              <p>
                Users of all ages may access and view our applications, but we
                take children’s privacy very seriously so this services are not
                address to anyone under the age of 13. We do not intentionally
                solicit, collect, or maintain personally identifiable
                information from children under 13, and we ask that parents
                supervise their children when online. In case we discover that a
                child under 13 has submitted us with personal information, we
                immediately delete this from our servers. If you are a parent or
                guardian and you are aware that your child has provided us with
                personal information, please contact us so that we will be able
                to do necessary actions.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Updates to Our Policy
              </h2>
              <p>
                As our apps evolves over time or our data handling policies
                change, we may update our privacy policy from time to time. We
                will make efforts to notify you of any changes by posting the
                new Privacy Policy. These changes comes in to effective
                immediately after they are posted.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us on{" "}
                <a href="mailto:info@sstechsystem.com">info@sstechsystem.com</a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-full " key="social-section">
        <Social key="social-content" />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
