import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import ProtoLogin from "./pages/ProtoLogin.vue";
import AdminEditUser from "./pages/AdminEditUser.vue";
import AdminEditInventory from "./pages/AdminEditInventory.vue";
import AdminProfile from "./pages/AdminProfile.vue";
import AdminDataInventory from "./pages/AdminDataInventory.vue";
import UserTambahPeminjaman from "./pages/UserTambahPeminjaman.vue";
import AdminDataUser from "./pages/AdminDataUser.vue";
import UserUpdateAdmin from "./pages/UserUpdateAdmin.vue";
import UserProfile from "./pages/UserProfile.vue";
import UserDataHistory from "./pages/UserDataHistory.vue";
import UserDataPeminjaman from "./pages/UserDataPeminjaman.vue";
import UserHalamanUser from "./pages/UserHalamanUser.vue";
import AdminDataHistory from "./pages/AdminDataHistory.vue";
import AdminTambahUser from "./pages/AdminTambahUser.vue";
import AdminTambahInventory from "./pages/AdminTambahInventory.vue";
import AdminUpdateAdmin from "./pages/AdminUpdateAdmin.vue";
import AdminDataPeminjaman from "./pages/AdminDataPeminjaman.vue";
import AdminHalamanAdmin from "./pages/AdminHalamanAdmin.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "ProtoLogin",
    component: ProtoLogin,
  },
  {
    path: "/admin-edit-user",
    name: "AdminEditUser",
    component: AdminEditUser,
  },
  {
    path: "/admin-edit-inventory",
    name: "AdminEditInventory",
    component: AdminEditInventory,
  },
  {
    path: "/admin-profile",
    name: "AdminProfile",
    component: AdminProfile,
  },
  {
    path: "/admin-data-inventory",
    name: "AdminDataInventory",
    component: AdminDataInventory,
  },
  {
    path: "/user-tambah-peminjaman",
    name: "UserTambahPeminjaman",
    component: UserTambahPeminjaman,
  },
  {
    path: "/admin-data-user",
    name: "AdminDataUser",
    component: AdminDataUser,
  },
  {
    path: "/user-update-admin",
    name: "UserUpdateAdmin",
    component: UserUpdateAdmin,
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/user-data-history",
    name: "UserDataHistory",
    component: UserDataHistory,
  },
  {
    path: "/user-data-peminjaman",
    name: "UserDataPeminjaman",
    component: UserDataPeminjaman,
  },
  {
    path: "/user-halaman-user",
    name: "UserHalamanUser",
    component: UserHalamanUser,
  },
  {
    path: "/admin-data-history",
    name: "AdminDataHistory",
    component: AdminDataHistory,
  },
  {
    path: "/admin-tambah-user",
    name: "AdminTambahUser",
    component: AdminTambahUser,
  },
  {
    path: "/admin-tambah-inventory",
    name: "AdminTambahInventory",
    component: AdminTambahInventory,
  },
  {
    path: "/admin-update-admin",
    name: "AdminUpdateAdmin",
    component: AdminUpdateAdmin,
  },
  {
    path: "/admin-data-peminjaman",
    name: "AdminDataPeminjaman",
    component: AdminDataPeminjaman,
  },
  {
    path: "/admin-halaman-admin",
    name: "AdminHalamanAdmin",
    component: AdminHalamanAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "SUIKA-FULL-NEW";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
