export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      title: true,
      name: "Managements",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },

    {
      name: "Transaksi",
      url: "/transactions",
      icon: "icon-list"
    },
    {
      name: "List Kesehatan",
      url: "/listkesehatan",
      icon: "icon-shield"
    },
    {
      name: "List Instansi",
      url: "/listinstansi",
      icon: "icon-home"
    }

    // {
    //   name: "Place to stay",
    //   url: "/placetostay",
    //   icon: "icon-home"
    // }
  ]
};
