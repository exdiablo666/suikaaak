<template>
  <div :class="$style.adminTambahUser">
    <header :class="$style.header">
      <div :class="$style.headerChild" />
      <div :class="$style.sidebar">
        <img :class="$style.sidebarChild" alt="" src="/rectangle-2@2x.png" />
        <div :class="$style.profile">
          <div :class="$style.suikaParent">
            <b :class="$style.suika">SUIKA</b>
            <div :class="$style.admin">Admin</div>
            <div :class="$style.pexelsPhoto23790041" />
            <img :class="$style.eiuserIcon" alt="" src="/eiuser@2x.png" />
          </div>
        </div>
        <div :class="$style.navigationParent">
          <div :class="$style.navigation">
            <div :class="$style.title">
              <div :class="$style.overline">Main</div>
            </div>
            <div :class="$style.link" @click="onLinkContainerClick">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--homesimpledoor@2x.png"
              />
              <div :class="$style.label">Dashboard</div>
            </div>
            <div :class="$style.link" @click="onLinkContainer1Click">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch@2x.png"
              />
              <div :class="$style.label">History</div>
            </div>
            <div :class="$style.dropdown" @click="onDropdownContainerClick">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--reports@2x.png"
                />
                <div :class="$style.label">Master Data</div>
              </div>
            </div>
            <div :class="$style.link" @click="onLinkContainer3Click">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--page@2x.png"
              />
              <div :class="$style.label">Peminjaman</div>
            </div>
            <div :class="$style.dropdown1">
              <div :class="$style.link2">
                <img
                  :class="$style.iconHomeSimpleDoor"
                  alt=""
                  src="/icon--user-1@2x.png"
                />
                <div :class="$style.label">Account</div>
                <img
                  :class="$style.iconChevron"
                  alt=""
                  src="/icon--chevron@2x.png"
                />
              </div>
              <div :class="$style.linksContainer">
                <div :class="$style.link5" @click="onLinkContainer5Click">
                  <div :class="$style.label5">
                    <ul :class="$style.user">
                      <li>User</li>
                    </ul>
                  </div>
                </div>
                <div :class="$style.link6" @click="onLinkContainer6Click">
                  <div :class="$style.label5">
                    <ul :class="$style.user">
                      <li>Edit Profile</li>
                    </ul>
                  </div>
                </div>
                <div :class="$style.line" />
              </div>
            </div>
          </div>
          <img
            :class="$style.signOutAlt1Icon"
            alt=""
            src="/signoutalt-1@2x.png"
          />
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
        <div :class="$style.sidebarItem" />
        <div :class="$style.admin1">ADMIN</div>
        <img
          :class="$style.logoSuikaTransformedPrevUiIcon"
          alt=""
          src="/logo-suikatransformed-prev-ui-1@2x.png"
        />
      </div>
    </header>
    <img
      :class="$style.adminTambahUserChild"
      alt=""
      src="/rectangle-173@2x.png"
    />
    <v-text-field
      :class="$style.adminTambahUserItem"
      color="primary"
      variant="filled"
    />
    <div :class="$style.username">Username</div>
    <div :class="$style.rectangleParent">
      <v-text-field
        :class="$style.groupChild"
        color="primary"
        variant="filled"
      />
      <div :class="$style.nama">Nama</div>
    </div>
    <div :class="$style.adminTambahUserInner" />
    <div :class="$style.tambah" @click="onTambahTextClick">Tambah</div>
    <div :class="$style.groupDiv">
      <div :class="$style.rectangleGroup">
        <v-text-field
          :class="$style.groupItem"
          color="primary"
          variant="filled"
        />
        <div :class="$style.nama">Password</div>
      </div>
    </div>
    <v-select
      :class="$style.groupVselect"
      variant="filled"
      :items="['Admin','User']"
      label="-- Pilih Admin/User--"
      color="primary"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminTambahUser",
    methods: {
      onLinkContainerClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLinkContainer1Click() {
        this.$router.push("/admin-data-history");
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLinkContainer3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLinkContainer5Click() {
        this.$router.push("/admin-data-user");
      },
      onLinkContainer6Click() {
        this.$router.push("/admin-edit-user");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onTambahTextClick() {
        this.$router.push("/admin-data-user");
      },
    },
  });
</script>
<style module>
  .headerChild {
    position: absolute;
    top: 7px;
    left: 270px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .sidebarChild {
    position: absolute;
    top: 9px;
    left: 0px;
    width: 277px;
    height: 1026px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.41%;
    width: 34.16%;
    top: 79.32%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.8px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.4px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.4px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 187.4px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 168px;
    overflow: hidden;
    object-fit: cover;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .profile {
    position: absolute;
    height: 20.32%;
    width: 58.12%;
    top: 9.47%;
    right: 25.99%;
    bottom: 70.21%;
    left: 15.88%;
  }
  .overline {
    position: relative;
    letter-spacing: 0.4px;
    line-height: 12px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .title {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
  }
  .iconHomeSimpleDoor {
    position: relative;
    width: 20px;
    height: 20px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .label {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
  }
  .link {
    align-self: stretch;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
    cursor: pointer;
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .link2 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-xs);
    gap: var(--gap-xs);
  }
  .dropdown {
    align-self: stretch;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
  }
  .iconChevron {
    position: relative;
    width: 16px;
    height: 16px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
  }
  .user {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-base);
  }
  .label5 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
  }
  .link5 {
    border-radius: var(--br-5xs);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 0;
  }
  .link6 {
    border-radius: var(--br-5xs);
    background-color: var(--color-gold);
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-xs);
    box-sizing: border-box;
    cursor: pointer;
    z-index: 1;
  }
  .line {
    position: absolute;
    margin: 0 !important;
    height: 100%;
    top: 0%;
    bottom: 0%;
    left: -13px;
    background-color: var(--color-gainsboro-200);
    width: 2px;
    z-index: 2;
  }
  .linksContainer {
    width: 189px;
    height: 104px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-9xs);
    font-size: var(--font-size-xs);
  }
  .dropdown1 {
    width: 208px;
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .navigation {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    height: 508.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .signOutAlt1Icon {
    position: absolute;
    top: 483.6px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
    object-fit: cover;
  }
  .logout {
    position: absolute;
    top: 481.8px;
    left: 56px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .navigationParent {
    position: absolute;
    top: 308px;
    left: 7px;
    width: 256px;
    height: 508.9px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebarItem {
    position: absolute;
    top: 9px;
    left: 0px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 277px;
    height: 67px;
  }
  .admin1 {
    position: absolute;
    top: 36.5px;
    left: 91px;
    font-size: var(--font-size-5xl);
    font-weight: 800;
    font-family: var(--base-body-bold);
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 1px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 277px;
    height: 1035px;
  }
  .header {
    position: absolute;
    top: -9px;
    left: 0px;
    width: 1440px;
    height: 1035px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminTambahUserChild {
    position: absolute;
    top: 116px;
    left: 349px;
    border-radius: var(--br-xl);
    width: 1011px;
    height: 727px;
    object-fit: cover;
  }
  .adminTambahUserItem {
    width: 701px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 214px;
    left: 490px;
  }
  .username {
    position: absolute;
    top: 173px;
    left: 490px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .groupChild {
    width: 701px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 35px;
    left: 0px;
  }
  .nama {
    position: absolute;
    top: 0px;
    left: 0px;
    font-weight: 500;
    display: inline-block;
    width: 277px;
  }
  .rectangleParent {
    position: absolute;
    top: 292px;
    left: 490px;
    width: 701px;
    height: 95px;
  }
  .adminTambahUserInner {
    position: absolute;
    top: 665px;
    left: 670px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 300px;
    height: 59px;
  }
  .tambah {
    position: absolute;
    top: 681px;
    left: 675px;
    font-size: var(--font-size-5xl);
    font-weight: 500;
    color: var(--color-whitesmoke-100);
    text-align: center;
    display: inline-block;
    width: 295px;
    height: 27px;
    cursor: pointer;
  }
  .groupItem {
    width: 701px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 38px;
    left: 0px;
  }
  .rectangleGroup {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 701px;
    height: 98px;
  }
  .groupDiv {
    position: absolute;
    top: 418px;
    left: 490px;
    width: 701px;
    height: 98px;
  }
  .groupVselect {
    width: 701px;
    position: absolute;
    top: 539px;
    left: 490px;
    font-family: var(--base-body-bold);
    font-weight: 500;
    font-size: var(--font-size-xl);
    color: var(--color-black);
  }
  .adminTambahUser {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
</style>
