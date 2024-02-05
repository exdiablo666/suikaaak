<template>
  <div :class="$style.adminDataHistory">
    <div :class="$style.sidebar">
      <img
        :class="$style.sidebarChild"
        alt=""
        src="/rectangle-2@2x.png"
        data-scroll-to="rectangle"
      />
      <div :class="$style.frame">
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
            <div :class="$style.label" @click="onLabelTextClick">Dashboard</div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.materialSymbolspersonSearchIcon"
              alt=""
              src="/materialsymbolspersonsearch@2x.png"
            />
            <div :class="$style.label" :onClick="onLabelText1Click">
              History
            </div>
          </div>
          <div :class="$style.dropdown" @click="onDropdownContainerClick">
            <div :class="$style.link2">
              <img
                :class="$style.iconHomeSimpleDoor"
                alt=""
                src="/icon--reports@2x.png"
              />
              <div :class="$style.label2">Master Data</div>
            </div>
          </div>
          <div :class="$style.link">
            <img
              :class="$style.iconHomeSimpleDoor"
              alt=""
              src="/icon--page@2x.png"
            />
            <div :class="$style.label" @click="onLabelText3Click">
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
              <div :class="$style.label2">Account</div>
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
              <div :class="$style.link6" @click="onLinkContainer6Click">
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
        <img :class="$style.frameIcon" alt="" src="/frame@2x.png" />
        <div :class="$style.frame1">
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
      </div>
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
    <div :class="$style.adminDataHistoryChild" />
    <div :class="$style.adminDataHistoryItem" />
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.idHistory">ID History</div>
        <img :class="$style.headingInner" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div">101</div>
      </div>
      <div :class="$style.tableColumnChild" />
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.div">102</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.dataHistory">Data History</div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.namaBarang">Nama Barang</div>
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.sonyAlphaA7">Sony Alpha A7 III</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.toyotaAvanza">Toyota Avanza</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.dateStart">Date Start</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">15 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">10 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.dateEnd">Date End</div>
        <img :class="$style.groupIcon" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.desember20232">18 Desember 2023</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.desember20233">12 Desember 2023</div>
        <div :class="$style.titleValueChild5" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading2">
        <div :class="$style.headingChild" />
        <div :class="$style.headingItem" />
        <div :class="$style.kondisi">Kondisi</div>
        <img :class="$style.groupIcon" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.baik">Baik</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.baik">Baik</div>
        <div :class="$style.titleValueChild5" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataHistory",
    methods: {
      onLabelTextClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onDropdownContainerClick() {
        this.$router.push("/admin-data-inventory");
      },
      onLabelText3Click() {
        this.$router.push("/admin-data-peminjaman");
      },
      onLabelText5Click() {
        this.$router.push("/admin-data-user");
      },
      onLinkContainer6Click() {
        this.$router.push("/admin-profile");
      },
      onLogoutTextClick() {
        this.$router.push("/");
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
    height: 1021px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.42%;
    width: 34.16%;
    top: 84.66%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 189.9px;
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
    top: -19.3px;
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
    height: 167.2px;
    overflow: hidden;
    object-fit: cover;
  }
  .suikaParent {
    position: relative;
    width: 161px;
    height: 209.2px;
  }
  .frame {
    position: absolute;
    top: 88.6px;
    left: 44px;
    width: 182px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
  .label2 {
    flex: 1;
    position: relative;
    letter-spacing: -0.02em;
    line-height: 20px;
    font-weight: 500;
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
    height: 506.4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .frameIcon {
    position: absolute;
    top: 481.2px;
    left: 0px;
    width: 147px;
    height: 15.6px;
    overflow: hidden;
    object-fit: cover;
  }
  .logout {
    position: relative;
    font-weight: 500;
    display: inline-block;
    width: 51px;
    height: 15.6px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .frame1 {
    position: absolute;
    top: 479.4px;
    left: 0px;
    width: 107px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-family: var(--font-montserrat);
  }
  .navigationParent {
    position: absolute;
    top: 297.6px;
    left: 7px;
    width: 256px;
    height: 506.4px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .groupChild {
    position: absolute;
    top: 4px;
    left: 6px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 270px;
    height: 68px;
  }
  .admin1 {
    position: absolute;
    top: 26.3px;
    left: 96px;
    font-weight: 800;
    display: inline-block;
    width: 77px;
    height: 26px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 103px;
    height: 78px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: -7px;
    left: -6px;
    width: 276px;
    height: 78px;
    font-size: var(--font-size-5xl);
    font-family: var(--base-body-bold);
  }
  .sidebar {
    position: absolute;
    top: 2px;
    left: 0px;
    width: 270px;
    height: 1021px;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminDataHistoryChild {
    position: absolute;
    top: -2px;
    left: 270px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .adminDataHistoryItem {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
  }
  .headingChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
  }
  .headingItem {
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
  .idHistory {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 165px;
  }
  .headingInner {
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
    width: 173px;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .tableColumnChild {
    position: relative;
    background-color: var(--light-light);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    width: 173px;
    height: 1px;
  }
  .titleValueChild {
    position: absolute;
    height: 98%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .titleValueItem {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .tableColumn {
    position: absolute;
    top: 244px;
    left: 333px;
    width: 173px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dataHistory {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    width: 246px;
  }
  .namaBarang {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
  }
  .sonyAlphaA7 {
    position: absolute;
    top: 15px;
    left: -0.2px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 191.1px;
    transform: rotate(-0.98deg);
    transform-origin: 0 0;
  }
  .titleValueChild1 {
    position: absolute;
    height: 6%;
    width: 101.06%;
    top: 96%;
    right: -0.53%;
    bottom: -2%;
    left: -0.53%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .toyotaAvanza {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 189px;
  }
  .tableColumn1 {
    position: absolute;
    top: 245px;
    left: 506px;
    width: 189px;
    height: 548px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dateStart {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 208px;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 100.92%;
    top: 98%;
    right: -0.46%;
    bottom: -2%;
    left: -0.46%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading2 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gainsboro-200);
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .dateValueChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-white);
  }
  .desember2023 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 218px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.46%;
    top: 99%;
    right: -0.23%;
    bottom: -1%;
    left: -0.23%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn2 {
    position: absolute;
    top: 245px;
    left: 695px;
    width: 218px;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .dateEnd {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 202px;
  }
  .groupIcon {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 22px;
    object-fit: cover;
    display: none;
  }
  .desember20232 {
    position: absolute;
    top: 14.4px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 206.7px;
    transform: rotate(-0.19deg);
    transform-origin: 0 0;
  }
  .titleValueChild5 {
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
  .desember20233 {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 211px;
  }
  .tableColumn3 {
    position: absolute;
    top: 245px;
    left: 913px;
    width: 211px;
    height: 551px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .kondisi {
    position: absolute;
    top: 17px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 212px;
  }
  .baik {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 212px;
  }
  .tableColumn4 {
    position: absolute;
    top: 245px;
    left: 1124px;
    width: 212px;
    height: 551px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .adminDataHistory {
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
