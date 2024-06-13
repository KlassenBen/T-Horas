// STICKY

// <-- APP START HERE --> //

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
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
  runTransaction,
  increment,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA30VKmZDuM0Xv0z-CuG5o6C-4lU4Z-u64",
  authDomain: "auth-test-f961a.firebaseapp.com",
  projectId: "auth-test-f961a",
  storageBucket: "auth-test-f961a.appspot.com",
  messagingSenderId: "720650529368",
  appId: "1:720650529368:web:dd05407559ed23a0d7f82d",
  measurementId: "G-PLCKMJYMFB",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// <-- Labels
const hourSheetWeekNumber = document.querySelector(
  "#sr11-daily-hours-week-number"
);
const hourSheetWeekNumberLast = document.querySelector(
  "#sr11-daily-hours-week-number-last"
);
const sr20Logout = document.querySelector("#sr20-cho-logout");
const sr20DeleteAccount = document.querySelector("#sr20-cho-delete-account");
const sr20AppAdmin = document.querySelector("#sr20-cho-app-admin");
const sr20AppAdminP = document.querySelector("#sr20-cho-app-admin p");
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
const sr16SwiPunchIn = document.querySelector("#sr16-swi-punchin");
const sr16SwiPunchIn2 = document.querySelector("#sr16-swi-punchin2");
const sr16SwiPunchIn3 = document.querySelector("#sr16-swi-punchin3");
const sr16SwiPunchInText = document.querySelector(
  "#sr16-swi-punchin-switch-description-tx"
);
const sr9SwiPunchIn = document.querySelector("#sr9-swi-punchin");
const sr9SwiPunchIn2 = document.querySelector("#sr9-swi-punchin2");
const sr9SwiPunchIn3 = document.querySelector("#sr9-swi-punchin3");
const sr9SwiPunchInText = document.querySelector(
  "#sr9-swi-punchin-switch-description-tx"
);

const sr16SwiAssis = document.querySelector("#sr16-swi-assis");
const sr16SwiAssis2 = document.querySelector("#sr16-swi-assis2");
const sr16SwiAssis3 = document.querySelector("#sr16-swi-assis3");
const sr16SwiAssisText = document.querySelector(
  "#sr16-swi-assis--hours-switch-description-tx"
);

// <-- Other
// Rating starts
let stars = document.getElementsByClassName("star");
let output = document.getElementById("sr30-rate-output");
let sr30RateCard = document.getElementById("sr30-rate-con-2");
const sr30RateNow = document.querySelector(`#sr30-btn-rate-now`);
const sr30RateLater = document.querySelector(`#sr30-btn-rate-later`);
const sr30DescriptionTextArea = document.querySelector(
  `#sr30-description-textarea-hint`
);
const sr30UserInputText = document.querySelector(`#sr30-rate-user-description`);
const sr30StarsCon = document.querySelector(`#sr30-rate-con-4`);
// Rating ends

const header = document.querySelector("#app-header");
const stickyHeader = header.offsetTop;

const appName = document.querySelector("#app-name");
const teamImage = document.querySelector("#team-image");
const sr29Image = document.querySelector("#sr29-image");
const sr29ImageCon = document.querySelector("#sr29-img-con");
const timePicker = document.querySelector("#sr21-time-picker");
const inpPayPerHour = document.querySelector("#sr9-inp-pay--hour");
const sr11TimeSheetHours = document.querySelector("#sr11-daily-hours-con");
const sr11TimeSheetSumary = document.querySelector("#sr11-sumary");
const sr11NewTimeSheetMessage = document.querySelector(
  "#new-time-sheet-message-con"
);
const sr11TimeSheetName = document.querySelector("#sr11-time-sheet-name-text");
const sr1OnboardingVid = document.querySelector("#sr1-onboarding-vid");

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
const sr12UploadImgCon = document.querySelector("#sr12-img-upload-con");
// const sr12ImgCon = document.querySelector("#sr12-img--con");
const sr5UploadImgCon = document.querySelector("#sr5-img-upload-con");
// const sr5ImgCon = document.querySelector("#sr5-img--con");
const sr27RequestPermisionCon = document.querySelector("#sr27-cont-con-2");
const sr27PendingPermisionCon = document.querySelector(
  "#sr27-cont-con-pending-2"
);
const sr16InfoName = document.querySelector("#sr16-contbx-header span");
const sr16QrDescriptionName = document.querySelector(
  "#sr16-qr-gen-description-text span"
);
const sr16HeaderName = document.querySelector("#sr16-header");
const sr11punchInClockHours = document.querySelector(
  "#sr11-punchin-clock-hours"
);
const sr11punchInClockMinutes = document.querySelector(
  "#sr11-punchin-clock-minutes"
);
const sr11punchInClockSeconds = document.querySelector(
  "#sr11-punchin-clock-seconds"
);
const sr11punchInDay = document.querySelector("#sr11-punchin-day span");
const sr11punchInConMain = document.querySelector("#sr11-punchin-cont-con");
const sr11SettingsPunchInCon = document.querySelector("#sr16-swi-punchin-con");
const sr9CreateMemPunchInCon = document.querySelector("#sr9-swi-punchin-con");
const sr1ImgCon = document.querySelector(".sr1-all-img-con");
const sr1btnInstallApp = document.querySelector(
  "#sr1-btn-open-install-app-instructions"
);
const sr1InstallAppInstructions = document.querySelector(
  "#sr1-install-app-instructions"
);

//For images upload starts here
//sr12
const inpImgSr12 = document.querySelector("#sr12-input-team-img");
const SVGImgConSr12 = document.querySelector("#sr12-svg-for-img");
const ImgConSr12 = document.querySelector("#sr12-img-con");

//sr5
const inpImgSr5 = document.querySelector("#sr5-input-team-img");
const SVGImgConSr5 = document.querySelector("#sr5-svg-for-img");
const ImgConSr5 = document.querySelector("#sr5-img-con");

//For images upload ends here

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
const sr26 = document.querySelector("#sr26");
const sr27 = document.querySelector("#sr27");
const sr28 = document.querySelector("#sr28");
const sr29 = document.querySelector("#sr29");
const sr30 = document.querySelector("#sr30");
const sr31 = document.querySelector("#sr31");
const sr32 = document.querySelector("#sr32");
const sr33 = document.querySelector("#sr33");
const sr34 = document.querySelector("#sr34");
const sr35 = document.querySelector("#sr35");

// <-- Buttons
const btnWeekSelectForward = document.querySelector(
  "#sr11-daily-hours-btn-week-forward"
);
const btnWeekSelectBack = document.querySelector(
  "#sr11-daily-hours-btn-week-back"
);
const btnWeekSelectForwardPath = document.querySelector(
  "#sr11-daily-hours-btn-week-forward path"
);
const btnWeekSelectBackPath = document.querySelector(
  "#sr11-daily-hours-btn-week-back path"
);
const btnsr16InfoSaveChanges = document.querySelector(
  "#sr16-contbx-btn-save-changes"
);
const btnsr11UpdateCurWeekToStartWeek = document.querySelector(
  "#sr11-update-week-btn"
);
const sr7UpdateCurWeekToStartWeekCon = document.querySelector(
  "#sr11-update-week-con-main"
);
const btnsr16SettingsSaveChanges = document.querySelector(
  "#sr16-contbx1-btn-save-changes"
);
const btnsr16InfoCancel = document.querySelector("#sr16-contbx-btn-cancel");
const btnsr16SettingsCancel = document.querySelector(
  "#sr16-contbx1-btn-cancel"
);
const btnsr16DeleteMember = document.querySelector("#sr16-delete-member");
const btnsr17LeaveTeam = document.querySelector("#sr17-leave-team");
const btnsr17NewWeek = document.querySelector("#sr17-new-week");
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
const sr26btnSetPlan = document.querySelector("#sr26-btn-set-plan");
const sr26btnSetAdminLevel = document.querySelector(
  "#sr26-btn-set-admin-level"
);
const sr27btnAskWritePermisio = document.querySelector(
  "#sr27-btn-ask-permision"
);
// const srtInstallApp = document.querySelector("#sr7-btn-install-app");
const sr4ResendOTP = document.querySelector("#sr4-btn-resend-code");
const sr11ChangeSalary = document.querySelector("#sr11-btn-change-salary");
const sr3AceptTerms = document.querySelector("#sr3-terms-acept-text");
const sr11PunchInBtnIn = document.querySelector("#sr11-punchin-btn-in");
const sr11PunchInBtnOut = document.querySelector("#sr11-punchin-btn-out");
const sr31BtnReload = document.querySelector("#sr31-btn-reload");
const sr16BtnGenerateQrCode = document.querySelector(
  "#sr16-btn-generate-qr-code"
);
const sr13BtnReadQrCode = document.querySelector("#sr13-btn-read-qr-code");
const sr34BtnUnderstand = document.querySelector("#sr34-btn-alert-understand");

// <-- Join Team
const btnJoinTeamSr1 = document.querySelector("#sr1-btn-join-team");
const btnJoinAsMemberSr13 = document.querySelector("#sr13-btn-join-as-member");
const btnJoinAsAdminSr13 = document.querySelector("#sr13-btn-join-as-admin");
const btnLoginSr1 = document.querySelector("#sr1-btn-login");
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
const btnsr26EditAccount = document.querySelector("#sr26-tb-btn-back");
const btnsr27Cancel = document.querySelector("#sr27-btn-cancel");
const btnsr27BackPermisionPending = document.querySelector(
  "#sr27-btn-back-permision-pending"
);
const btnsr28Back = document.querySelector("#sr28-tb-btn-back");
const btnsr29Back = document.querySelector("#sr29-btn-back");
const btnsr32Back = document.querySelector("#sr32-btn-back");
const btnsr33Back = document.querySelector("#sr33-btn-back");

// TODO: LOOK HERE FIRST. NEEDS THE AUTO NEW WEEK ADD SYSTEM UPDATED
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
  #weekDaysSp = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  //cookies
  #cTeamCode;
  #cLevel;
  #cMemberId;

  #mycloudNameForImgUpload = "dkvsxpnp6";
  #myuploadPresetForImgUpload = "THoras";
  #teamImgUrl = [];
  #timePickerUpdateDay;
  #timePickerUpdatetype;
  #timePickerUpdatestnd;
  #weekDisplayNumberMinus;
  #otp;
  #email;
  #password;
  #oneDayInMillSec = 86400000;
  #weekIdNumberCounter = 0;

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
  #adminLevel;
  #appRating;

  #curData;
  #country = "Mexico";
  #appSupportInfo;
  #appExplainVideos = [];
  clockInterval;

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

  #daysArrForNewWeek = [
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
  ];

  #previousScreen;
  #currentScreen;
  constructor() {
    this._events();
    this._registerSW();
    this._init("sr1");
    // this._tryMyFunction();

    // this._displayPrompt(
    //   "input",
    //   "Cancelar",
    //   "Confirmar",
    //   "¿Estas seguro?",
    //   "Confirmar este paso al seguir"
    // );

    // this._srGetStartedDispChoose("sr35", "sr1", "none");
    // hourSheetWeekNumberLast.textContent = "última";

    // this._displaySpinner();
    // this._displayAlert("Comfirmado", "Esto ya es confirmado");

    // TODO: ALSO NEED IN INIT, CHECK IF THE LOCAL STORED ACCOUNT STILL EXISTS IN THE CLOUD
    // this._removeFromLocal("curData");
    // this._tryOutCookies();
    // this._onSnapshot("accounts", "cn25uwg629tb9143");
    // this._srGetStartedDispChoose("sr13", "sr1", "left");
    // this._srGetStartedDispChoose("sr29", "sr1", "none");
    // this._transactionsTry();
    // const rearranged = this._rearrangeWeekDays("martes");
    // console.log(rearranged);
  }

  async _updateCurWeekWithWeekStart() {
    try {
      const userInput = await this._displayPrompt(
        "confirm",
        "Cancelar",
        "Confirmar",
        "¿Convertir semana?",
        "Al convertir, esta semana se actualisará con el dia de inicio de semana. No pererás tus horas."
      );

      // Proceed with your function using the userInput if needed

      const updatememberInfo = async () => {
        // Define updatememberInfo as an async function
        const q = query(
          collection(db, `accounts/${this.#curMemberInfo.teamCode}/team`),
          where("memberId", "==", this.#curMemberInfo.memberId)
        );
        const docSnap = await getDocs(q); // Use await to wait for the query to resolve
        docSnap.forEach((doc) => {
          const val = doc.data();
          this.#curMemberInfo = val;
          console.log(val);
          console.log(this.#curMemberInfo);
        });
      };

      console.log(this.#curWeek.days);
      this._displaySpinner(
        `Estamos ajustando esta semana para que empiece el ${
          this.#curMemberInfo.weekStart
        }`
      );

      try {
        console.log(this.#curMemberInfo);

        const UpDatedDays = this._rearrangeWeekDays(
          this.#curWeek.days,
          this.#curMemberInfo.weekStart
        );
        console.log(this.#curMemberInfo.weekStart);

        const success = await this._updateData(
          `accounts/${this.#curMemberInfo.teamCode}/weeks`,
          this.#curMemberInfo.curWeekId,
          {
            days: UpDatedDays,
            weekStart: this.#curMemberInfo.weekStart,
          }
        );

        if (success) {
          await updatememberInfo();
          this._displayTimeSheet("ng", true);
          this._displayAlert("Éxito", "Esta semana está actualizado.");
        } else {
          console.error("Update failed."); // Log the failure
        }
      } catch (error) {
        console.error("Error updating week:", error);
      } finally {
        // this._hideSpinner(); // Ensure spinner is always hidden
      }
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    } finally {
      this._hideSpinner(); // Ensure spinner is always hidden
    }
    console.log("all done");
  }

  _rearrangeWeekDays(weekDaysArr, startDay) {
    const spanishToEnglishDayMap = {
      lunes: "monday",
      martes: "tuesday",
      miércoles: "wednesday",
      jueves: "thursday",
      viernes: "friday",
      sábado: "saturday",
      domingo: "sunday",
    };
    const daysOfWeek = [
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo",
    ];
    const startIndex = daysOfWeek.indexOf(startDay);

    if (startIndex === -1) {
      console.error("Invalid start day");
      return;
    }

    const rearrangedMap = {};
    for (let i = 0; i < daysOfWeek.length; i++) {
      const currentIndex = (startIndex + i) % daysOfWeek.length;
      const currentDay = daysOfWeek[currentIndex];
      rearrangedMap[currentDay] = spanishToEnglishDayMap[currentDay];
    }

    const rearangedWeekDays = [];
    for (const day in rearrangedMap) {
      const englishDay = rearrangedMap[day];
      const matchingDay = weekDaysArr.find((obj) => obj.day === englishDay);
      if (matchingDay) {
        rearangedWeekDays.push(matchingDay);
      }
    }

    console.log(rearangedWeekDays);
    return rearangedWeekDays;
  }

  // Example usage

  _opacityDimScreen(srHide, srDisp) {}
  _transactionsTry() {
    // import { runTransaction } from "firebase/firestore";

    try {
      runTransaction(db, async (transaction) => {
        const docRefs = [];

        const q = query(collection(db, `appInfo`), where("type", "==", "info"));
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            docRefs.push(doc.ref);

            console.log(
              "this is how to get an id of a document in firestore:",
              doc.ref.id
            );
          });
        });

        // (await firestore.collection("collectionName").limit(100).get()).forEach(
        //   (doc) => {
        //     docRefs.push(doc.ref);
        //   }
        // ); //This is reading the Database for 100 docs

        // const users = await transaction.getAll(...docRefs);

        // const q = query(collection(db, `appInfo`), where("type", "==", "info"));

        // TODO: transaction don't work
        // console.log(docRefs);
        // const sfDoc = await transaction.get(docRefs);
        // if (!sfDoc.exists()) {
        //   throw "Document does not exist!";
        // }
        // const newPopulation = sfDoc.data().population + 1;
        // transaction.update(docRefs, { users: newPopulation });
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  }

  _visitsToApp() {
    // TODO: Activate this before comminting
    const appInfo = doc(db, "appInfo", "KOsv4lbS42vJWlejpTFn");
    updateDoc(appInfo, {
      visits: increment(1),
    });
  }

  _tryOutCookies() {
    // document.cookie =
    //   "teamCode=1234567890123456789078; samsite=none; max-age=320000000000; secure";
    // // to delete a cookie, set max-Age to -
    // document.cookie =
    //   "teamCode=1234567890123456789078; samsite=none; max-age=-320000000000; secure";
    // console.log(document.cookie);
    // this._setCookie("check", "0h54tc988ry5pf76", 840000);
    // this._setCookie("teamCode", "0h54tc988ry5pf76", 840000);
    // this._setCookie("memberId", "2nnuzn9l7446t5lz", 840000);
    // this._deleteCookie("check");
    this._deleteCookie("teamCode");
    this._deleteCookie("memberId");
    this._deleteCookie("level");
    // this._readCokie("teamCode");
  }

  async _registerSW() {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
        console.log("registered");
      } catch (e) {
        console.log("SW registration failed");
      }
    } else {
    }
  }

  _setCookie(cName, cValue, cMaxAge) {
    document.cookie = `${cName}=${cValue}; samsite=none; max-age=${cMaxAge}; secure; Priority=High`;
  }
  _deleteCookie(cName) {
    document.cookie = `${cName}=; samsite=none; max-age=-10; secure`;
  }
  _readCokie(cName) {
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    return getCookie(cName);
  }

  _setSupportInfo() {
    const q = query(
      collection(db, `appSupportInfo`),
      where("country", "==", this.#country)
    );
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        this.#appSupportInfo = doc.data();
      });
    });
  }
  _setExplainVideo() {
    const q = query(
      collection(db, `appExplainVideos`),
      where("videoName", "==", "intro")
    );
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        this.#appExplainVideos.push(doc.data());
        // sr1OnboardingVid.src = this.#appExplainVideos[0].url;
      });
    });
  }

  // TODO: start here with team image upload
  _openImgUpload(sr) {
    const teamImgdisCh = document.querySelector(`#${sr}-img-con`);

    //TODO: cloudinary sh**t
    this.#teamImgUrl = [];
    cloudinary
      .createUploadWidget(
        {
          cloudName: this.#mycloudNameForImgUpload,
          uploadPreset: this.#myuploadPresetForImgUpload,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.#teamImgUrl.push(result.info.secure_url);
          }
          if (!error && result && result.event === "success") {
            this._deleteAllChildren(`${sr}-img-con`);
            let html = "";
            this.#teamImgUrl.forEach(function (mov, i, arr) {
              html += `<img class="img-upload" src="${mov}" alt="" />`;
            });

            teamImgdisCh.insertAdjacentHTML("beforeend", html);
          }
        }
      )
      .open();
  }

  _accountProCheck() {
    if (this.#curData.pro === "trial" || this.#curData.pro === "pro") {
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
        if (this.#curData.pro === "trial") {
          this._disdSuccessErrorMessage(
            "Tu tiempo de brueba terminó. Si te era útil esta aplicación, contrata un plan premium ahora.",
            "ex",
            7000
          );
        }
      } else {
        console.log("Pro Go");
      }
    }
  }

  // TODO: INIT STARTS HERE

  _calcEverAppRatings() {}

  _setLastSeen(path, id) {
    this._updateData(path, id, {
      lastSeen: this._getTimeStamp(),
    });
  }

  _previousScreen() {
    const currentSreenLocal = this.#currentScreen;
    let sreenLocalToGo;
    if (currentSreenLocal === "sr11" && this.#curData.level !== "miembro") {
      this._displayMembers("sr11");
      // sreenLocalToGo = "sr7";
    } else {
      if (currentSreenLocal === "sr16") {
        sreenLocalToGo = "sr7";
      }
      if (currentSreenLocal === "sr17") {
        sreenLocalToGo = "sr11";
      }
      if (currentSreenLocal === "sr20") {
        sreenLocalToGo = "sr7";
      }
      if (currentSreenLocal === "sr12") {
        sreenLocalToGo = "sr20";
      }
      if (currentSreenLocal === "sr19") {
        sreenLocalToGo = "sr20";
      }
      if (currentSreenLocal === "sr24") {
        sreenLocalToGo = "sr7";
      }
      if (currentSreenLocal === "sr25") {
        sreenLocalToGo = "sr24";
      }
      if (currentSreenLocal === "sr8") {
        sreenLocalToGo = "sr7";
      }
      if (currentSreenLocal === "sr29") {
        sreenLocalToGo = sr29.dataset.fromWhere;
      }
      if (sreenLocalToGo.length > 0) {
        this._srGetStartedDispChoose(sreenLocalToGo, currentSreenLocal, "left");
      }
    }
    // this._disdSuccessErrorMessage("sr back", "ex", 1000);
  }

  _swipeToGoBack() {
    let touchStartX = 0;
    let touchEndX = 0;
    let startTime = 0;

    srsGetStarted.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      startTime = Date.now(); // Capture start time
    });

    srsGetStarted.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const screenWidth = window.innerWidth;
      const swipeThreshold = screenWidth * 0.2; // 20% of screen width
      const swipeTimeLimit = 1500; // 1.5 seconds

      const elapsedTime = Date.now() - startTime;

      if (
        touchEndX - touchStartX > swipeThreshold &&
        elapsedTime < swipeTimeLimit &&
        touchStartX < screenWidth * 0.2
      ) {
        this._previousScreen();
      }
    });
  }

  async _init(srHide) {
    // sr1.style.display = "flex";
    this._displaySpinner();
    this._swipeToGoBack();
    // this._deleteCookie("teamCode");
    // this._deleteCookie("memberId");
    // this._deleteCookie("level");
    // this._removeFromLocal("curData");

    // console.log(val.level);
    // this._setCookie("level", val.level, 15552000000);
    // this._setCookie("memberId", val.memberId, 15552000000);
    // this._setCookie("teamCode", val.teamCode, 15552000000);

    if (navigator.onLine) {
      const CTeamCode = this._readCokie("teamCode");
      let CLevel = this._readCokie("level");
      const CMemberID = this._readCokie("memberId");

      console.log(CTeamCode, CLevel, CMemberID);

      const step1 = async () => {
        const admin = async () => {
          if (CLevel === "admin" || CLevel === "top admin") {
            console.log("taken");
            const q = query(
              collection(db, `accounts`),
              where("teamCode", "==", CTeamCode)
            );
            const docSnap = await getDocs(q);
            docSnap.forEach(async (doc) => {
              // Marking the forEach callback as async
              const val = doc.data();
              this._setCookie("level", val.level, 15552000000);
              this._setCookie("teamCode", val.teamCode, 15552000000);
              this._saveToLocal("curData", val);
              this._setLastSeen(`accounts`, val.teamCode);
            });
          }
        };
        const member = async () => {
          if (CLevel === "miembro") {
            console.log("taken");
            const q = query(
              collection(db, `accounts/${CTeamCode}/team`),
              where("memberId", "==", CMemberID)
            );
            const docSnap = await getDocs(q);
            docSnap.forEach(async (doc) => {
              // Marking the forEach callback as async
              const val = doc.data();
              if (val.level === "asistente") {
                console.log("taken");
                CLevel = "admin";
                await admin(); // Waiting for admin to finish before proceeding
              } else {
                console.log("taken");
                this._setCookie("level", val.level, 15552000000);
                this._setCookie("memberId", val.memberId, 15552000000);
                this._setCookie("teamCode", val.teamCode, 15552000000);
                this._saveToLocal("curData", val);
                console.log(val);
                this._setLastSeen(`accounts`, val.teamCode);
              }
            });
          }
        };
        const assistant = () => {
          if (CLevel === "asistente") {
            admin();
          }
        };

        if (CTeamCode !== "" && CTeamCode !== undefined) {
          if (CLevel !== "" && CLevel !== undefined) {
            await member();
            assistant();
            admin();
          }
        }
      };

      await step1(); // Wait for step1 to finish before moving on

      this._setSupportInfo();
      // this._setExplainVideo();
      this.#curData = this._getFromLocal("curData");
      this._srGetStartedDispChoose("sr1", srHide, "left");

      console.log("Your App is initializing");

      console.log(this.#cTeamCode, this.#cLevel, this.#cMemberId);

      this.#curData = this._getFromLocal("curData");

      // setTimeout(() => {
      if (this.#curData !== undefined) {
        // TODO: if user is logedIn, all validations come under here
        console.log("Your App has initialized");

        if (CLevel === "admin") {
          console.log("this one was called");
          this._onSnapshot("accounts", this.#curData.teamCode);
          if (this.#curData.teamName.length < 1) {
            this._srGetStartedDispChoose("sr5", "sr1", "right");
            this._hideSpinner();
          } else {
            this._displayMembers("sr1");
            this._accountProCheck();
            btnBackTbSr11.style.display = "flex";
            this._onSnapshotCollectoion();
          }
        } else if (CLevel === "asistente") {
          // TODO: FOR NOW THE SAME AS ADMIN
          this._onSnapshot("accounts", this.#curData.teamCode);
          this._displayMembers("sr1");
          this._accountProCheck();
          btnBackTbSr11.style.display = "flex";
          this._onSnapshotCollectoion();
        } else if (CLevel === "miembro") {
          console.log("member now");
          this._displayMemberOnly("sr1");
        } else {
          const q = query(
            collection(db, "appSettings"),
            where("settings", "==", "admin_mode")
          );
          getDocs(q).then((docSnap) => {
            docSnap.forEach((doc) => {
              const val = doc.data();
              this.#adminLevel = val.appAdmin;
              if (CLevel === val.appAdmin) {
                this._onSnapshot("accounts", this.#curData.teamCode);
                console.log("admin is top");
                this.#curAccountData = this.#curData;
                this._displayMembers("sr1");
                this._accountProCheck();
                this._onSnapshotCollectoion();
                sr20AppAdmin.style.display = "block";
                sr20AppAdminNorm.style.display = "block";
                btnBackTbSr11.style.display = "flex";
              }
            });
          });
        }

        this._checkForRating();
        // this._registerSW();
      } else {
        console.log("Log in or create an account");
        // this._srGetStartedDispChoose("sr1", "sr22", "left");
        setTimeout(this._hideSpinner, 100);
      }
      // }, 100);
      this._visitsToApp();
    } else {
      this._displaySpinner();
      setTimeout(() => {
        this._hideSpinner();
        this._srGetStartedDispChoose("sr31", "sr1", "right");
      }, 5000);
    }
  }

  _displayPrompt(type, btnCancel, btnConfirm, header, text) {
    return new Promise((resolve, reject) => {
      const promptInput = document.querySelector("#sr35-prompt-input");
      const promptBtnCancel = document.querySelector("#sr35-btn-prompt-cancel");
      const promptBtnConfirm = document.querySelector("#sr35-btn-prompt-ahead");
      const promptHeader = document.querySelector("#sr35-prompt-header");
      const promptBody = document.querySelector("#sr35-prompt-body");

      promptInput.classList.remove("prompt-red-border");
      promptInput.value = "";

      promptBtnCancel.textContent = btnCancel;
      promptBtnConfirm.textContent = btnConfirm;
      promptHeader.textContent = header;
      promptBody.textContent = text;

      if (type === "input") {
        promptInput.style.display = "flex";
      } else {
        promptInput.style.display = "none";
      }
      sr35.style.display = "flex";

      promptBtnConfirm.addEventListener("click", () => {
        // If the confirm button is clicked, resolve the promise with the input value
        if (type === "input") {
          if (promptInput.value.length > 0) {
            resolve(promptInput.value);
            sr35.style.display = "none";
          } else {
            promptInput.classList.add("prompt-red-border");
            promptInput.placeholder = "rellenar";
          }
        } else {
          resolve("confirm");
          sr35.style.display = "none";
        }
        // Hide the prompt
      });

      promptBtnCancel.addEventListener("click", () => {
        // If the cancel button is clicked, reject the promise
        reject("cancel");
        // Hide the prompt
        sr35.style.display = "none";
      });
    });
  }

  async _tryMyFunction() {
    try {
      const userInput = await this._displayPrompt(
        "confirm",
        "Cancelar",
        "Confirmar",
        "¿Estas seguro?",
        "Confirmar este paso al seguir"
      );
      console.log("User input:", userInput);
      // Proceed with your function using the userInput if needed
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    }
    console.log("all done");
  }

  _hidePrompt() {
    sr35.style.display = "none";
  }
  _displaySpinner(text) {
    const spinnerText = document.querySelector("#sr22-wait-text");
    if (text) {
      spinnerText.textContent = text;
    } else {
      spinnerText.textContent = "Espera...";
    }
    sr22.style.display = "flex";
  }
  _hideSpinner() {
    sr22.style.display = "none";
  }
  _displayAlert(header, body) {
    const alertHeader = document.querySelector("#sr34-alert-header");
    const alertText = document.querySelector("#sr34-alert-body");

    alertHeader.textContent = header;
    alertText.textContent = body;

    sr34.style.display = "flex";
  }
  _hideAlert() {
    sr34.style.display = "none";
  }
  _displayRatingScreen() {
    sr30.style.display = "flex";
  }
  _hideRatingScreen() {
    sr30.style.display = "none";
  }
  // TODO: INIT ENDS HERE

  _onSnapshotCollectoion() {
    // TODO: REAL TIME listen on a collection
    const q = query(collection(db, `accounts/${this.#curData.teamCode}/team`));
    console.log(q);
    onSnapshot(
      collection(db, `accounts/${this.#curData.teamCode}/team`),
      () => {
        if (
          sr7.classList.contains("sr") &&
          Number(sr7.dataset.when) + 100 < this._getTimeStamp()
        ) {
          this._displayMembers("sr7");
        }
        console.log("new stuff");
      }
    );
  }

  _onSnapshot(name, listen) {
    //line 1726 for try
    // TODO: REAL TIME update on data
    const unsub = onSnapshot(doc(db, name, listen), (doc) => {
      this._saveToLocal("curData", doc.data());
      this.#curData = this._getFromLocal("curData");
      console.log("got it");
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

  async _topAdminDisplay() {
    let admionPassword;

    const openAdminMode = () => {
      const adminModeTbBar = document.querySelector("#app-name");
      adminModeTbBar.style.color = "#ffdcc2";
      adminModeTbBar.textContent = "Admin";
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
      this._disdSuccessErrorMessage("Admin mode started", "ex", 2000);
      sr20AppAdmin.dataset.mode = "admin";
      sr20AppAdminP.dataset.mode = "admin";
    };

    if (sr20AppAdmin.dataset.mode === "norm") {
      try {
        const admionPassword = await this._displayPrompt(
          "input",
          "Cancelar",
          "Confirmar",
          "Admin",
          "Put in the admin password"
        );
        const q = query(
          collection(db, "appSettings"),
          where("settings", "==", "admin_mode")
        );
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            const val = doc.data();

            if (admionPassword === val.password) {
              console.log("yeah");
              openAdminMode();
            } else {
              this._disdSuccessErrorMessage("Incorect password", "er", 2000);
            }
          });
        });
        // Proceed with your function using the userInput if needed
      } catch (error) {
        if (error === "cancel") {
          console.log("User cancelled");
          // Abort your function
        } else {
          console.error("Error:", error);
        }
      }
    } else {
      openAdminMode();
    }
  }

  _displayMemberOnly(srHide) {
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
        console.log(this.#curData.level);

        if (this.#curData.level === "miembro") {
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

          if (
            sr11.classList.contains("sr") ||
            sr1.classList.contains("sr") ||
            sr22.classList.contains("sr")
          ) {
            // this._readWeeks(srHide);

            this._displayTimeSheet(srHide, true);
            // sr1.style.display = "none";
          }

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

                this._displayTeamImg(this.#curData.teamImg);
                // headerTeamImg.src = this.#curData.teamImg;
                headerTeamName.textContent = this.#curData.teamName;
                this._hideSpinner();
              });
            }
          });
        }
      }
    );
  }
  _login() {
    const inpEmail = document.querySelector("#sr18-inp-email");
    const inpPassword = document.querySelector("#sr18-inp-password");

    if (navigator.onLine) {
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
            this._disdSuccessErrorMessage(
              `No hay cuenta con este correo. Crea una cuenta primero.`,
              "er",
              3500
            );
          } else {
            docSnap.forEach((doc) => {
              const val = doc.data();
              if (inpPassword.value === val.accountPassword) {
                // this._srGetStartedDispChoose("sr22", "sr18", "left");
                this.#curData = val;
                this._deleteCookie("teamCode");
                this._deleteCookie("memberId");
                this._deleteCookie("level");
                this._setCookie("teamCode", val.teamCode, 86400000 * 400);
                this._setCookie("level", val.level, 86400000 * 400);
                this._saveToLocal("curData", this.#curData);
                this._init("sr18");
              } else {
                document.querySelector(
                  "#sr18-inp-password-errmess"
                ).style.display = "block";
              }
            });
          }
        });
      } else {
        this._disdSuccessErrorMessage(
          `La información no es suficiente para iniciar sesión.`,
          "er",
          3000
        );
      }
    } else {
      this._disdSuccessErrorMessage(
        `Parece que no hay conexión a internet. Revisa tu conexión, e intenta de nuevo.`,
        "er",
        3000
      );
    }
  }

  // 0h54tc988ry5pf76

  _joinAsMember(type, teamCode, name, password, srHide) {
    this._displaySpinner();
    console.log("Using this");
    const inpTeamCode = document.querySelector("#sr15-inp-team-code");
    const inpTeamMemberName = document.querySelector("#sr15-inp-member-name");
    const inpTeamMemberPassword = document.querySelector(
      "#sr15-inp-member-pass"
    );
    let finTeamCode;
    let finMemberName;
    let finPassword;
    // let finSrHideForInit;

    if (type) {
      console.log("it is here");
      finTeamCode = teamCode;
      finMemberName = name;
      finPassword = password;
      // finSrHideForInit;
      ("sr33");
    } else {
      finTeamCode = inpTeamCode.value;
      finMemberName = inpTeamMemberName.value;
      finPassword = inpTeamMemberPassword.value;
      // finSrHideForInit = "sr15";
    }

    if (navigator.onLine) {
      if (finMemberName.length > 0 && finPassword.length > 0) {
        const q = query(
          collection(db, "accounts"),
          where("teamCode", "==", finTeamCode)
        );
        getDocs(q).then((docSnap) => {
          if (docSnap.empty === true) {
            this._disdSuccessErrorMessage(
              `No encontramos "${finMemberName}" este equipo. Revisa tu código de equipo e intentalo de nuevo.`,
              "er",
              5900
            );
          } else {
            docSnap.forEach((doc) => {
              const val = doc.data();
              const teamNameToShow = val.teamName;

              // <-- secondary search start
              const q2 = query(
                collection(db, `accounts/${finTeamCode}/team`),
                where("name", "==", finMemberName)
              );
              getDocs(q2).then((docSnap) => {
                if (docSnap.empty === true) {
                  this._disdSuccessErrorMessage(
                    `No encontramos a "${finMemberName}" en este equipo.`,
                    "er",
                    3000
                  );
                } else {
                  docSnap.forEach((doc) => {
                    const val = doc.data();

                    if (finPassword === val.password) {
                      // this._srGetStartedDispChoose("sr22", "sr18", "left");

                      this._disdSuccessErrorMessage(
                        `Éxito. Te uniste al equipo "${teamNameToShow}".`,
                        "ex",
                        3000
                      );
                      this.#curData = val;
                      console.log(val);

                      this._removeFromLocal("curData");
                      this._deleteCookie("teamCode");
                      this._deleteCookie("memberId");
                      this._deleteCookie("level");

                      this._saveToLocal("curData", this.#curData);
                      this._setCookie("teamCode", val.teamCode, 86400000 * 400);
                      this._setCookie("memberId", val.memberId, 86400000 * 400);
                      this._setCookie("level", val.level, 86400000 * 400);
                      // this._init(finSrHideForInit);
                      this._hideSpinner();
                      // this._init("sr15");
                      console.log(srHide);
                      if (sr33.classList.contains("sr")) {
                        this._init("sr33");
                      } else {
                        this._init("sr15");
                      }
                      // this._displayMemberOnly(srHide);
                      btnBackTbSr11.style.display = "none";
                      // this._displayMembers("sr22");
                    } else {
                      this._disdSuccessErrorMessage(
                        `Contraseña incorrecta`,
                        "er",
                        3000
                      );
                      document.querySelector(
                        "#sr15-inp-member-pass-errmess"
                      ).style.display = "block";
                    }
                  });
                }
              });
              // <-- secondary search start
            });
          }
        });
      } else {
        this._disdSuccessErrorMessage(
          "Inserte la información necesaria.",
          "er",
          2500
        );
      }
    } else {
      this._disdSuccessErrorMessage(
        "Parece que no tienes conexión a internet. Verifique tu conexión y vuelve a intentarlo.",
        "er",
        7000
      );
    }
  }

  // _query() {
  //   const q = query(collection(db, "accounts/iPhwge99VPFMSYMPkvxF/weeks"));
  //   let users = [];
  //   const tr = async function () {
  //     let id;
  //     await getDocs(q).then((docSnap) => {
  //       docSnap.forEach((doc) => {
  //         users.push({ ...doc.data() });
  //       });
  //       console.log("All data: ", users);
  //       // id = users[0].id;
  //       id = users;
  //     });
  //     return id;
  //   };
  //   return tr();
  // }
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
    let data;
    if (localStorage.getItem(itemName) === "undefined") {
      console.log("no data");
    } else {
      data = JSON.parse(localStorage.getItem(itemName));
    }
    if (data === null) return;
    if (data === "undefined") return;
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
  _updateData2(path, id, content) {
    updateDoc(doc(db, path, id), content);
  }

  async _updateData(path, id, content) {
    try {
      const docRef = doc(db, path, id);
      await updateDoc(docRef, content);
      console.log("Document updated successfully!");
      return true; // Indicate success
    } catch (error) {
      console.error("Error updating document:", error);
      return false; // Indicate failure
    }
  }

  _addData(path, data) {
    addDoc(collection(db, path), data);
  }

  _searchData(path, searchIdent, equalWhat) {
    let week = [];
    const q = query(collection(db, path), where(searchIdent, "==", equalWhat));
    console.log(q);
    getDocs(q).then((docSnap) => {
      docSnap.forEach((doc) => {
        week.push(doc.data());
      });
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

  // _readData(path, id) {
  //   let data;
  //   return getDoc(collection(db, path, id)).then((docSnap) => {
  //     if (docSnap.exists()) {
  //       data = docSnap.data();
  //       console.log(docSnap.data());
  //       return data;
  //     } else {
  //       return "";
  //     }
  //   });
  // }

  _readData(path, id) {
    return new Promise((resolve, reject) => {
      let data;
      getDoc(collection(db, path, id))
        .then((docSnap) => {
          if (docSnap.exists()) {
            data = docSnap.data();
            console.log(docSnap.data());
            resolve(data);
          } else {
            resolve(""); // Resolving with an empty string when the document doesn't exist
          }
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
          reject(error);
        });
    });
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
    whatsAppPhoneNumber,
    telegramPhoneNumber
  ) {
    console.log(this.#otp);
    this.#otp = otp;
    const data = JSON.stringify({
      ishtml: "false",
      sendto: sendTo,
      name: "El equipo THoras",
      replyTo: replyTo,
      title: `${title} ${otp}`,
      body: `${message}\n\n\nSi no solicitastes un código de verificación, no te preocupes. Puedes ignorar este correo.\nSi necesitas ayuda en algo, puede comunicarse con ${contactEmail}, tambien por WhatsApp al ${whatsAppPhoneNumber} o, por telegram al ${telegramPhoneNumber}.\n\n Estamos a sus ordenes`,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    const disSuccErrSub = (text, se, msTime) => {
      this._hideSpinner();
      this._disdSuccessErrorMessage(text, se, msTime);
      if (se === "ex") {
        this._displayAlert(
          "Código enviado.",
          `Hemos enviado un código de verificación a: ${sendTo}. Asegúrate que tienes acceso a este correo para recibir el código.`
        );
      }
    };
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        const [error, direc] = this.responseText.split(",");

        if (error.includes("true")) {
          disSuccErrSub(
            "Hubo un error con enviar el código. Estamos trabajando para solucionarlo.",
            "er",
            6000
          );
        }
        if (error.includes("false")) {
          disSuccErrSub("Código enviado", "ex", 3000);
        }
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

  _sendEmailNormal(sendTo, replyTo, title, message) {
    const data = JSON.stringify({
      ishtml: "false",
      sendto: sendTo,
      name: "THoras Tracker",
      replyTo: replyTo,
      title: title,
      body: message,
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    const disSuccErrSub = (text, se, msTime) => {
      this._hideSpinner();
      this._disdSuccessErrorMessage(text, se, msTime);
      // if (se === "ex") {
      //   this._displayAlert(
      //     "Código enviado.",
      //     `Hemos enviado un código de verificación a: ${sendTo}. Asegúrate que tienes acceso a este correo para recibir el código.`
      //   );
      // }
    };
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        const [error, direc] = this.responseText.split(",");

        if (error.includes("true")) {
          // disSuccErrSub(
          //   "Hubo un error con enviar el código. Estamos trabajando para solucionarlo.",
          //   "er",
          //   6000
          // );
        }
        if (error.includes("false")) {
          // disSuccErrSub("Código enviado", "ex", 3000);
        }
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
      // mesCon.style.transform = `translateY(300px)`;
      // mesCon.style.transform = `translateX(-50%)`;
      mesCon.style.transform = `translate(-50%, 300px)`;

      setTimeout(() => {
        // mesCon.style.transform = `translateY(0px)`;
        // mesCon.style.transform = `translateX(-50%)`;
        mesCon.style.transform = `translate(-50%, 0px)`;
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
    console.log(srDisp);
    // sr29.dataset.fromWhere = srDisp;
    // console.log(sr29.dataset.fromWhere);
    window.scrollTo(0, 0);

    let perdisp;
    let perhide;
    let srdisp;
    let srhide;

    // if (srDisp === "sr1") {
    //   srdisp = sr1;
    //   perdisp = 0;
    // }
    // if (srDisp === "sr2") {
    //   srdisp = sr2;
    //   perdisp = 390;
    // }
    // if (srDisp === "sr3") {
    //   srdisp = sr3;
    //   perdisp = 390 * 2;
    // }
    // if (srDisp === "sr4") {
    //   srdisp = sr4;
    //   perdisp = 390 * 3;
    // }
    // if (srDisp === "sr5") {
    //   srdisp = sr5;
    //   perdisp = 390 * 4;
    // }
    // if (srDisp === "sr6") {
    //   srdisp = sr6;
    //   perdisp = 390 * 5;
    // }
    // if (srDisp === "sr13") {
    //   srdisp = sr13;
    //   perdisp = 390 * 6;
    // }
    // if (srDisp === "sr14") {
    //   srdisp = sr14;
    //   perdisp = 390 * 7;
    // }
    // if (srDisp === "sr15") {
    //   srdisp = sr15;
    //   perdisp = 390 * 8;
    // }
    // if (srDisp === "sr18") {
    //   srdisp = sr18;
    //   perdisp = 390 * 9;
    // }
    // if (srDisp === "sr7") {
    //   srdisp = sr7;
    //   perdisp = 390 * 10;
    // }
    // if (srDisp === "sr8") {
    //   srdisp = sr8;
    //   perdisp = 390 * 11;
    // }
    // if (srDisp === "sr9") {
    //   srdisp = sr9;
    //   perdisp = 390 * 12;
    // }
    // if (srDisp === "sr11") {
    //   srdisp = sr11;
    //   perdisp = 390 * 13;
    // }
    // if (srDisp === "sr12") {
    //   srdisp = sr12;
    //   perdisp = 390 * 14;
    // }
    // if (srDisp === "sr16") {
    //   srdisp = sr16;
    //   perdisp = 390 * 15;
    // }
    // if (srDisp === "sr17") {
    //   srdisp = sr17;
    //   perdisp = 390 * 16;
    // }
    // if (srDisp === "sr19") {
    //   srdisp = sr19;
    //   perdisp = 390 * 17;
    // }
    // if (srDisp === "sr20") {
    //   srdisp = sr20;
    //   perdisp = 390 * 18;
    // }
    // if (srDisp === "sr21") {
    //   srdisp = sr21;
    //   perdisp = 390 * 19;
    // }
    // if (srDisp === "sr22") {
    //   srdisp = sr22;
    //   perdisp = 390 * 20;
    // }
    // if (srDisp === "sr23") {
    //   srdisp = sr23;
    //   perdisp = 390 * 21;
    // }
    // if (srDisp === "sr24") {
    //   srdisp = sr24;
    //   perdisp = 390 * 22;
    // }
    // if (srDisp === "sr25") {
    //   srdisp = sr25;
    //   perdisp = 390 * 23;
    // }
    // if (srDisp === "sr26") {
    //   srdisp = sr26;
    //   perdisp = 390 * 24;
    // }
    // if (srDisp === "sr27") {
    //   srdisp = sr27;
    //   perdisp = 390 * 25;
    // }
    // if (srDisp === "sr28") {
    //   srdisp = sr28;
    //   perdisp = 390 * 26;
    // }
    // if (srDisp === "sr29") {
    //   srdisp = sr29;
    //   perdisp = 390 * 27;
    // }
    // if (srDisp === "sr30") {
    //   srdisp = sr30;
    //   perdisp = 390 * 28;
    // }
    // if (srDisp === "sr31") {
    //   srdisp = sr31;
    //   perdisp = 390 * 29;
    // }
    // if (srDisp === "sr32") {
    //   srdisp = sr32;
    //   perdisp = 390 * 30;
    // }
    // if (srDisp === "sr33") {
    //   srdisp = sr33;
    //   perdisp = 390 * 31;
    // }

    // // <-- Hide
    // if (srHide === "sr1") {
    //   srhide = sr1;
    // }
    // if (srHide === "sr2") {
    //   srhide = sr2;
    // }
    // if (srHide === "sr3") {
    //   srhide = sr3;
    // }
    // if (srHide === "sr4") {
    //   srhide = sr4;
    // }
    // if (srHide === "sr5") {
    //   srhide = sr5;
    // }
    // if (srHide === "sr6") {
    //   srhide = sr6;
    // }
    // if (srHide === "sr13") {
    //   srhide = sr13;
    // }
    // if (srHide === "sr14") {
    //   srhide = sr14;
    // }
    // if (srHide === "sr15") {
    //   srhide = sr15;
    // }
    // if (srHide === "sr18") {
    //   srhide = sr18;
    // }
    // if (srHide === "sr7") {
    //   srhide = sr7;
    // }
    // if (srHide === "sr8") {
    //   srhide = sr8;
    // }
    // if (srHide === "sr9") {
    //   srhide = sr9;
    // }
    // if (srHide === "sr11") {
    //   srhide = sr11;
    // }
    // if (srHide === "sr12") {
    //   srhide = sr12;
    // }
    // if (srHide === "sr16") {
    //   srhide = sr16;
    // }
    // if (srHide === "sr17") {
    //   srhide = sr17;
    // }
    // if (srHide === "sr19") {
    //   srhide = sr19;
    // }
    // if (srHide === "sr20") {
    //   srhide = sr20;
    // }
    // if (srHide === "sr21") {
    //   srhide = sr21;
    // }
    // if (srHide === "sr22") {
    //   srhide = sr22;
    // }
    // if (srHide === "sr23") {
    //   srhide = sr23;
    // }
    // if (srHide === "sr24") {
    //   srhide = sr24;
    // }
    // if (srHide === "sr25") {
    //   srhide = sr25;
    // }
    // if (srHide === "sr26") {
    //   srhide = sr26;
    // }
    // if (srHide === "sr27") {
    //   srhide = sr27;
    // }
    // if (srHide === "sr28") {
    //   srhide = sr28;
    // }
    // if (srHide === "sr29") {
    //   srhide = sr29;
    // }
    // if (srHide === "sr30") {
    //   srhide = sr30;
    // }
    // if (srHide === "sr31") {
    //   srhide = sr31;
    // }
    // if (srHide === "sr32") {
    //   srhide = sr32;
    // }
    // if (srHide === "sr33") {
    //   srhide = sr33;
    // }

    // const style = window.getComputedStyle(srhide);
    // const matrix = new WebKitCSSMatrix(style.transform);
    // const nowLocated = matrix.e;

    // if (whereTo === "right") {
    //   perhide = nowLocated + 390;
    // }
    // if (whereTo === "left") {
    //   perhide = nowLocated - 390;
    // }
    // if (whereTo === "none") {
    //   perhide = nowLocated;
    // }

    // srhide.style.transform = `translateX(${perhide}px)`;
    // srdisp.style.transform = `translateX(-${perdisp}px)`;

    this.#currentScreen = srDisp;
    console.log(this.#currentScreen);
    const srhideNew = document.querySelector(`#${srHide}`);
    const srdispNew = document.querySelector(`#${srDisp}`);

    // _opacityDimScreen(srDisp,srHide){

    // const dimmer = (srDisp, srHide) => {
    //   let numBright = 0;
    //   let numDim = 100;
    //   const timeIntervalDimmer = setInterval(() => {
    //     if (numDim <= 0) {
    //       clearInterval(timeIntervalDimmer);
    //       srhideNew.classList.remove("sr");
    //       srhideNew.classList.add("sr-none");
    //     } else {
    //       numDim -= 5;
    //     }
    //     console.log(numDim);
    //   }, 100);
    //   const timeIntervalBrighter = setInterval(() => {
    //     if (numBright >= 100) {
    //       clearInterval(timeIntervalBrighter);
    //       srdispNew.style.opacity = numBright;
    //       srdispNew.classList.add("sr");
    //       srdispNew.classList.remove("sr-none");
    //     } else {
    //       numBright += 5;
    //     }
    //     console.log(numBright);
    //   }, 100);
    // };
    // dimmer();

    const dimmer = () => {
      let numBright = 0;
      let numDim = 100;

      const srdispNew = document.getElementById(srDisp);
      const srhideNew = document.getElementById(srHide);

      if (!srdispNew || !srhideNew) {
        console.error("Elements not found");
        return;
      }

      const timeIntervalDimmer = setInterval(() => {
        if (numDim <= 0) {
          clearInterval(timeIntervalDimmer);
          srhideNew.classList.remove("sr");
          srhideNew.classList.add("sr-none");
        } else {
          numDim -= 5;
          srhideNew.style.opacity = numDim / 100;
        }
        console.log("Dimming:", numDim);
      }, 1);

      const timeIntervalBrighter = setInterval(() => {
        if (numBright >= 100) {
          clearInterval(timeIntervalBrighter);
          srdispNew.style.opacity = 1;
          srdispNew.classList.add("sr");
          srdispNew.classList.remove("sr-none");
        } else {
          numBright += 5;
          srdispNew.style.opacity = numBright / 100;
        }
        console.log("Brightening:", numBright);
      }, 1);
    };

    // Example usage
    // dimmer();

    // }

    srhideNew.classList.remove("sr");
    srhideNew.classList.add("sr-none");
    // srdispNew.style.opacity = `0%`;
    srdispNew.classList.add("sr");
    srdispNew.classList.remove("sr-none");
    if (srDisp !== "sr29") {
      headerTeamImg.dataset.fromWhere = srDisp;
    }
    if (
      srDisp === "sr7" ||
      srDisp === "sr8" ||
      srDisp === "sr9" ||
      srDisp === "sr11" ||
      srDisp === "sr12" ||
      srDisp === "sr16" ||
      srDisp === "sr17" ||
      srDisp === "sr19" ||
      srDisp === "sr20" ||
      srDisp === "sr30"
    ) {
      appName.classList.add("app-name-not-only");
      teamImage.classList.remove("team-image-hidden");
    } else {
      // all sr that are specified here wil not change the header img or name
      if (srDisp === "sr29") {
      } else {
        appName.classList.remove("app-name-not-only");
        teamImage.classList.add("team-image-hidden");
      }
    }
  }

  _setCurWeek(i) {
    const numWeeks = this.#curWeekArrayOrg.length;
    this.#curWeek = this.#curWeekArrayOrg[`${numWeeks - i}`];
    this._displayTimeSheet(
      "ng",
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

  _weekSelectBtnDimmer(direct) {
    if (direct === "back") {
      btnWeekSelectBack.classList.remove("btn-dim-full");
      btnWeekSelectBack.classList.add("btn-dim-dim");
      btnWeekSelectForward.classList.remove("btn-dim-dim");
      btnWeekSelectForward.classList.add("btn-dim-full");
      btnWeekSelectBack.dataset.active = "off";
      btnWeekSelectBackPath.dataset.active = "off";
      btnWeekSelectForward.dataset.active = "on";
      btnWeekSelectForwardPath.dataset.active = "on";
    }
    if (direct === "ahead") {
      btnWeekSelectForward.classList.remove("btn-dim-full");
      btnWeekSelectForward.classList.add("btn-dim-dim");
      btnWeekSelectBack.classList.remove("btn-dim-dim");
      btnWeekSelectBack.classList.add("btn-dim-full");
      btnWeekSelectForward.dataset.active = "off";
      btnWeekSelectForwardPath.dataset.active = "off";
      btnWeekSelectBack.dataset.active = "on";
      btnWeekSelectBackPath.dataset.active = "on";
    }
    if (direct === "both") {
      btnWeekSelectBack.classList.remove("btn-dim-dim");
      btnWeekSelectBack.classList.add("btn-dim-full");
      btnWeekSelectForward.classList.remove("btn-dim-dim");
      btnWeekSelectForward.classList.add("btn-dim-full");
      btnWeekSelectBack.dataset.active = "on";
      btnWeekSelectBackPath.dataset.active = "on";
      btnWeekSelectForward.dataset.active = "on";
      btnWeekSelectForwardPath.dataset.active = "on";
    }
  }

  async _weekSelect2(direction, weekNum) {
    if (direction === "back") {
      if (this.#curWeekArrayOrg[0]) {
      } else {
        this.#curWeekArrayOrg = await this._readWeeks();
      }
    }

    console.log(this.#weekDisplayNumberMinus);

    if (direction === "back") {
      if (this.#weekDisplayNumberMinus === this.#curWeekArrayOrg.length) {
        this.#weekDisplayNumberMinus = this.#curWeekArrayOrg.length - 1;
      }
      if (this.#weekDisplayNumberMinus > 0) {
        this._displayTimeSheet(
          "ng",
          false,
          this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
          this.#weekDisplayNumberMinus
        );
        if (this.#weekDisplayNumberMinus >= 0) {
          this.#weekDisplayNumberMinus = this.#weekDisplayNumberMinus - 1;
        }
        this._weekSelectBtnDimmer("both");
      } else {
        this._weekSelectBtnDimmer("back");
      }
    }

    if (direction === "ahead") {
      if (this.#weekDisplayNumberMinus < this.#curWeekArrayOrg.length) {
        this._displayTimeSheet(
          "ng",
          false,
          this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
          this.#weekDisplayNumberMinus
        );

        this.#weekDisplayNumberMinus = this.#weekDisplayNumberMinus + 1;
        this._weekSelectBtnDimmer("both");
      } else {
        this._weekSelectBtnDimmer("ahead");
      }
    }
  }

  async _weekSelect3(direction, weekNum) {
    if (direction === "back") {
      if (!this.#curWeekArrayOrg[0]) {
        this.#curWeekArrayOrg = await this._readWeeks();
      }
    }

    console.log(this.#weekDisplayNumberMinus);

    if (direction === "back") {
      if (this.#weekDisplayNumberMinus >= 0) {
        this._displayTimeSheet(
          "ng",
          false,
          this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
          this.#weekDisplayNumberMinus
        );
        this.#weekDisplayNumberMinus = Math.max(
          0,
          this.#weekDisplayNumberMinus - 1
        );
        this._weekSelectBtnDimmer("both");
      } else {
        this._weekSelectBtnDimmer("back");
      }
    }

    if (direction === "ahead") {
      if (this.#weekDisplayNumberMinus < this.#curWeekArrayOrg.length) {
        this.#weekDisplayNumberMinus = Math.min(
          this.#weekDisplayNumberMinus + 1,
          this.#curWeekArrayOrg.length - 1
        );
        this._displayTimeSheet(
          "ng",
          false,
          this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
          this.#weekDisplayNumberMinus
        );
        this._weekSelectBtnDimmer("both");
      } else {
        this._weekSelectBtnDimmer("ahead");
      }
    }
  }

  async _weekSelect4(direction, weekNum) {
    if (!this.#curWeekArrayOrg[0]) {
      this.#curWeekArrayOrg = await this._readWeeks();
    }

    if (direction === "back") {
      this.#weekDisplayNumberMinus = Math.max(
        0,
        this.#weekDisplayNumberMinus - 1
      );
    }

    if (direction === "ahead") {
      this.#weekDisplayNumberMinus = Math.min(
        this.#weekDisplayNumberMinus + 1,
        this.#curWeekArrayOrg.length - 1
      );
    }

    this._displayTimeSheet(
      "ng",
      false,
      this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
      this.#weekDisplayNumberMinus
    );

    this._weekSelectBtnDimmer("both");
  }

  async _weekSelect(direction, weekNum) {
    if (!this.#curWeekArrayOrg[0]) {
      this.#curWeekArrayOrg = await this._readWeeks();
    }

    if (direction === "back") {
      this.#weekDisplayNumberMinus = Math.max(
        0,
        this.#weekDisplayNumberMinus - 1
      );
      this._weekSelectBtnDimmer("both");
      if (this.#weekDisplayNumberMinus === 0) {
        this._weekSelectBtnDimmer("back");
      }
    }

    if (direction === "ahead") {
      this.#weekDisplayNumberMinus = Math.min(
        this.#weekDisplayNumberMinus + 1,
        this.#curWeekArrayOrg.length - 1
      );
      this._weekSelectBtnDimmer("both");
      if (this.#weekDisplayNumberMinus === this.#curWeekArrayOrg.length - 1) {
        this._weekSelectBtnDimmer("ahead");
      }
    }

    this._displayTimeSheet(
      "ng",
      false,
      this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
      this.#weekDisplayNumberMinus
    );
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

  async _readWeeks() {
    let curWeekArrayOrgLocal;
    if (navigator.onLine) {
      this._displaySpinner("Espera un momento. Estamos cargando tus semanas.");
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

      try {
        const docSnap = await getDocs(q);
        let arr = [];
        docSnap.forEach((doc) => {
          const val = doc.data();
          arr.push(val);
        });

        curWeekArrayOrgLocal = arr.sort((a, b) => {
          return a.weekMadeTimeStamp - b.weekMadeTimeStamp;
        });
        console.log(curWeekArrayOrgLocal);
        console.log(this.#curMemberInfo.curWeekId);
        this._hideSpinner();
        this.#weekDisplayNumberMinus = curWeekArrayOrgLocal.length - 1;
        return curWeekArrayOrgLocal;
      } catch (error) {
        console.error("Error fetching weeks:", error);
        this._hideSpinner();
        throw error; // Rethrow the error for handling in the calling function
      }
    } else {
      this._displayAlert(
        "Fuera de conexión.",
        "No pudimos cargar tus semanas anteriores porque no tienes conexión a internet. Revisa tu conexión e intenta de nuevo."
      );
      return []; // Return an empty array if offline
    }
  }

  _daySp(dayNum) {
    let todaySp;

    if (dayNum === 0) {
      todaySp = "Domingo";
    }
    if (dayNum === 1) {
      todaySp = "Lunes";
    }
    if (dayNum === 2) {
      todaySp = "Martes";
    }
    if (dayNum === 3) {
      todaySp = "Miércoles";
    }
    if (dayNum === 4) {
      todaySp = "Jueves";
    }
    if (dayNum === 5) {
      todaySp = "Viernes";
    }
    if (dayNum === 6) {
      todaySp = "Sábado";
    }
    return todaySp;
  }

  _punchInTimer(punch, time) {
    console.log("called");
    let timeTimeInterval;
    let date;
    let hourDate;
    let minutesDate;
    let secondsDate;
    let timeArrDate;
    let timeDate;
    const getCurTime = function () {
      date = new Date();
      hourDate = date.getHours();
      minutesDate = date.getMinutes();
      secondsDate = date.getSeconds();
      timeArrDate = [hourDate, minutesDate];
      timeDate = timeArrDate.join(":");
    };
    // getCurTime()

    let hour = 0;
    let min = 0;
    let sec = 0;
    if (time) {
      // timeTimeInterval = setInterval(() => {
      getCurTime();
      const timeInArr = this._calculateTimeBetween(time, timeDate).split(":");
      hour = Number(timeInArr[0]);
      if (Number(timeInArr[1]) < 10) {
        min = `0${Number(timeInArr[1])}`;
      } else {
        min = Number(timeInArr[1]);
      }
      if (secondsDate < 10) {
        sec = `0${secondsDate}`;
      } else {
        sec = secondsDate;
      }
      sr11punchInClockSeconds.textContent = `${sec}`;
      sr11punchInClockMinutes.textContent = min;
      sr11punchInClockHours.textContent = hour;
      // }, 1000);
    }
    const setTime = () => {
      getCurTime();
      const timeInArr = this._calculateTimeBetween(time, timeDate).split(":");
      hour = Number(timeInArr[0]);
      if (Number(timeInArr[1]) < 10) {
        min = `0${Number(timeInArr[1])}`;
      } else {
        min = Number(timeInArr[1]);
      }
      if (secondsDate < 10) {
        sec = `0${secondsDate}`;
      } else {
        sec = secondsDate;
      }
      sr11punchInClockSeconds.textContent = `${sec}`;
      sr11punchInClockMinutes.textContent = min;
      sr11punchInClockHours.textContent = hour;
    };
    if (punch === "in") {
      sr11punchInClockSeconds.textContent = "00";
      sr11punchInClockMinutes.textContent = "00";
      sr11punchInClockHours.textContent = "0";
      sr11PunchInBtnIn.style.opacity = "50%";
      sr11PunchInBtnIn.dataset.active = "no";
      sr11PunchInBtnOut.style.opacity = "100%";
      clearInterval(this.clockInterval);
      this.clockInterval = setInterval(setTime, 1000);
    }
    if (punch === "out") {
      sr11PunchInBtnOut.style.opacity = "10%";
      sr11PunchInBtnIn.style.opacity = "10%";
      clearInterval(this.clockInterval);
    }
  }

  // TODO: Auto week creator
  _checkForNewWeek(weekTimeStamp, weekStartDay) {
    console.log(weekTimeStamp);
    const getIndexByValue = (array, value) => {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
          console.log(i);
          return i; // Return the index if value is found
        }
      }
      return -1; // Return -1 if value is not found in the array
    };
    let weekTimeStampForUse;
    let millisecondsToSubtract;

    const weekDaySopossedToStart = getIndexByValue(
      this.#weekDaysSp,
      weekStartDay
    );

    console.log(weekStartDay);

    const oneWeekInMilliseconds = 604800000;
    const oneDayInMilliseconds = 86400000;

    const dateNow = new Date();
    // const hoursForNextWeek = dateNow.getHours();
    // const minutesForNextWeek = dateNow.getMinutes();
    // const secondsForNextWeek = dateNow.getSeconds();

    const dateLastWeek = new Date(weekTimeStamp);
    const weekDayLastWeek = dateLastWeek.getDay();

    console.log(weekDayLastWeek);
    console.log(weekDaySopossedToStart);

    let numberForTimes = 1;

    // TODO: here's trouble

    console.log(weekDayLastWeek, weekDaySopossedToStart);
    if (weekDayLastWeek >= weekDaySopossedToStart) {
      numberForTimes = weekDaySopossedToStart - weekDayLastWeek;
      weekTimeStampForUse =
        weekTimeStamp - oneDayInMilliseconds * numberForTimes;
      console.error("here");
    } else if (weekDayLastWeek < weekDaySopossedToStart) {
      const tillEndDays = 6 - weekDaySopossedToStart;
      numberForTimes = weekDayLastWeek + tillEndDays;
      weekTimeStampForUse =
        weekTimeStamp - oneDayInMilliseconds * numberForTimes;
    } else {
      console.error("here");
      weekTimeStampForUse = weekTimeStamp - oneWeekInMilliseconds;
    }

    const dateForNextWeek = new Date(weekTimeStampForUse);
    const hoursForNextWeek = dateForNextWeek.getHours();
    const minutesForNextWeek = dateForNextWeek.getMinutes();
    const secondsForNextWeek = dateForNextWeek.getSeconds();

    console.log(hoursForNextWeek);
    console.log(minutesForNextWeek);
    console.log(secondsForNextWeek);

    const calculateMilliseconds = (hours, minutes, seconds) => {
      return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
    };
    millisecondsToSubtract = calculateMilliseconds(
      hoursForNextWeek,
      minutesForNextWeek,
      secondsForNextWeek
    );

    // TODO: NEW from GPT
    // Calculate the timestamp of the start of the next week
    const nextWeekTimeStamp =
      weekTimeStampForUse + (oneWeekInMilliseconds - millisecondsToSubtract);

    console.log(this._getTimeFromTimeStamp(weekTimeStampForUse));
    console.log(this._getTimeFromTimeStamp(nextWeekTimeStamp));

    console.log(oneWeekInMilliseconds - millisecondsToSubtract);

    // Check if the current time is after the start of the next week
    console.log(this._getTimeStamp());
    console.log(nextWeekTimeStamp);
    if (this._getTimeStamp() >= nextWeekTimeStamp) {
      this._newWeek();
    } else {
      console.log("no new week needed");
    }
  }

  _checkForNewWeek2(weekTimeStamp) {
    console.log("called check week");
    const checkForNewWeek = (timestamp, weekStartDay) => {
      // Get current date
      var currentDate = new Date();
      // Get current year
      var currentYear = currentDate.getFullYear();
      // Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      var currentDayOfWeek = currentDate.getDay();
      // Get current week number
      var currentWeekNumber = getWeekNumber(currentDate, weekStartDay);

      // Convert timestamp to Date object
      var createdDate = new Date(timestamp);
      // Get the year of the provided timestamp
      var createdYear = createdDate.getFullYear();

      // If the year of the timestamp is not the current year, call newWeek()
      if (createdYear !== currentYear) {
        console.log(
          "Timesheet date is not in the current year. Calling newWeek()..."
        );
        newWeek();
        return;
      }

      // Get week number of the provided timestamp
      var createdWeekNumber = getWeekNumber(createdDate, weekStartDay);

      // If the week was created during the current week, do nothing
      if (currentWeekNumber === createdWeekNumber) {
        console.log("Timesheet was created during the current week.");
        return;
      }

      // If the week was created before the current week, call newWeek()
      if (createdWeekNumber < currentWeekNumber) {
        console.log(
          "Timesheet was not created during the current week. Calling newWeek()..."
        );
        newWeek();
        return;
      }

      // If the week was created after the current week, it's a future date
      console.log("Timesheet date is in the future. Invalid.");
    };

    // Function to get the week number of a given date
    function getWeekNumber(date, weekStartDay) {
      var d = new Date(date);
      d.setHours(0, 0, 0, 0);

      // Adjust the date to the specified week start day
      var dayOfWeek = d.getDay();
      var diff = (dayOfWeek - weekStartDay + 7) % 7;
      d.setDate(d.getDate() - diff);

      // Get the year
      var year = d.getFullYear();

      // Get January 4th of the year
      var january4 = new Date(year, 0, 4);

      // Calculate the difference in milliseconds between January 4th and the current date
      var difference = d - january4;

      // Calculate the week number
      var weekNumber = Math.ceil(difference / (7 * 24 * 60 * 60 * 1000));

      // Adjust week number for January 1st-3rd being part of the previous year's week
      if (weekNumber < 1) {
        // Get January 1st of the year
        var january1 = new Date(year, 0, 1);

        // Calculate the difference in milliseconds between January 1st and January 4th
        var januaryDifference = january4 - january1;

        // Calculate the week number for the previous year
        var prevYearWeekNumber = Math.ceil(
          januaryDifference / (7 * 24 * 60 * 60 * 1000)
        );

        // Adjust week number
        weekNumber = prevYearWeekNumber;
      }

      return weekNumber;
    }

    // Function to call when a new week needs to be created
    function newWeek() {
      console.log("Creating a new week...");
      // Your new week logic here
    }

    // Example usage
    var weekStartDay = -6; // Wednesday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    checkForNewWeek(weekTimeStamp, weekStartDay);
  }

  _punchIn(punch) {
    const date = new Date();
    const dayInNumber = date.getDay();

    const weekDaysEn = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const presentWeekDayEn = weekDaysEn[dayInNumber];
    const hourDate = date.getHours();
    const minutesDate = date.getMinutes();

    let minCor;
    let hourCor;
    if (minutesDate < 10) {
      minCor = `0${minutesDate}`;
    } else {
      minCor = minutesDate;
    }
    if (hourDate < 10) {
      hourCor = `0${hourDate}`;
    } else {
      hourCor = hourDate;
    }
    const timeArrDate = [hourDate, minCor];
    const timeDate = timeArrDate.join(":");

    console.log(timeDate);
    if (punch === "in") {
      this.#timePickerUpdatestnd = "start";
      this._updateEntries(timeDate, presentWeekDayEn);
    }
    if (punch === "out") {
      this.#timePickerUpdatestnd = "end";
      this._updateEntries(timeDate, presentWeekDayEn);
    }
  }

  _getTimeFromTimeStamp(timestamp) {
    var daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    var months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    // Create a new Date object using the timestamp
    var date = new Date(timestamp);

    // Extract the day of the week, day, month, year, hours, and minutes
    var dayOfWeek = daysOfWeek[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Format hours (12-hour format) and add AM/PM indicator
    var amPM = hours >= 12 ? "am" : "pm";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours) as 12
    var formattedHours = hours < 10 ? "0" + hours : hours;

    // Format minutes
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    // Format the date string
    var formattedDate =
      dayOfWeek +
      "," +
      " " +
      day +
      " de " +
      month +
      " " +
      year +
      "," +
      " " +
      formattedHours +
      ":" +
      formattedMinutes +
      " " +
      amPM;
    return formattedDate;
  }

  //   const htmlForUse = `<div id="sr11-daily-hours-monday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-monday-day" class="daily-hours-day">
  //     Lu
  //   </p>
  //   <div
  //     id="sr11-daily-hours-monday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-monday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="monday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-monday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="monday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-monday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-tuesday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-tuesday-day" class="daily-hours-day">
  //     Ma
  //   </p>
  //   <div
  //     id="sr11-daily-hours-tuesday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-tuesday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="tuesday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-tuesday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="tuesday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-tuesday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-wednesday" class="daily-hours-con">
  //   <p
  //     id="sr11-daily-hours-wednesday-day"
  //     class="daily-hours-day"
  //   >
  //     Mi
  //   </p>
  //   <div
  //     id="sr11-daily-hours-wednesday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-wednesday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="wednesday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-wednesday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="wednesday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-wednesday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-thursday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-thursday-day" class="daily-hours-day">
  //     Ju
  //   </p>
  //   <div
  //     id="sr11-daily-hours-thursday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-thursday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="thursday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-thursday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="thursday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-thursday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-friday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-friday-day" class="daily-hours-day">
  //     Vi
  //   </p>
  //   <div
  //     id="sr11-daily-hours-friday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-friday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="friday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-friday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="friday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-friday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-saturday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-saturday-day" class="daily-hours-day">
  //     Sa
  //   </p>
  //   <div
  //     id="sr11-daily-hours-saturday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-saturday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="saturday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-saturday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="saturday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-saturday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>

  // <div id="sr11-daily-hours-sunday" class="daily-hours-con">
  //   <p id="sr11-daily-hours-sunday-day" class="daily-hours-day">
  //     Do
  //   </p>
  //   <div
  //     id="sr11-daily-hours-sunday-con"
  //     class="daily-hours-con-2"
  //   >
  //     <p
  //       id="sr11-daily-hours-sunday-start"
  //       class="daily-hours-start"
  //       data-do="open-time-picker"
  //       data-day="sunday"
  //       data-type="day"
  //       data-stnd="start"
  //     >
  //       0:00
  //     </p>
  //     <div id="sr11-daily-hours-sunday-end-con">
  //       <p
  //         id="sr11-daily-hours-sunday-end"
  //         class="daily-hours-end"
  //         data-do="open-time-picker"
  //         data-day="sunday"
  //         data-type="day"
  //         data-stnd="end"
  //       >
  //         0:00
  //       </p>
  //     </div>
  //   </div>
  //   <p
  //     id="sr11-daily-hours-sunday-time-total"
  //     class="daily-hours-total"
  //   >
  //     0:00
  //   </p>
  // </div>`;

  _punchInActDisp(InOut) {
    if (InOut === "in") {
      sr11PunchInBtnIn.dataset.active = "act";
      sr11PunchInBtnIn.style.opacity = "100%";
      sr11PunchInBtnOut.dataset.active = "no";
      sr11PunchInBtnOut.style.opacity = "50%";
    }
    if (InOut === "out") {
      sr11PunchInBtnOut.dataset.active = "act";
      sr11PunchInBtnOut.style.opacity = "100%";
      sr11PunchInBtnIn.dataset.active = "no";
      sr11PunchInBtnIn.style.opacity = "50%";
    }
    if (InOut === "done") {
      sr11PunchInBtnOut.style.opacity = "30%";
      sr11PunchInBtnIn.style.opacity = "30%";
      sr11PunchInBtnIn.dataset.active = "no";
      sr11PunchInBtnOut.dataset.active = "no";
    }
  }

  async _displayTimeSheet(srhide, load, week, weekNum) {
    let srHide;

    if (srhide === "ng") {
      srHide = "sr7";
    } else [(srHide = srhide)];
    this._displaySpinner("Estamos cargando esta semana");
    const sr11WeekTimeTotalTime = document.querySelector(
      `#sr11-summary-time-total-time`
    );
    const sr11UpdateWeekTextDay = document.querySelector(
      `#sr11-update-week-text-day`
    );
    const sr11WeekPayPerHour = document.querySelector(
      `#sr11-summary-pay--hour-pay`
    );
    const sr11WeekPayTotal = document.querySelector(
      `#sr11-summary-pay-total-total-pay`
    );

    const restOfDisplay = async () => {
      // Varibles
      let weekForUse;
      let lastWeekLocal;
      let conditionStopAll;

      const logHours = (arr) => {
        console.log(weekForUse[0].weekMadeTimeStamp);
        const sr11WeekCreatedDate = document.querySelector(
          "#sr11-week-created span"
        );
        sr11WeekCreatedDate.textContent = this._getTimeFromTimeStamp(
          weekForUse[0].weekMadeTimeStamp
        );
        this._deleteAllChildren("sr11-log-hours-con-main");
        const sr11LogHoursConMain = document.querySelector(
          "#sr11-log-hours-con-main"
        );
        let htmlToAdd = ``;
        arr.forEach((curDay, i, arr) => {
          let shortDay;
          let dayTimeStart;
          let dayTimeEnd;
          let dayTimeTotal;

          // short days
          if (curDay.day === "monday") {
            shortDay = "Lu";
          } else if (curDay.day === "tuesday") {
            shortDay = "Ma";
          } else if (curDay.day === "wednesday") {
            shortDay = "Mi";
          } else if (curDay.day === "thursday") {
            shortDay = "Ju";
          } else if (curDay.day === "friday") {
            shortDay = "Vi";
          } else if (curDay.day === "saturday") {
            shortDay = "Sa";
          } else if (curDay.day === "sunday") {
            shortDay = "Do";
          }

          //time formater
          if (curDay.in === "0:00") {
            dayTimeStart = curDay.in;
          } else {
            let zeroRidTime = curDay.in.replace(/^0+/, "");
            dayTimeStart = this._timeFormator(zeroRidTime);
          }
          if (curDay.out === "0:00") {
            dayTimeEnd = curDay.out;
          } else {
            let zeroRidTime = curDay.out.replace(/^0+/, "");
            dayTimeEnd = this._timeFormator(zeroRidTime);
          }
          if (this.#curData.pro !== "false") {
            dayTimeTotal = curDay.totalTime;
          } else {
            dayTimeTotal = "-:--";
          }

          const curDayHtml = `
              <div id="sr11-daily-hours-${curDay.day}"
                class="daily-hours-con"
                >
                <p
                  id="sr11-daily-hours-${curDay.day}-day"
                  class="daily-hours-day"
                >
                
                ${shortDay}
                </p>
                <div
                  id="sr11-daily-hours-${curDay.day}-con"
                  class="daily-hours-con-2"
                >
                  <p
                    id="sr11-daily-hours-${curDay.day}-start"
                    class="daily-hours-start"
                    data-do="open-time-picker"
                    data-day="${curDay.day}"
                    data-type="day"
                    data-stnd="start"
                  >${dayTimeStart}</p>
                  <div id="sr11-daily-hours-sunday-end-con">
                    <p
                      id="sr11-daily-hours-${curDay.day}-end"
                      class="daily-hours-end"
                      data-do="open-time-picker"
                      data-day="${curDay.day}"
                      data-type="day"
                      data-stnd="end"
                    >${dayTimeEnd}</p>
                  </div>
                </div>
                <p
                  id="sr11-daily-hours-${curDay.day}-time-total"
                  class="daily-hours-total"
                >
                ${dayTimeTotal}
                </p>
              </div>`;

          htmlToAdd = htmlToAdd + curDayHtml;
        });
        sr11LogHoursConMain.insertAdjacentHTML("beforeend", htmlToAdd);
        this.#curWeek = weekForUse[0];

        this._srGetStartedDispChoose("sr11", srHide, "left");

        this._hideSpinner();
      };

      const searchWeek = async () => {
        const q = query(
          collection(db, `accounts/${this.#curMemberInfo.teamCode}/weeks`),
          where("weekId", "==", this.#curMemberInfo.curWeekId)
        );
        console.log(q);
        const docSnap = await getDocs(q);
        const data = [];
        docSnap.forEach((doc) => {
          data.push(doc.data());
        });
        return data;
      };

      const newWeekChecker = async () => {
        console.log("here now");
        if (this.#curMemberInfo.curWeekId) {
          if (load === true) {
            this.#curWeekArrayOrg = [];
            this._weekSelectBtnDimmer("ahead");
            weekForUse = await searchWeek();
            lastWeekLocal = true;
            console.log("here now");
            console.log(lastWeekLocal);

            return new Promise((resolve) => {
              resolve(
                this._checkForNewWeek(
                  weekForUse[0].weekMadeTimeStamp,
                  weekForUse[0].weekStart
                )
              );
            });
          } else {
            weekForUse = [week];
            lastWeekLocal = false;
            console.log("here now");
            console.log(lastWeekLocal);
          }
        } else {
          console.log("here now");
          console.log(lastWeekLocal);
          conditionStopAll = true;
          this._newWeek();
          return Promise.resolve();
        }
      };

      await newWeekChecker();

      if (conditionStopAll === true) {
        console.log("all stoped here because a new week was created");
        return;
      }
      console.log("nothing stoped here because no new week was created");

      logHours(weekForUse[0].days);
      sr11TimeSheetName.textContent = this.#curMemberInfo.name;

      if (this.#curMemberInfo.salary !== weekForUse[0].salary) {
        if (this.#curData.pro !== "false") {
          sr11WeekTimeTotalTime.textContent = weekForUse[0].totalTime;
          sr11WeekPayTotal.textContent = `$ ${this._calculatePay(
            this.#curMemberInfo.salary,
            weekForUse[0].totalTime
          )}`;
        } else {
          sr11WeekTimeTotalTime.textContent = "-:--";
          sr11WeekPayTotal.textContent = "$ ----";
        }

        sr11WeekPayPerHour.textContent = `$ ${this.#curMemberInfo.salary}`;
        this._updateData(
          `accounts/${this.#curMemberInfo.teamCode}/weeks`,
          weekForUse[0].weekId,
          {
            salary: this.#curMemberInfo.salary,
            totalPay: this._calculatePay(
              this.#curMemberInfo.salary,
              weekForUse[0].totalTime
            ),
          }
        );
      } else {
        if (this.#curData.pro !== "false") {
          sr11WeekTimeTotalTime.textContent = weekForUse[0].totalTime;
          sr11WeekPayTotal.textContent = `$ ${weekForUse[0].totalPay}`;
        } else {
          sr11WeekTimeTotalTime.textContent = "-:--";
          sr11WeekPayTotal.textContent = "$ ----";
        }

        sr11WeekPayPerHour.textContent = `$ ${weekForUse[0].salary}`;
      }
      // TODO: all good overhead. need to fix downward

      //

      //

      //

      //

      ///
      clearInterval(this.clockInterval);
      sr11punchInClockSeconds.textContent = "00";
      sr11punchInClockMinutes.textContent = "00";
      sr11punchInClockHours.textContent = "0";

      const date = new Date();
      const dayInNumber = date.getDay();
      const weekDaysSp = [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
      ];
      const presentWeekDaySp = weekDaysSp[dayInNumber];
      const weekDaysEn = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      const presentWeekDayEn = weekDaysEn[dayInNumber];

      const dispPunchinCon = () => {
        lastWeekLocal = true;
        sr11punchInConMain.style.display = "flex";
        sr11punchInDay.textContent = presentWeekDaySp;
        sr11punchInClockMinutes.textContent = "00";
        sr11punchInClockHours.textContent = "0";
      };

      const dispWeekConvertBtn = () => {
        console.log("called");
        if (lastWeekLocal === true) {
          console.log("called");
          if (this.#curMemberInfo.weekStart !== weekForUse[0].weekStart) {
            console.log("called");
            if (srhide === "ng") {
              sr7UpdateCurWeekToStartWeekCon.style.display = "flex";

              sr11UpdateWeekTextDay.textContent = this.#curMemberInfo.weekStart;
            } else {
              console.error("not displayed");
            }
          }
          if (this.#curMemberInfo.weekStart === weekForUse[0].weekStart) {
            console.log("called");
            sr7UpdateCurWeekToStartWeekCon.style.display = "none";
          }
        } else {
          console.log("called");
          sr7UpdateCurWeekToStartWeekCon.style.display = "none";
        }
      };

      if (lastWeekLocal === true) {
        if (this.#curMemberInfo.writePermision === "true") {
          dispPunchinCon();
          dispWeekConvertBtn();
        }
        if (this.#curMemberInfo.punchInPermision === "true") {
          dispPunchinCon();
          dispWeekConvertBtn();
        }
      } else {
        sr11punchInConMain.style.display = "none";
        dispWeekConvertBtn();
      }
      if (typeof weekNum === "number") {
        console.log(this.#curMemberInfo.numberOfWeeks);
        console.log(weekNum);
        if (weekNum + 1 === this.#curMemberInfo.numberOfWeeks) {
          hourSheetWeekNumber.textContent = `Semana ${weekNum + 1}`;
          hourSheetWeekNumberLast.textContent = "última";
          dispPunchinCon();
          dispWeekConvertBtn();
        } else {
          hourSheetWeekNumber.textContent = `Semana ${weekNum + 1}`;
          hourSheetWeekNumberLast.textContent = "";
        }
      } else {
        console.log(typeof weekNum);
        hourSheetWeekNumber.textContent = `Semana ${
          this.#curMemberInfo.numberOfWeeks
        }`;
        hourSheetWeekNumberLast.textContent = "última";
        dispPunchinCon();
        dispWeekConvertBtn();
      }
      // IndexDayValNum = dayDateCor - 1;
      function arrSearchByKeyValue(array, key, value) {
        // Loop through each object in the array
        for (let i = 0; i < array.length; i++) {
          // Check if the current object has the specified key and value
          if (array[i][key] === value) {
            // If found, return the object
            return array[i];
          }
        }
        // If not found, return null or handle the case as needed
        return null;
      }

      arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn);

      if (
        arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn).in ===
        "0:00"
      ) {
        this._punchInActDisp("in");
      } else {
        if (
          arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn)
            .out === "0:00"
        ) {
          this._punchInTimer(
            "in",
            arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn).in
          );
        } else {
          const timeInArr = arrSearchByKeyValue(
            weekForUse[0].days,
            "day",
            presentWeekDayEn
          ).totalTime.split(":");
          let hour = Number(timeInArr[0]);
          let min;
          if (Number(timeInArr[1]) < 10) {
            min = `0${Number(timeInArr[1])}`;
          } else {
            min = Number(timeInArr[1]);
          }

          sr11punchInClockMinutes.textContent = min;
          sr11punchInClockHours.textContent = hour;
          this._punchInActDisp("done");
        }
      }
      if (
        arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn).out ===
          "0:00" &&
        arrSearchByKeyValue(weekForUse[0].days, "day", presentWeekDayEn).in !==
          "0:00"
      ) {
        this._punchInActDisp("out");
      }
    };

    if (this.#curMemberInfo.numberOfWeeks) {
      // Code inside this block will execute synchronously
      restOfDisplay();
    } else {
      const weeksLocal = await this._readWeeks();
      await this._updateData(
        `accounts/${this.#curMemberInfo.teamCode}/team`,
        this.#curMemberInfo.memberId,
        {
          numberOfWeeks: weeksLocal.length,
        }
      );
      // Code after this point will execute after _updateData finishes
      restOfDisplay();
    }
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

  _updateEntries(time, dayToChange) {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    console.log(this.#curMemberInfo.memberId);

    function findIndexByKeyValue(array, key, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return i;
        }
      }
      return -1; // Return -1 if the key/value pair is not found
    }

    const IndexDayVal = findIndexByKeyValue(
      this.#curWeek.days,
      "day",
      dayToChange
    );

    console.log("time: ", time);

    const updateIn = () => {
      console.log(curDataLocal.memberId);
      this._updateData(
        `accounts/${curDataLocal.teamCode}/team`,
        this.#curMemberInfo.memberId,
        {
          lastModified: this._getTimeStamp(),
        }
      );
      console.log(this.#curWeek.days[IndexDayVal]);
      console.log(this.#curWeek.days[6]);
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
      this._updateData(
        `accounts/${curDataLocal.teamCode}/team`,
        this.#curMemberInfo.memberId,
        {
          lastModified: this._getTimeStamp(),
        }
      );
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

      console.log(IndexDayVal);
      if (this.#timePickerUpdatestnd === "start") {
        if (this.#curWeek.days[IndexDayVal].out === "0:00") {
          this.#curWeek.days[IndexDayVal].totalTime =
            this._calculateTimeBetween(
              time,
              this.#curWeek.days[IndexDayVal].out
            );

          updateIn();
          this._disdSuccessErrorMessage(
            "Tiempo de entrada Guardado.",
            "ex",
            1000
          );
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
            if (time === "0:00") {
              this._disdSuccessErrorMessage(
                "Tu tiempo de entrada ha sido restablecido.",
                "ex",
                1000
              );
            } else {
              this._disdSuccessErrorMessage(
                "Tiempo de entrada Guardado.",
                "ex",
                1000
              );
            }
          }
          if (entryhour === timehour || time === "0:00") {
            if (entrymin < timemin || time === "0:00") {
              this.#curWeek.days[IndexDayVal].totalTime =
                this._calculateTimeBetween(
                  time,
                  this.#curWeek.days[IndexDayVal].out
                );
              updateIn();
              if (time !== "0:00") {
                this._disdSuccessErrorMessage(
                  "Tiempo de entrada Guardado.",
                  "ex",
                  1000
                );
              }
            }
            if (entrymin >= timemin && time !== "0:00") {
              this._disdSuccessErrorMessage(
                "Tu tiempo de entrada no pueder ser mayor de, o igual a tu tiempo de salida.",
                "er",
                4000
              );
            }
          }
          if (entryhour > timehour && time !== "0:00") {
            this._disdSuccessErrorMessage(
              "Tu tiempo de entrada no pueder ser mayor de, o igual a tu tiempo de salida.",
              "er",
              4000
            );
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
          if (time === "0:00") {
            this._disdSuccessErrorMessage(
              "Tu tiempo de salida ha sido restablecido.",
              "ex",
              1000
            );
          } else {
            this._disdSuccessErrorMessage(
              "Tiempo de salida Guardado.",
              "ex",
              1000
            );
          }
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
            this._disdSuccessErrorMessage(
              "Tiempo de salida Guardado.",
              "ex",
              1000
            );
            console.log(5);
          }
          console.log(entryhour, entrymin);
          console.log(time);
          if (entryhour === timehour || time === "0:00") {
            if (entrymin > timemin || time === "0:00") {
              this.#curWeek.days[IndexDayVal].totalTime =
                this._calculateTimeBetween(
                  this.#curWeek.days[IndexDayVal].in,
                  time
                );
              updateOut();
              this._disdSuccessErrorMessage(
                "Tiempo de entrada Guardado.",
                "ex",
                1000
              );
              console.log(6);
            }
            if (entrymin <= timemin && time !== "0:00") {
              this._disdSuccessErrorMessage(
                "Tu tiempo de salida no pueder ser menor de, o igual a tu tiempo de entrada.",
                "er",
                4000
              );
              console.log(1);
            }
          }
          if (entryhour < timehour && time !== "0:00") {
            this._disdSuccessErrorMessage(
              "Tu tiempo de salida no pueder ser menor de o igual a tu tiempo de entrada.",
              "er",
              4000
            );
            console.log(3);
          }
        }
      }
      console.log("arr", this.#curWeek.days);

      if (this.#weekDisplayNumberMinus) {
        this._displayTimeSheet(
          "ng",
          false,
          this.#curWeekArrayOrg[this.#weekDisplayNumberMinus],
          this.#weekDisplayNumberMinus
        );
      } else {
        this._displayTimeSheet("ng", true);
      }
    }
  }

  _deleteAllChildren(docId) {
    const where = document.querySelector(`#${docId}`);
    while (where.hasChildNodes()) {
      where.removeChild(where.firstChild);
    }
  }

  _displayTeamImg(name) {
    const storage = getStorage();
    const imageFolderRef = ref(storage, "team_images");
    const sparkyRef = ref(storage, `team_images/${name}`);
    getDownloadURL(sparkyRef)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        // const img = document.querySelector("#myimg");
        // img.src = url;
        headerTeamImg.src = url;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _displayMembers(srHide) {
    console.log(srHide);
    // const storage = getStorage();
    // const imageFolderRef = ref(storage, "team_images");

    // const displImg = function (name) {
    //   const sparkyRef = ref(storage, `team_images/${name}`);
    //   getDownloadURL(sparkyRef)
    //     .then((url) => {
    //       const xhr = new XMLHttpRequest();
    //       xhr.responseType = "blob";
    //       xhr.onload = (event) => {
    //         const blob = xhr.response;
    //       };
    //       xhr.open("GET", url);
    //       xhr.send();
    //       // const img = document.querySelector("#myimg");
    //       // img.src = url;
    //       headerTeamImg.src = url;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    let curDataLocal;
    this._displaySpinner();
    // this._srGetStartedDispChoose("sr22", srHide, "right");
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
      sr7.dataset.when = this._getTimeStamp();

      if (docSnap.empty === true) {
        const HTML = `<div id="no-member-message-con">
          <p id="no-member-message-header">Tus miembros aparecerán aqui</p>
          <p id="no-member-message-text">
          Aún no tienes miembros en tu equipo. Empieza con <br />
          <span data-linkbtn="new-member">Agregar nuevo trabajador</span>.
          </p>
          </div>`;
        conMemberDisplay.insertAdjacentHTML("beforeend", HTML);
      } else {
        const HTML = `<div id="new-member-message-con">
        <p id="new-member-message-text">
        Usa el botón  <br /> <span data-linkbtn="new-member">Agregar nuevo trabajador</span>  <br /> para añadir miembros a tu equipo
        </p>
        </div>`;
        conMemberDisplay.insertAdjacentHTML("beforeend", HTML);
      }

      if (this.#curData.level === this.#adminLevel) {
        this._displayTeamImg(this.#curAccountData.teamImg);
        headerTeamName.textContent = this.#curAccountData.teamName;
      } else {
        this._displayTeamImg(this.#curData.teamImg);
        headerTeamName.textContent = this.#curData.teamName;
      }

      let randomMemArr = [];
      let orgMemArr = [];
      docSnap.forEach((doc) => {
        randomMemArr.push(doc.data());
      });

      orgMemArr = randomMemArr.sort((a, b) => {
        return a.lastModified - b.lastModified;
      });
      orgMemArr.forEach((val) => {
        let btnPermision = ``;
        let salary;
        let totalPay;
        let totalTime;

        // TODO: starts granting or denying permision Already designed in figma

        if (val.writePermisionRequest === "pending") {
          btnPermision = `          
          <div class="sr11-rePer-con">
          <p class="sr11-rePer-con-text">
            ${val.name} pide permiso para hacer cambios en sus horas. ¿Que deseas hacer?
          </p>
          <div class="sr11-rePer-btn-con">
            <button
              class="sr11-btn-deny"
              data-where="permision-deny"
              data-memberId="${val.memberId}"
            >
              Negar
            </button>
            <button
              class="sr11-btn-grant"
              data-where="permision-grant"
              data-memberId="${val.memberId}"
            >
              Conceder por 5 min
            </button>
          </div>
        </div>
          `;
        }

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
    
            <button
              class="sr23-btn-vedit"
              data-where="info"
              id="sr7-btn-meminfo"
              class="btn-member-info"
              data-memberId="${val.memberId}"
            >
              Info
            </button>
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
          ${btnPermision}
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

      console.log(orgMemArr);
    });

    // then((val) => {

    // console.log(content[0]);

    this._srGetStartedDispChoose("sr7", srHide, "left");
    this._hideSpinner();
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
    const inpMemberName = document.querySelector("#sr8-inp-name");
    const writePermision = document.querySelector("#sr9-swi-write--hours");
    const memberLevel = document.querySelector("#sr9-swi-assis");
    const selectWeekStart = document.querySelector("#sr9-swi-pay--day");
    let write = writePermision.dataset.on;
    let punchIn = sr9SwiPunchIn.dataset.on;
    let level;

    if (inpPayPerHour.value > 0) {
      // this._srGetStartedDispChoose("sr22", "sr9", "left");
      this._displaySpinner(
        `Estamos añdiendo ${inpMemberName.value} a tu equipo.`
      );

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
          punchInPermision: punchIn,
          salary: inpPayPerHour.value,
          weekStart: selectWeekStart.value,
        }
      );

      console.log("pay", inpPayPerHour.value);
      console.log("write hours", write);
      console.log("assistant", level);

      setTimeout(() => {
        this._displayMembers("sr9");
        this._hideSpinner();
        this._disdSuccessErrorMessage(
          "Éxito. Un nuevo trabajador fue añadido a tu equipo.",
          "ex",
          3800
        );
      }, 1000);
    } else {
      console.error("no pay");
    }
  }
  async _newWeekForCurUser() {
    try {
      const userInput = await this._displayPrompt(
        "confirm",
        "Cancelar",
        "Crear semana",
        "Crear nueva semana",
        "Crear una nueva semana solo debería usarse si por alguna razón nuestro creador automático de nuevas semanas no te proporcionó una nueva semana."
      );
      console.log("User input:", userInput);
      this._newWeek();

      this._sendEmailNormal(
        "thorastrack@gmail.com",
        "thorastrack@gmail.com",
        "THoras Tracker: New Week",
        `A new week was created by ${this.#curData.email}. Team name: ${
          this.#curData.teamName
        }. Team code: ${this.#curData.teamCode}`
      );
      sr17.classList.remove("sr");
      sr17.classList.add("sr-none");
      // Proceed with your function using the userInput if needed
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    }
  }

  _newWeek(curid) {
    if (navigator.onLine) {
      this.#curData = this._getFromLocal("curData");
      this._idGenerator(this.#idLenght, this.#idTakeArrLenght);

      let curDataLocal;
      let weekStartlocal;

      if (this.#curMemberInfo.weekStart) {
        weekStartlocal = this.#curMemberInfo.weekStart;
      } else {
        weekStartlocal = "lunes";
      }

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
              weekStart: weekStartlocal,
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
              memberPayed: "false",
              adminPayed: "false",
              payed: "false",
              days: this._rearrangeWeekDays(
                this.#daysArrForNewWeek,
                weekStartlocal
              ),
            }
          );

          this._updateData(
            `accounts/${curDataLocal.teamCode}/team`,
            `${this.#curMemberInfo.memberId}`,
            {
              curWeekId: this.#curUseId,
            }
          );
          const appInfo = doc(
            db,
            `accounts/${this.#curMemberInfo.teamCode}/team`,
            this.#curMemberInfo.memberId
          );
          updateDoc(appInfo, {
            numberOfWeeks: increment(1),
          });
          // this._readWeeks("sr11");

          const q = query(
            collection(db, `accounts/${curDataLocal.teamCode}/team`),
            where("memberId", "==", this.#curMemberInfo.memberId)
          );
          getDocs(q).then((docSnap) => {
            docSnap.forEach((doc) => {
              const val = doc.data();
              this.#curMemberInfo = val;
              console.log(this.#curMemberInfo);
              this._displayTimeSheet("ng", true);
            });
          });
          this._disdSuccessErrorMessage(
            "Éxito. Una nueva semana ha comenzado.",
            "ex",
            3000
          );
        } else {
          console.log("still not");
        }
      }, 1000);
    } else {
      this._disdSuccessErrorMessage(
        "No pudimos comenzar una nueva semana. Parece que no tienes conexión a internet.",
        "er",
        7000
      );
    }
  }

  _createMemberStep1() {
    if (navigator.onLine) {
      console.log("online this time");

      this.#curData = this._getFromLocal("curData");
      const inpVerPasswordErrMess = document.querySelector(
        "#sr8-inp-confpass-errmess"
      );
      const selectWeekStart = document.querySelector("#sr9-swi-pay--day");

      const inpMemberName = document.querySelector("#sr8-inp-name");
      const inpPassword = document.querySelector("#sr8-inp-crepass");
      const inpVerPassword = document.querySelector("#sr8-inp-confpass");
      const inpPayPerHour = document.querySelector("#sr9-inp-pay--hour");

      let curDataLocal;
      let weekStartlocal;
      if (this.#curData.level === this.#adminLevel) {
        curDataLocal = this.#curAccountData;
      } else {
        curDataLocal = this.#curData;
      }

      if (curDataLocal.weekStart) {
        weekStartlocal = curDataLocal.weekStart;
      } else {
        weekStartlocal = "lunes";
      }
      inpPayPerHour.value = curDataLocal.salary;
      selectWeekStart.value = weekStartlocal;

      if (inpMemberName.value.length > 0 && inpPassword.value.length > 0) {
        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/team`),
          where("name", "==", inpMemberName.value)
        );
        getDocs(q).then((docSnap) => {
          if (docSnap.empty === true) {
            if (
              inpMemberName.value.length > 2 &&
              inpMemberName.value.length < 21
            ) {
              if (inpPassword.value.length > 5) {
                if (inpPassword.value === inpVerPassword.value) {
                  // this._srGetStartedDispChoose("sr22", "sr8", "right");
                  this._displaySpinner(
                    `Estamos prosesando la información de ${inpMemberName.value}. Porfavor espera un momento.`
                  );
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
                          lastModified: "",
                          lastModified: this._getTimeStamp(),
                          memberCreatedTimeStamp: this._getTimeStamp(),
                          writePermision: "true", //false
                          punchInPermision: "true", //false
                          extraHours: curDataLocal.extraHours, //false
                          extraHoursRequiredPer:
                            curDataLocal.extraHoursRequiredPer, //week
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
                          writePermisionRequest: "done",
                          writeTimePermisionEnd: this._getTimeStamp(),
                          writeTimePermisionStart: this._getTimeStamp(),
                          category: "Todos", // ...more., seperate mulitple caytegorry with "/"
                        }
                      );
                      inpVerPasswordErrMess.style.display = "none";

                      // TODO: function to continue creating an account ghoes here it waits till the id is available
                      // this._displayMembers("sr22");

                      inpPayPerHour.addEventListener("focus", () => {
                        inpPayPerHour.value = "";
                      });

                      this._srGetStartedDispChoose("sr9", "sr8", "left");
                      this._hideSpinner();
                    } else {
                      console.log("still not");
                    }
                  }, 1000);
                } else {
                  console.error("no match passwords");
                  inpVerPasswordErrMess.style.display = "block";
                  this._disdSuccessErrorMessage(
                    "Las contraseñas no coinciden.",
                    "er",
                    3500
                  );
                }
              } else {
                this._disdSuccessErrorMessage(
                  "La contraseña no puede tener menos de 6 carácteres.",
                  "er",
                  3500
                );
              }
            } else {
              console.error("name length is not correct");
              this._disdSuccessErrorMessage(
                "El nombre del trabajador no puede tener menos de 3 o mas de 20 caracteres.",
                "er",
                4000
              );
            }
          } else {
            this._disdSuccessErrorMessage(
              `${inpMemberName.value} ya existe en tu equipo. No puedes tener 2 trabajadores con nombres idénticos`,
              "er",
              4000
            );
          }
        });
      } else {
        this._disdSuccessErrorMessage(
          "Ingrese la información necesaria para añdir un trabajador nuevo.",
          "er",
          4000
        );
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
    const selectWeekStart = document.querySelector("#sr6-swi-pay--day");
    const inpTeamPay = document.querySelector("#sr6-inp-pay");
    const inpTeamPayErrMess = document.querySelector("#sr6-inp-pay-errmess");
    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamPay.value.length > 0) {
      this._onSnapshot("accounts", this.#curData.teamCode);
      this._updateData("accounts", curDataLocal.teamCode, {
        salary: inpTeamPay.value,
        weekStart: selectWeekStart.value,
      });
      this._displayMembers("sr6");
      headerTeamImg.src = curDataLocal.teamImg;
      headerTeamName.textContent = curDataLocal.teamName;
    } else {
      this._disdSuccessErrorMessage(
        "Inserte la información necesaria.",
        "er",
        2000
      );
      inpTeamPayErrMess.style.display = "block";
    }
  }

  _eventTeamCodeDisp() {
    console.log("all go");
    const inpTeamName = document.querySelector("#sr5-inp-team-name");
    const inpSuccMess = document.querySelector(
      "#sr5-inp-create-team-name-succmess"
    );
    inpTeamName.addEventListener("keyup", () => {
      if (inpTeamName.value.length > 2 && inpTeamName.value.length < 17) {
        inpSuccMess.style.display = "block";
        console.log("good");
      } else {
        console.log("no good");
        inpSuccMess.style.display = "none";
      }
    });
  }

  _createTeamStep1() {
    this._displaySpinner();
    this.#curData = this._getFromLocal("curData");
    const inpTeamName = document.querySelector("#sr5-inp-team-name");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    let imgUrl;

    const imgUploadFunction = function (e) {
      const storage = getStorage();
      const imageFolderRef = ref(storage, "team_images");
      console.log("change");

      for (let i = 0; i < Object.keys(inpImgSr5.files).length; i++) {
        console.log(inpImgSr5.files[i]);
        console.log(inpImgSr5.files[i]);
        const storageRef = ref(imageFolderRef, inpImgSr5.files[i].name);

        uploadBytes(storageRef, inpImgSr5.files[i]).then((snapshot) => {
          console.log("Uploaded a file!");
        });
        if (i === Object.keys(inpImgSr5.files).length - 1) {
          imgUrl = inpImgSr5.files[i].name;
        }
      }
    };

    // if (inpTeamName.value.length > 2 && inpTeamName.value.length < 16) {
    //   this._srGetStartedDispChoose("sr22", "sr12", "right");
    //   // console.log(Object.keys(inpImgSr12.files).length);
    //   // console.log(inpImgSr12.files[0]);
    //   setTimeout(() => {
    //     if (Object.keys(inpImgSr12.files).length !== 0) {
    //       // imgUrl = this.#teamImgUrl[0];
    //       imgUploadFunction();
    //       console.error("error here");
    //     } else {
    //       console.error("error here");
    //       imgUrl = curDataLocal.teamImg;
    //     }

    //     this._updateData(`accounts`, curDataLocal.teamCode, {
    //       teamName: inpTeamName.value,
    //       teamImg: imgUrl,
    //     });
    //     // this._updateData("accounts", curDataLocal.teamCode, {
    //     //   teamImg: mov,
    //     // });
    //     setTimeout(() => {
    //       this._displayMembers("sr22");
    //     }, 1000);
    //   }, 1000);
    // } else {
    //   console.error("not valid data");
    // }

    if (inpTeamName.value.length > 2 && inpTeamName.value.length < 17) {
      if (Object.keys(inpImgSr5.files).length !== 0) {
        // imgUrl = this.#teamImgUrl[0];
        imgUploadFunction();
        console.error("success here");
      } else {
        console.error("error here");
        imgUrl = curDataLocal.teamImg;
      }

      setTimeout(() => {
        this._updateData("accounts", curDataLocal.teamCode, {
          teamName: inpTeamName.value,
          teamImg: imgUrl,
        });

        console.log("right length", inpTeamName.value.length);
        this._srGetStartedDispChoose("sr6", "sr5", "left");
        this._hideSpinner();
      }, 2000);
    } else {
      this._disdSuccessErrorMessage(
        "El nombre de equipo no puede tener menos de 3 o mas de 16 caráteres.",
        "er",
        3300
      );
      this._hideSpinner();
    }

    // const dispTeamCode = document.querySelector("#sr5-generate-team-code");

    // this._createTeamStep2(inpTeamName.value, this.#curUseId);
  }

  _createAccountStep2() {
    const inpVerificationCode = document.querySelector(
      "#sr3-inp-verification-code"
    );
    if (inpVerificationCode.value === this.#otp) {
      // TODO: activate;
      this._disdSuccessErrorMessage(`Correo confirmado`, "ex", 2000);
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
            lastPayment: "",
            totalPayment: "",
            categories: ["Todos"],
          };
          this._uploadData("accounts", this.#curUseId, acc);
          // TODO: function to continue creating an account ghoes here it waits till the id is available
          this._saveToLocal("curData", acc);
          this._setCookie("teamCode", this.#curUseId, 86400000 * 400);
          this._setCookie("level", "admin", 86400000 * 400);
          this._eventTeamCodeDisp();
          this._srGetStartedDispChoose("sr5", "sr22", "left");
        } else {
        }
      }, 1000);
    } else {
      // TODO: activate;
      this._disdSuccessErrorMessage("Código incorrecto", "er", 2000); // TODO: activate;
    } // TODO: activate;
  }

  _countdownResendOTP() {
    sr4ResendOTP.textContent = `Reenviar código en 120 seg`;
    sr4ResendOTP.style.opacity = "50%";
    sr4ResendOTP.dataset.send = "no send";
    // let sec = 6;
    let sec = 119;
    const timerCountDown = setInterval(function () {
      sr4ResendOTP.textContent = `Reenviar código en ${sec} seg`;
      sr4ResendOTP.style.opacity = "50%";
      sec = sec - 1;
      if (sec === 0) {
        clearInterval(timerCountDown);
        sr4ResendOTP.textContent = `Reenviar código`;
        sr4ResendOTP.style.opacity = "100%";
        sr4ResendOTP.dataset.send = "send";
      }
    }, 1000);
  }

  _createAccountStep1() {
    const aceptTermsConditions = document.querySelector("#sr3-terms-acept");
    const inpEmail = document.querySelector("#sr3-inp-email");
    const inpPassword = document.querySelector("#sr3-inp-create-password");
    const inpPasswordConf = document.querySelector("#sr3-inp-confirm-password");
    const inpPasswordConfErrmess = document.querySelector(
      "#sr3-inp-confpass-errmess"
    );

    if (navigator.onLine) {
      if (
        inpEmail.value != "" &&
        inpPassword.value != "" &&
        inpPasswordConf.value != ""
      ) {
        const q = query(
          collection(db, "accounts"),
          where("email", "==", inpEmail.value)
        );
        getDocs(q).then((docSnap) => {
          if (docSnap.empty === true) {
            if (inpPassword.value.length > 5) {
              if (inpPassword.value === inpPasswordConf.value) {
                if (aceptTermsConditions.checked) {
                  this.#email = inpEmail.value;
                  this.#password = inpPassword.value;
                  this.#otp = this._OTPGenerator(6);
                  this._sendEmail(
                    inpEmail.value,
                    this.#appSupportInfo.email,
                    this.#otp,
                    "Este es su codigo de verificación para THoras",
                    "Hola",
                    this.#appSupportInfo.email,
                    this.#appSupportInfo.whatsApp,
                    this.#appSupportInfo.telegram
                  );
                  this._displaySpinner(
                    `Estamos anviando un código de verificación a tu correo.`
                  );
                  this._srGetStartedDispChoose("sr4", "sr3", "left");
                  this._countdownResendOTP();
                } else {
                  this._disdSuccessErrorMessage(
                    "Tienes que aceptar los condiciones de esta aplicación.",
                    "er",
                    3500
                  );
                }
              } else {
                inpPasswordConfErrmess.style.display = "block";
              }
            } else {
              this._disdSuccessErrorMessage(
                `Tu contraseña tiene que tener por lo menos 6 carácteres`,
                "er",
                2500
              );
            }
          } else {
            this._disdSuccessErrorMessage(
              `Ya hay una cuenta con el correo "${inpEmail.value}". Inicia sesión o intenta usar un correo diferente.`,
              "er",
              8000
            );
          }
        });
      } else {
        this._disdSuccessErrorMessage(
          `La información no es suficiente.`,
          "er",
          2300
        );
      }
    } else {
      this._disdSuccessErrorMessage(
        `Parece que no hay conexión a internet. Revisa tu conexión e intenta de nuevo.`,
        "er",
        3000
      );
    }
  }

  _setSwiChangeMemberInfo(write, level, punchIn) {
    //     sr16SwiPunchIn
    // sr16SwiPunchIn2
    // sr16SwiPunchIn3
    // sr16SwiPunchInText
    if (write === "true") {
      sr16SwiHours.classList.add("switch-on");
      sr16SwiHours.classList.remove("switch-off");
      sr16SwiHours2.classList.add("switch-inner-on");
      sr16SwiHours2.classList.remove("switch-inner-off");
      sr16SwiHours3.classList.add("switch-text-on");
      sr16SwiHours3.classList.remove("switch-text-off");
      sr16SwiHours.dataset.on = "true";
      sr16SwiHoursText.textContent = "permitido";

      sr16SwiPunchIn.style.opacity = "30%";
      sr16SwiPunchIn.dataset.active = "no";

      //  auto punchin
      sr16SwiPunchIn.classList.add("switch-on");
      sr16SwiPunchIn.classList.remove("switch-off");
      sr16SwiPunchIn2.classList.add("switch-inner-on");
      sr16SwiPunchIn2.classList.remove("switch-inner-off");
      sr16SwiPunchIn3.classList.add("switch-text-on");
      sr16SwiPunchIn3.classList.remove("switch-text-off");
      sr16SwiPunchIn.dataset.on = "true";
      sr16SwiPunchInText.textContent = "permitido";
    }
    if (write === "false") {
      sr16SwiHours.classList.remove("switch-on");
      sr16SwiHours.classList.add("switch-off");
      sr16SwiHours2.classList.remove("switch-inner-on");
      sr16SwiHours2.classList.add("switch-inner-off");
      sr16SwiHours3.classList.remove("switch-text-on");
      sr16SwiHours3.classList.add("switch-text-off");
      sr16SwiHours.dataset.on = "false";
      sr16SwiHoursText.textContent = "negado";

      sr16SwiPunchIn.style.opacity = "100%";
      sr16SwiPunchIn.dataset.active = "act";
    }

    if (punchIn === "true") {
      sr16SwiPunchIn.classList.add("switch-on");
      sr16SwiPunchIn.classList.remove("switch-off");
      sr16SwiPunchIn2.classList.add("switch-inner-on");
      sr16SwiPunchIn2.classList.remove("switch-inner-off");
      sr16SwiPunchIn3.classList.add("switch-text-on");
      sr16SwiPunchIn3.classList.remove("switch-text-off");
      sr16SwiPunchIn.dataset.on = "true";
      sr16SwiPunchInText.textContent = "permitido";
    }
    if (punchIn === "false") {
      sr16SwiPunchIn.classList.remove("switch-on");
      sr16SwiPunchIn.classList.add("switch-off");
      sr16SwiPunchIn2.classList.remove("switch-inner-on");
      sr16SwiPunchIn2.classList.add("switch-inner-off");
      sr16SwiPunchIn3.classList.remove("switch-text-on");
      sr16SwiPunchIn3.classList.add("switch-text-off");
      sr16SwiPunchIn.dataset.on = "false";
      sr16SwiPunchInText.textContent = "negado";
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
      sr16InpMemberName.value === this.#curMemberInfo.name &&
      sr16InpMemberPassword.value === this.#curMemberInfo.password
    ) {
      console.log("all right");
      this._srGetStartedDispChoose("sr7", "sr16", "right");
    } else {
      if (sr16InpMemberName.value === this.#curMemberInfo.name) {
        this._displaySpinner();
        setTimeout(() => {
          this._updateData(
            `accounts/${curDataLocal.teamCode}/team`,
            this.#curMemberInfo.memberId,
            {
              password: sr16InpMemberPassword.value,
              lastModified: this._getTimeStamp(),
            }
          );
          // this._displayMembers("sr16");
          this._srGetStartedDispChoose("sr7", "sr16", "right");
          this._hideSpinner();
        }, 1000);
      } else {
        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/team`),
          where("name", "==", sr16InpMemberName.value)
        );
        getDocs(q).then((docSnap) => {
          if (docSnap.empty === true) {
            if (
              sr16InpMemberName.value.length > 2 &&
              sr16InpMemberPassword.value.length > 5
            ) {
              this._displaySpinner();
              setTimeout(() => {
                this._updateData(
                  `accounts/${curDataLocal.teamCode}/team`,
                  this.#curMemberInfo.memberId,
                  {
                    name: sr16InpMemberName.value,
                    password: sr16InpMemberPassword.value,
                    lastModified: this._getTimeStamp(),
                  }
                );
                // this._displayMembers("sr16");
                this._srGetStartedDispChoose("sr7", "sr16", "right");
                this._hideSpinner();
              }, 1000);
            } else {
              console.error("not valid data");
            }
          } else {
            this._disdSuccessErrorMessage(
              `${sr16InpMemberName.value} ya existe en tu equipo. No puedes tener 2 trabajadores con nombres idénticos`,
              "er",
              3800
            );
          }
        });
      }
    }
  }
  async _sr16SettingsSaveChanges() {
    const selectWeekStart = document.querySelector("#sr16-swi-pay--day");
    let curDataLocal;
    let weekDaysCheck;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    let level;
    if (sr16SwiAssis.dataset.on === "true") {
      level = "asistente";
    } else {
      level = "miembro";
    }

    if (this.#curMemberInfo.weekStart) {
      if (this.#curMemberInfo.weekStart === selectWeekStart.value) {
        weekDaysCheck = true;
      } else {
        weekDaysCheck = false;
      }
    } else {
      weekDaysCheck = false;
    }

    if (
      this.#curMemberInfo.salary === sr16InpMemberPay.value &&
      this.#curMemberInfo.writePermision === sr16SwiHours.dataset.on &&
      this.#curMemberInfo.punchInPermision === sr16SwiPunchIn.dataset.on &&
      this.#curMemberInfo.level === level &&
      weekDaysCheck === true
    ) {
      // this._displayMembers("sr16");
      this._srGetStartedDispChoose("sr7", "sr16", "right");
    } else {
      if (sr16InpMemberPay.value > 0) {
        this._displaySpinner();

        if (this.#curMemberInfo.level === "asistente" && level === "miembro") {
          this._displayAlert(
            `Acerca de ${this.#curMemberInfo.name}`,
            `Para quitarle el derecho de admin y poner a ${
              this.#curMemberInfo.name
            } como un miembro otra vez, ${
              this.#curMemberInfo.name
            } tendrá que cerrar sesión y vicularse otra vez a tu equipo como un miembro.`
          );
        }

        if (this.#curMemberInfo.level === "miembro" && level === "asistente") {
          this._displayAlert(
            `Acerca de ${this.#curMemberInfo.name}`,
            `Ahora ${this.#curMemberInfo.name} es un asistente. ${
              this.#curMemberInfo.name
            } automáticamente iniciará sesión como un admin y tendrá todos los derechos de un admin. Incluso padrá cambiar detalles de tu cuenta y los ajustes de tu equipo.`
          );
        }
        if (weekDaysCheck === false) {
          this._displayAlert(
            `Acerca de ${this.#curMemberInfo.name}`,
            `Las semanas de ${this.#curMemberInfo.name} comezarán el ${
              selectWeekStart.value
            }. Esto no cambiará la semana presente. Solo será aplicado al crear nuavas semanas. Para cambiar la semana actual, debes entrar en la tabla de horas de ${
              this.#curMemberInfo.name
            }, en la barra de heramientas veras la opcion de convertir la semana actual.`
          );
        }
        setTimeout(() => {
          this._updateData(
            `accounts/${curDataLocal.teamCode}/team`,
            this.#curMemberInfo.memberId,
            {
              salary: sr16InpMemberPay.value,
              writePermision: sr16SwiHours.dataset.on,
              punchInPermision: sr16SwiPunchIn.dataset.on,
              level: level,
              lastModified: this._getTimeStamp(),
              weekStart: selectWeekStart.value,
            }
          );
          // this._displayMembers("sr16");
          this._srGetStartedDispChoose("sr7", "sr16", "right");
          this._hideSpinner();
        }, 1000);
      } else {
        console.error("not valid data");
      }
    }
  }

  async _logout() {
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }
    try {
      const logoutPassword = await this._displayPrompt(
        "input",
        "Cancelar",
        "Cerrar session",
        "Cerrar session",
        "Para cerrar sesión, necesitas ingresar tu contraseña aquí"
      );
      if (logoutPassword === curDataLocal.accountPassword) {
        console.log("good");
        this._removeFromLocal("curData");
        this._deleteCookie("teamCode");
        this._deleteCookie("level");
        this._init("sr20");
        // this._disdSuccessErrorMessage(`Cerraste sesión`, "ex", 5000);
      } else {
        this._disdSuccessErrorMessage(`Contraseña incorecta`, "er", 3000);
      }
      // Proceed with your function using the userInput if needed
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    }

    // if (logoutPassword === curDataLocal.accountPassword) {
    //   console.log("good");
    //   this._removeFromLocal("curData");
    //   this._deleteCookie("teamCode");
    //   this._deleteCookie("level");
    //   this._init("sr20");
    //   // this._disdSuccessErrorMessage(`Cerraste sesión`, "ex", 5000);
    // } else {
    //   this._disdSuccessErrorMessage(`Contraseña incorecta`, "er", 3000);
    // }
  }

  async _deleteMember() {
    const name = this.#curMemberInfo.name;
    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    try {
      const password = await this._displayPrompt(
        "input",
        "Cancelar",
        "Eliminar Trabajador",
        "Eliminar Trabajador",
        `Este paso no se puede deshacer. Perderás todos los datos de ${
          this.#curMemberInfo.name
        }.`
      );

      // Proceed with your function using the userInput if needed

      if (this.#curMemberInfo.password === password) {
        deleteDoc(
          doc(
            db,
            `accounts/${curDataLocal.teamCode}/team`,
            this.#curMemberInfo.memberId
          )
        );
        this._displayMembers("sr16");
        this._disdSuccessErrorMessage(
          `${name} eliminado fue de tu equipo`,
          "ex",
          3000
        );
      } else {
        this._disdSuccessErrorMessage(`Contraseña incorecta`, "er", 3000);
      }
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    }
  }
  async _leaveTeam() {
    const name = this.#curMemberInfo.name;

    try {
      const password = await this._displayPrompt(
        "input",
        "Cancelar",
        "Dejar equipo",
        "Dejar este equipo",
        "Para dejar este equipo, ingrese su contraseña."
      );
      // Proceed with your function using the userInput if needed
      if (this.#curMemberInfo.password === password) {
        this._deleteCookie("teamCode");
        this._deleteCookie("memberId");
        this._deleteCookie("level");
        this._removeFromLocal("curData");
        this._init("sr17");
      } else {
        this._disdSuccessErrorMessage(`Contraseña incorecta`, "er", 3000);
      }
    } catch (error) {
      if (error === "cancel") {
        console.log("User cancelled");
        // Abort your function
      } else {
        console.error("Error:", error);
      }
    }
  }

  _dailyHoursMenu() {
    const headerNameText = document.querySelector("#sr17-header");
    const memberName = document.querySelector("#sr17-disp-member-name");
    const memberPassword = document.querySelector("#sr17-disp-member-pass");
    const memberPay = document.querySelector("#sr17-disp-pay--hour");
    const memberWeekStart = document.querySelector("#sr17-week-start");

    headerNameText.textContent = this.#curMemberInfo.name;
    memberName.textContent = this.#curMemberInfo.name;
    memberPassword.textContent = this.#curMemberInfo.password;
    memberPay.textContent = this.#curMemberInfo.salary;
    memberWeekStart.textContent = this.#curMemberInfo.weekStart;
    if (this.#curData.level === "miembro") {
      btnsr17LeaveTeam.style.display = "flex";
      btnsr17NewWeek.style.display = "none";
    } else {
      btnsr17LeaveTeam.style.display = "none";
      btnsr17NewWeek.style.display = "flex";
    }

    this._srGetStartedDispChoose("sr17", "sr11", "left");
  }

  _fromAdminToNorm() {
    sr20AppAdmin.dataset.mode = "norm";
    sr20AppAdminP.dataset.mode = "norm";
    const adminModeTbBar = document.querySelector("#app-name");
    adminModeTbBar.style.color = "#fff";
    adminModeTbBar.textContent = "T Horas";
    this.#curAccountData = this.#curData;
    this._displayMembers("sr20");
    sr23AccountSearch.value = "";
    this._disdSuccessErrorMessage("Admin mode stoped", "ex", 2000);
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
    const storage = getStorage();
    const imageFolderRef = ref(storage, "team_images");
    const inpTeamName = document.querySelector(
      "#sr12-2-contbx-2-inp-team-name"
    );

    let imgUrl;

    const imgUploadFunction = function (e) {
      console.log("change");

      for (let i = 0; i < Object.keys(inpImgSr12.files).length; i++) {
        console.log(inpImgSr12.files[i]);
        console.log(inpImgSr12.files[i]);
        const storageRef = ref(imageFolderRef, inpImgSr12.files[i].name);

        uploadBytes(storageRef, inpImgSr12.files[i]).then((snapshot) => {
          console.log("Uploaded a file!");
        });
        if (i === Object.keys(inpImgSr12.files).length - 1) {
          imgUrl = inpImgSr12.files[i].name;
        }
      }
    };

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (inpTeamName.value.length > 2 && inpTeamName.value.length < 16) {
      this._srGetStartedDispChoose("sr22", "sr12", "right");
      // console.log(Object.keys(inpImgSr12.files).length);
      // console.log(inpImgSr12.files[0]);
      setTimeout(() => {
        if (Object.keys(inpImgSr12.files).length !== 0) {
          // imgUrl = this.#teamImgUrl[0];
          imgUploadFunction();
          console.error("error here");
        } else {
          console.error("error here");
          imgUrl = curDataLocal.teamImg;
        }

        this._updateData(`accounts`, curDataLocal.teamCode, {
          teamName: inpTeamName.value,
          teamImg: imgUrl,
        });
        // this._updateData("accounts", curDataLocal.teamCode, {
        //   teamImg: mov,
        // });
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
    const selectWeekStart = document.querySelector("#sr12-swi-pay--day");

    let curDataLocal;
    let weekDaysCheck;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    if (curDataLocal.weekStart) {
      if (curDataLocal.weekStart === selectWeekStart.value) {
        weekDaysCheck = true;
      } else {
        weekDaysCheck = false;
      }
    } else {
      weekDaysCheck = false;
    }

    if (inpTeamPay.value > 0) {
      this._srGetStartedDispChoose("sr22", "sr12", "right");

      // var value = e.value;
      // var text = e.options[e.selectedIndex].text;
      if (weekDaysCheck === false) {
        this._displayAlert(
          `Cambio de comienzo de semana`,
          `Este cambio solo se aplica al crear nuevos trabajadores. Para los trabajadores que ya existen en tu equipo, tendrás que cambiarlo individualmente en "Info" de cada trabajador.`
        );
      }

      setTimeout(() => {
        this._updateData(`accounts`, curDataLocal.teamCode, {
          salary: inpTeamPay.value,
          weekStart: selectWeekStart.value,
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
    const selectWeekStart = document.querySelector("#sr12-swi-pay--day");

    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    SVGImgConSr12.style.display = "none";
    ImgConSr12.style.height = "120px";
    ImgConSr12.style.width = "120px";
    console.log("img ready");

    ImgConSr12.innerHTML = `<img class="sr12-display-team-img" src="${teamImage.src}" alt="Selected Image">`;

    inpTeamName.value = curDataLocal.teamName;
    dispTeamCode.textContent = curDataLocal.teamCode;
    inpTeamPay.value = curDataLocal.salary;

    if (curDataLocal.weekStart) {
      selectWeekStart.value = curDataLocal.weekStart;
    } else {
      selectWeekStart.value = "lunes";
    }

    this._srGetStartedDispChoose("sr12", "sr20", "left");
  }

  _accountSaveInfoChanges() {
    const inpPassword = document.querySelector("#sr19-inp-password");
    const inpEmail = document.querySelector("#sr19-inp-email");
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
    if (inpEmail.value !== curDataLocal.email) {
      this._disdSuccessErrorMessage(
        "Aún no puedes cambiar tu correo. Estamos trabajando en esta función",
        "er",
        4500
      );
    }
  }

  _openAccountInfo() {
    const inpEmail = document.querySelector("#sr19-inp-email");
    const inpPassword = document.querySelector("#sr19-inp-password");
    const email = document.querySelector("#sr19-info-email span");
    const teamName = document.querySelector("#sr19-info-team-name span");
    const adminLevel = document.querySelector("#sr19-info-level span");
    const proStatus = document.querySelector("#sr19-info-pro span");
    const proStart = document.querySelector("#sr19-info-pro-start span");
    const proEnd = document.querySelector("#sr19-info-pro-end span");
    const accountCreated = document.querySelector(
      "#sr19-info-account-created span"
    );
    const lastPayment = document.querySelector("#sr19-info-last-payment span");
    const totalPayment = document.querySelector("#sr19-info-total-paid span");
    this.#curData = this._getFromLocal("curData");

    let curDataLocal;
    if (this.#curData.level === this.#adminLevel) {
      curDataLocal = this.#curAccountData;
    } else {
      curDataLocal = this.#curData;
    }

    const dateAccountCreated = new Date(curDataLocal.accountMadeTimeStamp);
    const dateProStart = new Date(curDataLocal.proStartTimeStamp);
    let dateFianlProEnd;

    if (curDataLocal.proTime === "ever") {
      dateFianlProEnd = "nunca";
    } else {
      const dateProEnd = new Date(
        curDataLocal.proStartTimeStamp + curDataLocal.proTime
      );
      dateFianlProEnd = dateProEnd.toLocaleDateString();
    }

    email.textContent = curDataLocal.email;
    teamName.textContent = curDataLocal.teamName;
    adminLevel.textContent = curDataLocal.level;
    proStatus.textContent = curDataLocal.pro;
    proStart.textContent = dateProStart.toLocaleDateString();
    proEnd.textContent = dateFianlProEnd;
    accountCreated.textContent = dateAccountCreated.toLocaleDateString();
    lastPayment.textContent = curDataLocal.lastPayment;
    totalPayment.textContent = curDataLocal.totalPayment;

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
      console.log(this.#curData);
      if (this.#curData.pro === "false") {
        this._getProScreen();
      }
      if (this.#curData.pro === "pro") {
        addMemberAproved();
      }
      if (this.#curData.pro === "trial") {
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
    const whatsApp = document.querySelector("#sr25-cont-con-5-opt-1 span");
    const telegram = document.querySelector("#sr25-cont-con-5-opt-2 span");
    const email = document.querySelector("#sr25-cont-con-5-opt-3");

    whatsApp.textContent = this.#appSupportInfo.whatsApp;
    telegram.textContent = this.#appSupportInfo.telegram;
    email.textContent = ` ${this.#appSupportInfo.email}`;
    email.href = `mailto:${this.#appSupportInfo.email}`;
    console.log(this.#appSupportInfo.email);
    this._srGetStartedDispChoose("sr25", "sr24", "left");
  }

  _displayTermsCondition() {
    sr28.dataset.fromWhere = "sr3";
    this._srGetStartedDispChoose("sr28", "sr3", "none");
    const whatsApp = document.querySelector("#sr28-opt-contact-whats span");
    const telegram = document.querySelector("#sr28-opt-contact-telegram span");
    const email = document.querySelector("#sr28-opt-contact-email");

    whatsApp.textContent = this.#appSupportInfo.whatsApp;
    telegram.textContent = this.#appSupportInfo.telegram;
    email.textContent = ` ${this.#appSupportInfo.email}`;
    email.href = `mailto:${this.#appSupportInfo.email}`;
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
      pro: "trial",
      trialDone: true,
      proStartTimeStamp: this._getTimeStamp(),
      proTime: 30 * this.#oneDayInMillSec,
    });
    sr24TryAppCon.style.display = "none";
    this._displayMembers("sr24");
    this._disdSuccessErrorMessage(
      "Exito. Iniciaste el tiempo de brueba gratis",
      "ex",
      5000
    );
    // this._init();
  }

  _adminSetPlan() {
    if (navigator.onLine) {
      console.log("online this time");

      const inpNumberOf = document.querySelector("#sr26-inp-number-of");
      const choTimeVar = document.querySelector("#sr26-select-time-var");
      const inpPrice = document.querySelector("#sr26-inp-price");
      if (
        choTimeVar.value === "ever" &&
        inpPrice.value > -1 &&
        inpPrice.value.length > 0
      ) {
        this._updateData("accounts", this.#curAccountData.teamCode, {
          pro: "pro",
          proStartTimeStamp: this._getTimeStamp(),
          proTime: "ever",
          lastPayment: inpPrice.value,
          totalPayment:
            Number(this.#curAccountData.totalPayment) + Number(inpPrice.value),
        });
        this._disdSuccessErrorMessage(
          `Plan updated successfully for ${this.#curAccountData.email}`,
          "ex",
          3500
        );
      } else if (
        choTimeVar.value === "days" &&
        inpPrice.value > -1 &&
        inpPrice.value.length > 0 &&
        inpNumberOf.value > 0
      ) {
        this._updateData("accounts", this.#curAccountData.teamCode, {
          pro: "pro",
          proStartTimeStamp: this._getTimeStamp(),
          proTime: inpNumberOf.value * this.#oneDayInMillSec,
          lastPayment: inpPrice.value,
          totalPayment:
            Number(this.#curAccountData.totalPayment) + Number(inpPrice.value),
        });
        this._disdSuccessErrorMessage(
          `Plan updated successfully for ${this.#curAccountData.email}`,
          "ex",
          3500
        );
      } else if (
        choTimeVar.value === "months" &&
        inpPrice.value > -1 &&
        inpPrice.value.length > 0 &&
        inpNumberOf.value > 0
      ) {
        this._updateData("accounts", this.#curAccountData.teamCode, {
          pro: "pro",
          proStartTimeStamp: this._getTimeStamp(),
          proTime: inpNumberOf.value * (this.#oneDayInMillSec * 30),
          lastPayment: inpPrice.value,
          totalPayment:
            Number(this.#curAccountData.totalPayment) + Number(inpPrice.value),
        });
        this._disdSuccessErrorMessage(
          `Plan updated successfully for ${this.#curAccountData.email}`,
          "ex",
          3500
        );
      } else if (
        choTimeVar.value === "years" &&
        inpPrice.value > -1 &&
        inpPrice.value.length > 0 &&
        inpNumberOf.value > 0
      ) {
        this._updateData("accounts", this.#curAccountData.teamCode, {
          pro: "pro",
          proStartTimeStamp: this._getTimeStamp(),
          proTime: inpNumberOf.value * (this.#oneDayInMillSec * 365),
          lastPayment: inpPrice.value,
          totalPayment:
            Number(this.#curAccountData.totalPayment) + Number(inpPrice.value),
        });
        this._disdSuccessErrorMessage(
          `Plan updated successfully for ${this.#curAccountData.email}`,
          "ex",
          3500
        );
      } else {
        this._disdSuccessErrorMessage(
          "Some fields are not filled out correctly",
          "er",
          2500
        );
      }
    } else {
      this._disdSuccessErrorMessage(
        "You need to be online to make these changes",
        "er",
        2500
      );
    }
  }
  _adminSetAdminLevel() {
    if (navigator.onLine) {
      const choAdminLevel = document.querySelector("#sr26-select-Admin-level");

      if (choAdminLevel.value !== this.#curAccountData.level) {
        this._updateData("accounts", this.#curAccountData.teamCode, {
          level: choAdminLevel.value,
        });
        this.#curAccountData.level = choAdminLevel.value;
        this._disdSuccessErrorMessage(
          `You made ${this.#curAccountData.email} a/an '${
            choAdminLevel.value
          }' successfully`,
          "ex",
          3500
        );
      } else {
        this._disdSuccessErrorMessage(
          `${this.#curAccountData.email} is already a/an '${
            choAdminLevel.value
          }'`,
          "ex",
          3000
        );
      }
    } else {
      this._disdSuccessErrorMessage(
        "You need to be online to make these changes",
        "er",
        2500
      );
    }
  }

  _askWritePermision() {
    console.log("Can I write my hours down?");

    this._updateData(
      `accounts/${this.#curData.teamCode}/team`,
      this.#curData.memberId,
      {
        writePermisionRequest: "pending",
      }
    );
    this._srGetStartedDispChoose("sr11", "sr27", "right");

    this._disdSuccessErrorMessage(
      "Solisitaste permiso para hacer cambios en tus horas",
      "ex",
      3300
    );
  }

  _writePermisionPending() {
    // TODO: and also check duplicate member names in member edit
    sr27PendingPermisionCon.style.display = "flex";
    sr27RequestPermisionCon.style.display = "none";
    this._srGetStartedDispChoose("sr27", "sr11", "none");
    console.log("pending");
  }

  _resendOTP() {
    if (sr4ResendOTP.dataset.send === "send") {
      this._sendEmail(
        this.#email,
        this.#appSupportInfo.email,
        this.#otp,
        "Este es su codigo de verificación para THoras",
        "Hola",
        this.#appSupportInfo.email,
        this.#appSupportInfo.whatsApp,
        this.#appSupportInfo.telegram
      );

      this._countdownResendOTP();
    }
  }
  //Start Up End
  _hideTermsCond(fromWhere) {
    const srDisp = document.querySelector(`#${fromWhere}`);
    sr28.classList.remove("sr");
    sr28.classList.add("sr-none");

    srDisp.classList.add("sr");
    srDisp.classList.remove("sr-none");
  }
  _imgDispHide(fromWhere) {
    console.log(fromWhere);
    const srDisp = document.querySelector(`#${fromWhere}`);
    console.log(srDisp);
    sr29.classList.remove("sr");
    sr29.classList.add("sr-none");

    srDisp.classList.add("sr");
    srDisp.classList.remove("sr-none");

    // const style = window.getComputedStyle(srhide);
    // const matrix = new WebKitCSSMatrix(style.transform);
    // const nowLocated = matrix.e;
    // const perhide = nowLocated + 390;
    // srhide.style.transform = `translateX(${perhide}px)`;
  }
  _qrImgDispHide(fromWhere) {
    console.log(fromWhere);
    const srDisp = document.querySelector(`#${fromWhere}`);
    console.log(srDisp);
    sr32.classList.remove("sr");
    sr32.classList.add("sr-none");

    srDisp.classList.add("sr");
    srDisp.classList.remove("sr-none");

    // const style = window.getComputedStyle(srhide);
    // const matrix = new WebKitCSSMatrix(style.transform);
    // const nowLocated = matrix.e;
    // const perhide = nowLocated + 390;
    // srhide.style.transform = `translateX(${perhide}px)`;
  }
  _qrDispHide(fromWhere) {
    console.log(fromWhere);
    const srDisp = document.querySelector(`#${fromWhere}`);
    console.log(srDisp);
    sr33.classList.remove("sr");
    sr33.classList.add("sr-none");

    srDisp.classList.add("sr");
    srDisp.classList.remove("sr-none");

    // const style = window.getComputedStyle(srhide);
    // const matrix = new WebKitCSSMatrix(style.transform);
    // const nowLocated = matrix.e;
    // const perhide = nowLocated + 390;
    // srhide.style.transform = `translateX(${perhide}px)`;
  }

  _imgDispDisp(img, width, border, background, fromWhere) {
    const newStuffHereSrFromWhere = headerTeamImg.dataset.fromWhere;
    if (fromWhere) {
      sr29.dataset.fromWhere = fromWhere;
    } else {
      sr29.dataset.fromWhere = newStuffHereSrFromWhere;
    }
    console.log(headerTeamImg.dataset.fromWhere);

    sr29Image.src = img;
    if (width !== "none") {
      sr29Image.style.width = `${width}px`;
    }
    if (border !== "none") {
      sr29Image.style.border = `1px solid #0058ff`;
    }
    if (background !== "none") {
      sr29ImageCon.style.background = background;
    }
    this._srGetStartedDispChoose("sr29", newStuffHereSrFromWhere, "none");
  }

  // TODO: RATING
  // RATING start here
  // _closeRatingScreen() {
  //   const style = window.getComputedStyle(sr30);
  //   const matrix = new WebKitCSSMatrix(style.transform);
  //   const nowLocated = matrix.e;
  //   sr30.style.transform = `translateX(${nowLocated + 390}px)`;
  // }
  _rateLater() {
    console.log("Rate later");
    if (
      this.#curData.level === "asistente" ||
      this.#curData.level === "miembro"
    ) {
      this._updateData(
        `accounts/${this.#curData.teamCode}/team`,
        this.#curData.memberId,
        {
          hasRated: "later",
          lastRated: this._getTimeStamp(),
        }
      );
    } else {
      this._updateData(`accounts`, this.#curData.teamCode, {
        hasRated: "later",
        lastRated: this._getTimeStamp(),
      });
    }
    // this._closeRatingScreen();
    this._hideRatingScreen();
  }

  _rateNow() {
    if (!navigator.onLine) {
      this._disdSuccessErrorMessage(
        "Parece que no hay conección a internet. Vuelve a intentarlo mas tarde.",
        "er",
        4000
      );
      // this._closeRatingScreen();
      this._hideRatingScreen();
    } else {
      let id;
      let level;
      let name;
      let text;
      if (this.#appRating !== "none" && this.#appRating !== undefined) {
        if (sr30UserInputText.value === "") {
          text = "Sin texto";
        } else {
          text = sr30UserInputText.value;
        }
        if (
          this.#curData.level === "asistente" ||
          this.#curData.level === "miembro"
        ) {
          id = this.#curData.memberId;
          level = this.#curData.level;
          name = this.#curData.name;
          this._updateData(
            `accounts/${this.#curData.teamCode}/team`,
            this.#curData.memberId,
            {
              hasRated: "true",
              lastRated: this._getTimeStamp(),
              ratedAt: this.#appRating,
              ratedText: text,
            }
          );
        } else {
          id = this.#curData.teamCode;
          level = this.#curData.level;
          name = this.#curData.email;
          this._updateData(`accounts`, this.#curData.teamCode, {
            hasRated: "true",
            lastRated: this._getTimeStamp(),
            ratedAt: this.#appRating,
            ratedText: text,
          });
        }
        const rating = {
          teamCode: this.#curData.teamCode,
          id: id,
          level: level,
          name: name,
          timeStampRated: this._getTimeStamp(),
          ratedAt: this.#appRating,
          ratedText: text,
        };

        console.log(
          this.#curData.teamCode,
          id,
          level,
          name,
          this._getTimeStamp(),
          this.#appRating,
          text
        );
        this._addData("appRatings", rating);
        // this._closeRatingScreen();
        this._hideRatingScreen();
      }
    }
  }

  _checkForRating() {
    let timeCreated;
    setTimeout(() => {
      if (!navigator.onLine) return;
      if (
        this.#curData.level === this.#adminLevel ||
        this.#curData.level === "admin"
      ) {
        timeCreated = this.#curData.accountMadeTimeStamp;
      }
      if (
        this.#curData.level === "asistente" ||
        this.#curData.level === "miembro"
      ) {
        timeCreated = this.#curData.memberCreatedTimeStamp;
      }

      if (this.#curData.hasRated) {
        if (this.#curData.hasRated === "true") {
          // This is to re rate app
          // if (this.#curData.lastRated - this._getTimeStamp() > 86400000) {
          //   this._srGetStartedDispChoose("sr30", "sr1", "none");
          // }
        }
        if (this.#curData.hasRated === "later") {
          const q = query(
            collection(db, "appSettings"),
            where("settings", "==", "general")
          );
          getDocs(q).then((docSnap) => {
            docSnap.forEach((doc) => {
              const val = doc.data();
              if (
                this._getTimeStamp() - this.#curData.lastRated >
                val.requestRatingLaterIn
              ) {
                // this._srGetStartedDispChoose("sr30", "sr1", "none");
                this._displayRatingScreen();
              }
            });
          });
        }
      } else {
        const q = query(
          collection(db, "appSettings"),
          where("settings", "==", "general")
        );
        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            const val = doc.data();
            if (this._getTimeStamp() - timeCreated > val.requestRatingIn) {
              // this._srGetStartedDispChoose("sr30", "sr1", "none");
              this._displayRatingScreen();
            }
          });
        });
      }
    }, 5000);
  }
  _resetRatingStars() {
    sr30DescriptionTextArea.textContent = "";
    let i = 0;
    while (i < 5) {
      const star = document.querySelector(`#star${i + 1}`);
      stars[i].className = "star";
      star.dataset.active = "off";
      i++;
    }
    output.innerText = "Calificación: " + 0 + "/5";
  }
  _setRatingOnTap(n) {
    let cls;
    this._resetRatingStars();
    for (let i = 0; i < n; i++) {
      for (let i = 0; i < n; i++) {
        const star = document.querySelector(`#star${n}`);
        console.log(star.dataset.active);
        star.dataset.active = "act";
      }
      if (n == 1) {
        cls = "one";
        sr30DescriptionTextArea.textContent = `Describe abajo lo que no te gusta y ayudanos a mejorar`;
        sr30DescriptionTextArea.style.backgroundColor = `#ff0000`;
        // sr30StarsCon.style.backgroundColor = "#ffcbcb";
        sr30DescriptionTextArea.style.color = `#fff`;
      } else if (n == 2) {
        cls = "two";
        sr30DescriptionTextArea.textContent = `Describe abajo lo que no te gusta y ayudanos a mejorar`;
        sr30DescriptionTextArea.style.backgroundColor = `#ff6b00`;
        // sr30StarsCon.style.backgroundColor = "#ffcbcb";
        sr30DescriptionTextArea.style.color = `#fff`;
      } else if (n == 3) {
        cls = "three";
        sr30DescriptionTextArea.textContent = ``;
        // sr30DescriptionTextArea.textContent = `¿Como podemos mejorar?`;
        sr30DescriptionTextArea.style.backgroundColor = `#ffd600`;
        sr30DescriptionTextArea.style.color = `#ff6b00`;
        // sr30StarsCon.style.backgroundColor = "#d2f4cf";
      } else if (n == 4) {
        cls = "four";
        sr30DescriptionTextArea.textContent = ``;
        // sr30DescriptionTextArea.textContent = `¿Como podemos mejorar?`;
        sr30DescriptionTextArea.style.backgroundColor = `#ffe500`;
        sr30DescriptionTextArea.style.color = `#ff6b00`;
        // sr30StarsCon.style.backgroundColor = "#ffdcc2";
      } else if (n == 5) {
        sr30DescriptionTextArea.textContent = `Gracias por tu calificación.`;
        sr30DescriptionTextArea.style.backgroundColor = `#0eaa00`;
        // sr30DescriptionTextArea.style.backgroundColor = `#096d00`;
        sr30DescriptionTextArea.style.color = `#fff`;
        // sr30StarsCon.style.backgroundColor = "#d2f4cf";
        cls = "five";
      }
      stars[i].className = "star " + cls;
    }
    output.innerText = "Calificación: " + n + "/5";
  }

  _getRating(starRating) {
    let rating;
    const star = document.querySelector(`#star${starRating}`);
    if (star.dataset.active === "act") {
      rating = starRating;
      this.#appRating = starRating;
    } else {
      rating = "none";
      this.#appRating = "none";
    }
    console.log(rating);
  }

  // RATING ends here

  // TODO: QR START

  _qrGenerator(teamCode, name, level, password) {
    if (navigator.onLine) {
      this._deleteAllChildren("sr32-qr-img-con");
      this._deleteAllChildren("sr32-qr-con-2");
      const teamInfo = [level, name, teamCode, password];

      // const qrCodeGenerator = (text) => {
      const sr32QrHeaderName = (document.querySelector(
        "#sr32-qr-header-name span"
      ).textContent = name);
      // sr32qrForDisplay.img.remove();
      var qrcode = new QRCode("sr32-qr-img-con", {
        text: teamInfo.join("_j_o_i_n-t_e_a_m_"),
        // text: text,

        width: 300,
        height: 300,
        colorDark: "#0085FF",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });

      const savebtn = (saveURL) => {
        const link = document.createElement("a");
        // sr32-qr-dowload-img
        link.href = saveURL;
        link.download = `QR para ${name}`;
        link.classList = "sr32-qr-dowload-img";
        link.innerHTML = `Toca aquí para descargar el QR como una foto. Luego lo podrás
      compartir con ${name}`;
        document.querySelector("#sr32-qr-con-2").appendChild(link);
      };
      setTimeout(() => {
        const qrCon = document.querySelector("#sr32-qr-img-con");
        const urlOfQr = qrCon.querySelector("img").src;
        savebtn(urlOfQr);
      }, 100);
      // };
      sr32.dataset.fromWhere = "sr16";
      this._srGetStartedDispChoose("sr32", "sr16", "left");
    } else {
      this._disdSuccessErrorMessage(
        "Lo sentimos, pero tienes que tener una conexión a internet. Verifique tu conexión y vuelve a intentarlo.",
        "er",
        7000
      );
    }
  }
  _qrReader() {
    if (navigator.onLine) {
      const newQrReader = new Html5QrcodeScanner("reader", {
        qrbox: { width: 250, height: 250 },
        fps: 20,
      });
      this._srGetStartedDispChoose("sr33", "sr13", "left");

      const success = (result) => {
        console.log(result);
        const [level, name, teamCode, password] =
          result.split("_j_o_i_n-t_e_a_m_");

        newQrReader.clear();
        if (level === "member") {
          this._joinAsMember("qr", teamCode, name, password, "sr33");
        }
        this._imgDispHide(sr29.dataset.fromWhere);
        console.log(level, name, teamCode, password);
      };
      const error = (err) => {
        // console.error(err);
      };
      newQrReader.render(success, error);
    } else {
      this._disdSuccessErrorMessage(
        "Lo sentimos, pero tienes que tener una conexión a internet. Verifique tu conexión y vuelve a intentarlo.",
        "er",
        7000
      );
    }

    // Example function to translate UI to Spanish
    function translateToSpanish() {
      const elArr = [
        "html5-qrcode-button-camera-permission",
        "html5-qrcode-button-camera-stop",
        "html5-qrcode-button-camera-start",
        "html5-qrcode-anchor-scan-type-change",
        "html5-qrcode-button-file-selection",
        "reader__header_message",
      ];

      const translations = [
        "Dar permiso para usar la cámara",
        "Terminar de escanear",
        "Empezar a escanear",
        "Cambiar el tipo de escaneo 'foto de galeria/Cámara'",
        "Escanear una foto de tu galería",
        "No podimos escanear un código válido", // Added a translation for the last element as an example
      ];

      elArr.forEach((el, i) => {
        const curEl = document.getElementById(el);
        if (curEl) {
          curEl.innerHTML = translations[i];
        } else {
          console.log(`Element with id ${el} not found`);
        }
      });
    }
    sr33.addEventListener("click", translateToSpanish);

    translateToSpanish(); // Call the function to apply the translations
  }

  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script> */

  // TODO: QR END

  _events() {
    // TODO: needs some more specific naming, and also include the name of the worker on the sheet
    document
      .getElementById("sr11-btn-save-week")
      .addEventListener("click", () => {
        html2canvas(document.querySelector(".sr-main-con-for-padding")).then(
          (canvas) => {
            // const [week, number] = hourSheetWeekNumber.textContent.split(" ");
            // Convert canvas to image data URL
            var imageData = canvas.toDataURL();

            // Create a link to download the image
            var downloadLink = document.createElement("a");
            downloadLink.href = imageData;
            downloadLink.download = `${this.#curMemberInfo.name}, ${
              hourSheetWeekNumber.textContent
            }.png`;
            // downloadLink.download = `${this.#curMemberInfo.name}, Semana ${number}.png`;
            downloadLink.click();
          }
        );
      });

    //rating starts
    sr30RateCard.addEventListener("click", (e) => {
      if (e.target.dataset.active === "act") {
        this._resetRatingStars();
        this._getRating(Number(e.target.dataset.star));
      } else if (e.target.dataset.active === "off") {
        this._setRatingOnTap(Number(e.target.dataset.star));
        this._getRating(Number(e.target.dataset.star));
      }
    });
    sr30RateNow.addEventListener("click", () => {
      this._rateNow();
    });
    sr30RateLater.addEventListener("click", () => {
      this._rateLater();
    });

    //rating ends…
    //Qr starts...
    sr16BtnGenerateQrCode.addEventListener("click", () => {
      this._qrGenerator(
        this.#curMemberInfo.teamCode,
        this.#curMemberInfo.name,
        "member",
        this.#curMemberInfo.password
      );
    });
    sr13BtnReadQrCode.addEventListener("click", () => {
      this._qrReader();
      sr33.dataset.fromWhere = "sr13";
    });

    //Qr ends...
    sr34BtnUnderstand.addEventListener("click", () => {
      this._hideAlert();
    });
    btnsr11UpdateCurWeekToStartWeek.addEventListener("click", () => {
      this._updateCurWeekWithWeekStart();
    });

    // function displayImage() {
    //   const input = document.getElementById("sr12-input-img");
    //   const container = document.getElementById("img-con");

    //   if (input.files && input.files[0]) {
    //     const reader = new FileReader();

    //     reader.onload = function (e) {
    //       container.innerHTML = `<img src="${e.target.result}" alt="Selected Image">`;
    //     };

    //     reader.readAsDataURL(input.files[0]);
    //   }
    // }

    inpImgSr12.addEventListener("change", () => {
      if (inpImgSr12.files && inpImgSr12.files[0]) {
        const reader = new FileReader();
        SVGImgConSr12.style.display = "none";
        ImgConSr12.style.height = "120px";
        ImgConSr12.style.width = "120px";
        console.log("img ready");

        reader.onload = function (e) {
          ImgConSr12.innerHTML = `<img class="sr12-display-team-img" src="${e.target.result}" alt="Selected Image">`;
        };

        reader.readAsDataURL(inpImgSr12.files[0]);
      }
    });
    inpImgSr5.addEventListener("change", () => {
      if (inpImgSr5.files && inpImgSr5.files[0]) {
        const reader = new FileReader();
        SVGImgConSr5.style.display = "none";
        ImgConSr5.style.height = "120px";
        ImgConSr5.style.width = "120px";
        console.log("img ready");

        reader.onload = function (e) {
          ImgConSr5.innerHTML = `<img class="sr12-display-team-img" src="${e.target.result}" alt="Selected Image">`;
        };

        reader.readAsDataURL(inpImgSr5.files[0]);
      }
    });

    // inpImgSr12.addEventListener("change", () => {
    //   const imgUrlAdevent = inpImgSr12;
    //   // const imgUrlAdevent = inpImgSr12.files[0];
    //   // console.log(imgUrlAdevent);
    //   // console.log(imgUrlAdevent.url);

    //   // ImgConSr12Img.style.display = "block";
    //   // ImgConSr12Img.src = imgUrlAdevent.value;
    //   // console.log(ImgConSr12Img);
    // });

    // <-- LIVE Listeners
    window.onscroll = function () {
      // if (window.pageYOffset > stickyHeader) {
      //   header.classList.add("sticky-app-header");
      // } else {
      //   header.classList.remove("sticky-app-header");
      // }
    };
    sr3.addEventListener("click", () => {
      const aceptTermsConditions = document.querySelector("#sr3-terms-acept");
      console.log(aceptTermsConditions.checked);
    });
    sr11PunchInBtnIn.addEventListener("click", (e) => {
      if (e.target.dataset.active === "act") {
        this._punchIn("in");
      }
    });
    sr11PunchInBtnOut.addEventListener("click", (e) => {
      if (e.target.dataset.active === "act") {
        this._punchIn("out");
      }
    });
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

    sr1btnInstallApp.addEventListener("click", (e) => {
      sr1InstallAppInstructions.style.display = "flex";
      sr1InstallAppInstructions.style.border = "2px solid red";
      setTimeout(() => {
        sr1InstallAppInstructions.style.border = "none";
      }, 2000);

      const position = sr1InstallAppInstructions.offsetTop;

      window.scrollTo(0, position);
    });
    sr1ImgCon.addEventListener("click", (e) => {
      if (e.target.dataset.img === "true") {
        console.log(e.target.src);
        sr29.dataset.fromWhere = "sr1";
        this._imgDispDisp(e.target.src, 370, "none", "none", "sr1");
      }
    });
    sr31BtnReload.addEventListener("click", () => {
      this._init("sr31");
    });
    teamImage.addEventListener("click", () => {
      this._imgDispDisp(teamImage.src, "none", "none");
    });
    btnsr29Back.addEventListener("click", () => {
      this._imgDispHide(sr29.dataset.fromWhere);
    });
    btnsr32Back.addEventListener("click", () => {
      this._qrImgDispHide(sr32.dataset.fromWhere);
    });
    btnsr33Back.addEventListener("click", () => {
      this._qrDispHide(sr33.dataset.fromWhere);
    });
    btnsr28Back.addEventListener("click", () => {
      this._hideTermsCond(sr28.dataset.fromWhere);
    });
    sr3AceptTerms.addEventListener("click", () => {
      this._displayTermsCondition();
    });
    sr4ResendOTP.addEventListener("click", () => {
      this._resendOTP();
    });
    // srtInstallApp.addEventListener("click", () => {
    //   console.log("install");
    //   pwaless.showWidget("install-this-app-on-your-phone");
    // });
    sr27btnAskWritePermisio.addEventListener("click", () => {
      this._askWritePermision();
    });
    sr26btnSetPlan.addEventListener("click", () => {
      this._adminSetPlan();
    });
    sr26btnSetAdminLevel.addEventListener("click", () => {
      this._adminSetAdminLevel();
    });

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
    sr12UploadImgCon.addEventListener("click", () => {
      // this._openImgUpload("sr12");
    });
    sr5UploadImgCon.addEventListener("click", () => {
      // this._openImgUpload("sr5");
    });
    btnsr27Cancel.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr11", "sr27", "right");
    });
    btnsr27BackPermisionPending.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr11", "sr27", "right");
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
    btnLoginSr1.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr18", "sr1", "left");
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
      this._srGetStartedDispChoose("sr3", "sr1", "left");
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
      this._srGetStartedDispChoose("sr1", "sr18", "right");
    });
    btnBackSr3.addEventListener("click", () => {
      this._srGetStartedDispChoose("sr1", "sr3", "right");
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
      clearInterval(this.clockInterval);
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
      // this._srGetStartedDispChoose("sr11", "sr21", "right");
      this._updateEntries("0:00", this.#timePickerUpdateDay);
    });
    btnSaveSr21.addEventListener("click", (e) => {
      this._updateEntries(timePicker.value, this.#timePickerUpdateDay);
      console.log(timePicker.value);
    });
    btnWeekSelectForward.addEventListener("click", (e) => {
      console.log(e.target.dataset);
      // if (e.target.classList.contains("btn-dim-full")) {
      if (e.target.dataset.active === "on") {
        this._weekSelect("ahead");
      }
    });
    btnWeekSelectBack.addEventListener("click", (e) => {
      console.log(e.target.dataset);
      // if (e.target.classList.contains("btn-dim-full")) {
      if (e.target.dataset.active === "on") {
        this._weekSelect("back");
        clearInterval(this.clockInterval);
      }
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
    btnsr17LeaveTeam.addEventListener("click", (e) => {
      this._leaveTeam();
    });
    btnJoinNowSr15.addEventListener("click", (e) => {
      this._joinAsMember(undefined, "none", "none", "none", "sr15");
    });
    btnsr11NewTimeTable.addEventListener("click", (e) => {
      this._newWeek();
    });

    btnsr17NewWeek.addEventListener("click", (e) => {
      this._newWeekForCurUser();
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
    btnsr26EditAccount.addEventListener("click", (e) => {
      this._srGetStartedDispChoose("sr23", "sr26", "right");
    });

    // --> EVENT DELEGATION

    sr20.addEventListener("click", (e) => {
      // console.log(e.target.dataset.mode);
      // // console.log(e.target.classList);
      // console.log("clicked");
      // if (
      //   e.target.dataset.mode !== "norm" ||
      //   e.target.dataset.mode !== "admin"
      // ) {
      //   sr20AppAdmin.dataset.mode = "norm";
      //   sr20AppAdminP.dataset.mode = "norm";
      //   console.log("yes here");
      // }
    });

    // <-- member screen

    sr7.addEventListener("click", (e) => {
      const weekSelect = document.querySelector("#sr16-swi-pay--day");
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
            this._displayTimeSheet("ng", true);
          });
        });
      }

      // TODO: start here
      if (e.target.dataset.where === "permision-deny") {
        const curMemberIdHere = e.target.dataset.memberid;

        this._updateData(
          `accounts/${curDataLocal.teamCode}/team`,
          curMemberIdHere,
          {
            writePermisionRequest: "denied",
            lastModified: this._getTimeStamp(),
          }
        );
        this._disdSuccessErrorMessage("Permiso negado", "er", 2000);
      }
      if (e.target.dataset.where === "permision-grant") {
        const curMemberIdHere = e.target.dataset.memberid;

        this._updateData(
          `accounts/${curDataLocal.teamCode}/team`,
          curMemberIdHere,
          {
            writePermisionRequest: "granted",
            writeTimePermisionEnd: this._getTimeStamp() + 5 * 60 * 1000,
            writeTimePermisionStart: this._getTimeStamp(),
            lastModified: this._getTimeStamp(),
          }
        );
        this._disdSuccessErrorMessage(
          "Permiso concedido po 5 minutos",
          "ex",
          2000
        );
      }
      if (e.target.dataset.where === "info") {
        const curMemberIdHere = e.target.dataset.memberid;
        const q = query(
          collection(db, `accounts/${curDataLocal.teamCode}/team`),
          where("memberId", "==", curMemberIdHere)
        );

        getDocs(q).then((docSnap) => {
          docSnap.forEach((doc) => {
            let weekSelectLocal;
            const val = doc.data();
            this.#curMemberInfo = val;
            sr16InpMemberName.value = val.name;
            sr16InpMemberPassword.value = val.password;
            sr16DispTeamCode.textContent = curDataLocal.teamCode;
            sr16InpMemberPay.value = val.salary;
            sr16HeaderName.textContent = val.name;
            sr16InfoName.textContent = val.name;
            sr16QrDescriptionName.textContent = val.name;
            this._setSwiChangeMemberInfo(
              val.writePermision,
              val.level,
              val.punchInPermision
            );
            if (val.weekStart) {
              weekSelectLocal = val.weekStart;
            } else {
              weekSelectLocal = "lunes";
            }
            weekSelect.value = weekSelectLocal;
          });
        });

        this._srGetStartedDispChoose("sr16", "sr7", "left");
      }
      if (e.target.dataset.linkbtn === "new-member") {
        this._checkPro();
      }
    });

    // <-- admin screen

    sr23.addEventListener("click", (e) => {
      const email = document.querySelector("#sr26-info-email span");
      const teamName = document.querySelector("#sr26-info-team-name span");
      const password = document.querySelector("#sr26-info-password span");
      const adminLevel = document.querySelector("#sr26-info-level span");
      const proStatus = document.querySelector("#sr26-info-pro span");
      const proStart = document.querySelector("#sr26-info-pro-start span");
      const proEnd = document.querySelector("#sr26-info-pro-end span");
      const accountCreated = document.querySelector(
        "#sr26-info-account-created span"
      );
      const lastPayment = document.querySelector(
        "#sr26-info-last-payment span"
      );
      const totalPayment = document.querySelector("#sr26-info-total-paid span");

      const teamCode = e.target.dataset.teamcode;
      const btn = e.target.dataset.btn;

      if (teamCode && btn === "view") {
        const found = this.#accountsArray.find((el) => el.teamCode == teamCode);
        console.log(this.#accountsArray);

        this.#curAccountData = found;
        this._displayMembers("sr23");
      } else {
      }
      if (teamCode && btn === "edit") {
        const found = this.#accountsArray.find((el) => el.teamCode == teamCode);
        console.log(this.#accountsArray);
        this.#curAccountData = found;
        console.log(this.#curAccountData);

        const dateAccountCreated = new Date(
          this.#curAccountData.accountMadeTimeStamp
        );
        const dateProStart = new Date(this.#curAccountData.proStartTimeStamp);
        let dateFianlProEnd;

        if (this.#curAccountData.proTime === "ever") {
          dateFianlProEnd = this.#curAccountData.proTime;
        } else {
          const dateProEnd = new Date(
            this.#curAccountData.proStartTimeStamp +
              this.#curAccountData.proTime
          );
          dateFianlProEnd = dateProEnd.toLocaleDateString();
        }

        email.textContent = this.#curAccountData.email;
        teamName.textContent = this.#curAccountData.teamName;
        password.textContent = this.#curAccountData.accountPassword;
        adminLevel.textContent = this.#curAccountData.level;
        proStatus.textContent = this.#curAccountData.pro;
        proStart.textContent = dateProStart.toLocaleDateString();
        proEnd.textContent = dateFianlProEnd;
        accountCreated.textContent = dateAccountCreated.toLocaleDateString();
        lastPayment.textContent = this.#curAccountData.lastPayment;
        totalPayment.textContent = this.#curAccountData.totalPayment;
        this._srGetStartedDispChoose("sr26", "sr23", "left");
      } else {
      }
    });

    // <-- hour screen
    sr11.addEventListener("click", (e) => {
      const timePicker = document.querySelector("#sr21-time-picker");
      if (e.target.dataset.do === "open-time-picker") {
        console.log(this.#curData.writePermision);

        const openTimePickerFunction = () => {
          if (e.target.dataset.stnd === "start") {
            sr21TimePickerInOutText.textContent = "entrada";
          }
          if (e.target.dataset.stnd === "end") {
            sr21TimePickerInOutText.textContent = "salida";
          }
          this.#timePickerUpdateDay = e.target.dataset.day;
          this.#timePickerUpdatestnd = e.target.dataset.stnd;
          this.#timePickerUpdatetype = e.target.dataset.type;
          console.log(this.#curWeek);
          console.log();
          const tapedTime = e.target.textContent;

          if (tapedTime !== "0:00") {
            let timeForTimePicker;
            const splitTime = tapedTime.split(" ");
            const timeHourMin = splitTime[0].split(":");

            if (splitTime[1] === "pm") {
              if (splitTime[0] === "12:00") {
                timeForTimePicker = "23:59";
              } else {
                let hourMin = [Number(timeHourMin[0]) + 12, timeHourMin[1]];
                timeForTimePicker = hourMin.join(":");
              }
            } else {
              if (splitTime[0] === "12:00") {
                timeForTimePicker = "00:00";
              } else {
                const splitTime = tapedTime.split(" ");
                const minHours2 = splitTime[0].split(":");
                if (Number(minHours2[0]) < 10) {
                  const firstChar = splitTime[0].charAt(0);

                  if (firstChar === "0") {
                    timeForTimePicker = splitTime[0];
                  } else {
                    timeForTimePicker = `0${splitTime[0]}`;
                  }
                } else {
                  timeForTimePicker = splitTime[0];
                }
              }
            }
            // const nulltime = "08:06".replace(/^0+/, "");

            console.log(timeForTimePicker);
            timePicker.value = timeForTimePicker;
          } else {
            const date = new Date();
            const hourDate = date.getHours();
            const minDate = date.getMinutes();
            let corHour;
            let corMin;
            let time;

            if (Number(hourDate) < 10) {
              corHour = `0${hourDate}`;
            } else {
              corHour = hourDate;
            }
            if (Number(minDate) < 10) {
              corMin = `0${minDate}`;
            } else {
              corMin = minDate;
            }
            const timeArr = [corHour, corMin];

            time = timeArr.join(":");

            timePicker.value = time;
            const firchar = time.charAt(0);
            console.log(firchar);
          }

          this._srGetStartedDispChoose("sr21", "sr11", "none");
        };
        if (this.#curData.writePermision !== "false") {
          openTimePickerFunction();
        } else {
          // TODO: Change so timer starts to count when the member make first change to his hours
          if (this.#curData.writeTimePermisionEnd >= this._getTimeStamp()) {
            if (this.#curData.writePermisionRequest === "granted") {
              this._disdSuccessErrorMessage(
                "Tu solicitud fue aceptado. Solo tienes un tiepo limitado para hacer tus cambios",
                "ex",
                3500
              );
              this._updateData(
                `accounts/${this.#curData.teamCode}/team`,
                this.#curData.memberId,
                {
                  writePermisionRequest: "done",
                }
              );
            }
            openTimePickerFunction();
          } else {
            if (this.#curData.writePermisionRequest === "denied") {
              this._disdSuccessErrorMessage(
                "Tu solicitud para hacer cambios fue negado",
                "er",
                3000
              );
              this._updateData(
                `accounts/${this.#curData.teamCode}/team`,
                this.#curData.memberId,
                {
                  writePermisionRequest: "done",
                }
              );
              sr27PendingPermisionCon.style.display = "none";
              sr27RequestPermisionCon.style.display = "flex";
              this._srGetStartedDispChoose("sr27", "sr11", "none");
            }
            if (this.#curData.writePermisionRequest === "pending") {
              this._disdSuccessErrorMessage("Solicitud pendiente", "ex", 2000);
              this._writePermisionPending();
            }
            if (this.#curData.writePermisionRequest === "granted") {
              this._disdSuccessErrorMessage(
                "Tu solicitud fue aceptado. Solo tienes un tiepo limitado para hacer tus cambios",
                "ex",
                3500
              );
              this._updateData(
                `accounts/${this.#curData.teamCode}/team`,
                this.#curData.memberId,
                {
                  writePermisionRequest: "done",
                }
              );
            }
            if (
              this.#curData.writePermisionRequest === "done" ||
              this.#curData.writePermisionRequest === ""
            ) {
              sr27PendingPermisionCon.style.display = "none";
              sr27RequestPermisionCon.style.display = "flex";
              this._srGetStartedDispChoose("sr27", "sr11", "none");
              this._disdSuccessErrorMessage(
                "No tienes permiso para hacer cambios en tus horas",
                "er",
                3000
              );
            }
          }
        }
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

        sr9SwiPunchIn.style.opacity = "30%";
        sr9SwiPunchIn.dataset.active = "no";

        //  auto punchin
        sr9SwiPunchIn.classList.add("switch-on");
        sr9SwiPunchIn.classList.remove("switch-off");
        sr9SwiPunchIn2.classList.add("switch-inner-on");
        sr9SwiPunchIn2.classList.remove("switch-inner-off");
        sr9SwiPunchIn3.classList.add("switch-text-on");
        sr9SwiPunchIn3.classList.remove("switch-text-off");
        sr9SwiPunchIn.dataset.on = "true";
        sr9SwiPunchInText.textContent = "permitido";
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

        sr9SwiPunchIn.style.opacity = "100%";
        sr9SwiPunchIn.dataset.active = "act";
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
    sr9SwiPunchIn.addEventListener("click", function () {
      const datanow = sr9SwiPunchIn.dataset.on;
      if (sr9SwiPunchIn.dataset.active === "act") {
        if (datanow === "false") {
          sr9SwiPunchIn.classList.add("switch-on");
          sr9SwiPunchIn.classList.remove("switch-off");
          sr9SwiPunchIn2.classList.add("switch-inner-on");
          sr9SwiPunchIn2.classList.remove("switch-inner-off");
          sr9SwiPunchIn3.classList.add("switch-text-on");
          sr9SwiPunchIn3.classList.remove("switch-text-off");
          sr9SwiPunchIn.dataset.on = "true";
          sr9SwiPunchInText.textContent = "permitido";
        }
        if (datanow === "true") {
          sr9SwiPunchIn.classList.remove("switch-on");
          sr9SwiPunchIn.classList.add("switch-off");
          sr9SwiPunchIn2.classList.remove("switch-inner-on");
          sr9SwiPunchIn2.classList.add("switch-inner-off");
          sr9SwiPunchIn3.classList.remove("switch-text-on");
          sr9SwiPunchIn3.classList.add("switch-text-off");
          sr9SwiPunchIn.dataset.on = "false";
          sr9SwiPunchInText.textContent = "negado";
        }
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
        sr16SwiPunchIn.style.opacity = "30%";
        sr16SwiPunchIn.dataset.active = "no";

        //  auto punchin
        sr16SwiPunchIn.classList.add("switch-on");
        sr16SwiPunchIn.classList.remove("switch-off");
        sr16SwiPunchIn2.classList.add("switch-inner-on");
        sr16SwiPunchIn2.classList.remove("switch-inner-off");
        sr16SwiPunchIn3.classList.add("switch-text-on");
        sr16SwiPunchIn3.classList.remove("switch-text-off");
        sr16SwiPunchIn.dataset.on = "true";
        sr16SwiPunchInText.textContent = "permitido";
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
        sr16SwiPunchIn.style.opacity = "100%";
        sr16SwiPunchIn.dataset.active = "act";
      }
    });
    //     sr16SwiPunchIn
    // sr16SwiPunchIn2
    // sr16SwiPunchIn3
    // sr16SwiPunchInText

    sr16SwiPunchIn.addEventListener("click", function (e) {
      if (sr16SwiPunchIn.dataset.active === "act") {
        const datanow = sr16SwiPunchIn.dataset.on;
        if (datanow === "false") {
          sr16SwiPunchIn.classList.add("switch-on");
          sr16SwiPunchIn.classList.remove("switch-off");
          sr16SwiPunchIn2.classList.add("switch-inner-on");
          sr16SwiPunchIn2.classList.remove("switch-inner-off");
          sr16SwiPunchIn3.classList.add("switch-text-on");
          sr16SwiPunchIn3.classList.remove("switch-text-off");
          sr16SwiPunchIn.dataset.on = "true";
          sr16SwiPunchInText.textContent = "permitido";
        }
        if (datanow === "true") {
          sr16SwiPunchIn.classList.remove("switch-on");
          sr16SwiPunchIn.classList.add("switch-off");
          sr16SwiPunchIn2.classList.remove("switch-inner-on");
          sr16SwiPunchIn2.classList.add("switch-inner-off");
          sr16SwiPunchIn3.classList.remove("switch-text-on");
          sr16SwiPunchIn3.classList.add("switch-text-off");
          sr16SwiPunchIn.dataset.on = "false";
          sr16SwiPunchInText.textContent = "negado";
        }
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
