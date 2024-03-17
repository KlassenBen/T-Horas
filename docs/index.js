// STICKY

// <-- APP START HERE --> //

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  addDoc,
  query,
  collection,
  where,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// <-- Labels
const hourSheetWeekNumber = document.querySelector(
  "#sr11-daily-hours-week-number"
);
const sr20Logout = document.querySelector("#sr20-cho-logout");
const sr20DeleteAccount = document.querySelector("#sr20-cho-delete-account");
const sr20AppAdmin = document.querySelector("#sr20-cho-app-admin");
const sr20AppAdminNorm = document.querySelector("#sr20-cho-app-admin-norm");
const sr23btnMenu = document.querySelector("#sr23-btn-menu");

// <-- switches
const sr9SwiHours = document.querySelector("#sr9-swi-write--hours");
const sr9SwiHours2 = document.querySelector("#sr9-swi-write--hours2");
const sr9SwiHours3 = document.querySelector("#sr9-swi-write--hours3");
const sr9SwiHoursText = document.querySelector(
  "#sr9-swi-write--hours-switch-description-tx"
);

const sr9SwiAssis = document.querySelector("#sr9-swi-assis");
const sr9SwiAssis2 = document.querySelector("#sr9-swi-assis2");
const sr9SwiAssis3 = document.querySelector("#sr9-swi-assis3");
const sr9SwiAssisText = document.querySelector(
  "#sr9-swi-assis--hours-switch-description-tx"
);

const sr16SwiHours = document.querySelector("#sr16-swi-write--hours");
const sr16SwiHours2 = document.querySelector("#sr16-swi-write--hours2");
const sr16SwiHours3 = document.querySelector("#sr16-swi-write--hours3");
const sr16SwiHoursText = document.querySelector(
  "#sr16-swi-write--hours-switch-description-tx"
);

const sr16SwiAssis = document.querySelector("#sr16-swi-assis");
const sr16SwiAssis2 = document.querySelector("#sr16-swi-assis2");
const sr16SwiAssis3 = document.querySelector("#sr16-swi-assis3");
const sr16SwiAssisText = document.querySelector(
  "#sr16-swi-assis--hours-switch-description-tx"
);

// <-- Other
const header = document.querySelector("#app-header");
const stickyHeader = header.offsetTop;

const appName = document.querySelector("#app-name");
const teamImage = document.querySelector("#team-image");
const timePicker = document.querySelector("#sr21-time-picker");
const inpPayPerHour = document.querySelector("#sr9-inp-pay--hour");
const sr11TimeSheetHours = document.querySelector("#sr11-daily-hours-con");
const sr11TimeSheetSumary = document.querySelector("#sr11-sumary");
const sr11NewTimeSheetMessage = document.querySelector(
  "#new-time-sheet-message-con"
);
const sr11TimeSheetName = document.querySelector("#sr11-time-sheet-name-text");

const sr16InpMemberPay = document.querySelector("#sr16-contbx-2-inp-pay--hour");
const sr16InpMemberName = document.querySelector("#sr16-inp-member-name");
const sr16InpMemberPassword = document.querySelector("#sr16-inp-member-pass");
const sr16DispTeamCode = document.querySelector("#sr16-disp-team-code");
const sr23AccountsDisplay = document.querySelector("#sr23-accounts-con");
const sr23AccountSearch = document.querySelector("#sr23-search-account");
const sr21TimePickerInOutText = document.querySelector(
  "#sr21-time-picker-header span"
);
const headerTeamImg = document.querySelector("#team-image");
const headerTeamName = document.querySelector("#team-name");
const sr24TryAppCon = document.querySelector("#sr24-cont-con-4");

// <-- Screens
const srsGetStarted = document.querySelector("#srs-get-started");
const sr1 = document.querySelector("#sr1");
const sr2 = document.querySelector("#sr2");
const sr3 = document.querySelector("#sr3");
const sr4 = document.querySelector("#sr4");
const sr5 = document.querySelector("#sr5");
const sr6 = document.querySelector("#sr6");
const sr13 = document.querySelector("#sr13");
const sr14 = document.querySelector("#sr14");
const sr15 = document.querySelector("#sr15");
const sr18 = document.querySelector("#sr18");
const sr7 = document.querySelector("#sr7");
const sr8 = document.querySelector("#sr8");
const sr9 = document.querySelector("#sr9");
const sr11 = document.querySelector("#sr11");
const sr12 = document.querySelector("#sr12");
const sr16 = document.querySelector("#sr16");
const sr17 = document.querySelector("#sr17");
const sr19 = document.querySelector("#sr19");
const sr20 = document.querySelector("#sr20");
const sr21 = document.querySelector("#sr21");
const sr22 = document.querySelector("#sr22");
const sr23 = document.querySelector("#sr23");
const sr24 = document.querySelector("#sr24");
const sr25 = document.querySelector("#sr25");

// <-- Buttons
const btnWeekSelectForward = document.querySelector(
  "#sr11-daily-hours-btn-week-forward"
);
const btnWeekSelectBack = document.querySelector(
  "#sr11-daily-hours-btn-week-back"
);
const btnsr16InfoSaveChanges = document.querySelector(
  "#sr16-contbx-btn-save-changes"
);
const btnsr16SettingsSaveChanges = document.querySelector(
  "#sr16-contbx1-btn-save-changes"
);
const btnsr16InfoCancel = document.querySelector("#sr16-contbx-btn-cancel");
const btnsr16SettingsCancel = document.querySelector(
  "#sr16-contbx1-btn-cancel"
);
const btnsr16DeleteMember = document.querySelector("#sr16-delete-member");
const btnsr11NewTimeTable = document.querySelector(
  "#sr11-tb-btn-new-time-table"
);
const btnsr12SaveInfoChanges = document.querySelector(
  "#sr12-2-contbx-2-btn-save-changes"
);
const btnsr12SaveSettingsChanges = document.querySelector(
  "#sr12-btn-save-changes"
);
const btnsr19SaveAccountChanges = document.querySelector(
  "#sr19-contbx-btn-save-changes"
);
const btnsr24BuyPlan = document.querySelector("#sr24-btn-buy-plan");
const btnsr24TryApp = document.querySelector("#sr24-btn-try-app-now");
const btnsr7GoPro = document.querySelector("#sr7-go-pro");

// <-- Join Team
const btnJoinTeamSr1 = document.querySelector("#sr1-btn-join-team");
const btnJoinAsMemberSr13 = document.querySelector("#sr13-btn-join-as-member");
const btnJoinAsAdminSr13 = document.querySelector("#sr13-btn-join-as-admin");
const btnArrowBackSr13 = document.querySelector("#sr13-tb-btn-back");
const btnBackSr15 = document.querySelector("#sr15-btn-back");
const btnJoinNowSr15 = document.querySelector("#sr15-btn-join-team");
const btnBackSr14 = document.querySelector("#sr14-btn-back");
const btnJoinNowSr14 = document.querySelector("#sr14-btn-join-team");

// <-- Create Team

// --> btn ahead
const btnCreateTeamSr1 = document.querySelector("#sr1-btn-create-team");
const btnLoginSr2 = document.querySelector("#sr2-btn-login");
const btnLoginSr18 = document.querySelector("#sr18-btn-login");
const btnCreateAccountSr3 = document.querySelector("#sr3-btn-ahead");
const btnJoinExistingTeamSr5 = document.querySelector(
  "#sr5-btn-join-existing-team"
);
const btnAheadSr5 = document.querySelector("#sr5-btn-ahead");
const btndoneSr4 = document.querySelector("#sr4-btn-done");
const btnCreateTeamDoneSr6 = document.querySelector("#sr6-btn-create-team");
const btnAddMemberSr7 = document.querySelector("#sr7-btn-add-member");
const btnAheadSr8 = document.querySelector("#sr8-btn-ahead");
const btnAddMemberSr9 = document.querySelector("#sr9-btn-create-member");
const btnSettingsSr7 = document.querySelector("#sr7-btn-settings");
const choTeamSettingsSr20 = document.querySelector("#sr20-cho-team-settings");
const choAccountInfoSr20 = document.querySelector("#sr20-cho-account-info");
const btnMenuSr11 = document.querySelector("#sr11-btn-menu");

// --> btn back
const btnbackSr2 = document.querySelector("#sr2-tb-btn-back");
const btnCreateAccountSr2 = document.querySelector("#sr2-btn-creacc");
const btnBackSr18 = document.querySelector("#sr18-btn-back");
const btnBackSr3 = document.querySelector("#sr3-btn-back");
const btnBackSr4 = document.querySelector("#sr4-btn-back");
const btnBackSr6 = document.querySelector("#sr6-btn-back");
const btnCancelSr5 = document.querySelector("#sr5-btn-cancel");
const btnCancelSr8 = document.querySelector("#sr8-btn-cancel");
const btnBackSr9 = document.querySelector("#sr9-btn-back");
const btnBackTbSr11 = document.querySelector("#sr11-tb-btn-back");
const btnBackSr20 = document.querySelector("#sr20-btn-back");
const btnBackSr19 = document.querySelector("#sr19-btn-back");
const btnBackSr12 = document.querySelector("#sr12-tb-btn-back");
const btnBackSr16 = document.querySelector("#sr16-tb-btn-back");
const btnBackSr17 = document.querySelector("#sr17-tb-btn-back");
const btnBackSr21 = document.querySelector("#sr21-btn-time-picker-cancel");
const btnClearSr21 = document.querySelector("#sr21-btn-time-picker-clear");
const btnSaveSr21 = document.querySelector("#sr21-btn-time-picker-save");
const btnsr24Back = document.querySelector("#sr24-tb-btn-back");
const btnsr25Back = document.querySelector("#sr25-tb-btn-back");

const firebaseConfig = {
  apiKey: "AIzaSyA30VKmZDuM0Xv0z-CuG5o6C-4lU4Z-u64",
  authDomain: "auth-test-f961a.firebaseapp.com",
  projectId: "auth-test-f961a",
  storageBucket: "auth-test-f961a.appspot.com",
  messagingSenderId: "720650529368",
  appId: "1:720650529368:web:dd05407559ed23a0d7f82d",
  measurementId: "G-PLCKMJYMFB",
};
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);

class App {
  #alfaNumDitch = [
    "z",
    "1",
    "a",
    "b",
    "0",
    "c",
    "2",
    "d",
    "e",
    "9",
    "f",
    "3",
    "g",
    "h",
    "8",
    "i",
    "4",
    "j",
    "k",
    "7",
    "l",
    "5",
    "m",
    "n",
    "6",
    "o",
    "6",
    "p",
    "q",
    "5",
    "r",
    "7",
    "s",
    "t",
    "4",
    "u",
    "8",
    "v",
    "w",
    "3",
    "x",
    "9",
    "y",
    "2",
    "z",
    "1",
    "0",
  ];
  #timePickerUpdateDay;
  #timePickerUpdatetype;
  #timePickerUpdatestnd;
  #weekDisplayNumberMinus = 1;
  #otp;
  #email;
  #password;

  #curTeamName;
  #curTeam;
  #curMember;
  #curMemberInfo;
  #curMemberId;
  #curMembers;
  #accountsArray = [];
  #curAccountData;
  #filteredAccountsArray = [];

  #curWeek;
  #curWeekArrayOrg = [];
  #curUseId;
  #adminLevel = "top admin";

  #curData;

  #der = {
    teamCode: "rtyhgfdr567",
  };

  #logedInAccount = {
    email: "probar@icloud.com",
    teamCode: "1234567890",
    name: "José Samuel",
    password: "111111",
    level: "member",
    writePermision: "true",
  };
  #idLenght = 16;
  #idTakeArrLenght = this.#alfaNumDitch.length - 1;

  constructor() {
    this._events();

    // TODO: ALSO NEED IN INIT, CHECK IF THE LOCAL STORED ACCOUNT STILL EXISTS IN THE CLOUD
    // this._removeFromLocal("curData");
    this._init("sr1");
    // this._onSnapshot("accounts", "cn25uwg629tb9143");
    // console.log(sr21TimePickerInOutText.textContent);
    // this._srGetStartedDispChoose("sr24", "sr1", "left");
  }

  _accountProCheck() {
    if (this.#curData.pro === "trail" || this.#curData.pro === "pro") {
      const porEnd = this.#curData.proStartTimeStamp + this.#curData.proTime;
      if (porEnd < this._getTimeStamp()) {
        this._updateData(`accounts`, this.#curData.teamCode, {
          pro: "false",
        });

        btnsr7GoPro.style.display = "flex";

        if (this.#curData.pro === "pro") {
          this._disdSuccessErrorMessage(
            "Tu plan premium terminó. Contratalo de nuevo",
            "er",
            7000
          );
        }
        if (this.#curData.pro === "trail") {
          this._disdSuccessErrorMessage(
            "Tu tiempo de brueba terminó. Si te era útil esta aplicación, contrata un plan premium ahora.",
            "ex",
            7000
          );
        }
      } else {
        console.log("Pro Go");
      }
    } else {
      console.log("only a starter");
    }
  }

  // TODO: INIT STARTS HERE
  _init(srHide) {
    this._srGetStartedDispChoose("sr22", srHide, "left");
    console.log("Your App is initializing");
    this.#curData = this._getFromLocal("curData");

    setTimeout(() => {
      if (this.#curData !== undefined) {
        // TODO: if user is logedIn, all validations come under here
        console.log("Your App has initialized");

        if (this.#curData.level === "admin") {
          this._displayMembers("sr22");
          this._onSnapshot("accounts", this.#curData.teamCode);
          this._accountProCheck();
        }
        if (this.#curData.level === "asistente") {
          this._onSnapshot(
            `accounts/${this.#curData.teamCode}/team`,
            this.#curMemberInfo.memberId
          );
          this._displayMembers("sr22");
        }
        if (this.#curData.level === this.#adminLevel) {
          console.log("admin is top");
          this.#curAccountData = this.#curData;
          this._displayMembers("sr22");
          sr20AppAdmin.style.display = "block";
          sr20AppAdminNorm.style.display = "block";
          this._onSnapshot("accounts", this.#curData.teamCode);
          this._accountProCheck();
        }
        console.log(this.#curData.level);
        if (this.#curData.level === "miembro") {
          console.log("member now");
          this._displayMemberOnly();
        }
      } else {
        console.log("Log in or create an account");
        this._srGetStartedDispChoose("sr1", "sr22", "left");
      }
    }, 100);
  }
  // TODO: INIT ENDS HERE

  _onSnapshot(name, listen) {
    //line 1726 for try
    // TODO: REAL TIME update on data
    const unsub = onSnapshot(doc(db, name, listen), (doc) => {
      this._saveToLocal("curData", doc.data());
      console.log("Updated data: ", doc.data());
    });
  }

  _onlineCheck() {
    if (navigator.onLine) {
      console.log("online this time");
    } else {
      console.log("not online this time");
    }
  }

  _topAdminDisplayAccounts(array) {
    this._deleteAllChildren("sr23-accounts-con");
    if (array[0] === undefined) {
      const HTML = `   <div class="sr23-no-accounts-con">
      <p class="sr23-no-accounts">
        No account found with
        <span>"${sr23AccountSearch.value}"</span> email or team code
      </p>
    </div>`;
      sr23AccountsDisplay.insertAdjacentHTML("afterBegin", HTML);
    } else {
      array.forEach((val, i, arr) => {
        let pro;
        if (val.pro === false) {
          pro = "No Pro";
        } else {
          pro = val.pro;
        }

        const HTML = `
      <div class="sr23-account-con">
        <div class="sr23-account-top-con">
          <div class="sr23-account-top-con-2">
            <p class="sr23-account-team-name sr23-account-text-4">
              ${val.teamName}
            </p>
            <div class="sr23-account-top-con-3">
              <p class="sr23-account-pro-status sr23-account-text-2">
                ${pro}
              </p>
            </div>
          </div>
          <button class="sr23-btn-vedit" data-teamCode="${val.teamCode}" data-btn="view">
            View
          </button>
          <button class="sr23-btn-vedit" data-teamCode="${val.teamCode}" data-btn="edit">
            Edit account
          </button>
        </div>
        <div class="sr23-account-botom-con">
          <div class="sr23-account-botom-con-2">
            <p class="sr23-account-text-3">Info</p>
          </div>
          <div class="sr23-account-botom-con-3">
            <div class="sr23-account-botom-con-4">
              <p class="sr23-account-text-1">Email</p>
              <a
                class="sr23-account-text-3"
                href="mailto:${val.email}"
                >${val.email}</a
              >
            </div>
            <div class="sr23-account-botom-con-5">
              <p class="sr23-account-text-1">Team code</p>
              <p class="sr23-account-text-3">${val.teamCode}</p>
            </div>
          </div>
        </div>
      </div>`;
        sr23AccountsDisplay.insertAdjacentHTML("afterBegin", HTML);
      });
    }
  }

  _topAdminDisplay() {
    this.#accountsArray = [];
    this._srGetStartedDispChoose("sr22", "sr20", "left");
    const q = query(collection(db, "accounts"));
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        const val = doc.data();
        this.#accountsArray.push(val);
      });
      this._topAdminDisplayAccounts(this.#accountsArray);
      this._srGetStartedDispChoose("sr23", "sr22", "left");
    });
  }

  _readWeeks(name) {
    this._srGetStartedDispChoose("sr22", "sr7", "left");
    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    const q = query(
      collection(db, `accounts/${curDataLocal.teamCode}/weeks`),
      where("memberId", "==", this.#curMemberInfo.memberId)
    );
    getDocs(q).then((docSnap) => {
      let arr = [];
      docSnap.forEach((doc) => {
        const val = doc.data();
        arr.push(val);
      });

      this.#curWeekArrayOrg = arr.sort((a, b) => {
        return a.weekMadeTimeStamp - b.weekMadeTimeStamp;
      });
      if (this.#curWeekArrayOrg.length === 0) {
        console.log("no weeks yet");
        sr11TimeSheetHours.style.display = "none";
        sr11TimeSheetSumary.style.display = "none";
        sr11NewTimeSheetMessage.style.display = "block";
        this._srGetStartedDispChoose("sr11", "sr22", "left");
        sr11TimeSheetName.textContent = this.#curMemberInfo.name;
      } else {
        sr11TimeSheetHours.style.display = "block";
        sr11TimeSheetSumary.style.display = "block";
        sr11NewTimeSheetMessage.style.display = "none";
        this._displayTimeSheet(
          this.#curWeekArrayOrg,
          "arr",
          this.#curWeekArrayOrg.length
        );
        sr11TimeSheetName.textContent = this.#curMemberInfo.name;
      }
    });
  }

  _onSnapshot(name, listen) {
    //line 1726 for try
    // TODO: REAL TIME update on data
    const unsub = onSnapshot(doc(db, name, listen), (doc) => {
      this._saveToLocal("curData", doc.data());
      console.log("Updated data: ", doc.data());
    });
  }

  _displayMemberOnly() {
    btnBackTbSr11.style.display = "none";

    this.#curMemberId = this.#curData.memberId;
    this.#curMemberInfo = this.#curData;
    onSnapshot(
      doc(
        db,
        `accounts/${this.#curData.teamCode}/team`,
        this.#curMemberInfo.memberId
      ),
      (doc) => {
        this._saveToLocal("curData", doc.data());
        console.log("error here");

        const q = query(
          collection(db, `accounts`),
          where("teamCode", "==", this.#curData.teamCode)
        );
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            // this.#curData.pro = true;
            this.#curData.pro = doc.data().pro;
          });
        });
        this._readWeeks();

        const q5 = query(
          collection(db, `accounts`),
          where("teamCode", "==", this.#curData.teamCode)
        );
        getDocs(q5).then((docSnap) => {
          if (docSnap.empty === true) {
            console.error(`no luck this time!!!!!!`);
          } else {
            docSnap.forEach((doc) => {
              const val = doc.data();
              this.#curData.teamImg = val.teamImg;
              this.#curData.teamName = val.teamName;
              this._saveToLocal("curData", this.#curData);
              this._getFromLocal("curData");
              headerTeamImg.src = this.#curData.teamImg;
              headerTeamName.textContent = this.#curData.teamName;
            });
          }
        });
      }
    );
  }
  _login() {
    const inpEmail = document.querySelector("#sr18-inp-email");
    const inpPassword = document.querySelector("#sr18-inp-password");

    if (
      inpEmail.value.includes("@") &&
      inpEmail.value.length > 4 &&
      inpPassword.value.length > 3
    ) {
      const q = query(
        collection(db, "accounts"),
        where("email", "==", inpEmail.value)
      );
      getDocs(q).then((docSnap) => {
        if (docSnap.empty === true) {
          console.error("no such account found");
        } else {
          docSnap.forEach((doc) => {
            const val = doc.data();
            if (inpPassword.value === val.accountPassword) {
              this._srGetStartedDispChoose("sr22", "sr18", "left");

              console.log("your was found");
              this.#curData = val;
              this._saveToLocal("curData", this.#curData);
              this._init("sr22");
            } else {
              console.error("incorect password");
            }
            console.log(val);
          });
        }
      });
    }
    // this._srGetStartedDispChoose("sr5", "sr18", "left");
  }

  _joinAsMember() {
    console.log("Using this");
    const inpTeamCode = document.querySelector("#sr15-inp-team-code");
    const inpTeamMemberName = document.querySelector("#sr15-inp-member-name");
    const inpTeamMemberPassword = document.querySelector(
      "#sr15-inp-member-pass"
    );

    if (inpTeamCode.value.length === this.#idLenght) {
      if (
        inpTeamMemberName.value.length > 0 &&
        inpTeamMemberPassword.value.length > 0
      ) {
        const q = query(
          collection(db, "accounts"),
          where("teamCode", "==", inpTeamCode.value)
        );
        getDocs(q).then((docSnap) => {
          if (docSnap.empty === true) {
            console.error(`no such team found with ${inpTeamCode.value}`);
          } else {
            docSnap.forEach((doc) => {
              const val = doc.data();

              // <-- secondary search start
              const q2 = query(
                collection(db, `accounts/${inpTeamCode.value}/team`),
                where("name", "==", inpTeamMemberName.value)
              );
              getDocs(q2).then((docSnap) => {
                if (docSnap.empty === true) {
                  console.error(
                    `no ${inpTeamMemberName.value} member found in this team`
                  );
                } else {
                  docSnap.forEach((doc) => {
                    const val = doc.data();

                    if (inpTeamMemberPassword.value === val.password) {
                      // this._srGetStartedDispChoose("sr22", "sr18", "left");

                      console.log(
                        `you joined team with ${inpTeamCode.value} team code`
                      );
                      this.#curData = val;
                      console.log(val);
                      this._saveToLocal("curData", this.#curData);
                      this._init("sr15");
                      btnBackTbSr11.style.display = "none";
                      // this._displayMembers("sr22");
                    } else {
                      console.error("incorect password");
                    }
                    console.log(val);
                  });
                }
              });
              // <-- secondary search start
            });
          }
        });
      } else {
        console.error("name or password incorect length. Can not be empty");
      }
    } else {
      console.error("teamCode incorect length. 16 digits only");
    }
  }

  _query() {
    const q = query(collection(db, "accounts/iPhwge99VPFMSYMPkvxF/weeks"));
    let users = [];
    const tr = async function () {
      let id;
      await getDocs(q).then((docSnap) => {
        docSnap.forEach((doc) => {
          users.push({ ...doc.data() });
        });
        console.log("All data: ", users);
        // id = users[0].id;
        id = users;
      });
      return id;
    };
    return tr();
  }
  _getUserWekksQuery(path, var1, equal, var2) {
    const q = query(
      // "accounts/iPhwge99VPFMSYMPkvxF/weeks"
      collection(db, path),
      where(var1, equal, var2)
    );
    let users = [];
    const tr = async function () {
      let id;
      await getDocs(q).then((docSnap) => {
        docSnap.forEach((doc) => {
          users.push({ ...doc.data() });
          // users.push({ ...doc.data(), id: doc.id });
        });
        // console.log("filtered users: ", users[0].id);
        console.log("filtered weeks: ", users);
        // id = users[0].id;
        id = users;
      });
      return id;
    };
    return tr();
  }

  _idGener(idLength, takeArrLength) {
    let arr = [];
    let idCheck;
    const idgen = async () => {
      for (let i = 0; i <= idLength - 1; i++) {
        const num = this._randomNumber(takeArrLength);
        arr.push(this.#alfaNumDitch[num]);
        idCheck = arr.join("");
      }
      return idCheck;
    };
    return idgen();
  }

  _idGenerator(idLength, takeArrLength) {
    const all = () => {
      let idval;
      let codes;
      this._idGener(idLength, takeArrLength)
        .then(async (val) => {
          idval = val;
          // console.log(val);

          const q = query(collection(db, "idsArr"), where("idCode", "==", val));
          await getDocs(q).then((docSnap) => {
            docSnap.forEach((doc) => {
              // codes = undefined;
              codes = doc.data();
            });
          });
        })
        .then(() => {
          if (codes === undefined) {
            console.log("no find");
            this.#curUseId = idval;
            this._addData("idsArr", {
              idCode: idval,
            });
          } else {
            console.log("duplicate");
            all();
          }

          // TODO: start here next time
          console.log(this.#curUseId);
        });
    };
    all();
  }

  _addNewOnFireStore(path, data, id) {
    setDoc(doc(db, path, id), data);
  }

  // <--------- Time Start -----------> //
  _getTimeStamp() {
    const timeStamp = Date.now();
    return timeStamp;
  }
  // <--------- Time End -----------> //

  // <--------- Local Start -----------> //
  _saveToLocal(itemName, content) {
    localStorage.setItem(itemName, JSON.stringify(content));
  }
  _getFromLocal(itemName) {
    const data = JSON.parse(localStorage.getItem(itemName));
    if (data === null) return;
    return data;
  }
  _removeFromLocal(itemName) {
    localStorage.removeItem(itemName);
    console.log("Item removed");
  }
  // <--------- Local End -----------> //

  // <--------- Data Start -----------> //
  _uploadData(where, id, content) {
    //line 1724 for try
    setDoc(doc(db, where, id), content);
  }
  _updateData(path, id, content) {
    updateDoc(doc(db, path, id), content);
  }
  _addData(path, data) {
    addDoc(collection(db, path), data);
  }

  _searchData(path, searchIdent, equalWhat) {
    //line 1725 for try
    // TODO: get filtered data
    let users = [];
    const q = query(collection(db, path), where(searchIdent, "==", equalWhat));
    console.log(q);
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        users.push(doc.data());
      });
      console.log("filtered users: ", users);
    });

    return users;
  }

  _searchDataNoCon(path) {
    //line 1725 for try
    // TODO: get filtered data
    let users = [];
    const q = query(collection(db, path));
    // console.log(q);
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        users.push(doc.data());
        // users.push({ ...doc.data(), name: doc.id });
        // users.push({ ...doc.data(), id: doc.id });
      });
      console.log("filtered users: ", users);
    });

    return users;
  }

  _readData(path, id) {
    let data;
    //line 1727 for try
    // TODO: read data
    getDoc(collection(db, path, id)).then((docSnap) => {
      if (docSnap.exists()) {
        data = docSnap.data();
        console.log(docSnap.data());
      } else {
        console.log("no luck");
      }
    });
    // console.log("data", data);
    // return data;
  }
  // <--------- Data End -----------> //

  // <--------- Start Random -----------> //
  _randomNumber(int) {
    const num = Math.floor(Math.random() * int + 1);
    return num;
  }

  _OTPGenerator(otpLenght) {
    const arr = [];
    for (let i = 1; i <= otpLenght; i++) {
      arr.push(this._randomNumber(9));
    }
    const otp = arr.join("");
    return otp;
  }
  // <--------- End Random -----------> //

  // <--------- Start Email -----------> //
  _sendEmail(
    sendTo,
    replyTo,
    otp,
    title,
    message,
    contactEmail,
    contactPhoneNumber
  ) {
    this.#otp = otp;
    const data = JSON.stringify({
      ishtml: "false",
      sendto: sendTo,
      name: "El equipo THoras",
      replyTo: replyTo,
      title: `${title} ${otp}`,
      body: `${message}\n\n\nSi no solicitastes un código de verificación, no te preocupes. Puedes ignorar este correo.\nSi necesitas ayuda en algo, puedes comunicarte con ${contactEmail} o tambien por WhatsApp al ${contactPhoneNumber}.\n\n Estamos a sus ordenes`,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", "https://rapidmail.p.rapidapi.com/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "7d3c879bccmsh62af9fff7beec24p169f3ajsna9b5e9a558be"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "rapidmail.p.rapidapi.com");
    xhr.send(data);
  }
  // <--------- End Email -----------> //

  _disdSuccessErrorMessage(text, se, msTime) {
    const mesCon = document.querySelector("#error-success-message");
    const mesText = document.querySelector("#error-success-message-text");

    const disp = function () {
      mesText.textContent = text;
      mesCon.style.transform = `translateY(210px)`;

      setTimeout(() => {
        mesCon.style.transform = `translateY(0px)`;
      }, msTime);
    };

    if (se === "ex") {
      mesCon.classList.remove("error-mess");
      mesText.classList.remove("error-mess-text");
      mesCon.classList.add("success-mess");
      mesText.classList.add("success-mess-text");
      disp();
    }
    if (se === "er") {
      mesCon.classList.remove("success-mess");
      mesText.classList.remove("success-mess-text");
      mesCon.classList.add("error-mess");
      mesText.classList.add("error-mess-text");
      disp();
    }
  }

  // TODO: srHide only works if = to sr active
  _srGetStartedDispChoose(srDisp, srHide, whereTo) {
    window.scrollTo(0, 0);

    let perdisp;
    let perhide;
    let srdisp;
    let srhide;

    if (srDisp === "sr1") {
      srdisp = sr1;
      perdisp = 0;
    }
    if (srDisp === "sr2") {
      srdisp = sr2;
      perdisp = 390;
    }
    if (srDisp === "sr3") {
      srdisp = sr3;
      perdisp = 390 * 2;
    }
    if (srDisp === "sr4") {
      srdisp = sr4;
      perdisp = 390 * 3;
    }
    if (srDisp === "sr5") {
      srdisp = sr5;
      perdisp = 390 * 4;
    }
    if (srDisp === "sr6") {
      srdisp = sr6;
      perdisp = 390 * 5;
    }
    if (srDisp === "sr13") {
      srdisp = sr13;
      perdisp = 390 * 6;
    }
    if (srDisp === "sr14") {
      srdisp = sr14;
      perdisp = 390 * 7;
    }
    if (srDisp === "sr15") {
      srdisp = sr15;
      perdisp = 390 * 8;
    }
    if (srDisp === "sr18") {
      srdisp = sr18;
      perdisp = 390 * 9;
    }
    if (srDisp === "sr7") {
      srdisp = sr7;
      perdisp = 390 * 10;
    }
    if (srDisp === "sr8") {
      srdisp = sr8;
      perdisp = 390 * 11;
    }
    if (srDisp === "sr9") {
      srdisp = sr9;
      perdisp = 390 * 12;
    }
    if (srDisp === "sr11") {
      srdisp = sr11;
      perdisp = 390 * 13;
    }
    if (srDisp === "sr12") {
      srdisp = sr12;
      perdisp = 390 * 14;
    }
    if (srDisp === "sr16") {
      srdisp = sr16;
      perdisp = 390 * 15;
    }
    if (srDisp === "sr17") {
      srdisp = sr17;
      perdisp = 390 * 16;
    }
    if (srDisp === "sr19") {
      srdisp = sr19;
      perdisp = 390 * 17;
    }
    if (srDisp === "sr20") {
      srdisp = sr20;
      perdisp = 390 * 18;
    }
    if (srDisp === "sr21") {
      srdisp = sr21;
      perdisp = 390 * 19;
    }
    if (srDisp === "sr22") {
      srdisp = sr22;
      perdisp = 390 * 20;
    }
    if (srDisp === "sr23") {
      srdisp = sr23;
      perdisp = 390 * 21;
    }
    if (srDisp === "sr24") {
      srdisp = sr24;
      perdisp = 390 * 22;
    }
    if (srDisp === "sr25") {
      srdisp = sr25;
      perdisp = 390 * 23;
    }

    // <-- Hide
    if (srHide === "sr1") {
      srhide = sr1;
    }
    if (srHide === "sr2") {
      srhide = sr2;
    }
    if (srHide === "sr3") {
      srhide = sr3;
    }
    if (srHide === "sr4") {
      srhide = sr4;
    }
    if (srHide === "sr5") {
      srhide = sr5;
    }
    if (srHide === "sr6") {
      srhide = sr6;
    }
    if (srHide === "sr13") {
      srhide = sr13;
    }
    if (srHide === "sr14") {
      srhide = sr14;
    }
    if (srHide === "sr15") {
      srhide = sr15;
    }
    if (srHide === "sr18") {
      srhide = sr18;
    }
    if (srHide === "sr7") {
      srhide = sr7;
    }
    if (srHide === "sr8") {
      srhide = sr8;
    }
    if (srHide === "sr9") {
      srhide = sr9;
    }
    if (srHide === "sr11") {
      srhide = sr11;
    }
    if (srHide === "sr12") {
      srhide = sr12;
    }
    if (srHide === "sr16") {
      srhide = sr16;
    }
    if (srHide === "sr17") {
      srhide = sr17;
    }
    if (srHide === "sr19") {
      srhide = sr19;
    }
    if (srHide === "sr20") {
      srhide = sr20;
    }
    if (srHide === "sr21") {
      srhide = sr21;
    }
    if (srHide === "sr22") {
      srhide = sr22;
    }
    if (srHide === "sr23") {
      srhide = sr23;
    }
    if (srHide === "sr24") {
      srhide = sr24;
    }
    if (srHide === "sr25") {
      srhide = sr25;
    }

    const style = window.getComputedStyle(srhide);
    const matrix = new WebKitCSSMatrix(style.transform);
    const nowLocated = matrix.e;

    if (whereTo === "right") {
      perhide = nowLocated + 390;
    }
    if (whereTo === "left") {
      perhide = nowLocated - 390;
    }
    if (whereTo === "none") {
      perhide = nowLocated;
    }

    srhide.style.transform = `translateX(${perhide}px)`;
    srdisp.style.transform = `translateX(-${perdisp}px)`;

    if (
      srDisp === "sr7" ||
      srDisp === "sr8" ||
      srDisp === "sr9" ||
      srDisp === "sr11" ||
      srDisp === "sr12" ||
      srDisp === "sr16" ||
      srDisp === "sr17" ||
      srDisp === "sr19" ||
      srDisp === "sr20"
    ) {
      appName.classList.add("app-name-not-only");
      teamImage.classList.remove("team-image-hidden");
    } else {
      appName.classList.remove("app-name-not-only");
      teamImage.classList.add("team-image-hidden");
    }
  }

  _setCurWeek(i) {
    const numWeeks = this.#curWeekArrayOrg.length;
    this.#curWeek = this.#curWeekArrayOrg[`${numWeeks - i}`];
    this._displayTimeSheet(
      this.#curWeek,
      1,
      this.#curWeekArrayOrg.length - i + 1
    );
  }

  _addTime(arr) {
    // const arr = ["8:19", "7:20", "1:26"]; //17:40  1070 mins
    let mins = arr.reduce((acc, time) => {
      let [h, m] = time.split(":");
      acc += h * 60 + m * 1;
      return acc;
    }, 0);
    const sum = ((mins / 60) | 0) + ":" + ("0" + (mins % 60)).slice(-2);

    console.log(sum);
    return sum;
  }

  _calculatePay(pay, time) {
    const [h, m] = time.split(":");
    const Ph = h * pay;
    const Pm = m * (pay / 60);
    const totalPay = Ph + Pm;
    const totalPayR = totalPay.toFixed(2);
    return totalPayR;
  }

  _weekSelect(direction, weekNum) {
    if (weekNum) {
      console.log("Yes");
    } else {
      if (direction === "back") {
        if (this.#weekDisplayNumberMinus <= this.#curWeekArrayOrg.length - 1) {
          this.#weekDisplayNumberMinus += 1;
          this._setCurWeek(this.#weekDisplayNumberMinus);
          btnWeekSelectForward.classList.remove("btn-dim-dim");
          btnWeekSelectForward.classList.add("btn-dim-full");
        } else {
          console.log("no more week back");
          btnWeekSelectBack.classList.remove("btn-dim-full");
          btnWeekSelectBack.classList.add("btn-dim-dim");
        }
      }
      if (direction === "ahead") {
        if (this.#weekDisplayNumberMinus > 1) {
          this.#weekDisplayNumberMinus -= 1;
          this._setCurWeek(this.#weekDisplayNumberMinus);
          btnWeekSelectBack.classList.remove("btn-dim-dim");
          btnWeekSelectBack.classList.add("btn-dim-full");
        } else {
          console.log("no more weeks ahead");
          btnWeekSelectForward.classList.remove("btn-dim-full");
          btnWeekSelectForward.classList.add("btn-dim-dim");
        }
      }
    }
  }

  _calculateTimeBetween(timeIn, timeOut) {
    const timeInArr = timeIn.split(":");
    const timeInHour = Number(timeInArr[0]);
    const timeInMin = Number(timeInArr[1]);

    const timeOutArr = timeOut.split(":");
    const timeOutHour = Number(timeOutArr[0]);
    const timeOutMin = Number(timeOutArr[1]);

    // work with time
    let timeWArr = [];
    let timeOutWHour;
    let timeOutWMin;

    if (timeIn === "0:00" || timeOut === "0:00") {
      return "0:00";
    } else {
      if (timeInMin > timeOutMin) {
        timeOutWHour = timeOutHour - 1;
        timeOutWMin = timeOutMin + 60;
      }
      if (timeInMin <= timeOutMin) {
        timeOutWHour = timeOutHour;
        timeOutWMin = timeOutMin;
      }
      timeWArr.push(timeOutWHour - timeInHour);
      const calcMin = timeOutWMin - timeInMin;
      if (calcMin < 10) {
        timeWArr.push("0" + calcMin);
      } else {
        timeWArr.push(calcMin);
      }

      const calculatedTime = timeWArr.join(":");
      return calculatedTime;
    }
  }

  _displayTimeSheet(weeks, arr, i, name) {
    let week;
    if (arr === "arr") {
      week = weeks[weeks.length - 1];
      this.#curWeek = week;
    } else {
      week = weeks;
    }
    console.log(week);
    const sr11WeekTimeTotalTime = document.querySelector(
      `#sr11-summary-time-total-time`
    );
    const sr11WeekPayPerHour = document.querySelector(
      `#sr11-summary-pay--hour-pay`
    );
    const sr11WeekPayTotal = document.querySelector(
      `#sr11-summary-pay-total-total-pay`
    );

    hourSheetWeekNumber.textContent = `Semana ${i}`;
    // if (name !== undefined) {
    //   sr11TimeSheetName.textContent = name;
    // } else {
    //   sr11TimeSheetName.textContent = week.name;
    // }

    const daysArr = week.days;
    daysArr.forEach((curDay, i, arr) => {
      const curday = curDay.day;

      const updateDayStart = document.querySelector(
        `#sr11-daily-hours-${curday}-start`
      );
      const updateDayEnd = document.querySelector(
        `#sr11-daily-hours-${curday}-end`
      );
      const updateDayTotalTime = document.querySelector(
        `#sr11-daily-hours-${curday}-time-total`
      );

      if (curDay.in === "0:00") {
        updateDayStart.textContent = curDay.in;
      } else {
        updateDayStart.textContent = this._timeFormator(curDay.in);
      }
      if (curDay.out === "0:00") {
        updateDayEnd.textContent = curDay.out;
      } else {
        updateDayEnd.textContent = this._timeFormator(curDay.out);
      }
      console.log(this.#curData.pro);
      if (this.#curData.pro !== "false") {
        updateDayTotalTime.textContent = curDay.totalTime;
      } else {
        updateDayTotalTime.textContent = "-:--";
      }
    });

    if (this.#curData.pro !== "false") {
      sr11WeekTimeTotalTime.textContent = week.totalTime;
      sr11WeekPayTotal.textContent = `$ ${week.totalPay}`;
    } else {
      sr11WeekTimeTotalTime.textContent = "-:--";
      sr11WeekPayTotal.textContent = "$ ----";
    }

    sr11WeekPayPerHour.textContent = `$ ${week.salary}`;
    this._srGetStartedDispChoose("sr11", "sr22", "left");
  }

  _timeFormator(time) {
    const timeArr = time.split(":");
    const timehour = timeArr[0];
    const timemin = timeArr[1];

    const conTimeArr = [];
    let conAmPm;

    if (Number(timehour) < 12) {
      if (Number(timehour) === 0) {
        conTimeArr.push(12);
        conTimeArr.push(timemin);
        conAmPm = "am";
      } else {
        conTimeArr.push(timehour);
        conTimeArr.push(timemin);
        conAmPm = "am";
      }
    }
    if (Number(timehour) >= 12) {
      if (Number(timehour) === 12) {
        conTimeArr.push(timehour);
        conTimeArr.push(timemin);
      }
      if (Number(timehour) > 12) {
        const hour = Number(timehour) - 12;
        conTimeArr.push(hour);
        conTimeArr.push(timemin);
      }
      conAmPm = "pm";
    }

    const timeFormated = conTimeArr.join(":") + " " + conAmPm;
    return timeFormated;
  }

  _updateEntries(time) {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    let IndexDayVal;

    if (this.#timePickerUpdateDay === "monday") {
      IndexDayVal = 0;
    }
    if (this.#timePickerUpdateDay === "tuesday") {
      IndexDayVal = 1;
    }
    if (this.#timePickerUpdateDay === "wednesday") {
      IndexDayVal = 2;
    }
    if (this.#timePickerUpdateDay === "thursday") {
      IndexDayVal = 3;
    }
    if (this.#timePickerUpdateDay === "friday") {
      IndexDayVal = 4;
    }
    if (this.#timePickerUpdateDay === "saturday") {
      IndexDayVal = 5;
    }
    if (this.#timePickerUpdateDay === "sunday") {
      IndexDayVal = 6;
    }

    console.log("time: ", time);

    const updateIn = () => {
      this.#curWeek.days[IndexDayVal].in = time;
      console.log(this.#curWeek);
      this._srGetStartedDispChoose("sr11", "sr21", "right");

      let timeArray = [];
      const arr = this.#curWeek.days.forEach((cur, i, arr) => {
        timeArray.push(cur.totalTime);
      });

      this.#curWeek.totalTime = this._addTime(timeArray);
      this.#curWeek.totalPay = this._calculatePay(
        this.#curWeek.salary,
        this.#curWeek.totalTime
      );
      this._updateData(
        `accounts/${curDataLocal.teamCode}/weeks`,
        this.#curWeek.weekId,
        this.#curWeek
      );
    };

    const updateOut = () => {
      this.#curWeek.days[IndexDayVal].out = time;
      this._srGetStartedDispChoose("sr11", "sr21", "right");

      let timeArray = [];
      const arr = this.#curWeek.days.forEach((cur, i, arr) => {
        timeArray.push(cur.totalTime);
      });

      console.log(timeArray);
      this.#curWeek.totalTime = this._addTime(timeArray);

      const timeT = this.#curWeek.totalTime;
      console.log(this.#curWeek.totalTime);
      this.#curWeek.totalPay = this._calculatePay(
        this.#curWeek.salary,
        this.#curWeek.totalTime
      );
      console.log(this.#curWeek);

      this._updateData(
        `accounts/${curDataLocal.teamCode}/weeks`,
        this.#curWeek.weekId,
        this.#curWeek
      );
    };

    if (time === "") {
      console.error("no time to work with, returned");
    } else {
      const entyryArr = time.split(":");
      const entryhour = Number(entyryArr[0]);
      const entrymin = Number(entyryArr[1]);

      if (this.#timePickerUpdatestnd === "start") {
        if (this.#curWeek.days[IndexDayVal].out === "0:00") {
          this.#curWeek.days[IndexDayVal].totalTime =
            this._calculateTimeBetween(
              time,
              this.#curWeek.days[IndexDayVal].out
            );

          updateIn();
        } else {
          const timeArr = this.#curWeek.days[IndexDayVal].out.split(":");
          const timehour = Number(timeArr[0]);
          const timemin = Number(timeArr[1]);
          if (entryhour < timehour) {
            this.#curWeek.days[IndexDayVal].totalTime =
              this._calculateTimeBetween(
                time,
                this.#curWeek.days[IndexDayVal].out
              );
            updateIn();
          }
          if (entryhour === timehour) {
            if (entrymin < timemin) {
              this.#curWeek.days[IndexDayVal].totalTime =
                this._calculateTimeBetween(
                  time,
                  this.#curWeek.days[IndexDayVal].out
                );
              updateIn();
            }
            if (entrymin >= timemin) {
              console.error(`yuor in can't higher than your out`);
            }
          }
          if (entryhour > timehour) {
            console.error(`yuor in can't higher than your out`);
          }
        }
      }
      if (this.#timePickerUpdatestnd === "end") {
        if (this.#curWeek.days[IndexDayVal].in === "0:00") {
          this.#curWeek.days[IndexDayVal].totalTime =
            this._calculateTimeBetween(
              this.#curWeek.days[IndexDayVal].in,
              time
            );
          updateOut();
        } else {
          const timeArr = this.#curWeek.days[IndexDayVal].in.split(":");
          const timehour = Number(timeArr[0]);
          const timemin = Number(timeArr[1]);
          if (entryhour > timehour) {
            this.#curWeek.days[IndexDayVal].totalTime =
              this._calculateTimeBetween(
                this.#curWeek.days[IndexDayVal].in,
                time
              );
            updateOut();
          }
          if (entryhour === timehour) {
            if (entrymin > timemin) {
              this.#curWeek.days[IndexDayVal].totalTime =
                this._calculateTimeBetween(
                  this.#curWeek.days[IndexDayVal].in,
                  time
                );
              updateOut();
            }
            if (entrymin <= timemin) {
              console.error(`yuor out can't lower than your in`);
            }
          }
          if (entryhour < timehour) {
            console.error(`yuor out can't lower than your in`);
          }
        }
      }
      console.log("arr", this.#curWeek.days);
      this._displayTimeSheet(
        this.#curWeek,
        "not arr",
        this.#curWeekArrayOrg.length - this.#weekDisplayNumberMinus + 1
      );
    }
  }

  _deleteAllChildren(docId) {
    const where = document.querySelector(`#${docId}`);
    while (where.hasChildNodes()) {
      where.removeChild(where.firstChild);
    }
  }

  _displayMembers(srHide) {
    let curDataLocal;
    this._srGetStartedDispChoose("sr22", srHide, "right");
    const conMemberDisplay = document.querySelector("#sr7-mem-con");
    this.#curData = this._getFromLocal("curData");

    if (this.#curData.level === this.#adminLevel) {
      console.log("top admin here");
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    if (curDataLocal.pro === "pro") {
      btnsr7GoPro.style.display = "none";
    }
    console.log("curacc", this.#curAccountData);
    console.log("curda", this.#curData);
    console.log("", curDataLocal);

    const q = query(collection(db, `accounts/${curDataLocal.teamCode}/team`));
    getDocs(q).then((docSnap) => {
      this._deleteAllChildren("sr7-mem-con");

      if (docSnap.empty === true) {
        const HTML = `<div id="no-member-message-con">
          <p id="no-member-message-header">Tus miembros aparecerán aqui</p>
          <p id="no-member-message-text">
          Aún no tienes miembros en tu equipo. Empieza con crear un
          <span>Nuevo miembro</span>.
          </p>
          </div>`;
        conMemberDisplay.insertAdjacentHTML("beforeend", HTML);
      } else {
        const HTML = `<div id="new-member-message-con">
        <p id="new-member-message-text">
        Usa el botón <span>Nuevo miembro</span> para añadir miembros a tu equipo
        </p>
        </div>`;
        conMemberDisplay.insertAdjacentHTML("beforeend", HTML);
      }
      docSnap.forEach((doc) => {
        headerTeamImg.src = this.#curData.teamImg;
        headerTeamName.textContent = this.#curData.teamName;
        let val;
        let salary;
        let totalPay;
        let totalTime;

        val = doc.data();

        const dispNow = function () {
          const HTML = `
        <div
        data-where="open"
        data-memberId="${val.memberId}"
        id="sr7-mem-con-2"
        class="member-con-2"
      >
        <div
          data-where="open"
          data-memberId="${val.memberId}"
          id="sr7-mem-info-con"
          class="member-info-con"
        >
          <div
            data-where="open"
            data-memberId="${val.memberId}"
            id="sr7-mem-info-con-2"
            class="member-info-con-2"
          >
            <p
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-name"
              class="member-name"
            >
              ${val.name}
            </p>

            <div
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-info-con-3"
              class="member-info-con-3"
            >
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-level"
                class="member-level"
              >
                ${val.level}
              </p>
            </div>
          </div>

          <svg
            data-where="info"
            data-memberId="${val.memberId}"
            id="sr7-btn-meminfo"
            class="btn-member-info"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              d="M0 0.551147H32V6.0341H0V0.551147ZM0 14.2585H32V19.7415H0V14.2585ZM0 27.9659H32V33.4488H0V27.9659Z"
              fill="#0085FF"
            />
          </svg>
        </div>

        <div
          data-where="open"
          data-memberId="${val.memberId}"
          id="sr7-mem-week-data-con"
          class="member-week-data-con"
        >
          <div
            data-where="open"
            data-memberId="${val.memberId}"
            id="sr7-mem-week-data-con-2"
            class="member-week-data-con-2"
          >
            <p
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-week-number"
              class="member-week-number"
            >
              Información de la última semana
            </p>
          </div>
          <div
            data-where="open"
            data-memberId="${val.memberId}"
            id="sr7-mem-week-data-con-3"
            class="member-week-data-con-3"
          >
            <div
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-data-time"
              class="member-data-time"
            >
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-time-text"
                class="member-data-time-text"
              >
                Horas
              </p>
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-time-time"
                class="member-data-time-time"
              >
                ${totalTime}
              </p>
            </div>

            <div
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-data-pay"
              class="member-data-pay"
            >
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-pay-text"
                class="member-data-pay-text"
              >
                Salario
              </p>
              <p
                data
                -where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-pay-pay"
                class="member-data-pay-pay"
              >
                ${salary}
              </p>
            </div>

            <div
              data-where="open"
              data-memberId="${val.memberId}"
              id="sr7-mem-data-total-pay"
              class="member-data-total-pay"
            >
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-total-pay-text"
                class="member-data-total-pay-text"
              >
                Pago
              </p>
              <p
                data-where="open"
                data-memberId="${val.memberId}"
                id="sr7-mem-data-total-pay-pay"
                class="member-data-total-pay-pay"
              >
                ${totalPay}
              </p>
            </div>
          </div>
        </div>
      </div>
          `;

          conMemberDisplay.insertAdjacentHTML("afterBegin", HTML);
        };

        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/weeks`),
          where("weekId", "==", val.curWeekId)
        );
        console.log(q);
        getDocs(q).then((docSnap) => {
          if (this.#curData.pro === "false") {
            salary = "$ --";
            totalPay = "$ ----";
            totalTime = "-:--";
            dispNow();
          } else {
            if (!docSnap.empty) {
              docSnap.forEach((doc) => {
                const val2 = doc.data();
                salary = `$ ${val2.salary}`;
                if (val2.totalTime === "" || val2.totalPay === "") {
                  totalPay = "$ 0000";
                  totalTime = "0:00";
                } else {
                  salary = `$ ${val2.salary}`;
                  totalPay = `$ ${val2.totalPay}`;
                  totalTime = val2.totalTime;
                }
              });
              dispNow();
            } else {
              salary = "$ 00";
              totalPay = "$ 0000";
              totalTime = "0:00";
              dispNow();
            }
          }
        });
      });
    });

    // then((val) => {

    // console.log(content[0]);

    this._srGetStartedDispChoose("sr7", "sr22", "left");
  }

  _createMemberStep2() {
    this.#curData = this._getFromLocal("curData");
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    const inpPayPerHour = document.querySelector("#sr9-inp-pay--hour");
    const writePermision = document.querySelector("#sr9-swi-write--hours");
    const memberLevel = document.querySelector("#sr9-swi-assis");
    let write;
    let level;

    if (inpPayPerHour.value > 0) {
      this._srGetStartedDispChoose("sr22", "sr9", "left");
      if (writePermision.dataset.on === "false") {
        write = false;
      } else {
        write = true;
      }
      if (memberLevel.dataset.on === "true") {
        level = "asistente";
      } else {
        level = "miembro";
      }

      this._updateData(
        `accounts/${curDataLocal.teamCode}/team`,
        `${this.#curMemberId}`,
        {
          level: level,
          writePermision: write,
          salary: inpPayPerHour.value,
        }
      );

      console.log("pay", inpPayPerHour.value);
      console.log("write hours", write);
      console.log("assistant", level);

      setTimeout(() => {
        this._displayMembers("sr22");
        this._disdSuccessErrorMessage(
          "Éxito. Creaste un nuevo miembro.",
          "ex",
          3000
        );
      }, 1000);
    } else {
      console.error("no pay");
    }
  }

  _newWeek(curid) {
    if (navigator.onLine) {
      this.#curData = this._getFromLocal("curData");
      this._idGenerator(this.#idLenght, this.#idTakeArrLenght);

      let curDataLocal;
      if (this.#curData.level === this.#adminLevel) {
        curDataLocal = this.#curAccountData;
      } else {
        curDataLocal = this.#curData;
      }

      let memberId;
      if (curid !== undefined) {
        memberId = curid;
      } else {
        memberId = this.#curMemberInfo.memberId;
        console.log("member here", this.#curMemberInfo.memberId);
      }
      const intv = setInterval(() => {
        if (this.#curUseId !== undefined) {
          clearInterval(intv);
          console.log("done already");
          this._uploadData(
            `accounts/${curDataLocal.teamCode}/weeks`,
            this.#curUseId,
            {
              weekId: this.#curUseId,
              name: this.#curMemberInfo.name,
              memberId: memberId,
              salary: this.#curMemberInfo.salary,
              extraHours: curDataLocal.extraHours, //fals,
              extraHoursRequiredPer: curDataLocal.extraHoursRequiredPer, //wee,
              extraHoursRequired: curDataLocal.extraHoursRequired,
              totalTime: "",
              totalNormalTime: "",
              totalExtraTime: "",
              totalMaqTime: "",
              totalNormalPay: "",
              totalExtraPay: "",
              totalMaqPay: "",
              totalPay: "",
              weekMadeTimeStamp: this._getTimeStamp(),
              memberPayed: false,
              adminPayed: false,
              payed: false,
              days: [
                {
                  day: "monday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "tuesday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "wednesday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "thursday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "friday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "saturday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
                {
                  day: "sunday",
                  in: "0:00",
                  out: "0:00",
                  totalPay: "000",
                  totalTime: "0:00",
                  totaExtraTime: "0:00",
                  break: [
                    {
                      start: "0:00",
                      startM: "am",
                      end: "0:00",
                      endM: "am",
                      time: "0:00",
                    },
                  ],
                },
              ],
            }
          );

          this._updateData(
            `accounts/${curDataLocal.teamCode}/team`,
            `${this.#curMemberInfo.memberId}`,
            {
              curWeekId: this.#curUseId,
            }
          );

          this._readWeeks();
          this._disdSuccessErrorMessage(
            "Éxito. Creaste nueva tabla de horas.",
            "ex",
            3000
          );
        } else {
          console.log("still not");
        }
      }, 1000);
    } else {
      this._disdSuccessErrorMessage(
        "Parece que no tienes conexión a internet. verifique tu conexión y vuelve a intentarlo.",
        "er",
        7000
      );
    }
  }

  _createMemberStep1() {
    if (navigator.onLine) {
      console.log("online this time");

      this.#curData = this._getFromLocal("curData");

      const inpMemberName = document.querySelector("#sr8-inp-name");
      const inpPassword = document.querySelector("#sr8-inp-crepass");
      const inpVerPassword = document.querySelector("#sr8-inp-confpass");
      const inpPayPerHour = document.querySelector("#sr9-inp-pay--hour");

      let curDataLocal;
      if (this.#curData.level === this.#adminLevel) {
        curDataLocal = this.#curAccountData;
      } else {
        curDataLocal = this.#curData;
      }
      inpPayPerHour.value = curDataLocal.salary;

      if (inpMemberName.value.length > 2 && inpMemberName.value.length < 21) {
        if (
          inpPassword.value === inpVerPassword.value &&
          inpPassword.value.length > 5
        ) {
          this._srGetStartedDispChoose("sr22", "sr8", "right");
          this._idGenerator(this.#idLenght, this.#idTakeArrLenght);
          const intv = setInterval(() => {
            if (this.#curUseId !== undefined) {
              clearInterval(intv);
              console.log("done already");
              this.#curMemberId = this.#curUseId;
              this._uploadData(
                `accounts/${curDataLocal.teamCode}/team`,
                this.#curUseId,
                {
                  name: inpMemberName.value,
                  memberId: this.#curUseId,
                  teamCode: curDataLocal.teamCode,
                  password: inpPassword.value,
                  salary: curDataLocal.salary,
                  totalHoras: "",
                  totalPay: "",
                  level: "miembro", //assistant
                  lastModified: this._getTimeStamp(),
                  writePermision: true, //false
                  extraHours: curDataLocal.extraHours, //false
                  extraHoursRequiredPer: curDataLocal.extraHoursRequiredPer, //week
                  extraHoursRequired: curDataLocal.extraHoursRequired,
                  mode: curDataLocal.mode, //maquinaria
                  totalTime: "",
                  curWeekTotalTime: "",
                  totalNormalTime: "",
                  curWeekTotalNormalTime: "",
                  totalExtraTime: "",
                  curWeekTotalExtraTime: "",
                  totalMaqTime: "",
                  curWeekTotalMaqTime: "",
                  totalNormalPay: "",
                  curWeekTotalNormalPay: "",
                  totalExtraPay: "",
                  curWeekTotalExtraPay: "",
                  totalMaqPay: "",
                  curWeekTotalMaqPay: "",
                  totalPay: "",
                  curWeekTotalPay: "",
                  curWeekId: "",
                  category: "Todos", // ...more., seperate mulitple caytegorry with "/"
                }
              );

              // TODO: function to continue creating an account ghoes here it waits till the id is available
              // this._displayMembers("sr22");

              inpPayPerHour.addEventListener("focus", () => {
                inpPayPerHour.value = "";
              });

              this._srGetStartedDispChoose("sr9", "sr22", "left");
            } else {
              console.log("still not");
            }
          }, 1000);
        } else {
          console.error("no match passwords");
        }
      } else {
        console.error("name length is not correct");
      }
    } else {
      this._disdSuccessErrorMessage(
        "Pareceque no tienes conexión a internet. Verifique tu conexión y vuelve a intentarlo.",
        "er",
        7000
      );
    }
  }

  _createTeamStep2() {
    const inpTeamPay = document.querySelector("#sr6-inp-pay");
    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamPay.value.length > 0) {
      this._updateData("accounts", curDataLocal.teamCode, {
        salary: inpTeamPay.value,
      });
      this._displayMembers("sr6");
    } else {
      console.error("not right length", inpTeamPay.value.length);
    }
  }

  _eventTeamCodeDisp() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    const inpTeamName = document.querySelector("#sr5-inp-team-name");
    const dispTeamCode = document.querySelector("#sr5-generate-team-code");
    inpTeamName.addEventListener("focus", () => {
      this.#curData = this._getFromLocal("curData");
      dispTeamCode.textContent = curDataLocal.teamCode;
    });
  }

  _createTeamStep1() {
    this.#curData = this._getFromLocal("curData");
    const inpTeamName = document.querySelector("#sr5-inp-team-name");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamName.value.length > 4 && inpTeamName.value.length < 31) {
      this._updateData("accounts", curDataLocal.teamCode, {
        teamName: inpTeamName.value,
      });

      console.log("right length", inpTeamName.value.length);
      this._srGetStartedDispChoose("sr6", "sr5", "left");
    } else {
      console.error("not right length", inpTeamName.value.length);
    }

    // const dispTeamCode = document.querySelector("#sr5-generate-team-code");

    // this._createTeamStep2(inpTeamName.value, this.#curUseId);
  }

  _createAccountStep2() {
    const inpVerificationCode = document.querySelector(
      "#sr3-inp-verification-code"
    );
    // if (inpVerificationCode.value === this.#otp) { TODO: activate
    this._srGetStartedDispChoose("sr22", "sr4", "left");
    this._idGenerator(this.#idLenght, this.#idTakeArrLenght);
    const intv = setInterval(() => {
      if (this.#curUseId !== undefined) {
        clearInterval(intv);
        const acc = {
          teamCode: this.#curUseId,
          email: this.#email,
          accountPassword: this.#password,
          level: "admin",
          pro: "starter", //trial, pro
          proTime: 0,
          trialDone: false,
          proStartTimeStamp: 0,
          accountMadeTimeStamp: this._getTimeStamp(),
          teamName: "",
          numberOfMembers: 0,
          teamImg: "",
          payday: "sábado",
          salary: 0,
          extraHours: false, //false
          extraHoursRequiredPer: "day", //week
          extraHoursRequired: 0,
          mode: "normal", //maquinaria
          teamTotalTime: "",
          teamTotalNormalTime: "",
          teamTotalExtraTime: "",
          teamTotalMaqTime: "",
          teamTotalNormalPay: "",
          teamTotalExtraPay: "",
          teamTotalMaqPay: "",
          teamTotalPay: "",
          categories: ["Todos"],
        };
        console.log("done already");
        this._uploadData("accounts", this.#curUseId, acc);
        // TODO: function to continue creating an account ghoes here it waits till the id is available
        this._saveToLocal("curData", acc);
        // this._eventTeamCodeDisp();
        this._srGetStartedDispChoose("sr5", "sr22", "left");
      } else {
        console.log("still not");
      }
    }, 1000);
    console.log(inpVerificationCode.value);
    // } else {  TODO: activate
    // console.error("Codes do not match", inpVerificationCode.value, this.#otp);  TODO: activate
    // }  TODO: activate
  }

  _createAccountStep1() {
    const inpEmail = document.querySelector("#sr3-inp-email");
    const inpPassword = document.querySelector("#sr3-inp-create-password");
    const inpPasswordConf = document.querySelector("#sr3-inp-confirm-password");
    const inpPasswordConfErrmess = document.querySelector(
      "#sr3-inp-confpass-errmess"
    );

    if (
      inpEmail.value != "" &&
      inpPassword.value != "" &&
      inpPasswordConf.value != ""
    ) {
      if (inpPassword.value === inpPasswordConf.value) {
        this.#email = inpEmail.value;
        this.#password = inpPassword.value;
        this.#otp = this._OTPGenerator(6);
        // this._sendEmail(    TODO: activate
        //   inpEmail.value,    TODO: activate
        //   "thorastrack@gmail.com",    TODO: activate
        //   this.#otp,    TODO: activate
        //   "Este es su codigo de verificación para THoras",    TODO: activate
        //   "Hola",    TODO: activate
        //   "benklassen19@icloud.com",    TODO: activate
        //   "+52 996 730 6118"    TODO: activate
        // );    TODO: activate
        this._srGetStartedDispChoose("sr4", "sr3", "left");
      } else {
        console.error("not same");
        inpPasswordConfErrmess.style.display = "block";
      }
    }
    // console.log(inpEmail.value, inpPassword.value, inpPasswordConf.value);
  }

  _setSwiChangeMemberInfo(write, level) {
    if (write === true) {
      sr16SwiHours.classList.add("switch-on");
      sr16SwiHours.classList.remove("switch-off");
      sr16SwiHours2.classList.add("switch-inner-on");
      sr16SwiHours2.classList.remove("switch-inner-off");
      sr16SwiHours3.classList.add("switch-text-on");
      sr16SwiHours3.classList.remove("switch-text-off");
      sr16SwiHours.dataset.on = "true";
      sr16SwiHoursText.textContent = "permitido";
    }
    if (write === false) {
      sr16SwiHours.classList.remove("switch-on");
      sr16SwiHours.classList.add("switch-off");
      sr16SwiHours2.classList.remove("switch-inner-on");
      sr16SwiHours2.classList.add("switch-inner-off");
      sr16SwiHours3.classList.remove("switch-text-on");
      sr16SwiHours3.classList.add("switch-text-off");
      sr16SwiHours.dataset.on = "false";
      sr16SwiHoursText.textContent = "negado";
    }

    if (level === "asistente") {
      sr16SwiAssis.classList.add("switch-on");
      sr16SwiAssis.classList.remove("switch-off");
      sr16SwiAssis2.classList.add("switch-inner-on");
      sr16SwiAssis2.classList.remove("switch-inner-off");
      sr16SwiAssis3.classList.add("switch-text-on");
      sr16SwiAssis3.classList.remove("switch-text-off");
      sr16SwiAssis.dataset.on = "true";
      sr16SwiAssisText.textContent = "asistente";
    }
    if (level === "miembro") {
      sr16SwiAssis.classList.remove("switch-on");
      sr16SwiAssis.classList.add("switch-off");
      sr16SwiAssis2.classList.remove("switch-inner-on");
      sr16SwiAssis2.classList.add("switch-inner-off");
      sr16SwiAssis3.classList.remove("switch-text-on");
      sr16SwiAssis3.classList.add("switch-text-off");
      sr16SwiAssis.dataset.on = "false";
      sr16SwiAssisText.textContent = "miembro";
    }
  }

  _sr16InfoSaveChanges() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (
      sr16InpMemberName.value.length > 2 &&
      sr16InpMemberPassword.value.length > 5
    ) {
      this._srGetStartedDispChoose("sr22", "sr16", "right");
      setTimeout(() => {
        this._updateData(
          `accounts/${curDataLocal.teamCode}/team`,
          this.#curMemberInfo.memberId,
          {
            name: sr16InpMemberName.value,
            password: sr16InpMemberPassword.value,
          }
        );
        setTimeout(() => {
          this._displayMembers("sr22");
        }, 1000);
      }, 1000);
    } else {
      console.error("not valid data");
    }
  }
  async _sr16SettingsSaveChanges() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (sr16InpMemberPay.value > 0) {
      this._srGetStartedDispChoose("sr22", "sr16", "right");
      let level;
      if (sr16SwiAssis.dataset.on === "true") {
        level = "asistente";
      } else {
        level = "miembro";
      }
      setTimeout(() => {
        this._updateData(
          `accounts/${curDataLocal.teamCode}/team`,
          this.#curMemberInfo.memberId,
          {
            salary: sr16InpMemberPay.value,
            writePermision: sr16SwiHours.dataset.on,
            level: level,
          }
        );
        setTimeout(() => {
          this._displayMembers("sr22");
        }, 1000);
      }, 1000);
    } else {
      console.error("not valid data");
    }
  }

  _logout() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    const logoutPassword = prompt(
      `Logout. \n To logout you have to put your account password in here`
    );
    if (logoutPassword === curDataLocal.accountPassword) {
      console.log("good");
      this._removeFromLocal("curData");
      this._init("sr20");
    } else {
      console.log("bad");
    }
  }

  _deleteMember() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    const password = prompt(
      `Delete member. \n To delete this member you have to put the member's password in here`
    );
    if (password === password) {
      deleteDoc(
        doc(
          db,
          `accounts/${curDataLocal.teamCode}/team`,
          this.#curMemberInfo.memberId
        )
      );
      this._displayMembers("sr16");
    }
  }

  _dailyHoursMenu() {
    const headerNameText = document.querySelector("#sr17-header");
    const memberName = document.querySelector("#sr17-disp-member-name");
    const memberPassword = document.querySelector("#sr17-disp-member-pass");
    const memberPay = document.querySelector("#sr17-disp-pay--hour");

    headerNameText.textContent = this.#curMemberInfo.name;
    memberName.textContent = this.#curMemberInfo.name;
    memberPassword.textContent = this.#curMemberInfo.password;
    memberPay.textContent = this.#curMemberInfo.salary;

    this._srGetStartedDispChoose("sr17", "sr11", "left");
  }

  _fromAdminToNorm() {
    this.#curAccountData = this.#curData;
    this._displayMembers("sr20");
    sr23AccountSearch.value = "";
  }

  _adminSearchAccount(inptx) {
    this.#filteredAccountsArray = [];
    this.#accountsArray.forEach((cur, i, arr) => {
      if (cur.email.includes(inptx) || cur.teamCode.includes(inptx)) {
        this.#filteredAccountsArray.push(cur);
      }
    });
    this._topAdminDisplayAccounts(this.#filteredAccountsArray);
  }

  _teamSaveInfoChanges() {
    const inpTeamName = document.querySelector(
      "#sr12-2-contbx-2-inp-team-name"
    );

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamName.value.length > 2) {
      this._srGetStartedDispChoose("sr22", "sr12", "right");
      setTimeout(() => {
        this._updateData(`accounts`, curDataLocal.teamCode, {
          teamName: inpTeamName.value,
        });
        setTimeout(() => {
          this._displayMembers("sr22");
        }, 1000);
      }, 1000);
    } else {
      console.error("not valid data");
    }
  }
  _teamSaveSettingsChanges() {
    const inpTeamPay = document.querySelector("#sr12-inp-pay--hour");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamPay.value > 0) {
      this._srGetStartedDispChoose("sr22", "sr12", "right");

      setTimeout(() => {
        this._updateData(`accounts`, curDataLocal.teamCode, {
          salary: inpTeamPay.value,
        });
        setTimeout(() => {
          this._displayMembers("sr22");
        }, 1000);
      }, 1000);
    } else {
      console.error("not valid data");
    }
  }

  _openTeamSettings() {
    const inpTeamName = document.querySelector(
      "#sr12-2-contbx-2-inp-team-name"
    );
    const dispTeamCode = document.querySelector(
      "#sr12-2-contbx-2-disp-team-code"
    );
    const inpTeamPay = document.querySelector("#sr12-inp-pay--hour");

    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    inpTeamName.value = curDataLocal.teamName;
    dispTeamCode.textContent = curDataLocal.teamCode;
    inpTeamPay.value = curDataLocal.salary;

    this._srGetStartedDispChoose("sr12", "sr20", "left");
  }

  _accountSaveInfoChanges() {
    const inpPassword = document.querySelector("#sr19-inp-password");
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpPassword.value.length > 5) {
      this._srGetStartedDispChoose("sr22", "sr19", "right");

      setTimeout(() => {
        this._updateData(`accounts`, curDataLocal.teamCode, {
          accountPassword: inpPassword.value,
        });
        setTimeout(() => {
          this._displayMembers("sr22");
        }, 1000);
      }, 1000);
    } else {
      console.error("not valid data");
    }
  }

  _openAccountInfo() {
    const inpEmail = document.querySelector("#sr19-inp-email");

    const inpPassword = document.querySelector("#sr19-inp-password");

    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    inpEmail.value = curDataLocal.email;
    inpPassword.value = curDataLocal.accountPassword;

    this._srGetStartedDispChoose("sr19", "sr20", "left");
  }

  _deleteAccount() {
    this._disdSuccessErrorMessage(
      "Hubo un problema. Estamos trabajando para solucionarlo",
      "er",
      3000
    );
  }

  _getProScreen() {
    this.#curData = this._getFromLocal("curData");
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    if (curDataLocal.trialDone === true) {
      sr24TryAppCon.style.display = "none";
    }
    this._srGetStartedDispChoose("sr24", "sr7", "left");
  }

  _checkPro() {
    this.#curData = this._getFromLocal("curData");
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    console.log(this.#curData);
    console.log(curDataLocal);
    const addMemberAproved = () => {
      this._srGetStartedDispChoose("sr8", "sr7", "left");
      console.log("Can create member");
      console.log(this.#curData.pro);
    };
    let membersCheckpro = [];

    const q = query(collection(db, `accounts/${curDataLocal.teamCode}/team`));
    getDocs(q).then((docSnap) => {
      if (docSnap.empty === true) {
        addMemberAproved();
      } else {
        docSnap.forEach((doc) => {
          membersCheckpro.push(doc.data());
        });
      }
      console.log(membersCheckpro.length);
      console.log(membersCheckpro);
      if (this.#curData.pro === "false") {
        this._getProScreen();
      }
      if (this.#curData.pro === "pro") {
        addMemberAproved();
      }
      if (this.#curData.pro === "trail") {
        addMemberAproved();
      }
      if (this.#curData.pro === "starter") {
        if (membersCheckpro.length < 1) {
          addMemberAproved();
        } else {
          this._getProScreen();
        }
      }
    });
  }

  _buyPlan(whatPlan) {
    this._srGetStartedDispChoose("sr25", "sr24", "left");
  }

  _startTryApp() {
    this.#curData = this._getFromLocal("curData");
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    this._updateData("accounts", curDataLocal.teamCode, {
      pro: "trail",
      trialDone: true,
      proStartTimeStamp: this._getTimeStamp(),
      proTime: 30 * 86400000,
    });
    sr24TryAppCon.style.display = "none";
    this._displayMembers("sr24");
    this._disdSuccessErrorMessage(
      "Exito. Iniciaste el tiempo de brueba gratis",
      "ex",
      5000
    );
  }

  //Start Up End

  _events() {
    // <-- LIVE Listeners
    window.onscroll = function () {
      if (window.pageYOffset > stickyHeader) {
        header.classList.add("sticky-app-header");
      } else {
        header.classList.remove("sticky-app-header");
      }
    };
    sr16InpMemberPay.addEventListener("focus", () => {
      sr16InpMemberPay.value = "";
    });
    inpPayPerHour.addEventListener("focus", () => {
      inpPayPerHour.value = "";
    });
    sr23AccountSearch.addEventListener("focus", () => {
      this._deleteAllChildren("sr23-accounts-con");
    });
    sr23AccountSearch.addEventListener("keyup", () => {
      this._adminSearchAccount(sr23AccountSearch.value);
    });
    // <-- OTHER
    btnsr7GoPro.addEventListener("click", () => {
      this._getProScreen();
    });
    btnsr24TryApp.addEventListener("click", () => {
      this._startTryApp();
    });
    btnsr12SaveInfoChanges.addEventListener("click", () => {
      this._teamSaveInfoChanges();
    });
    btnsr12SaveSettingsChanges.addEventListener("click", () => {
      this._teamSaveSettingsChanges();
    });
    btnsr19SaveAccountChanges.addEventListener("click", () => {
      this._accountSaveInfoChanges();
    });
    sr20DeleteAccount.addEventListener("click", () => {
      this._deleteAccount();
    });
    // <-- JOIN TEAM
    btnJoinTeamSr1.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr13", "sr1", "left");
    });
    btnJoinAsMemberSr13.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr15", "sr13", "left");
    });
    btnJoinAsAdminSr13.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr18", "sr13", "left");
    });
    btnArrowBackSr13.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr1", "sr13", "right");
    });
    btnBackSr15.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr13", "sr15", "right");
    });
    btnBackSr14.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr13", "sr14", "right");
    });
    btnJoinNowSr14.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr7", "sr14", "left");
    });

    // <-- CREATE TEAM
    // --> ahead
    btnCreateTeamSr1.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr2", "sr1", "left");
    });
    btnLoginSr2.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr18", "sr2", "left");
    });
    btnCreateAccountSr2.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr3", "sr2", "left");
    });
    btnCreateAccountSr3.addEventListener("click", () => {
      this._createAccountStep1();
    });
    btnLoginSr18.addEventListener("click", () => {
      this._login();
    });
    btndoneSr4.addEventListener("click", () => {
      this._createAccountStep2();
    });
    btnAheadSr5.addEventListener("click", () => {
      this._createTeamStep1();
    });
    btnJoinExistingTeamSr5.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr13", "sr5", "left");
    });
    btnCreateTeamDoneSr6.addEventListener("click", () => {
      this._createTeamStep2();
    });
    btnAddMemberSr7.addEventListener("click", () => {
      this._checkPro();

      // this._srGetStartedDispChoose("sr8", "sr7", "left");
    });
    btnAheadSr8.addEventListener("click", () => {
      this._createMemberStep1();
    });
    btnAddMemberSr9.addEventListener("click", () => {
      this._createMemberStep2();
    });
    btnSettingsSr7.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr20", "sr7", "right");
    });
    sr23btnMenu.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr20", "sr23", "right");
    });
    choTeamSettingsSr20.addEventListener("click", () => {
      this._openTeamSettings();
      // this._srGetStartedDispChoose("sr12", "sr20", "left");
    });
    choAccountInfoSr20.addEventListener("click", () => {
      this._openAccountInfo();
      // this._srGetStartedDispChoose("sr19", "sr20", "left");
    });
    btnMenuSr11.addEventListener("click", () => {
      this._dailyHoursMenu();
      // this._srGetStartedDispChoose("sr17", "sr11", "left");
    });

    // --> back
    btnbackSr2.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr1", "sr2", "right");
    });
    btnBackSr18.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr2", "sr18", "right");
    });
    btnBackSr3.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr2", "sr3", "right");
    });
    btnBackSr4.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr3", "sr4", "right");
    });
    btnBackSr6.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr5", "sr6", "right");
    });
    btnCancelSr8.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr7", "sr8", "right");
    });
    btnCancelSr5.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr1", "sr5", "right");
    });
    btnBackSr9.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr8", "sr9", "right");
    });
    btnBackTbSr11.addEventListener("click", () => {
      this._displayMembers("sr11");
      // this._srGetStartedDispChoose("sr7", "sr11", "right");
    });
    btnBackSr20.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr7", "sr20", "left");
    });
    btnBackSr19.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr20", "sr19", "right");
    });
    btnBackSr12.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr20", "sr12", "right");
    });
    btnBackSr16.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr7", "sr16", "right");
    });
    btnBackSr17.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr11", "sr17", "right");
    });
    btnBackSr21.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr11", "sr21", "right");
    });
    btnClearSr21.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr11", "sr21", "right");
    });
    btnSaveSr21.addEventListener("click", (e) => {
      this._updateEntries(timePicker.value);
    });
    btnWeekSelectForward.addEventListener("click", (e) => {
      this._weekSelect("ahead");
    });
    btnWeekSelectBack.addEventListener("click", (e) => {
      this._weekSelect("back");
    });
    btnsr16InfoSaveChanges.addEventListener("click", (e) => {
      this._sr16InfoSaveChanges();
    });
    btnsr16SettingsSaveChanges.addEventListener("click", (e) => {
      this._sr16SettingsSaveChanges();
    });
    btnsr16InfoCancel.addEventListener("click", (e) => {
      this._srGetStartedDispChoose("sr7", "sr16", "right");
    });
    btnsr16SettingsCancel.addEventListener("click", (e) => {
      this._srGetStartedDispChoose("sr7", "sr16", "right");
    });
    sr20Logout.addEventListener("click", (e) => {
      this._logout();
    });
    sr20AppAdmin.addEventListener("click", (e) => {
      this._topAdminDisplay();
    });
    sr20AppAdminNorm.addEventListener("click", (e) => {
      this._fromAdminToNorm();
    });
    btnsr16DeleteMember.addEventListener("click", (e) => {
      this._deleteMember();
    });
    btnJoinNowSr15.addEventListener("click", (e) => {
      this._joinAsMember();
    });
    btnsr11NewTimeTable.addEventListener("click", (e) => {
      this._newWeek();
    });
    btnsr24Back.addEventListener("click", (e) => {
      this._displayMembers("sr24");
    });
    btnsr25Back.addEventListener("click", (e) => {
      this._srGetStartedDispChoose("sr24", "sr25", "right");
    });
    btnsr24BuyPlan.addEventListener("click", (e) => {
      this._buyPlan();
    });

    // --> EVENT DELEGATION

    // <-- member screen
    sr7.addEventListener("click", (e) => {
      let curDataLocal;
      if (this.#curData.level === this.#adminLevel) {
        curDataLocal = this.#curAccountData;
      } else {
        curDataLocal = this.#curData;
      }

      if (e.target.dataset.where === "open") {
        const curMemberIdHere = e.target.dataset.memberid;

        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/team`),
          where("memberId", "==", curMemberIdHere)
        );
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            const val = doc.data();
            this.#curMemberInfo = val;
            console.log(this.#curMemberInfo);
            this._readWeeks();
          });
        });
      }
      if (e.target.dataset.where === "info") {
        const curMemberIdHere = e.target.dataset.memberid;
        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/team`),
          where("memberId", "==", curMemberIdHere)
        );
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            const val = doc.data();
            this.#curMemberInfo = val;
            sr16InpMemberName.value = val.name;
            sr16InpMemberPassword.value = val.password;
            sr16DispTeamCode.textContent = curDataLocal.teamCode;
            sr16InpMemberPay.value = val.salary;
            console.log(val);
            this._setSwiChangeMemberInfo(val.writePermision, val.level);
          });
        });
        this._srGetStartedDispChoose("sr16", "sr7", "left");
      }
    });

    // <-- admin screen

    sr23.addEventListener("click", (e) => {
      const teamCode = e.target.dataset.teamcode;
      const btn = e.target.dataset.btn;

      if (teamCode && btn === "view") {
        const found = this.#accountsArray.find((el) => el.teamCode == teamCode);
        console.log(this.#accountsArray);

        this.#curAccountData = found;
        this._displayMembers("sr23");
      } else {
        console.log("undefined");
      }
    });

    // <-- hour screen
    sr11.addEventListener("click", (e) => {
      if (e.target.dataset.do === "open-time-picker") {
        if (e.target.dataset.stnd === "start") {
          sr21TimePickerInOutText.textContent = "entrada";
        }
        if (e.target.dataset.stnd === "end") {
          sr21TimePickerInOutText.textContent = "salida";
        }
        this.#timePickerUpdateDay = e.target.dataset.day;
        this.#timePickerUpdatestnd = e.target.dataset.stnd;
        this.#timePickerUpdatetype = e.target.dataset.type;
        this._srGetStartedDispChoose("sr21", "sr11", "none");
      }
    });

    // SWITCHES START HERE //

    sr9SwiHours.addEventListener("click", function () {
      const datanow = sr9SwiHours.dataset.on;
      if (datanow === "false") {
        sr9SwiHours.classList.add("switch-on");
        sr9SwiHours.classList.remove("switch-off");
        sr9SwiHours2.classList.add("switch-inner-on");
        sr9SwiHours2.classList.remove("switch-inner-off");
        sr9SwiHours3.classList.add("switch-text-on");
        sr9SwiHours3.classList.remove("switch-text-off");
        sr9SwiHours.dataset.on = "true";
        sr9SwiHoursText.textContent = "permitido";
      }
      if (datanow === "true") {
        sr9SwiHours.classList.remove("switch-on");
        sr9SwiHours.classList.add("switch-off");
        sr9SwiHours2.classList.remove("switch-inner-on");
        sr9SwiHours2.classList.add("switch-inner-off");
        sr9SwiHours3.classList.remove("switch-text-on");
        sr9SwiHours3.classList.add("switch-text-off");
        sr9SwiHours.dataset.on = "false";
        sr9SwiHoursText.textContent = "negado";
      }
    });
    sr9SwiAssis.addEventListener("click", function () {
      const datanow = sr9SwiAssis.dataset.on;
      if (datanow === "false") {
        sr9SwiAssis.classList.add("switch-on");
        sr9SwiAssis.classList.remove("switch-off");
        sr9SwiAssis2.classList.add("switch-inner-on");
        sr9SwiAssis2.classList.remove("switch-inner-off");
        sr9SwiAssis3.classList.add("switch-text-on");
        sr9SwiAssis3.classList.remove("switch-text-off");
        sr9SwiAssis.dataset.on = "true";
        sr9SwiAssisText.textContent = "asistente";
      }
      if (datanow === "true") {
        sr9SwiAssis.classList.remove("switch-on");
        sr9SwiAssis.classList.add("switch-off");
        sr9SwiAssis2.classList.remove("switch-inner-on");
        sr9SwiAssis2.classList.add("switch-inner-off");
        sr9SwiAssis3.classList.remove("switch-text-on");
        sr9SwiAssis3.classList.add("switch-text-off");
        sr9SwiAssis.dataset.on = "false";
        sr9SwiAssisText.textContent = "miembro";
      }
    });

    sr16SwiHours.addEventListener("click", function () {
      const datanow = sr16SwiHours.dataset.on;
      if (datanow === "false") {
        sr16SwiHours.classList.add("switch-on");
        sr16SwiHours.classList.remove("switch-off");
        sr16SwiHours2.classList.add("switch-inner-on");
        sr16SwiHours2.classList.remove("switch-inner-off");
        sr16SwiHours3.classList.add("switch-text-on");
        sr16SwiHours3.classList.remove("switch-text-off");
        sr16SwiHours.dataset.on = "true";
        sr16SwiHoursText.textContent = "permitido";
      }
      if (datanow === "true") {
        sr16SwiHours.classList.remove("switch-on");
        sr16SwiHours.classList.add("switch-off");
        sr16SwiHours2.classList.remove("switch-inner-on");
        sr16SwiHours2.classList.add("switch-inner-off");
        sr16SwiHours3.classList.remove("switch-text-on");
        sr16SwiHours3.classList.add("switch-text-off");
        sr16SwiHours.dataset.on = "false";
        sr16SwiHoursText.textContent = "negado";
      }
    });
    sr16SwiAssis.addEventListener("click", function () {
      const datanow = sr16SwiAssis.dataset.on;
      if (datanow === "false") {
        sr16SwiAssis.classList.add("switch-on");
        sr16SwiAssis.classList.remove("switch-off");
        sr16SwiAssis2.classList.add("switch-inner-on");
        sr16SwiAssis2.classList.remove("switch-inner-off");
        sr16SwiAssis3.classList.add("switch-text-on");
        sr16SwiAssis3.classList.remove("switch-text-off");
        sr16SwiAssis.dataset.on = "true";
        sr16SwiAssisText.textContent = "asistente";
      }
      if (datanow === "true") {
        sr16SwiAssis.classList.remove("switch-on");
        sr16SwiAssis.classList.add("switch-off");
        sr16SwiAssis2.classList.remove("switch-inner-on");
        sr16SwiAssis2.classList.add("switch-inner-off");
        sr16SwiAssis3.classList.remove("switch-text-on");
        sr16SwiAssis3.classList.add("switch-text-off");
        sr16SwiAssis.dataset.on = "false";
        sr16SwiAssisText.textContent = "miembro";
      }
    });
  }
}

const app = new App();
