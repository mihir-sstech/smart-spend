"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
// Define font configuration
var roboto = google_1.Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
exports.metadata = {
    title: "SmartSpend: Expense Manage Your Money Effortlessly",
    description: "SmartSpend is a powerful expense manager app that helps you track your spending, budget effectively, and reach your financial goals. Sign up for free today and simplify your money management!"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("link", { rel: "icon", href: "../public/favicon.ico" }),
        React.createElement("body", { className: roboto.className }, children)));
}
exports["default"] = RootLayout;
