const pages = new Map();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("booking", {
  name: "Booking",
  path: "/booking",
  anchorable: true,
});
pages.set("login", { name: "Login", path: "/login", anchorable: true });

export default pages;
