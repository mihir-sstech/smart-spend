"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
// Define font configuration
var roboto = google_1.Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
exports.metadata = {
    title: "Smart Spend",
    description: "SSTech - Smart Spend"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("link", { rel: "icon", href: "../favicon1.ico" }),
        React.createElement("body", { className: roboto.className }, children)));
}
exports["default"] = RootLayout;
