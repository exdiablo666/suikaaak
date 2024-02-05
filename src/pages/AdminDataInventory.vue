<template>
  <div :class="$style.adminDataInventory">
    <div :class="$style.sidebar">
      <div :class="$style.frame">
        <img
          :class="$style.frameChild"
          alt=""
          src="/rectangle-2@2x.png"
          data-scroll-to="rectangle"
        />
        <div :class="$style.frame1">
          <div :class="$style.suikaParent">
            <b :class="$style.suika">SUIKA</b>
            <div :class="$style.admin">Admin</div>
            <div :class="$style.pexelsPhoto23790041" />
            <img :class="$style.eiuserIcon" alt="" src="/eiuser@2x.png" />
          </div>
        </div>
      </div>
      <div :class="$style.frameParent">
        <img :class="$style.frameIcon" alt="" src="/frame@2x.png" />
        <div :class="$style.frame2">
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
                <div :class="$style.label" :onClick="onLabelText2Click">
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
          <div :class="$style.frame3">
            <div :class="$style.logout" @click="onLogoutTextClick">Logout</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameItem" />
      <div :class="$style.admin1">ADMIN</div>
      <img
        :class="$style.logoSuikaTransformedPrevUiIcon"
        alt=""
        src="/logo-suikatransformed-prev-ui-1@2x.png"
      />
    </div>
    <div :class="$style.adminDataInventoryChild" />
    <div :class="$style.adminDataInventoryItem" />
    <div :class="$style.tableColumn">
      <div :class="$style.heading">
        <div :class="$style.headingChild" />
        <div :class="$style.inventoryId">Inventory ID</div>
        <img :class="$style.headingItem" alt="" src="/group-206@2x.png" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.div">7</div>
        <div :class="$style.titleValueChild" />
      </div>
      <div :class="$style.titleValue1">
        <div :class="$style.div1">8</div>
        <div :class="$style.titleValueItem" />
      </div>
      <div :class="$style.titleValue2">
        <div :class="$style.div2">9</div>
        <div :class="$style.titleValueInner" />
      </div>
      <div :class="$style.titleValue3">
        <div :class="$style.div3">10</div>
        <div :class="$style.rectangleDiv" />
      </div>
    </div>
    <div :class="$style.tableColumn1">
      <div :class="$style.heading1">
        <div :class="$style.headingChild" />
        <div :class="$style.nama">Nama</div>
      </div>
      <div :class="$style.titleValue4">
        <div :class="$style.titleValueChild1" />
        <div :class="$style.ruangMeetingSawitsari">
          Ruang Meeting Sawitsari 1
        </div>
      </div>
      <div :class="$style.titleValue3">
        <div :class="$style.sonyAlphaA7">Sony Alpha A7 III</div>
        <div :class="$style.titleValueChild2" />
      </div>
      <div :class="$style.titleValue6">
        <div :class="$style.epsonPowerlite1781w">
          Epson PowerLite 1781W Wireless WXGA 3LCD Projector
        </div>
        <div :class="$style.titleValueChild3" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.toyotaAvanza">Toyota Avanza</div>
        <div :class="$style.titleValueChild4" />
      </div>
    </div>
    <div :class="$style.masterDataInventory">Master Data Inventory</div>
    <div :class="$style.tableColumn2">
      <div :class="$style.heading">
        <div :class="$style.kategori">Kategori</div>
        <div :class="$style.lineDiv" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.fasilitas">Fasilitas</div>
        <div :class="$style.dateValueChild" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.peralatan">Peralatan</div>
        <div :class="$style.dateValueItem" />
      </div>
      <div :class="$style.dateValue2">
        <div :class="$style.peralatan1">Peralatan</div>
        <div :class="$style.dateValueInner" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.kendaraan">Kendaraan</div>
        <div :class="$style.dateValueItem" />
      </div>
    </div>
    <div :class="$style.tableColumn3">
      <div :class="$style.heading">
        <div :class="$style.status">Status</div>
        <div :class="$style.headingChild1" />
      </div>
      <div :class="$style.titleValue">
        <div :class="$style.teenyiconstickCircleSolidParent">
          <img
            :class="$style.teenyiconstickCircleSolid"
            alt=""
            src="/teenyiconstickcirclesolid@2x.png"
          />
          <div :class="$style.tersedia">Tersedia</div>
        </div>
        <div :class="$style.dateValueChild2" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.dipinjam">Dipinjam</div>
        <div :class="$style.dateValueChild3" />
        <img :class="$style.vectorIcon" alt="" src="/vector@2x.png" />
      </div>
      <div :class="$style.dateValue2">
        <div :class="$style.tersedia1">Tersedia</div>
        <div :class="$style.dateValueChild4" />
        <img
          :class="$style.teenyiconstickCircleSolid1"
          alt=""
          src="/teenyiconstickcirclesolid@2x.png"
        />
      </div>
      <div :class="$style.dateValue7">
        <div :class="$style.dateValueChild3" />
        <div :class="$style.dipinjam1">Dipinjam</div>
        <img :class="$style.vectorIcon1" alt="" src="/vector@2x.png" />
      </div>
    </div>
    <div :class="$style.iconButton" @click="onIconButtonContainerClick">
      <div :class="$style.tambahParent">
        <div :class="$style.tambah">Tambah</div>
        <img :class="$style.component1Icon" alt="" src="/component-1@2x.png" />
      </div>
    </div>
    <div :class="$style.tableColumn4">
      <div :class="$style.heading4">
        <div :class="$style.headingChild" />
        <div :class="$style.action">Action</div>
      </div>
      <div :class="$style.actionValue">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueItem" />
        <div :class="$style.actionValueInner">
          <div :class="$style.trash1Parent">
            <img :class="$style.trash1Icon" alt="" src="/trash-1@2x.png" />
            <img
              :class="$style.pen1Icon"
              alt=""
              src="/pen-1@2x.png"
              @click="onPen1IconClick"
            />
          </div>
        </div>
      </div>
      <div :class="$style.actionValue1">
        <div :class="$style.actionValueChild" />
        <div :class="$style.actionValueChild2" />
        <div :class="$style.trash1Group">
          <img :class="$style.trash1Icon" alt="" src="/trash-1@2x.png" />
          <img
            :class="$style.pen1Icon"
            alt=""
            src="/pen-1@2x.png"
            @click="onPen1Icon1Click"
          />
        </div>
      </div>
      <div :class="$style.actionValue2">
        <div :class="$style.actionValueChild3" />
        <div :class="$style.actionValueChild4" />
        <div :class="$style.trash1Container">
          <img :class="$style.trash1Icon" alt="" src="/trash-1@2x.png" />
          <img :class="$style.pen1Icon2" alt="" src="/pen-1@2x.png" />
        </div>
      </div>
      <div :class="$style.actionValue1">
        <div :class="$style.actionValueChild3" />
        <div :class="$style.actionValueChild2" />
        <div :class="$style.trash1Group">
          <div :class="$style.trash1">
            <img :class="$style.vectorIcon2" alt="" src="/vector@2x.png" />
          </div>
          <img :class="$style.pen1Icon2" alt="" src="/pen-1@2x.png" />
        </div>
      </div>
    </div>
    <div :class="$style.tableColumn5">
      <div :class="$style.heading1">
        <div :class="$style.deskripsi">Deskripsi</div>
        <div :class="$style.headingChild3" />
      </div>
      <div :class="$style.dateValue8">
        <div :class="$style.ruangMeetingUntuk">
          Ruang meeting untuk kapasitas 10 orang, luas 4m x 4m
        </div>
        <div :class="$style.dateValueChild6" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.cameraUntukDokumentasi">
          Camera untuk dokumentasi acara
        </div>
        <div :class="$style.dateValueChild7" />
      </div>
      <div :class="$style.dateValue2">
        <div :class="$style.projectorDigunakanUntuk">
          Projector digunakan untuk presentasi
        </div>
        <div :class="$style.dateValueChild8" />
      </div>
      <div :class="$style.titleValue7">
        <div :class="$style.mobilUntukKebutuhan">
          Mobil untuk kebutuhan transportasi
        </div>
        <div :class="$style.dateValueChild7" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AdminDataInventory",
    methods: {
      onLabelTextClick() {
        this.$router.push("/admin-halaman-admin");
      },
      onLabelText1Click() {
        this.$router.push("/admin-data-history");
      },
      onLabelText2Click() {
        const anchor = document.querySelector("[data-scroll-to='rectangle']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
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
      onLogoutTextClick() {
        this.$router.push("/");
      },
      onIconButtonContainerClick() {
        this.$router.push("/admin-tambah-inventory");
      },
      onPen1IconClick() {
        this.$router.push("/admin-edit-inventory");
      },
      onPen1Icon1Click() {
        this.$router.push("/admin-edit-inventory");
      },
    },
  });
</script>
<style module>
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
    object-fit: cover;
  }
  .suika {
    position: absolute;
    height: 11.39%;
    width: 34.16%;
    top: 85.08%;
    left: 32.92%;
    display: inline-block;
  }
  .admin {
    position: absolute;
    top: 190.5px;
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
    height: 187px;
  }
  .eiuserIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 161px;
    height: 167.6px;
    overflow: hidden;
    object-fit: cover;
  }
  .suikaParent {
    position: absolute;
    height: 100%;
    width: 88.46%;
    top: 0%;
    right: 11.54%;
    bottom: 0%;
    left: 0%;
  }
  .frame1 {
    position: absolute;
    top: 88.8px;
    left: 44px;
    width: 182px;
    height: 209.8px;
    overflow: hidden;
  }
  .frame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
    overflow: hidden;
  }
  .frameIcon {
    position: absolute;
    top: 482.7px;
    left: 0px;
    width: 147px;
    height: 15.6px;
    overflow: hidden;
    object-fit: cover;
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
    height: 507.9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .logout {
    position: absolute;
    top: 0px;
    left: 56px;
    font-weight: 500;
    display: inline-block;
    width: 51px;
    height: 15.6px;
    cursor: pointer;
  }
  .frame3 {
    position: absolute;
    top: 480.8px;
    left: 0px;
    width: 107px;
    height: 15.6px;
    overflow: hidden;
    font-family: var(--font-montserrat);
  }
  .frame2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 256px;
    height: 507.9px;
    overflow: hidden;
  }
  .frameParent {
    position: absolute;
    top: 298.5px;
    left: 7px;
    width: 256px;
    height: 507.9px;
    font-size: var(--base-body-size);
    font-family: var(--font-inter);
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 1024px;
    font-size: var(--font-size-mid);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
  .frameItem {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-orange);
    border-right: 1px solid var(--color-gainsboro-100);
    border-bottom: 1px solid var(--color-gainsboro-100);
    box-sizing: border-box;
    width: 277px;
    height: 66px;
  }
  .admin1 {
    position: absolute;
    top: 17px;
    left: 88px;
    font-weight: 800;
    display: inline-block;
    width: 77.8px;
    height: 32.1px;
  }
  .logoSuikaTransformedPrevUiIcon {
    position: absolute;
    top: -9px;
    left: 0px;
    border-radius: var(--br-123xl);
    width: 88px;
    height: 83.7px;
    object-fit: cover;
  }
  .rectangleParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 270px;
    height: 66px;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--base-body-bold);
  }
  .adminDataInventoryChild {
    position: absolute;
    top: -2px;
    left: 270px;
    background-color: var(--color-orange);
    width: 100vw;
    height: 68px;
  }
  .adminDataInventoryItem {
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
  .inventoryId {
    position: absolute;
    top: 17px;
    left: 9px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
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
    background-color: var(--color-gainsboro-200);
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
    width: 134px;
    height: 77px;
  }
  .titleValueChild {
    position: absolute;
    height: 2.5%;
    width: 100.75%;
    top: 98.13%;
    right: -0.37%;
    bottom: -0.62%;
    left: -0.37%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .titleValue {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 80px;
  }
  .div1 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 134px;
    height: 48px;
  }
  .titleValueItem {
    position: absolute;
    height: 2.08%;
    width: 100%;
    top: 97.92%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
  }
  .titleValue1 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 48px;
  }
  .div2 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 134px;
    height: 78px;
  }
  .titleValueInner {
    position: absolute;
    height: 1.97%;
    width: 100%;
    top: 98.03%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue2 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 76px;
  }
  .div3 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 134px;
    height: 49px;
  }
  .rectangleDiv {
    position: absolute;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue3 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 49px;
  }
  .tableColumn {
    position: absolute;
    top: 230px;
    left: 311px;
    width: 134px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .nama {
    position: absolute;
    top: 12px;
    left: 67px;
    line-height: 22px;
    font-weight: 500;
  }
  .heading1 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gainsboro-200);
    height: 50px;
    text-align: center;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .titleValueChild1 {
    position: absolute;
    margin: 0 !important;
    top: 79px;
    left: -1px;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--light-white);
    box-sizing: border-box;
    width: 206px;
    height: 3px;
    z-index: 0;
  }
  .ruangMeetingSawitsari {
    position: absolute;
    margin: 0 !important;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 204px;
    height: 38px;
    flex-shrink: 0;
    z-index: 1;
  }
  .titleValue4 {
    align-self: stretch;
    background-color: var(--light-white);
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .sonyAlphaA7 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 204px;
    height: 31px;
  }
  .titleValueChild2 {
    position: absolute;
    width: 100%;
    top: 100%;
    right: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--light-light);
    box-sizing: border-box;
    height: 0px;
  }
  .epsonPowerlite1781w {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 204px;
    height: 65px;
  }
  .titleValueChild3 {
    position: absolute;
    height: 1.33%;
    width: 100%;
    top: 98.67%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue6 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 75px;
  }
  .toyotaAvanza {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 204px;
    height: 34px;
  }
  .titleValueChild4 {
    position: absolute;
    height: 2%;
    width: 100%;
    top: 98%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--light-light);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .titleValue7 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 50px;
  }
  .tableColumn1 {
    position: absolute;
    top: 230px;
    left: 445px;
    width: 204px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .masterDataInventory {
    position: absolute;
    top: 140px;
    left: 342px;
    font-size: var(--font-size-17xl);
    font-weight: 500;
    font-family: var(--base-body-bold);
    color: var(--color-black);
    display: inline-block;
    width: 392px;
    height: 43px;
  }
  .kategori {
    position: absolute;
    top: 14px;
    left: 68px;
    line-height: 22px;
    font-weight: 500;
  }
  .lineDiv {
    position: absolute;
    height: 4%;
    width: 101.05%;
    top: 98%;
    right: -0.53%;
    bottom: -2%;
    left: -0.53%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .fasilitas {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 80px;
  }
  .dateValueChild {
    position: absolute;
    height: 1.25%;
    width: 100.53%;
    top: 99.38%;
    right: -0.26%;
    bottom: -0.62%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .peralatan {
    position: absolute;
    top: 14px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
  }
  .dateValueItem {
    position: absolute;
    height: 2%;
    width: 100.53%;
    top: 99%;
    right: -0.26%;
    bottom: -1%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .peralatan1 {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 74px;
  }
  .dateValueInner {
    position: absolute;
    height: 1.35%;
    width: 100.53%;
    top: 99.32%;
    right: -0.26%;
    bottom: -0.68%;
    left: -0.26%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue2 {
    align-self: stretch;
    position: relative;
    background-color: var(--light-white);
    height: 74px;
  }
  .kendaraan {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 50px;
  }
  .tableColumn2 {
    position: absolute;
    top: 230px;
    left: 860px;
    width: 190px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
  }
  .status {
    position: absolute;
    top: 14px;
    left: 64px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild1 {
    position: absolute;
    height: 4%;
    width: 101.18%;
    top: 98%;
    right: -0.59%;
    bottom: -2%;
    left: -0.59%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .teenyiconstickCircleSolid {
    position: absolute;
    top: 30px;
    left: 112px;
    width: 21.6px;
    height: 20px;
    overflow: hidden;
    object-fit: cover;
  }
  .tersedia {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105.8px;
    height: 80px;
  }
  .teenyiconstickCircleSolidParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 133.6px;
    height: 80px;
  }
  .dateValueChild2 {
    position: absolute;
    height: 1.25%;
    width: 100.59%;
    top: 99.38%;
    right: -0.3%;
    bottom: -0.62%;
    left: -0.3%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dipinjam {
    position: absolute;
    top: 14px;
    left: 23px;
    line-height: 22px;
  }
  .dateValueChild3 {
    position: absolute;
    height: 2%;
    width: 100.59%;
    top: 99%;
    right: -0.3%;
    bottom: -1%;
    left: -0.3%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .vectorIcon {
    position: absolute;
    height: 37%;
    width: 11.83%;
    top: 28%;
    right: 20.71%;
    bottom: 35%;
    left: 67.46%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .tersedia1 {
    position: absolute;
    top: 24px;
    left: 25px;
    line-height: 22px;
  }
  .dateValueChild4 {
    position: absolute;
    height: 1.35%;
    width: 100.59%;
    top: 99.32%;
    right: -0.3%;
    bottom: -0.68%;
    left: -0.3%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .teenyiconstickCircleSolid1 {
    position: absolute;
    top: 24px;
    left: 111px;
    width: 21.6px;
    height: 20px;
    overflow: hidden;
    object-fit: cover;
  }
  .dipinjam1 {
    position: absolute;
    width: 40.83%;
    top: 28%;
    left: 9.47%;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vectorIcon1 {
    position: absolute;
    height: 37%;
    width: 11.83%;
    top: 32%;
    right: 23.08%;
    bottom: 31%;
    left: 65.09%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .dateValue7 {
    position: relative;
    background-color: var(--light-white);
    width: 169px;
    height: 50px;
  }
  .tableColumn3 {
    position: absolute;
    top: 230px;
    left: 1050px;
    width: 169px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
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
    top: 140px;
    left: 1219px;
    border-radius: var(--br-xl);
    background-color: var(--color-slateblue);
    box-shadow: var(--small);
    height: 37px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mini);
    box-sizing: border-box;
    cursor: pointer;
    font-size: var(--base-large-size);
    color: var(--light-white);
    font-family: var(--base-body-bold);
  }
  .action {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 21px);
    line-height: 22px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 20px;
  }
  .heading4 {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gainsboro-200);
    height: 50px;
  }
  .actionValueChild {
    position: relative;
    background-color: var(--light-white);
    width: 154px;
    height: 50px;
    z-index: 0;
  }
  .actionValueItem {
    position: absolute;
    margin: 0 !important;
    height: 1.98%;
    width: 100%;
    top: 98.02%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 1;
  }
  .trash1Icon {
    position: absolute;
    height: 94.74%;
    width: 23.53%;
    top: 0%;
    right: 0%;
    bottom: 5.26%;
    left: 76.47%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .pen1Icon {
    position: absolute;
    height: 100%;
    width: 27.94%;
    top: 0%;
    right: 72.06%;
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
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
  }
  .actionValueInner {
    position: absolute;
    margin: 0 !important;
    height: 23.46%;
    width: 30.91%;
    top: 38.27%;
    right: 34.68%;
    bottom: 38.27%;
    left: 34.42%;
    z-index: 2;
  }
  .actionValue {
    align-self: stretch;
    height: 81px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .actionValueChild2 {
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
  .trash1Group {
    position: absolute;
    margin: 0 !important;
    height: 38%;
    width: 30.91%;
    top: 32%;
    right: 34.55%;
    bottom: 30%;
    left: 34.55%;
    z-index: 2;
  }
  .actionValue1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .actionValueChild3 {
    position: relative;
    background-color: var(--light-white);
    width: 220px;
    height: 50px;
    z-index: 0;
  }
  .actionValueChild4 {
    position: absolute;
    margin: 0 !important;
    height: 2.04%;
    width: 100%;
    top: 97.96%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-whitesmoke-100);
    border: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
    z-index: 1;
  }
  .pen1Icon2 {
    position: absolute;
    height: 100%;
    width: 27.94%;
    top: 0%;
    right: 72.06%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .trash1Container {
    position: absolute;
    margin: 0 !important;
    height: 25.85%;
    width: 30.91%;
    top: 31.97%;
    right: 34.55%;
    bottom: 42.18%;
    left: 34.55%;
    z-index: 2;
  }
  .actionValue2 {
    align-self: stretch;
    height: 73.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-3xs);
  }
  .vectorIcon2 {
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
    object-fit: cover;
    transform: rotate(-180deg);
  }
  .trash1 {
    position: absolute;
    height: 94.74%;
    width: 23.53%;
    top: 0%;
    right: -23.53%;
    bottom: 5.26%;
    left: 100%;
    overflow: hidden;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  .tableColumn4 {
    position: absolute;
    top: 230px;
    left: 1219px;
    width: 154px;
    height: 304px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--light-dark);
    font-family: var(--base-body-bold);
  }
  .deskripsi {
    position: absolute;
    top: 14px;
    left: 65px;
    line-height: 22px;
    font-weight: 500;
  }
  .headingChild3 {
    position: absolute;
    height: 4%;
    width: 100.95%;
    top: 98%;
    right: -0.47%;
    bottom: -2%;
    left: -0.47%;
    border-top: 2px solid var(--light-border-light);
    box-sizing: border-box;
  }
  .ruangMeetingUntuk {
    position: absolute;
    top: 0px;
    left: calc(50% - 105.5px);
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 211px;
    height: 80px;
  }
  .dateValueChild6 {
    position: absolute;
    height: 1.25%;
    width: 100.47%;
    top: 99.38%;
    right: -0.24%;
    bottom: -0.62%;
    left: -0.24%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .dateValue8 {
    position: relative;
    background-color: var(--light-white);
    width: 211px;
    height: 80px;
  }
  .cameraUntukDokumentasi {
    position: absolute;
    top: 3px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 211px;
  }
  .dateValueChild7 {
    position: absolute;
    height: 2%;
    width: 100.47%;
    top: 99%;
    right: -0.24%;
    bottom: -1%;
    left: -0.24%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .projectorDigunakanUntuk {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 204px;
    height: 44px;
  }
  .dateValueChild8 {
    position: absolute;
    height: 1.35%;
    width: 100.47%;
    top: 99.32%;
    right: -0.24%;
    bottom: -0.68%;
    left: -0.24%;
    border-top: 1px solid var(--color-whitesmoke-100);
    box-sizing: border-box;
  }
  .mobilUntukKebutuhan {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 22px;
    display: flex;
    align-items: center;
    width: 211px;
    height: 50px;
  }
  .tableColumn5 {
    position: absolute;
    top: 230px;
    left: 649px;
    width: 211px;
    height: 357px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .adminDataInventory {
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
