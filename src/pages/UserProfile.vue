<template>
  <div :class="$style.userProfile">
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
    <div :class="$style.userProfileChild" />
    <div :class="$style.profile">Profile</div>
    <img :class="$style.profileIcon" alt="" src="/group-31@2x.png" />
    <div :class="$style.namaUserContainer">
      <p :class="$style.namaUser">Nama : User</p>
      <p :class="$style.namaUser">&nbsp;</p>
      <p :class="$style.namaUser">Username : User</p>
      <p :class="$style.namaUser">&nbsp;</p>
      <p :class="$style.namaUser">Password : *******</p>
    </div>
    <div :class="$style.userProfileItem" />
    <div :class="$style.edit" @click="onEditTextClick">Edit</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserProfile",
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
      onEditTextClick() {
        this.$router.push("/user-update-admin");
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
    top: 0px;
    left: -4px;
    width: 270px;
    height: 1021px;
    font-size: var(--font-size-mid);
  }
  .headerChild {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    width: 1174px;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -2px;
    left: 266px;
    width: 1174px;
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
    width: 266px;
    height: 66px;
  }
  .user {
    position: absolute;
    top: 21.7px;
    left: 88.7px;
    font-weight: 800;
    display: inline-block;
    width: 75.9px;
    height: 25.3px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 85.7px;
    height: 66px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: -4px;
    width: 270px;
    height: 66px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-body-bold);
  }
  .userProfileChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .profile {
    position: absolute;
    top: 138px;
    left: 333px;
    font-weight: 500;
    font-family: var(--base-body-bold);
    display: inline-block;
    width: 392px;
  }
  .profileIcon {
    position: absolute;
    top: 195px;
    left: 333px;
    width: 235px;
    height: 263px;
    object-fit: cover;
  }
  .namaUser {
    margin: 0;
  }
  .namaUserContainer {
    position: absolute;
    top: 241px;
    left: 607px;
    font-weight: 500;
    display: inline-block;
    width: 442px;
  }
  .userProfileItem {
    position: absolute;
    top: 510px;
    left: 1180px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 168px;
    height: 68px;
  }
  .edit {
    position: absolute;
    top: 525px;
    left: 1237px;
    font-weight: 500;
    display: inline-block;
    width: 74px;
    cursor: pointer;
  }
  .userProfile {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-17xl);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
</style>
