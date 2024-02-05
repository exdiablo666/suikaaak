<template>
  <div :class="$style.adminUpdateAdmin">
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.profile">
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
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
          <div :class="$style.link1">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch@2x.png"
            />
            <div :class="$style.label1" @click="onLabelText1Click">History</div>
          </div>
          <div :class="$style.dropdown">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--reports@2x.png"
              />
              <div :class="$style.label1" @click="onLabelText2Click">
                Master Data
              </div>
            </div>
          </div>
          <div :class="$style.link1">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page@2x.png"
            />
            <div :class="$style.label1" @click="onLabelText3Click">
              Peminjaman
            </div>
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
              <div :class="$style.link5">
                <div :class="$style.label5" @click="onLabelText5Click">
                  <ul :class="$style.user">
                    <li>User</li>
                  </ul>
                </div>
              </div>
              <div :class="$style.link6">
                <div :class="$style.label5" @click="onLabelText6Click">
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
        <div :class="$style.logout">Logout</div>
      </div>
    </div>
    <div :class="$style.header">
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.adminUpdateAdminChild" />
    <div :class="$style.updateProfile">Update Profile</div>
    <div :class="$style.adminUpdateAdminItem" />
    <v-text-field
      :class="$style.adminUpdateAdminInner"
      color="primary"
      variant="filled"
    />
    <v-text-field
      :class="$style.rectangleVtextfield"
      color="primary"
      variant="filled"
    />
    <v-text-field
      :class="$style.adminUpdateAdminChild1"
      color="primary"
      variant="filled"
    />
    <div :class="$style.nama">Nama</div>
    <div :class="$style.username">Username</div>
    <div :class="$style.password">Password</div>
    <div :class="$style.rectangleDiv" />
    <div :class="$style.update" @click="onUpdateTextClick">Update</div>
    <input :class="$style.rectangleInput" type="file" />
    <div :class="$style.pasFoto">Pas Foto</div>
    <div :class="$style.chooseFile">Choose file</div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.admin">ADMIN</div>
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
    name: "AdminUpdateAdmin",
    methods: {
      onLinkContainerClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        this.$router.push("/admin-data-history");
      },
      onLabelText2Click() {
        this.$router.push("/admin-data-inventory");
      },
      onLabelText3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLabelText6Click() {
        this.$router.push("/admin-profile");
      },
      onUpdateTextClick() {
        this.$router.push("/admin-profile");
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
    height: 1026px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.28%;
    width: 34.16%;
    top: 88.72%;
    left: 32.92%;
    display: inline-block;
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
    height: 20.74%;
    width: 59.63%;
    top: 8.67%;
    right: 24.07%;
    bottom: 70.58%;
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
  .label1 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
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
    cursor: pointer;
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
  }
  .navigationParent {
    position: absolute;
    top: 299px;
    left: 7px;
    width: 256px;
    height: 508.9px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: -2px;
    left: 0px;
    width: 270px;
    height: 1026px;
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
  .adminUpdateAdminChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .updateProfile {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .adminUpdateAdminItem {
    position: absolute;
    top: 237px;
    left: 411px;
    border-radius: var(--br-xl);
    background-color: var(--light-white);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    width: 849px;
    height: 537px;
  }
  .adminUpdateAdminInner {
    width: 806px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 304px;
    left: 420px;
  }
  .rectangleVtextfield {
    width: 806px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 399px;
    left: 420px;
  }
  .adminUpdateAdminChild1 {
    width: 806px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 496px;
    left: 420px;
  }
  .nama {
    position: absolute;
    top: 275px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .username {
    position: absolute;
    top: 371px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .password {
    position: absolute;
    top: 469px;
    left: 445px;
    font-weight: 500;
    display: inline-block;
    width: 319px;
    height: 17px;
  }
  .rectangleDiv {
    position: absolute;
    top: 696px;
    left: 714px;
    border-radius: var(--br-xl);
    background-color: var(--color-red-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 243px;
    height: 45px;
  }
  .update {
    position: absolute;
    top: 708px;
    left: 807px;
    font-size: var(--font-size-5xl);
    font-weight: 500;
    color: var(--color-whitesmoke-100);
    display: inline-block;
    width: 115px;
    height: 21px;
    cursor: pointer;
  }
  .rectangleInput {
    position: absolute;
    top: 587px;
    left: 420px;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 300px;
    height: 60px;
  }
  .pasFoto {
    position: absolute;
    top: 550px;
    left: 451px;
    font-weight: 500;
    display: inline-block;
    width: 392px;
  }
  .chooseFile {
    position: absolute;
    top: 605px;
    left: 519px;
    font-weight: 500;
    display: inline-block;
    width: 142px;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68.8px;
  }
  .admin {
    position: absolute;
    top: 18px;
    left: 88px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: -5px;
    left: 0px;
    border-radius: 41px;
    width: 96px;
    height: 77px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: -7px;
    width: 277px;
    height: 66px;
    font-size: var(--font-size-5xl);
  }
  .adminUpdateAdmin {
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
