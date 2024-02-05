<template>
  <div :class="$style.adminProfile">
    <div :class="$style.adminProfileChild" />
    <div :class="$style.profile">Profile</div>
    <img :class="$style.adminProfileItem" alt="" src="/group-31@2x.png" />
    <div :class="$style.namaSuikaContainer">
      <p :class="$style.namaSuika">Nama : Suika</p>
      <p :class="$style.namaSuika">&nbsp;</p>
      <p :class="$style.namaSuika">Username : Suika</p>
      <p :class="$style.namaSuika">&nbsp;</p>
      <p :class="$style.namaSuika">Password : *******</p>
    </div>
    <div :class="$style.adminProfileInner" />
    <div :class="$style.edit" @click="onEditTextClick">Edit</div>
    <div :class="$style.sidebar">
      <img :class="$style.sidebarChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.profile1">
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
          <div :class="$style.admin">Admin</div>
          <div :class="$style.pexelsPhoto23790041" />
          <img :class="$style.eiuserIcon" alt="" src="/eiuser@2x.png" />
        </div>
      </div>
    </div>
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
      <div :class="$style.dropdown">
        <div :class="$style.link2">
          <img
            :class="$style.iconHomeSimpleDoor"
            alt=""
            src="/icon--reports@2x.png"
          />
          <div :class="$style.label" @click="onLabelText2Click">
            Master Data
          </div>
        </div>
      </div>
      <div :class="$style.link">
        <img
          :class="$style.iconHomeSimpleDoor"
          alt=""
          src="/icon--page@2x.png"
        />
        <div :class="$style.label" @click="onLabelText3Click">Peminjaman</div>
      </div>
      <div :class="$style.dropdown1">
        <div :class="$style.link2">
          <img
            :class="$style.iconHomeSimpleDoor"
            alt=""
            src="/icon--user-1@2x.png"
          />
          <div :class="$style.label4">Account</div>
          <img :class="$style.iconChevron" alt="" src="/icon--chevron@2x.png" />
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
            <div :class="$style.label6">
              <ul :class="$style.user">
                <li>Edit Profile</li>
              </ul>
            </div>
          </div>
          <div :class="$style.line" />
        </div>
      </div>
    </div>
    <div :class="$style.rectangleDiv" />
    <img :class="$style.vectorIcon" alt="" src="/vector@2x.png" />
    <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
    <div :class="$style.rectangleParent">
      <div :class="$style.groupChild" />
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
    name: "AdminProfile",
    methods: {
      onEditTextClick() {
        this.$router.push("/admin-update-admin");
      },
      onLabelTextClick() {
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
      onLogoutTextClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .adminProfileChild {
    position: absolute;
    top: 116px;
    left: 321px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .profile {
    position: absolute;
    top: 130px;
    left: 381px;
    font-weight: 500;
    font-family: var(--base-body-bold);
    display: inline-block;
    width: 392px;
  }
  .adminProfileItem {
    position: absolute;
    top: 218px;
    left: 381px;
    width: 235px;
    height: 263px;
    object-fit: cover;
  }
  .namaSuika {
    margin: 0;
  }
  .namaSuikaContainer {
    position: absolute;
    top: 234px;
    left: 638px;
    font-weight: 500;
    display: inline-block;
    width: 442px;
  }
  .adminProfileInner {
    position: absolute;
    top: 540px;
    left: 1039px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 168px;
    height: 68px;
  }
  .edit {
    position: absolute;
    top: 557px;
    left: 1086px;
    font-weight: 500;
    display: inline-block;
    width: 74px;
    cursor: pointer;
  }
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 277px;
    height: 1025px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.43%;
    width: 63.32%;
    top: 79.1%;
    left: 32.93%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.6px;
    left: 54.4px;
    font-size: var(--base-body-size);
    font-weight: 500;
    color: var(--color-gold);
    display: inline-block;
    width: 49.2px;
    height: 19.4px;
  }
  .pexelsPhoto23790041 {
    position: absolute;
    top: -19.4px;
    left: 10.3px;
    border-radius: var(--br-20xl);
    background-color: var(--color-gold);
    width: 154.9px;
    height: 187.2px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 165.2px;
    height: 167.8px;
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
  .profile1 {
    position: absolute;
    height: 20.49%;
    width: 59.64%;
    top: 8.67%;
    right: 24.08%;
    bottom: 70.84%;
    left: 16.28%;
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: -3px;
    width: 277px;
    height: 1025px;
    font-size: var(--font-size-mid);
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
  .label4 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
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
  .label6 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 16px;
    font-weight: 500;
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
    top: 294px;
    left: 9px;
    width: 256px;
    height: 508.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .rectangleDiv {
    position: absolute;
    top: 0px;
    left: 274px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .vectorIcon {
    position: absolute;
    top: 730px;
    left: 147px;
    width: 17px;
    height: 11.7px;
    object-fit: cover;
  }
  .logout {
    position: absolute;
    top: 726px;
    left: 77px;
    font-size: var(--base-body-size);
    font-weight: 500;
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .groupChild {
    position: absolute;
    top: 2px;
    left: 7px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 274px;
    height: 68px;
  }
  .admin1 {
    position: absolute;
    top: 24.4px;
    left: 95px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 26.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 102px;
    height: 73px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -2px;
    left: -7px;
    width: 281px;
    height: 73px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-body-bold);
  }
  .adminProfile {
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
