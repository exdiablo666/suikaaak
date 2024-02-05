<template>
  <div :class="$style.adminDataUser">
    <img
      :class="$style.pen1Icon"
      alt=""
      src="/pen-1@2x.png"
      @click="onPen1IconClick"
    />
    <div :class="$style.adminDataUserChild" />
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.id">ID</div>
        <img :class="$style.headingItem" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div">1001</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div">1002</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div">1003</div>
        <div :class="$style.titleValueInner" />
      </div>
    </div>
    <div :class="$style.userAccount">User Account</div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading1">
        <div :class="$style.headingChild" />
        <div :class="$style.username">Username</div>
      </div>
      <div :class="$style.titleValue3">
        <div :class="$style.rectangleDiv" />
        <div :class="$style.titleValueChild1" />
        <div :class="$style.suika">Suika</div>
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.irsyad">Irsyad</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue5">
        <div :class="$style.irsyad">Dani</div>
        <div :class="$style.titleValueChild3" />
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading2">
        <div :class="$style.nama">Nama</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.suika1">Suika</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.suika1">Irsyad</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.suika1">Dani</div>
        <div :class="$style.dateValueChild" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading2">
        <div :class="$style.password">Password</div>
        <div :class="$style.headingChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div3">*******</div>
        <div :class="$style.dateValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div3">**********</div>
        <div :class="$style.dateValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.div3">***********</div>
        <div :class="$style.dateValueChild1" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading1">
        <div :class="$style.headingChild" />
        <div :class="$style.role">Role</div>
        <img :class="$style.headingItem" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue3">
        <div :class="$style.rectangleDiv" />
        <div :class="$style.titleValueChild1" />
        <div :class="$style.admin">Admin</div>
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.user">User</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.user">User</div>
        <div :class="$style.titleValueChild7" />
      </div>
    </div>
    <div :class="$style.iconButton" @click="onIconButtonContainerClick">
      <div :class="$style.tambahParent">
        <div :class="$style.tambah">Tambah</div>
        <img :class="$style.component1Icon" alt="" src="/component-1@2x.png" />
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading5">
        <div :class="$style.headingChild" />
        <div :class="$style.action">Action</div>
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.trash1Parent">
          <img :class="$style.trash1Icon" alt="" src="/trash-1@2x.png" />
          <img
            :class="$style.pen1Icon1"
            alt=""
            src="/pen-1@2x.png"
            @click="onPen1Icon1Click"
          />
        </div>
      </div>
      <div :class="$style.actionValue1">
        <div :class="$style.actionValueItem" />
        <div :class="$style.trash1Group">
          <img :class="$style.trash1Icon1" alt="" src="/trash-1@2x.png" />
          <img
            :class="$style.pen1Icon2"
            alt=""
            src="/pen-1@2x.png"
            @click="onPen1Icon2Click"
          />
        </div>
      </div>
      <div :class="$style.actionValue2">
        <div :class="$style.actionValueChild" />
        <div :class="$style.trash1Container">
          <div :class="$style.trash1">
            <img :class="$style.vectorIcon" alt="" src="/trash-1@2x.png" />
          </div>
          <img
            :class="$style.pen1Icon3"
            alt=""
            src="/pen-1@2x.png"
            @click="onPen1Icon3Click"
          />
        </div>
      </div>
    </div>
    <div :class="$style.sidebar">
      <img
        :class="$style.sidebarChild"
        alt=""
        src="/rectangle-2@2x.png"
        data-scroll-to="rectangle"
      />
      <div :class="$style.profile">
        <div :class="$style.suikaParent">
          <b :class="$style.suika2">SUIKA</b>
          <div :class="$style.admin1">Admin</div>
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
            <div :class="$style.label" :onClick="onLabelText3Click">
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
              <div :class="$style.label4">Account</div>
              <img
                :class="$style.iconChevron"
                alt=""
                src="/icon--chevron@2x.png"
              />
            </div>
            <div :class="$style.linksContainer">
              <div :class="$style.link5">
                <div :class="$style.label5" @click="onLabelText5Click">
                  <ul :class="$style.editProfile">
                    <li>User</li>
                  </ul>
                </div>
              </div>
              <div :class="$style.link6">
                <div :class="$style.label5" @click="onLabelText6Click">
                  <ul :class="$style.editProfile">
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
    <div :class="$style.adminDataUserItem" />
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.admin2">ADMIN</div>
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
    name: "AdminDataUser",
    methods: {
      onPen1IconClick() {
        this.$router.push("/admin-edit-inventory");
      },
      onIconButtonContainerClick() {
        this.$router.push("/admin-tambah-user");
      },
      onPen1Icon1Click() {
        this.$router.push("/admin-edit-user");
      },
      onPen1Icon2Click() {
        this.$router.push("/admin-edit-user");
      },
      onPen1Icon3Click() {
        this.$router.push("/admin-edit-user");
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
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLabelText6Click() {
        this.$router.push("/admin-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .pen1Icon {
    position: absolute;
    height: 1.86%;
    width: 0.92%;
    top: 58.3%;
    right: 98.87%;
    bottom: 39.84%;
    left: 0.21%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .adminDataUserChild {
    position: absolute;
    top: 151px;
    left: 309px;
    border-radius: var(--br-xl);
    background-color: var(--color-goldenrod);
    width: 1075px;
    height: 68px;
  }
  .headingChild {
    position: absolute;
    height: 4%;
    width: 100%;
    top: 96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .id {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
  }
  .headingItem {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
    object-fit: cover;
  }
  .heading {
    align-self: stretch;
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #fff;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .div {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
  }
  .titleValueChild {
    position: absolute;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 49px;
  }
  .titleValueInner {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn {
    position: absolute;
    top: 264px;
    left: 322px;
    background-color: var(--light-white);
    width: 120px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .userAccount {
    position: absolute;
    top: 165px;
    left: 344px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    width: 392px;
  }
  .username {
    position: absolute;
    top: 15px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 153px;
  }
  .heading1 {
    align-self: stretch;
    position: relative;
    background: linear-gradient(#eaeaea, #eaeaea), #f7bc39;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .rectangleDiv {
    position: relative;
    background-color: var(--light-white);
    width: 172px;
    height: 49px;
    z-index: 0;
  }
  .titleValueChild1 {
    position: relative;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
    width: 172px;
    height: 1px;
    z-index: 1;
  }
  .suika {
    position: absolute;
    margin: 0 !important;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 153px;
    z-index: 2;
  }
  .titleValue3 {
    align-self: stretch;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .irsyad {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 153px;
  }
  .titleValueChild3 {
    position: absolute;
    height: 1.96%;
    width: 100%;
    top: 98.04%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue5 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 51px;
  }
  .tableColumn1 {
    position: absolute;
    top: 264px;
    left: 442px;
    background-color: var(--color-gray-100);
    width: 153px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .nama {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 234px;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 100.85%;
    top: 98%;
    right: -0.43%;
    bottom: -2%;
    left: -0.43%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading2 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .suika1 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 234px;
  }
  .dateValueChild {
    position: absolute;
    height: 2%;
    width: 100.43%;
    top: 99%;
    right: -0.21%;
    bottom: -1%;
    left: -0.21%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .tableColumn2 {
    position: absolute;
    top: 264px;
    left: 595px;
    background-color: var(--color-gray-100);
    width: 234px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .password {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 192px;
  }
  .headingChild1 {
    position: absolute;
    height: 4%;
    width: 101.04%;
    top: 98%;
    right: -0.52%;
    bottom: -2%;
    left: -0.52%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .div3 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 192px;
  }
  .dateValueChild1 {
    position: absolute;
    height: 2%;
    width: 100.52%;
    top: 99%;
    right: -0.26%;
    bottom: -1%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn3 {
    position: absolute;
    top: 264px;
    left: 829px;
    background-color: var(--color-gray-100);
    width: 192px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .role {
    position: absolute;
    top: 12px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 160px;
  }
  .admin {
    position: absolute;
    margin: 0 !important;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    z-index: 2;
  }
  .user {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
  }
  .titleValueChild7 {
    position: absolute;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn4 {
    position: absolute;
    top: 264px;
    left: 1021px;
    background-color: var(--color-gray-100);
    width: 160px;
    height: 537px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .tambah {
    position: relative;
  }
  .component1Icon {
    position: relative;
    width: 24px;
    height: 22.7px;
    object-fit: cover;
  }
  .tambahParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-3xs);
  }
  .iconButton {
    position: absolute;
    top: 165px;
    left: 1220px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    cursor: pointer;
    text-align: left;
    font-size: var(--base-large-size);
    color: var(--light-white);
    font-family: var(--base-body-bold);
  }
  .action {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 110px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 217px;
    height: 20px;
  }
  .heading5 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-whitesmoke-100);
    height: 50px;
    z-index: 0;
  }
  .actionValueChild {
    position: absolute;
    margin: 0 !important;
    height: 1.96%;
    width: 100%;
    top: 98.04%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 0;
  }
  .trash1Icon {
    position: absolute;
    height: 94.74%;
    width: 27.59%;
    top: 0%;
    right: 0%;
    bottom: 5.26%;
    left: 72.41%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .pen1Icon1 {
    position: absolute;
    height: 100%;
    width: 32.76%;
    top: 0%;
    right: 67.24%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .trash1Parent {
    position: absolute;
    margin: 0 !important;
    height: 37.25%;
    width: 26.36%;
    top: 31.37%;
    right: 36.82%;
    bottom: 31.37%;
    left: 36.82%;
    z-index: 1;
  }
  .actionValue {
    margin: 0 !important;
    position: absolute;
    top: 50px;
    left: 0px;
    background-color: var(--light-white);
    width: 220px;
    height: 51px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    z-index: 1;
  }
  .actionValueItem {
    position: absolute;
    margin: 0 !important;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 0;
  }
  .trash1Icon1 {
    position: absolute;
    top: 0.3px;
    left: 48px;
    width: 16px;
    height: 17.6px;
    object-fit: cover;
  }
  .pen1Icon2 {
    position: absolute;
    height: 100%;
    width: 29.69%;
    top: 0%;
    right: 70.31%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .trash1Group {
    position: absolute;
    margin: 0 !important;
    top: 15.7px;
    left: 81px;
    width: 64px;
    height: 18.6px;
    z-index: 1;
  }
  .actionValue1 {
    margin: 0 !important;
    position: absolute;
    top: 149px;
    left: -3px;
    background-color: var(--light-white);
    width: 220px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    z-index: 2;
  }
  .vectorIcon {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .trash1 {
    position: absolute;
    top: 0px;
    left: 46px;
    width: 16px;
    height: 18px;
  }
  .pen1Icon3 {
    position: absolute;
    height: 100%;
    width: 30.65%;
    top: 0%;
    right: 69.35%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .trash1Container {
    position: absolute;
    margin: 0 !important;
    top: 16px;
    left: 81px;
    width: 62px;
    height: 19px;
    z-index: 1;
  }
  .actionValue2 {
    margin: 0 !important;
    position: absolute;
    top: 98px;
    left: -3px;
    background-color: var(--light-white);
    width: 220px;
    height: 51px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    z-index: 3;
  }
  .tableColumn5 {
    position: absolute;
    top: 264px;
    left: 1181px;
    background-color: var(--color-gray-100);
    width: 220px;
    height: 536px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1025px;
    object-fit: cover;
  }
  .suika2 {
    position: absolute;
    height: 11.43%;
    width: 63.35%;
    top: 80.05%;
    left: 32.92%;
    display: inline-block;
  }
  .admin1 {
    position: absolute;
    top: 190.6px;
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
    height: 187.2px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
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
  .profile {
    position: absolute;
    height: 20.49%;
    width: 59.63%;
    top: 8.67%;
    right: 24.07%;
    bottom: 70.84%;
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
  .editProfile {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-base);
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
    height: 508.4px;
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
    top: 483.1px;
    left: 130px;
    width: 17px;
    height: 15.6px;
    overflow: hidden;
    object-fit: cover;
  }
  .logout {
    position: absolute;
    top: 481.3px;
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
    top: 298.7px;
    left: 7px;
    width: 256px;
    height: 508.4px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: -1.3px;
    left: 0px;
    width: 270px;
    height: 1025px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminDataUserItem {
    position: absolute;
    top: 0px;
    left: 270px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 1px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 273px;
    height: 68.8px;
  }
  .admin2 {
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
    top: -8px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    height: 6.74%;
    width: 19.03%;
    top: -0.1%;
    right: 81.25%;
    bottom: 93.36%;
    left: -0.28%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
  .adminDataUser {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: center;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-body);
  }
</style>
