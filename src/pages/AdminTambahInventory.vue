<template>
  <div :class="$style.adminTambahInventory">
    <div :class="$style.header">
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
            <div :class="$style.link">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--homesimpledoor@2x.png"
              />
              <div :class="$style.label">Dashboard</div>
            </div>
            <div :class="$style.link1" @click="onLinkContainer1Click">
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
            <div :class="$style.link1" @click="onLinkContainer3Click">
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
      </div>
      <div :class="$style.rectangleParent">
        <div :class="$style.groupChild" />
        <v-text-field
          :class="$style.groupItem"
          color="primary"
          variant="filled"
        />
        <div :class="$style.nama">Nama</div>
        <v-text-field
          :class="$style.groupInner"
          color="primary"
          variant="filled"
          label="Deskripsi"
        />
        <div :class="$style.rectangleGroup">
          <div :class="$style.rectangleDiv" />
          <div :class="$style.tambah" @click="onTambahTextClick">Tambah</div>
        </div>
        <v-select
          :class="$style.groupVselect"
          variant="filled"
          :items="['Kendaraan','Fasilitas','Peralatan']"
          label="Kategori"
          color="primary"
          model-value="-- Pilih Kategori--"
        />
      </div>
      <div :class="$style.headerItem" />
      <div :class="$style.tambahDataInventory">Tambah Data Inventory</div>
    </div>
    <div :class="$style.rectangleContainer">
      <div :class="$style.groupChild1" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminTambahInventory",
    methods: {
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
        this.$router.push("/admin-data-inventory");
      },
    },
  });
</script>
<style module>
  .headerChild {
    position: absolute;
    top: 0px;
    left: 270px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1026px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.41%;
    top: 78.93%;
    left: calc(50% - 27.5px);
    display: inline-block;
    width: 55px;
  }
  .admin {
    position: absolute;
    top: 190.8px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    text-align: left;
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
    top: 0%;
    bottom: 0%;
    left: calc(50% - 80.5px);
    width: 161px;
  }
  .profile {
    position: absolute;
    height: 20.5%;
    top: 8.67%;
    bottom: 70.83%;
    left: calc(50% - 91px);
    width: 161px;
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
  }
  .materialSymbolspersonSearchIcon {
    position: relative;
    width: 20px;
    height: 21px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .link1 {
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
    top: 299px;
    left: 7px;
    width: 256px;
    height: 508.9px;
    text-align: left;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 270px;
    height: 1026px;
    text-align: center;
    font-family: var(--font-montserrat);
  }
  .groupChild {
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    width: 940px;
    height: 596px;
  }
  .groupItem {
    width: 631px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 74.6px;
    left: 111px;
  }
  .nama {
    position: absolute;
    top: 39px;
    left: 138.9px;
    font-weight: 500;
    display: inline-block;
    width: 352.9px;
    height: 22.2px;
  }
  .groupInner {
    width: 631px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 151.7px;
    left: 111px;
    font-family: var(--base-body-bold);
    font-weight: 500;
    font-size: var(--font-size-xl);
    color: var(--color-black);
  }
  .rectangleDiv {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 270.1px;
    height: 57.8px;
  }
  .tambah {
    position: absolute;
    top: 15.4px;
    left: 4.5px;
    font-weight: 500;
    display: inline-block;
    width: 265.6px;
    height: 27px;
    cursor: pointer;
  }
  .rectangleGroup {
    position: absolute;
    top: 478px;
    left: 292px;
    width: 270.1px;
    height: 57.8px;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-whitesmoke-100);
  }
  .groupVselect {
    width: 631px;
    position: absolute;
    top: 357px;
    left: 111px;
    font-family: var(--base-body-bold);
    font-weight: 500;
    font-size: var(--font-size-xl);
    color: var(--color-black);
  }
  .rectangleParent {
    position: absolute;
    top: 250px;
    left: 335px;
    width: 938px;
    height: 594px;
    font-size: var(--font-size-xl);
  }
  .headerItem {
    position: absolute;
    top: 107px;
    left: 301px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .tambahDataInventory {
    position: absolute;
    top: 120px;
    left: 335px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    display: inline-block;
    width: 392px;
    height: 43px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 0px;
    width: 1440px;
    height: 1028px;
  }
  .groupChild1 {
    position: absolute;
    top: 0px;
    left: 3px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 68px;
  }
  .admin1 {
    position: absolute;
    top: 21px;
    left: 85px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 25.2px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 93px;
    height: 73px;
    object-fit: cover;
  }
  .rectangleContainer {
    position: absolute;
    top: -2px;
    left: -3px;
    width: 273px;
    height: 73px;
    font-size: var(--font-size-5xl);
  }
  .adminTambahInventory {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
</style>
