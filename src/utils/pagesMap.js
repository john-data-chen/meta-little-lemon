const pages = new Map();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("booking", {
  name: "Booking",
  path: "/booking",
  anchorable: true,
});
pages.set("login", { name: "Login", path: "/login", anchorable: true });
pages.set("order", { name: "Order", path: "/order", anchorable: true });
pages.set("menu", { name: "Menu", path: "/menu", anchorable: true });
pages.set("about", { name: "About", path: "/about", anchorable: true });

export default pages;
