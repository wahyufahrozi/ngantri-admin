import React from "react";

// const Stay = React.lazy(() => import("./views/Stay/Forms"));
const ListKesehatan = React.lazy(() =>
  import("./views/ListKesehatan/ListKesehatan")
);
const ListInstansi = React.lazy(() =>
  import("./views/ListInstansi/ListInstansi")
);
const Login = React.lazy(() => import("./views/Pages/Login"));
const Transactions = React.lazy(() => import("./views/Transactions/Charts"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
// const Placetostay = React.lazy(() => import("./views/Placetostay/Forms"));
// const Experience = React.lazy(() => import("./views/Experience/Forms"));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/login", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/listkesehatan", name: "List Kesehatan", component: ListKesehatan },
  { path: "/transactions", name: "Transactions", component: Transactions },
  { path: "/listinstansi", name: "List Instansi", component: ListInstansi }
];

export default routes;
