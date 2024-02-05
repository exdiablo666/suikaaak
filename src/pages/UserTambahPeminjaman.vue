<template>
  <div :class="$style.userTambahPeminjaman">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.suikaParent">
        <b :class="$style.suika">USER</b>
        <div :class="$style.admin">Admin</div>
        <div :class="$style.pexelsPhoto23790041" />
        <img :class="$style.eiuserIcon" alt="" src="/eiuser@2x.png" />
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
            <div :class="$style.label" @click="onLabelTextClick">Dashboard</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch@2x.png"
            />
            <div :class="$style.label" @click="onLabelText1Click">History</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page@2x.png"
            />
            <div :class="$style.label" @click="onLabelText2Click">
              Peminjaman
            </div>
          </div>
          <div :class="$style.dropdown">
            <div :class="$style.link3">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--user-1@2x.png"
              />
              <div :class="$style.label" @click="onLabelText3Click">
                Account
              </div>
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
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
      <div :class="$style.user">User</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.userTambahPeminjamanChild" />
    <v-text-field
      :class="$style.userTambahPeminjamanItem"
      label="Date Start"
      color="primary"
      type="datetime-local"
    />
    <div :class="$style.rectangleGroup" @click="onGroupContainer2Click">
      <div :class="$style.groupItem" />
      <div :class="$style.tambah">Tambah</div>
    </div>
    <div :class="$style.tambahPeminjaman">Tambah Peminjaman</div>
    <v-select
      :class="$style.groupVselect"
      variant="filled"
      label="Nama Inventory"
      :items="['Kijang inova','Leica Q2','Ruang meeting Sawitsari 2']"
      color="primary"
    />
    <v-text-field
      :class="$style.userTambahPeminjamanInner"
      label="Date End"
      color="primary"
      type="datetime-local"
    />
    <div :class="$style.rectangleContainer">
      <v-text-field
        :class="$style.groupInner"
        color="primary"
        variant="filled"
      />
      <div :class="$style.deskripsi">Deskripsi</div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserTambahPeminjaman",
    methods: {
      onLabelTextClick() {
        this.$router.push("/user-halaman-user");
      },
      onLabelText1Click() {
        this.$router.push("/user-data-history");
      },
      onLabelText2Click() {
        this.$router.push("/user-data-peminjaman");
      },
      onLabelText3Click() {
        this.$router.push("/user-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onGroupContainer2Click() {
        this.$router.push("/user-data-peminjaman");
      },
    },
  });
</script>
<style module>
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1032px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.3%;
    width: 34.16%;
    top: 88.7%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 189.5px;
    left: 53px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 48px;
    height: 19.3px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.8px;
    left: 10px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 151px;
    height: 186.5px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 152px;
    overflow: hidden;
    object-fit: cover;
  }
  .suikaParent {
    position: absolute;
    height: 20.71%;
    width: 59.63%;
    top: 8.72%;
    right: 24.07%;
    bottom: 70.57%;
    left: 16.3%;
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
    cursor: pointer;
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
  .link3 {
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
    height: 156px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .navigation {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
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
    top: 364.8px;
    left: 120px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
    object-fit: cover;
  }
  .logout {
    position: absolute;
    top: 363px;
    left: 46px;
    font-weight: 500;
    font-family: var(--font-montserrat);
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .navigationParent {
    position: absolute;
    top: 298px;
    left: 7px;
    width: 256px;
    height: 400px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: -2px;
    left: 0px;
    width: 270px;
    height: 1021px;
    font-size: var(--font-size-mid);
    font-family: var(--font-montserrat);
  }
  .headerChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 270px;
    width: 1170px;
    height: 68px;
  }
  .groupChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 68px;
  }
  .user {
    position: absolute;
    top: 22.4px;
    left: 90px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 26.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 87px;
    height: 68px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -2px;
    left: -4px;
    width: 274px;
    height: 68px;
  }
  .userTambahPeminjamanChild {
    position: absolute;
    top: 95px;
    left: 300px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    width: 1100px;
    height: 834px;
  }
  .userTambahPeminjamanItem {
    position: absolute;
    top: 305px;
    left: 376px;
  }
  .groupItem {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 310.2px;
    height: 60px;
  }
  .tambah {
    position: absolute;
    top: 16px;
    left: 5.2px;
    font-weight: 500;
    display: inline-block;
    width: 305px;
  }
  .rectangleGroup {
    position: absolute;
    top: 768px;
    left: 695px;
    width: 310.2px;
    height: 60px;
    cursor: pointer;
    text-align: center;
    color: var(--color-whitesmoke-100);
  }
  .tambahPeminjaman {
    position: absolute;
    top: 129px;
    left: 376px;
    font-size: 32px;
    font-weight: 500;
    display: inline-block;
    width: 470px;
  }
  .groupVselect {
    width: 724.8px;
    position: absolute;
    top: 202px;
    left: 376.5px;
    font-family: var(--base-body-bold);
    font-weight: 500;
    font-size: var(--font-size-xl);
    color: var(--color-black);
  }
  .userTambahPeminjamanInner {
    position: absolute;
    top: 426px;
    left: 376.5px;
  }
  .groupInner {
    width: 725px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 37px;
    left: 0px;
  }
  .deskripsi {
    position: absolute;
    top: 0px;
    left: 28.9px;
    font-weight: 500;
    display: inline-block;
    width: 405.3px;
  }
  .rectangleContainer {
    position: absolute;
    top: 557px;
    left: 376px;
    width: 725px;
    height: 167px;
    font-size: var(--font-size-xl);
  }
  .userTambahPeminjaman {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
</style>
