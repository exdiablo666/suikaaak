<template>
  <div :class="$style.adminDataPeminjaman">
    <div :class="$style.header">
      <div :class="$style.sidebar">
        <img
          :class="$style.sidebarChild"
          alt=""
          src="/rectangle-2@2x.png"
          data-scroll-to="rectangle"
        />
        <div :class="$style.suikaParent">
          <b :class="$style.suika">SUIKA</b>
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
              <div :class="$style.label" @click="onLabelTextClick">
                Dashboard
              </div>
            </div>
            <div :class="$style.link">
              <img
                :class="$style.materialSymbolspersonSearchIcon"
                alt=""
                src="/materialsymbolspersonsearch@2x.png"
              />
              <div :class="$style.label" @click="onLabelText1Click">
                History
              </div>
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
          <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
        </div>
      </div>
      <div :class="$style.headerChild" />
    </div>
    <div :class="$style.adminDataPeminjamanChild" />
    <div :class="$style.dataPeminjaman">Data Peminjaman</div>
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.action">Action</div>
        <div :class="$style.headingChild" />
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
      </div>
      <div :class="$style.actionValue1">
        <div :class="$style.actionValueChild" />
        <img :class="$style.vectorIcon" alt="" src="/vector@2x.png" />
      </div>
      <img :class="$style.trash1Icon" alt="" src="/trash-1@2x.png" />
      <div :class="$style.actionValue2">
        <div :class="$style.actionValueChild" />
        <img :class="$style.vectorIcon1" alt="" src="/vector@2x.png" />
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading1">
        <div :class="$style.headingItem" />
        <div :class="$style.headingInner" />
        <div :class="$style.validasi">Validasi</div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue3">
          <div :class="$style.rectangleDiv" />
          <div :class="$style.actionValueChild1" />
        </div>
        <div :class="$style.iconButton">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
        <div :class="$style.iconButton1">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Ditolak</div>
          </div>
        </div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue4">
          <div :class="$style.rectangleDiv" />
          <div :class="$style.actionValueChild1" />
        </div>
        <div :class="$style.iconButton2">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
      </div>
      <div :class="$style.actionValueParent">
        <div :class="$style.actionValue4">
          <div :class="$style.rectangleDiv" />
          <div :class="$style.actionValueChild1" />
        </div>
        <div :class="$style.iconButton3">
          <div :class="$style.disetujuiWrapper">
            <div :class="$style.disetujui">Disetujui</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading2">
        <div :class="$style.headingItem" />
        <div :class="$style.dataEnd">Data End</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember2023">18 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20231">18 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20232">12 Desember 2023</div>
        <div :class="$style.dateValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading3">
        <div :class="$style.headingItem" />
        <div :class="$style.headingInner" />
        <div :class="$style.nama">Nama</div>
        <div :class="$style.antDesigncaretDownFilledWrapper">
          <div :class="$style.antDesigncaretDownFilled" />
        </div>
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueChild" />
        <div :class="$style.ruangMeetingSawitsariContainer">
          <span :class="$style.ruangMeetingSawitsariContainer1">
            <p :class="$style.ruangMeeting">Ruang Meeting</p>
            <p :class="$style.ruangMeeting">Sawitsari 1</p>
          </span>
        </div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.toyotaAvanza">Toyota Avanza</div>
        <div :class="$style.titleValueChild1" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.sonyAlphaA7">Sony Alpha A7 III</div>
        <div :class="$style.titleValueChild1" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading2">
        <div :class="$style.headingItem" />
        <div :class="$style.dataStart">Data Start</div>
        <div :class="$style.headingChild5" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">15 Desember 2023</div>
        <div :class="$style.dateValueChild5" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">15 Desember 2023</div>
        <div :class="$style.dateValueChild5" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.desember20233">10 Desember 2023</div>
        <div :class="$style.dateValueChild5" />
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading5">
        <div :class="$style.headingItem" />
        <div :class="$style.headingInner" />
        <div :class="$style.idPeminjaman">ID Peminjaman</div>
        <img :class="$style.groupIcon" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.div">1</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.div1">2</div>
        <div :class="$style.titleValueChild5" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.titleValueInner" />
        <div :class="$style.div2">3</div>
        <div :class="$style.titleValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn6">
      <div :class="$style.heading2">
        <div :class="$style.headingItem" />
        <div :class="$style.deskripsi">Deskripsi</div>
        <div :class="$style.headingChild9" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">Untuk acara Rapat</div>
        <div :class="$style.dateValueChild11" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">Untuk acara Kantor</div>
        <div :class="$style.dateValueChild11" />
      </div>
      <div :class="$style.dateValue">
        <div :class="$style.dateValueChild" />
        <div :class="$style.untukAcaraRapat">untuk dokumentasi</div>
        <div :class="$style.dateValueChild11" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataPeminjaman",
    methods: {
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
  .sidebarChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1025px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.43%;
    width: 63.35%;
    top: 79.1%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
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
    position: relative;
    width: 270px;
    height: 1025px;
  }
  .headerChild {
    position: relative;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .header {
    position: absolute;
    top: -1px;
    left: 0px;
    height: 1025px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .adminDataPeminjamanChild {
    position: absolute;
    top: 124px;
    left: 298px;
    border-radius: var(--br-xl);
    background-color: var(--color-orange);
    width: 1075px;
    height: 68px;
  }
  .dataPeminjaman {
    position: absolute;
    top: 138px;
    left: 333px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    display: inline-block;
    width: 392px;
  }
  .action {
    position: relative;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 20px;
    flex-shrink: 0;
  }
  .headingChild {
    position: relative;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-border-light);
    box-sizing: border-box;
    width: 129px;
    height: 2px;
  }
  .heading {
    background: linear-gradient(#eaeaea, #eaeaea), #555050;
    width: 130px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-xs);
    z-index: 0;
  }
  .actionValueChild {
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
  .actionValue {
    background-color: var(--light-white);
    width: 131px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
  }
  .vectorIcon {
    position: absolute;
    margin: 0 !important;
    top: 16px;
    left: 66px;
    width: 9.5px;
    height: 18px;
    object-fit: contain;
    z-index: 1;
  }
  .actionValue1 {
    background-color: var(--light-white);
    width: 131px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
    z-index: 2;
  }
  .trash1Icon {
    position: absolute;
    margin: 0 !important;
    top: 65px;
    left: 65px;
    width: 10px;
    height: 18px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    z-index: 3;
  }
  .vectorIcon1 {
    position: absolute;
    margin: 0 !important;
    top: 17px;
    left: 66px;
    width: 9.5px;
    height: 18px;
    object-fit: contain;
    z-index: 1;
  }
  .actionValue2 {
    background-color: var(--light-white);
    width: 131px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
    z-index: 4;
  }
  .tableColumn {
    position: absolute;
    top: 240px;
    left: 1236px;
    height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 4px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 269px;
    height: 68px;
  }
  .admin1 {
    position: absolute;
    top: 27.5px;
    left: 91px;
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
    top: -1px;
    left: -3px;
    width: 277px;
    height: 68px;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
  .headingItem {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
  }
  .headingInner {
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
  .validasi {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 122px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 243px;
    height: 20px;
  }
  .heading1 {
    position: relative;
    width: 178px;
    height: 50px;
    text-align: center;
    font-size: var(--base-body-size);
    color: var(--light-dark);
  }
  .rectangleDiv {
    position: relative;
    background-color: var(--light-white);
    width: 178px;
    height: 50px;
    z-index: 0;
  }
  .actionValueChild1 {
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
    z-index: 1;
  }
  .actionValue3 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 178px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .disetujui {
    position: relative;
  }
  .disetujuiWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .iconButton {
    position: absolute;
    top: 10.8px;
    left: 28.2px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 68.4px;
    height: 32.3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .iconButton1 {
    position: absolute;
    top: 10.8px;
    left: 97px;
    border-radius: var(--br-xl);
    background-color: #fe0000;
    box-shadow: var(--small);
    width: 68.4px;
    height: 32.3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .actionValueParent {
    position: relative;
    width: 178px;
    height: 50px;
  }
  .actionValue4 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 178px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .iconButton2 {
    position: absolute;
    top: 9px;
    left: 54px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 70.4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .iconButton3 {
    position: absolute;
    top: 5px;
    left: 54px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    width: 70.4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
  }
  .tableColumn1 {
    position: absolute;
    top: 240px;
    left: 1058px;
    width: 178px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--base-large-size);
    color: var(--light-white);
    font-family: var(--base-body-bold);
  }
  .dataEnd {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 155px;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 101.27%;
    top: 98%;
    right: -0.64%;
    bottom: -2%;
    left: -0.64%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .heading2 {
    align-self: stretch;
    position: relative;
    height: 50px;
    text-align: center;
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
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 152px;
    height: 50px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.64%;
    top: 99%;
    right: -0.32%;
    bottom: -1%;
    left: -0.32%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue {
    align-self: stretch;
    position: relative;
    height: 50px;
  }
  .desember20231 {
    position: absolute;
    top: 3px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 141px;
    height: 47px;
  }
  .desember20232 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 155px;
    height: 50px;
  }
  .tableColumn2 {
    position: absolute;
    top: 240px;
    left: 709px;
    width: 157px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .nama {
    position: absolute;
    top: 15px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 147px;
  }
  .antDesigncaretDownFilled {
    position: absolute;
    top: 12px;
    right: 0px;
    width: 12px;
    height: 12px;
    overflow: hidden;
  }
  .antDesigncaretDownFilledWrapper {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 12px;
    height: 12px;
  }
  .heading3 {
    position: relative;
    background-color: var(--color-whitesmoke-100);
    width: 143px;
    height: 50px;
    text-align: center;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .titleValueChild {
    position: absolute;
    height: 98%;
    width: 100.56%;
    top: 0%;
    right: -0.56%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .ruangMeeting {
    margin: 0;
  }
  .ruangMeetingSawitsariContainer1 {
    width: 100%;
  }
  .ruangMeetingSawitsariContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 175px;
    height: 49px;
  }
  .titleValueItem {
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
  .titleValueInner {
    position: absolute;
    height: 98%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 2%;
    left: 0%;
    background-color: var(--light-white);
  }
  .toyotaAvanza {
    position: absolute;
    top: 3px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 138px;
    height: 47px;
  }
  .titleValueChild1 {
    position: absolute;
    height: 6%;
    width: 101.4%;
    top: 96%;
    right: -0.7%;
    bottom: -2%;
    left: -0.7%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .sonyAlphaA7 {
    position: absolute;
    top: 10px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 143px;
    height: 21px;
  }
  .tableColumn3 {
    position: absolute;
    top: 240px;
    left: 418px;
    width: 143px;
    height: 531px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .dataStart {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 157px;
  }
  .headingChild5 {
    position: absolute;
    height: 4%;
    width: 101.35%;
    top: 98%;
    right: -0.68%;
    bottom: -2%;
    left: -0.68%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .desember20233 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 157px;
    height: 50px;
  }
  .dateValueChild5 {
    position: absolute;
    height: 2%;
    width: 100.68%;
    top: 99%;
    right: -0.34%;
    bottom: -1%;
    left: -0.34%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .tableColumn4 {
    position: absolute;
    top: 240px;
    left: 561px;
    width: 148px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .idPeminjaman {
    position: absolute;
    top: 13px;
    left: 11px;
    line-height: 22px;
    font-weight: 500;
  }
  .groupIcon {
    position: absolute;
    top: 6px;
    right: 4px;
    width: 12px;
    height: 22px;
    object-fit: cover;
  }
  .heading5 {
    align-self: stretch;
    position: relative;
    height: 50px;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .div {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 50px;
  }
  .titleValueChild5 {
    position: absolute;
    height: 6%;
    width: 101.67%;
    top: 96%;
    right: -0.83%;
    bottom: -2%;
    left: -0.83%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .div1 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 49px;
  }
  .div2 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139px;
    height: 36px;
  }
  .tableColumn5 {
    position: absolute;
    top: 240px;
    left: 298px;
    width: 120px;
    height: 531px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .deskripsi {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 191px;
  }
  .headingChild9 {
    position: absolute;
    height: 4%;
    width: 101.05%;
    top: 98%;
    right: -0.52%;
    bottom: -2%;
    left: -0.52%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .untukAcaraRapat {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 191px;
    height: 50px;
  }
  .dateValueChild11 {
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
  .tableColumn6 {
    position: absolute;
    top: 240px;
    left: 866px;
    width: 191px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .adminDataPeminjaman {
    position: relative;
    background-color: var(--light-white);
    width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--base-body-size);
    color: var(--light-secondary);
    font-family: var(--base-body);
  }
</style>
