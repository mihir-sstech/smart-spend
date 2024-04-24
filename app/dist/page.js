'use client';
"use strict";
exports.__esModule = true;
require("./globals.css");
var image_1 = require("next/image");
var about_1 = require("./home/about");
var features_1 = require("./home/features");
var screenshots_1 = require("./home/screenshots");
var dowonloads_1 = require("./home/dowonloads");
var contactUs_1 = require("./home/contactUs");
var social_1 = require("./home/social");
var link_1 = require("next/link");
function Home() {
    var scrollToSection = function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (React.createElement("div", { className: '', key: "hom-section-first-11" },
        React.createElement("header", { className: "bg-#FFFFFF text-black", key: "header12", style: { backgroundColor: 'white' } },
            React.createElement("div", { className: "container mx-auto flex flex-col md:flex-row justify-between items-center  bg-#FFFFFF", key: "container" },
                React.createElement("div", { className: "flex items-center", key: "logo" },
                    React.createElement(link_1["default"], { href: "#" },
                        React.createElement(image_1["default"], { src: "/smart-spend/Smart-Expesne--01.svg", alt: "Icon", width: 280, height: 80 }))),
                React.createElement("nav", { className: "flex flex-col md:flex-row", key: "nav" },
                    React.createElement("button", { className: "mx-4 mb-2 md:mb-0 font-body font-semibold", onClick: function () { return scrollToSection('about'); }, key: "about-button" }, "About"),
                    React.createElement("button", { className: "mx-4 mb-2 md:mb-0 font-medium font-semibold", onClick: function () { return scrollToSection('features'); }, key: "features-button" }, " Features"),
                    React.createElement("button", { className: "mx-4 mb-2 md:mb-0 font-body font-semibold", onClick: function () { return scrollToSection('screenshots'); }, key: "screenshots-button" }, "Screenshots"),
                    React.createElement(link_1["default"], { href: "/smart-spend/privacy-policy", target: "_blank", rel: "noopener noreferrer", className: "mx-4 mb-2 md:mb-0 font-body font-semibold" }, "Privacy Policy"),
                    React.createElement("button", { className: "mx-0 mb-2 md:mb-0 font-body font-semibold", onClick: function () { return scrollToSection('contact-us'); }, key: "contact-us" })))),
        React.createElement("div", { className: "bg-slate-100 max-w-full container flex flex-col md:flex-row justify-center items-center  mx-auto", key: "content", style: { backgroundColor: 'white' } },
            React.createElement("div", { className: "p-10 mr-4", key: "image" },
                React.createElement(image_1["default"], { src: "/homeone.png", alt: "Image", width: 551, height: 521 })),
            React.createElement("div", { className: "mt-8 md:mt-0", key: "text" },
                React.createElement("h2", { className: "text-lg font-extrabold", key: "title" },
                    React.createElement("span", { className: "font-extrabold text-[#E53A36] text-4xl" }, "Track. "),
                    React.createElement("span", { className: "font-extrabold text-[#1380E7] text-4xl" }, "Expense. "),
                    React.createElement("span", { className: "font-extrabold text-[#009852] text-4xl" }, "Budget.")),
                React.createElement("p", { className: "text-xl mt-2 md:mt-4 max-w-md font-medium ", key: "description" }, "Smartspend Expense Manager: Your Daily Companion for Financial Success."),
                React.createElement("div", { className: "flex mt-4", key: "store-buttons" },
                    React.createElement("div", { className: "inline-block mr-2", key: "download-section-first-6" },
                        React.createElement("a", { href: "https://play.google.com/store/apps/details?id=sstech.com.singleexpense", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement(image_1["default"], { src: "/Google-Play-Store.png", width: 250, height: 73, alt: "Google Play Button", className: "h-13 w-auto", style: { width: "170px" } }))),
                    React.createElement("div", { className: "inline-block", key: "download-section-first-7" },
                        React.createElement("a", { href: "https://apps.apple.com/us/app/wallet-income-expense-tracker/id1445995357", target: "_blank", rel: "noopener noreferrer" },
                            React.createElement(image_1["default"], { src: "/Apple-Play-Store.png", width: 250, height: 73, alt: "App Store Button", className: "h-14 w-auto", style: { width: "170px" } })))))),
        React.createElement("div", { id: "about", className: "container max-w-full mx-auto", key: "about-section" },
            React.createElement(about_1["default"], { key: "about-content" })),
        React.createElement("div", { id: "features", className: "container max-w-full  mx-auto", key: "features-section", style: { backgroundColor: 'white' } },
            React.createElement(features_1["default"], { key: "features-content" })),
        React.createElement("div", { id: "screenshots", className: " container max-w-full mx-auto", key: "screenshots-section" },
            React.createElement(screenshots_1["default"], { key: "screenshots-content" })),
        React.createElement("div", { id: "heltcenter", className: "bg-slate-100 container max-w-full mx-auto", key: "helpcenter-section", style: { backgroundColor: 'white' } },
            React.createElement("div", { className: "container mx-auto px-4 mt-10 pt-10", key: "help-section-first-12" },
                React.createElement("h1", { className: "text-3xl font-extrabold mb-4 text-center" }, "Help Center"),
                React.createElement("div", { className: "container flex flex-col md:flex-row justify-center items-center md:p-8", key: "help-section-first-13" },
                    React.createElement("div", { className: "p-10 mr-4" },
                        React.createElement(image_1["default"], { src: "/customer-help-center.png", alt: "Image", width: 551, height: 521 })),
                    React.createElement("div", { className: "mt-8 md:mt-0", key: "help-section-first-14" },
                        React.createElement("h2", { className: "text-lg font-extrabold" },
                            React.createElement("span", { className: "font-extrabold text-[#E53A36] text-3xl" }, "S"),
                            React.createElement("span", { className: "font-extrabold text-3xl" }, "mart"),
                            React.createElement("span", { className: "font-extrabold text-[#E53A36] text-3xl" }, "S"),
                            React.createElement("span", { className: "font-extrabold  text-3xl" }, "pend Help Center")),
                        React.createElement("p", { className: "text-md mt-2 text-xl font-medium md:mt-4 max-w-sm ", key: "help-section-first-15" }, "Regular updates and user manuals are readily available for your convenience."),
                        React.createElement("div", { className: "flex mt-4", key: "help-section-first-16" },
                            React.createElement("button", { className: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", type: "submit", onClick: function () { return scrollToSection('contact-us'); }, key: "contact-us" }, "HELP CENTER"))))),
            React.createElement(dowonloads_1["default"], { key: "downloads-content" })),
        React.createElement("div", { id: "contact-us", className: " container max-w-full mx-auto", key: "helpcenter-section", style: { backgroundColor: 'white' } },
            React.createElement(contactUs_1["default"], { key: "contactus" })),
        React.createElement("div", { className: "container max-w-full mx-auto", key: "social-section" },
            React.createElement(social_1["default"], { key: "social-content" }))));
}
exports["default"] = Home;
