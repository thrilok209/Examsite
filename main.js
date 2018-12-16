(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/add-anstoque-page/add-anstoque-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/add-anstoque-page/add-anstoque-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"title-h1\">Online Test </h1> -->\n\n<div class=\"container ml-1 mr-1\" >\n\n  <div class=\"row  border border-dark\"  [hidden]=\"questionImgLoad\" >\n    <div class=\"col-10\">\n      <div class=\"row title-section subject-section border-bottom border-dark\">\n        <div class=\"col\">\n          <h6 class=\"mb-0\">Section</h6>\n          <button class=\"btn btn-default\" (click)=\"jumpToQuestion(phyQuestionsStartingNumber-1)\">PHY</button>\n          <button class=\"btn btn-default\" (click)=\"jumpToQuestion(chemQuestionsStartingNumber-1)\">CHEM</button>\n          <button class=\"btn btn-default\" (click)=\"jumpToQuestion(mathQuestionsStartingNumber-1)\">Math</button>\n\n        </div>\n      </div>\n      <div class=\"row pt-2 title-section question-number border-top border-bottom border-dark\">\n        <div class=\"col\">\n          <!-- <h6>MCQS</h6> -->\n          <h5>Question : {{questionNumber}}</h5>\n        </div>\n      </div>\n      <div class=\"question-view\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <img src=\"{{question}}\" (load)=\"imgCheck()\" class=\"img-fluid\" alt=\"Responsive image\">\n          </div>\n\n        </div>\n        <div class=\"question-options ml-2\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('a')\" [(checked)]=\"checkedAnswer.a\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"a\">\n              <label class=\"form-check-label\" for=\"gridRadios1\">\n                a)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('b')\"  [(checked)]=\"checkedAnswer.b\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"b\">\n              <label class=\"form-check-label\" for=\"gridRadios2\">\n                b)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\"  (change)=\"optionSelected('c')\" [(checked)]=\"checkedAnswer.c\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"c\">\n              <label class=\"form-check-label\" for=\"gridRadios3\">\n                c)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('d')\"  [(checked)]=\"checkedAnswer.d\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios4\" value=\"d\">\n              <label class=\"form-check-label\" for=\"gridRadios4\">\n                d)\n              </label>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n      <div class=\"row border border-dark\">\n        <div class=\"col-3  pl-0 pr-0\">\n          <button class=\"btn btn-default btn-clearOption\" (click)=\"clearAlloption('clear')\">Clear options</button>\n        </div>\n\n\n\n\n\n        <div class=\"col-5 offset-1\">\n          <button class=\"btn btn-default btn-save border border-dark\" [hidden]=\"saveBtn\" (click)=\"nextQuestion(1,questionNumber+1)\">Save & next</button>\n          <button class=\"btn btn-default btn-save-final border border-dark\" [hidden]=\"!saveBtn\" (click)=\"nextQuestion('save',questionNumber+1)\">Save</button>\n          <button class=\"btn btn-default btn-save-final border border-dark\" [hidden]=\"!saveBtn\" (click)=\"addUsers()\">Submit</button>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2 border border-dark all-question\">\n\n      <div class=\"row btn-question\">\n        <div class=\"col-1 col-queBtn\" *ngFor=\"let question of totalQuestions ; let i =index\">\n          <button class=\"btn btn-default btn-jump pl-1 pr-1\" (click)=\"jumpToQuestion(i)\" [ngStyle]=\"{'background-color': markAsReview[i]}\" >{{i+1}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/add-anstoque-page/add-anstoque-page.component.ts ***!
  \************************************************************************/
/*! exports provided: AddAnstoquePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnstoquePageComponent", function() { return AddAnstoquePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adding_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adding-question.service */ "./src/app/admin/adding-question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAnstoquePageComponent = /** @class */ (function () {
    function AddAnstoquePageComponent(afAuth, storage, san, db, router, questionDB) {
        this.afAuth = afAuth;
        this.storage = storage;
        this.san = san;
        this.router = router;
        this.questionDB = questionDB;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.addingAnsPart = false;
        this.addingUsersPart = true;
        this.questionOption = null;
        this.questionNumber = 0;
        this.checkedAnswer = {
            a: false,
            b: false,
            c: false,
            d: false,
        };
        this.chemAdminOptions = [];
        this.chemQuestions = [];
        this.phyAdminOptions = [];
        this.phyQuestions = [];
        this.mathAdminOptions = [];
        this.mathQuestions = [];
        this.totalQuestions = [];
        this.totalAdminOptions = [];
        this.totalQuestionsNumber = this.questionDB.totalNumberOfQuestion;
        this.chemQuestionsNumber = this.totalQuestionsNumber / 3;
        this.mathQuestionsNumber = this.totalQuestionsNumber / 3;
        this.phyQuestionsNumber = this.totalQuestionsNumber / 3;
        this.chemQuestionsStartingNumber = 1 * (this.totalQuestionsNumber / 3) + 1;
        this.mathQuestionsStartingNumber = 2 * (this.totalQuestionsNumber / 3) + 1;
        this.phyQuestionsStartingNumber = 0 * (this.totalQuestionsNumber / 3) + 1;
        this.userName = "";
        this.saveBtn = false;
        this.markAsReview = [];
        this.reviewBtnText = false;
        this.questionImgLoad = true;
        this.questionCorrectAnswere = [];
        // userData = {
        //  questionCorrectAnsweres:[]
        //
        // }
        this.timerInt = false;
        this.usersDetails = [];
    }
    AddAnstoquePageComponent.prototype.ngOnInit = function () {
        this.totalQuestions = this.questionDB.totolQuestionUrls;
        this.totalAdminOptions = this.questionDB.questionCorrectOptions;
        this.totalQuestionsNumber = this.questionDB.totalNumberOfQuestion;
        // this.totalQuestions=
        // ["https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2Fphy(1)?alt=media&token=27f39ef6-b58e-4037-bdf5-b5edb8743e03",
        // // "https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2F()?alt=media&token=a271b3ae-d436-4107-9524-dbcecd32b83b",
        // "https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/test2%2Fmath(1)?alt=media&token=8d7da82b-0026-4be4-b126-55d261b11071"]
        this.chemQuestions = this.questionDB.chemQuestionUrls;
        this.phyQuestions = this.questionDB.phyQuestionUrls;
        this.mathQuestions = this.questionDB.mathQuestionUrls;
        this.chemQuestionsStartingNumber = this.questionDB.numberOfphyQuestion + 1;
        this.mathQuestionsStartingNumber = this.questionDB.numberOfphyQuestion + this.questionDB.numberOfChemQuestion + 1;
        this.phyQuestionsStartingNumber = 1;
        // this.chemQuestions=this.questionDB.chemQuestionUrls
        // this.phyQuestions=this.questionDB.phyQuestionUrls
        // this.mathQuestions=this.questionDB.mathQuestionUrls
        // this.chemQuestionsStartingNumber=0+1;
        // this.mathQuestionsStartingNumber=0+2+1;
        // this.phyQuestionsStartingNumber=1+0;
        console.log("total que " + this.totalQuestionsNumber);
        // for(let i =0; i<(this.totalQuestionsNumber) ; i++){
        //   if(i>=(this.phyQuestionsStartingNumber-1) && i<(this.chemQuestionsStartingNumber-1)){
        //     console.log("phy")
        //     let ref = this.storage.ref('phy/phy('+(i+1)+').png');
        //     this.profileUrl = ref.getDownloadURL();
        //     this.profileUrl.subscribe(x => {
        //       // console.log(this.chemQuestions)
        //       this.phyQuestions[i]=x
        //       this.totalQuestions[i]=x
        //       if(i==0){
        //         // console.log("here")
        //         this.question=x
        //         // console.log(this.chemQuestions)
        //       }
        //     })
        //   }
        //   if(i>=(this.chemQuestionsStartingNumber-1) && i<(this.mathQuestionsStartingNumber-1)){
        //     console.log("chem")
        //     let ref = this.storage.ref('chem/chem('+(i+2-this.chemQuestionsStartingNumber)+').png');
        //     this.profileUrl = ref.getDownloadURL();
        //     this.profileUrl.subscribe(x => {
        //
        //       this.totalQuestions[i]=x
        //       this.chemQuestions[i]=x
        //       if(i==0){
        //         // console.log("here")
        //         this.question=x
        //         console.log(this.chemQuestions)
        //       }
        //     })
        //   }
        //   if(i>=(this.mathQuestionsStartingNumber-1) && i<(this.totalQuestionsNumber)){
        //     console.log("math")
        //     let ref = this.storage.ref('math/math('+(i+2-this.mathQuestionsStartingNumber)+').png');
        //     this.profileUrl = ref.getDownloadURL();
        //     this.profileUrl.subscribe(x => {
        //       // console.log(this.chemQuestions)
        //
        //       this.mathQuestions[i]=x
        //       this.totalQuestions[i]=x
        //       if(i==0){
        //         // console.log("here")
        //         this.question=x
        //         // console.log(this.chemQuestions)
        //       }
        //     })
        //   }
        //
        // }
        console.log("totalQuestions=  " + this.totalQuestions);
        this.question = this.totalQuestions[0];
        this.questionNumber = 1;
        this.adminOptionRestore();
    };
    AddAnstoquePageComponent.prototype.btn = function () {
        // console.log(this.checkedAnswer.value)
        // console.log(z)
        console.log(this.question);
        console.log(this.chemQuestions);
    };
    AddAnstoquePageComponent.prototype.optionSelected = function (option) {
        // console.log(option);
        // this.checkedAnswer[option] = !this.checkedAnswer.option
        this.questionOption = option;
        if (option == 'a') {
            this.checkedAnswer.a = true;
            this.checkedAnswer.b = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'b') {
            this.checkedAnswer.b = true;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'c') {
            this.checkedAnswer.c = true;
            this.checkedAnswer.b = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'd') {
            this.checkedAnswer.d = true;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
        }
        // console.log(this.checkedAnswer)
    };
    AddAnstoquePageComponent.prototype.clearAlloption = function (x) {
        if (x == "clear") {
            this.checkedAnswer.d = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
            this.questionOption = "";
            console.log("clear");
        }
        if (x == "next") {
            this.checkedAnswer.d = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
        }
    };
    AddAnstoquePageComponent.prototype.nextQuestion = function (nextQ, nextQuestionNumber) {
        this.totalAdminOptions[this.questionNumber - 1] = "";
        if (this.questionOption != null) {
            this.totalAdminOptions[this.questionNumber - 1] = this.questionOption;
        }
        if (nextQ == 1) {
            this.markAsReview[this.questionNumber - 1] = "red";
        }
        if (nextQ == 1 && this.questionOption != null) {
            if (this.questionOption != "") {
                console.log(this.markAsReview);
                this.markAsReview[this.questionNumber - 1] = "green";
            }
        }
        if (nextQ != "save") {
            this.question = this.totalQuestions[this.questionNumber + 1 - 1];
            this.questionNumber = nextQuestionNumber;
        }
        this.questionOption = null;
        this.commonFunction();
        if (nextQ == 'save') {
            this.imgCheck();
            this.markAsReview[this.questionNumber - 1] = "green";
        }
        console.log(this.markAsReview);
        console.log(this.totalAdminOptions);
        console.log(this.questionOption);
    };
    AddAnstoquePageComponent.prototype.checkQuestionNumber = function () {
        if (this.totalQuestionsNumber == this.questionNumber) {
            this.saveBtn = true;
        }
        if (this.totalQuestionsNumber > this.questionNumber) {
            this.saveBtn = false;
        }
    };
    AddAnstoquePageComponent.prototype.jumpToQuestion = function (questionNumberPar) {
        if (this.questionNumber != questionNumberPar + 1) {
            var prevQuestionNumber = this.questionNumber;
            this.question = this.totalQuestions[questionNumberPar];
            this.questionNumber = questionNumberPar + 1;
            console.log(questionNumberPar);
            console.log(this.question);
            this.commonFunction();
            if (this.markAsReview[prevQuestionNumber - 1] != "green") {
                this.markAsReview[prevQuestionNumber - 1] = "red";
            }
        }
    };
    // markAsreview(par , mark){
    //   // this.chemQuestions[this.questionNumber-1].style="background-"
    //   if(par=='mark'){
    //     this.markAsReview[this.questionNumber-1]="purple"
    //   }
    //   if(par=='unmark'){
    //     this.markAsReview[this.questionNumber-1]=""
    //   }
    //   if(par=='mark' && this.questionOption!=null){
    //     this.markAsReview[this.questionNumber-1]="yellow"
    //   }
    //   if(mark!=2){
    //     this.nextQuestion(2,this.questionNumber+1);
    //   }
    //   this.checkReviewBtn();
    // }
    // checkReviewBtn(){
    //   if(this.markAsReview[this.questionNumber-1]!=""){
    //     this.reviewBtnText=true
    //   }
    //   if(this.markAsReview[this.questionNumber-1]=="" || this.markAsReview[this.questionNumber-1]==undefined){
    //     this.reviewBtnText=false
    //   }
    // }
    AddAnstoquePageComponent.prototype.adminOptionRestore = function () {
        if (this.totalAdminOptions[this.questionNumber - 1] != "") {
            this.questionOption = this.totalAdminOptions[this.questionNumber - 1];
            if (this.questionOption == 'a') {
                this.checkedAnswer.a = true;
                this.checkedAnswer.b = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'b') {
                this.checkedAnswer.b = true;
                this.checkedAnswer.a = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'c') {
                this.checkedAnswer.c = true;
                this.checkedAnswer.b = false;
                this.checkedAnswer.a = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'd') {
                this.checkedAnswer.d = true;
                this.checkedAnswer.a = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.b = false;
            }
        }
    };
    AddAnstoquePageComponent.prototype.imgCheck = function () {
        if (this.timerInt == false) {
            this.timerInt = true;
        }
        this.questionImgLoad = false;
        // console.log(this.questionImgLoad);
    };
    AddAnstoquePageComponent.prototype.commonFunction = function () {
        this.questionImgLoad = true;
        this.clearAlloption('next');
        this.checkQuestionNumber();
        this.adminOptionRestore();
    };
    AddAnstoquePageComponent.prototype.addUsers = function () {
        // this.totalAdminOptions=["a","b","c"]
        this.questionDB.questionCorrectOptions = this.totalAdminOptions;
        this.cutOptions();
        this.questionDB.phyCorrectOptions = this.phyAdminOptions;
        this.questionDB.ChemCorrectOptions = this.chemAdminOptions;
        this.questionDB.MathCorrectOptions = this.mathAdminOptions;
        this.addingAnsPart = true;
        this.addingUsersPart = false;
        this.router.navigate(['checkAdminOptions']);
    };
    AddAnstoquePageComponent.prototype.cutOptions = function () {
        console.log(this.chemQuestionsStartingNumber);
        this.phyAdminOptions = this.totalAdminOptions.slice(0, this.chemQuestionsStartingNumber - 1);
        this.chemAdminOptions = this.totalAdminOptions.slice(this.chemQuestionsStartingNumber - 1, this.mathQuestionsStartingNumber - 1);
        this.mathAdminOptions = this.totalAdminOptions.slice(this.mathQuestionsStartingNumber - 1);
        console.log(this.phyAdminOptions);
        console.log(this.chemAdminOptions);
        console.log(this.mathAdminOptions);
    };
    AddAnstoquePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-anstoque-page',
            template: __webpack_require__(/*! ./add-anstoque-page.component.html */ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.html"),
            styles: [__webpack_require__(/*! ./add-anstoque-page.component.css */ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _adding_question_service__WEBPACK_IMPORTED_MODULE_6__["AddingQuestionService"]])
    ], AddAnstoquePageComponent);
    return AddAnstoquePageComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-questions-page/add-questions-page.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/add-questions-page/add-questions-page.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-questions-page/add-questions-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/add-questions-page/add-questions-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"check()\" >TEST</button>\n\n<form>\n  <div class=\"title-question-part\" [hidden]=\"titlePart\">\n    <div class=\"form-group\">\n      <label for=\"titleOfTheTest\">Test Title</label>\n      <input type=\"text`\" #title class=\"form-control\" id=\"titleOfTheTest\" placeholder=\"Title\">\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"noOfPhyQuestionOfTheTest\">PHY Questions</label>\n      <input type=\"number\"  #quePhyNum class=\"form-control\" id=\"noOfPhyQuestionOfTheTest\" placeholder=\"No Of Questions\">\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"noOfChemQuestionOfTheTest\">Chem Questions</label>\n      <input type=\"number\"  #queChemNum class=\"form-control\" id=\"noOfChemQuestionOfTheTest\" placeholder=\"No Of Questions\">\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"noOfMathQuestionOfTheTest\">MATH Questions</label>\n      <input type=\"number\"  #queMathNum class=\"form-control\" id=\"noOfMathQuestionOfTheTest\" placeholder=\"No Of Questions\">\n    </div>\n    <div class=\"form-group\" >\n      <label for=\"noOfMathQuestionOfTheTest\">TIME(mins)</label>\n      <input type=\"number\"  #time class=\"form-control\" id=\"time\" placeholder=\"IN MINS\">\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"addTitle(title.value,quePhyNum.value,queChemNum.value,queMathNum.value , time.value)\" >Enter Question</button>\n  </div>\n\n  <div class=\"add-question-part\" [hidden]=\"questionAddingPart\">\n    <!-- <div class=\"form-group\">\n      <select class=\"custom-select\" (change)=\"$event.target.value\">\n        <option selected>Open this select menu</option>\n        <option value=\"1\">One</option>\n        <option value=\"2\">Two</option>\n        <option value=\"3\">Three</option>\n      </select>\n    </div> -->\n    <div class=\"form-group\" *ngFor=\"let question of phyArray; let i =index\" >\n      <label for=\"phyfile\">{{i+1}}) PHY Question</label>\n      <input type=\"file\" (change)=\"uploadFile($event,i+1,'phy')\" class=\"form-control-file\" id=\"phyfile\">\n      <!-- <div>{{ phyUploadPercent[i+1] | async }}</div> -->\n    </div>\n    <div class=\"form-group\" *ngFor=\"let question of ChemArray; let i =index\" >\n      <label for=\"chemfile\">{{i+1}}) CHEM Question</label>\n      <input type=\"file\" (change)=\"uploadFile($event,i+1,'chem')\" class=\"form-control-file\" id=\"chemfile\">\n      <!-- <div>{{ chemUploadPercent[i+1] | async }}</div> -->\n    </div>\n    <div class=\"form-group\" *ngFor=\"let question of MathArray; let i =index\" >\n      <label for=\"mathfile\">{{i+1}}) MATH Question</label>\n      <input type=\"file\" (change)=\"uploadFile($event,i+1,'math')\" class=\"form-control-file\" id=\"mathfile\">\n      <!-- <div>{{ mathUploadPercent[i+1] | async }}</div> -->\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"addAnswers()\" >Enter Answers</button>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/add-questions-page/add-questions-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/add-questions-page/add-questions-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddQuestionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionsPageComponent", function() { return AddQuestionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adding_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adding-question.service */ "./src/app/admin/adding-question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddQuestionsPageComponent = /** @class */ (function () {
    function AddQuestionsPageComponent(db, storage, router, questionDB) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.questionDB = questionDB;
        this.titlePart = false;
        this.questionAddingPart = true;
        this.totalNumberOfQuestionToAdd = 0;
        this.numberOfChemQuestion = 0;
        this.numberOfphyQuestion = 0;
        this.numberOfmathQuestion = 0;
        this.phyArray = [];
        this.ChemArray = [];
        this.MathArray = [];
        this.chemQuestionUrls = [];
        this.phyQuestionUrls = [];
        this.mathQuestionUrls = [];
        this.StatusTextAdmin = "";
        // this.itemsRef = db.list('tests');
        //     // Use snapshotChanges().map() to store the key
        //     this.items = this.itemsRef.snapshotChanges().pipe(
        //       map(changes =>
        //         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        //       )
        //     );
        this.testsRef = db.list('TESTS');
        this.testsRef.snapshotChanges()
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
                _this.StatusTextAdmin = action.payload.val().status;
            });
        });
        this.itemRef = db.object('statusTest');
        this.item = this.itemRef.valueChanges();
    }
    AddQuestionsPageComponent.prototype.ngOnInit = function () {
        // this.itemsRef.push({'title':"thrilok" , 'numberOfQuestion': 18 , 'correctOptions': 18 , 'testUsers': 18 , });
        // this.itemRef.set();
        // this.itemRef.set({ status: "start" });
    };
    AddQuestionsPageComponent.prototype.testStatus = function (x) {
        if (x == 1) {
            this.itemRef.set({ status: "start" });
        }
        if (x == 2) {
            this.itemRef.set({ status: "wait" });
        }
    };
    AddQuestionsPageComponent.prototype.check = function () {
        this.testsRef.push({ 'title': "thrilok", 'numberOfQuestion': { 'totalQuestion': 12, 'chem': 4, 'phy': 4, 'math': 4 }, 'correctOptions': ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"], 'atCommand': ['1'], 'status': 'pending', 'studentOptions': [] });
    };
    AddQuestionsPageComponent.prototype.addTitle = function (title, quePhyNum, queChemNum, queMathNum, time) {
        this.titleOfTest = title;
        this.totalNumberOfQuestionToAdd = parseInt(quePhyNum) + parseInt(queChemNum) + parseInt(queMathNum);
        this.numberOfphyQuestion = parseInt(quePhyNum);
        this.numberOfChemQuestion = parseInt(queChemNum);
        this.numberOfmathQuestion = parseInt(queMathNum);
        this.phyArray.length = quePhyNum;
        this.ChemArray.length = queChemNum;
        this.MathArray.length = queMathNum;
        this.questionAddingPart = false;
        this.titlePart = true;
        this.time = time;
        console.log(this.phyArray);
    };
    AddQuestionsPageComponent.prototype.uploadFile = function (event, questionNum, subject) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = this.titleOfTest + "/" + subject + "(" + questionNum + ")";
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        // if(subject=="chem"){
        //   this.chemUploadPercent[questionNum] = task.percentageChanges();
        //   console.log("chem percentage")
        // }
        // if(subject=="math"){
        //   this.mathUploadPercent[questionNum] = task.percentageChanges();
        //   console.log("math percentage")
        //
        // }
        //   if(subject=="phy"){
        //     this.phyUploadPercent[questionNum] = task.percentageChanges();
        //     console.log("phy percentage")
        //
        //   }
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (x) {
                if (subject == "chem") {
                    _this.chemQuestionUrls[questionNum - 1] = x;
                    console.log(_this.chemQuestionUrls[questionNum - 1]);
                }
                if (subject == "math") {
                    _this.mathQuestionUrls[questionNum - 1] = x;
                }
                if (subject == "phy") {
                    _this.phyQuestionUrls[questionNum - 1] = x;
                }
            });
        }))
            .subscribe();
    };
    AddQuestionsPageComponent.prototype.addAnswers = function () {
        if (this.phyQuestionUrls.length == this.numberOfphyQuestion && this.mathQuestionUrls.length == this.numberOfmathQuestion && this.chemQuestionUrls.length == this.numberOfChemQuestion) {
            this.questionDB.phyQuestionUrls = this.phyQuestionUrls;
            this.questionDB.mathQuestionUrls = this.mathQuestionUrls;
            this.questionDB.chemQuestionUrls = this.chemQuestionUrls;
            this.questionDB.numberOfphyQuestion = this.numberOfphyQuestion;
            this.questionDB.numberOfChemQuestion = this.numberOfChemQuestion;
            this.questionDB.numberOfmathQuestion = this.numberOfmathQuestion;
            this.questionDB.totalNumberOfQuestion = this.numberOfphyQuestion + this.numberOfChemQuestion + this.numberOfmathQuestion;
            this.questionDB.titleOfTest = this.titleOfTest;
            this.questionDB.totolQuestionUrls = this.phyQuestionUrls.concat(this.chemQuestionUrls, this.mathQuestionUrls);
            this.questionDB.time = this.time;
            console.log("all que from component");
            console.log(this.questionDB.totolQuestionUrls);
            console.log(this.chemQuestionUrls);
            this.router.navigate(['addAns']);
        }
        else {
            window.alert("wait");
        }
    };
    AddQuestionsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-questions-page',
            template: __webpack_require__(/*! ./add-questions-page.component.html */ "./src/app/admin/add-questions-page/add-questions-page.component.html"),
            styles: [__webpack_require__(/*! ./add-questions-page.component.css */ "./src/app/admin/add-questions-page/add-questions-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _adding_question_service__WEBPACK_IMPORTED_MODULE_5__["AddingQuestionService"]])
    ], AddQuestionsPageComponent);
    return AddQuestionsPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-users-to-test/add-users-to-test.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/add-users-to-test/add-users-to-test.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-users-to-test/add-users-to-test.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/add-users-to-test/add-users-to-test.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users\" [hidden]=\"addingUsersPart\">\n  <label for=\"\">AT command</label>\n    <ng-multiselect-dropdown\n    [placeholder]=\"'custom placeholder'\"\n    [data]=\"dropdownUsersList\"\n    [(ngModel)]=\"selectedUsers\"\n    [settings]=\"dropdownSettings\"\n    (onSelect)=\"onItemSelect($event)\"\n    (onSelectAll)=\"onSelectAll($event)\"\n    (onDeSelect)=\"onDeItemSelect($event)\"\n  >\n  </ng-multiselect-dropdown>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"addUserForCommand()\" >Enter Answers</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/add-users-to-test/add-users-to-test.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/add-users-to-test/add-users-to-test.component.ts ***!
  \************************************************************************/
/*! exports provided: AddUsersToTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersToTestComponent", function() { return AddUsersToTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adding_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adding-question.service */ "./src/app/admin/adding-question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUsersToTestComponent = /** @class */ (function () {
    function AddUsersToTestComponent(router, questionDB) {
        this.router = router;
        this.questionDB = questionDB;
        this.dropdownUsersList = [];
        this.selectedUsers = [];
        this.dropdownSettings = {};
    }
    AddUsersToTestComponent.prototype.onItemSelect = function (item) {
        console.log(this.selectedUsers);
    };
    AddUsersToTestComponent.prototype.onDeItemSelect = function (item) {
        console.log(this.selectedUsers);
    };
    AddUsersToTestComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    AddUsersToTestComponent.prototype.ngOnInit = function () {
        this.dropdownUsersList = [
            // { item_id: 1, item_text: 'Mumbai' },
            "thrilok", "1@gmail.com", "2@gmail.com"
        ];
        this.selectedUsers = this.questionDB.atCommandUsers;
        this.dropdownSettings = {
            singleSelection: false,
            // idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            // itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    AddUsersToTestComponent.prototype.addUserForCommand = function () {
        this.questionDB.atCommandUsers = this.selectedUsers;
        this.questionDB.addTest();
    };
    AddUsersToTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-users-to-test',
            template: __webpack_require__(/*! ./add-users-to-test.component.html */ "./src/app/admin/add-users-to-test/add-users-to-test.component.html"),
            styles: [__webpack_require__(/*! ./add-users-to-test.component.css */ "./src/app/admin/add-users-to-test/add-users-to-test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _adding_question_service__WEBPACK_IMPORTED_MODULE_2__["AddingQuestionService"]])
    ], AddUsersToTestComponent);
    return AddUsersToTestComponent;
}());



/***/ }),

/***/ "./src/app/admin/adding-question.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/adding-question.service.ts ***!
  \**************************************************/
/*! exports provided: AddingQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddingQuestionService", function() { return AddingQuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddingQuestionService = /** @class */ (function () {
    function AddingQuestionService(db) {
        this.numberOfChemQuestion = 0;
        this.numberOfphyQuestion = 0;
        this.numberOfmathQuestion = 0;
        this.totalNumberOfQuestion = 0;
        this.array = [];
        this.chemQuestionUrls = [];
        this.phyQuestionUrls = [];
        this.mathQuestionUrls = [];
        this.phyCorrectOptions = [];
        this.ChemCorrectOptions = [];
        this.MathCorrectOptions = [];
        this.totolQuestionUrls = [];
        this.atCommandUsers = [];
        this.questionCorrectOptions = [];
        this.testsRef = db.list('TESTS');
        this.testsRef.snapshotChanges()
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
            });
        });
    }
    AddingQuestionService.prototype.addTest = function () {
        this.testsRef.push({ 'title': this.titleOfTest,
            'numberOfQuestion': { "total": this.totalNumberOfQuestion, "phy": this.numberOfphyQuestion, "chem": this.numberOfChemQuestion, "math": this.numberOfmathQuestion },
            'correctOptions': { "totalQue": this.questionCorrectOptions, "phy": this.phyCorrectOptions, "chem": this.ChemCorrectOptions, "math": this.MathCorrectOptions },
            "studentOptions": [],
            //  'Atcommand': this.atCommandUsers ,
            Teststatus: "pending",
            startTest: "wait",
            time: this.time });
    };
    AddingQuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AddingQuestionService);
    return AddingQuestionService;
}());



/***/ }),

/***/ "./src/app/admin/change-questions-page/change-questions-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/change-questions-page/change-questions-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/change-questions-page/change-questions-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/change-questions-page/change-questions-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"uploadFile($event)\" />\n   <div>{{ uploadPercent | async }}</div>\n   <a [href]=\"downloadURL | async\">{{ downloadURL | async }}</a>\n"

/***/ }),

/***/ "./src/app/admin/change-questions-page/change-questions-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/change-questions-page/change-questions-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangeQuestionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeQuestionsPageComponent", function() { return ChangeQuestionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangeQuestionsPageComponent = /** @class */ (function () {
    function ChangeQuestionsPageComponent(db, storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ChangeQuestionsPageComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'FullTest1/math(7)';
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.downloadURL = fileRef.getDownloadURL(); }))
            .subscribe();
    };
    ChangeQuestionsPageComponent.prototype.ngOnInit = function () {
    };
    ChangeQuestionsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-questions-page',
            template: __webpack_require__(/*! ./change-questions-page.component.html */ "./src/app/admin/change-questions-page/change-questions-page.component.html"),
            styles: [__webpack_require__(/*! ./change-questions-page.component.css */ "./src/app/admin/change-questions-page/change-questions-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChangeQuestionsPageComponent);
    return ChangeQuestionsPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/load-test.service.ts":
/*!********************************************!*\
  !*** ./src/app/admin/load-test.service.ts ***!
  \********************************************/
/*! exports provided: LoadTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTestService", function() { return LoadTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadTestService = /** @class */ (function () {
    function LoadTestService(db) {
        var _this = this;
        this.testLoadRef = db.object('loadedTest');
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            _this.testLoaded = test.payload.val();
        });
    }
    LoadTestService.prototype.testToLoad = function (test) {
        this.testLoadRef.set(test);
    };
    LoadTestService.prototype.testRemoveLoad = function () {
        this.testLoadRef.remove();
    };
    LoadTestService.prototype.getLoadedTest = function () {
        var _this = this;
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            return _this.testLoaded = test.payload.val();
        });
    };
    LoadTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], LoadTestService);
    return LoadTestService;
}());



/***/ }),

/***/ "./src/app/admin/que-options-page/que-options-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/que-options-page/que-options-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/que-options-page/que-options-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/que-options-page/que-options-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" [routerLink]=\"['/addAns']\">Change</button>\n<button class=\"btn btn-default\" (click)=\"submitAdminTest()\">Submit</button>\n\n<div class=\"card\" style=\"width:100%;\" *ngFor=\"let que of totalQuestionsUrl; let i =index\">\n  <img class=\"card-img-top\" src=\"{{que}}\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <!-- <h5 class=\"card-title\">Card title</h5> -->\n    <p class=\"card-text\">Option: {{totalAdminOptions[i]}}</p>\n    <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/que-options-page/que-options-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/que-options-page/que-options-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: QueOptionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueOptionsPageComponent", function() { return QueOptionsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adding_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adding-question.service */ "./src/app/admin/adding-question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueOptionsPageComponent = /** @class */ (function () {
    function QueOptionsPageComponent(questionDB) {
        this.questionDB = questionDB;
        this.totalQuestionsUrl = [];
        this.totalAdminOptions = [];
    }
    QueOptionsPageComponent.prototype.ngOnInit = function () {
        this.totalQuestionsUrl = this.questionDB.totolQuestionUrls;
        this.totalAdminOptions = this.questionDB.questionCorrectOptions;
    };
    QueOptionsPageComponent.prototype.submitAdminTest = function () {
        this.questionDB.addTest();
    };
    QueOptionsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-que-options-page',
            template: __webpack_require__(/*! ./que-options-page.component.html */ "./src/app/admin/que-options-page/que-options-page.component.html"),
            styles: [__webpack_require__(/*! ./que-options-page.component.css */ "./src/app/admin/que-options-page/que-options-page.component.css")]
        }),
        __metadata("design:paramtypes", [_adding_question_service__WEBPACK_IMPORTED_MODULE_1__["AddingQuestionService"]])
    ], QueOptionsPageComponent);
    return QueOptionsPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/test-remote-page/test-remote-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/test-remote-page/test-remote-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/test-remote-page/test-remote-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/test-remote-page/test-remote-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Test Title</th>\n      <th scope=\"col\">Test</th>\n      <th scope=\"col\">No Of Question</th>\n      <th scope=\"col\">Test status</th>\n\n      <th scope=\"col\">-</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">{{testLoaded.title}}</th>\n      <td>{{testLoaded.Teststatus}}</td>\n      <td>{{testLoaded.numberOfQuestion.total}}</td>\n      <td>{{testLoaded.startTest}}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"testStatus(1)\" *ngIf=\"testLoaded.startTest=='wait'\">Start</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"testStatus(2)\" *ngIf=\"testLoaded.startTest=='start'\">Wait</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"testStatus(3)\" *ngIf=\"testLoaded.startTest=='start'\">END</button>\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n\n\n\n<div class=\"studentScore pt-5\">\n  <h3>Student Score</h3>\n  <table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Total Score</th>\n      <th scope=\"col\">Negative Marks</th>\n      <th scope=\"col\">Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let score of studentScore; let i =index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{score.name}}</td>\n      <td>{{score.totalScore}}</td>\n      <td>{{score.neg}}</td>\n      <td>{{score.opt | json}}</td>\n    </tr>\n\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/test-remote-page/test-remote-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/test-remote-page/test-remote-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestRemotePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRemotePageComponent", function() { return TestRemotePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestRemotePageComponent = /** @class */ (function () {
    function TestRemotePageComponent(db) {
        var _this = this;
        this.studentScore = [];
        this.btn = 's';
        this.itemRef = db.object('statusTest');
        this.item = this.itemRef.valueChanges();
        this.testScoreRef = db.list('testScore');
        this.testScoreRef.snapshotChanges()
            .subscribe(function (actions) {
            _this.studentScore = [];
            actions.forEach(function (action) {
                // console.log(action.type);
                // console.log(action.key);
                // console.log(action.payload.val());
                // this.studentScore.push({"name":action.payload.val().name,'totalScore':action.payload.val().totalScore , "neg":action.payload.val().neg, "opt":action.payload.val().opt})
            });
        });
        this.testLoadRef = db.object('loadedTest');
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            _this.testLoaded = test.payload.val();
            _this.studentScore = [];
            test.payload.val().studentOptions.forEach(function (options) {
                console.log(options);
                _this.studentScore.push(options);
            });
        });
    }
    TestRemotePageComponent.prototype.testStatus = function (x) {
        if (x == 1) {
            this.testLoadRef.update({ startTest: "start" });
            this.testLoaded.startTest = "start";
        }
        if (x == 2) {
            this.testLoadRef.update({ startTest: "wait" });
            this.testLoaded.startTest = "wait";
        }
        if (x == 3) {
            this.testLoadRef.update({ startTest: "end" });
            this.testLoaded.startTest = "end";
        }
    };
    TestRemotePageComponent.prototype.ngOnInit = function () {
    };
    TestRemotePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-remote-page',
            template: __webpack_require__(/*! ./test-remote-page.component.html */ "./src/app/admin/test-remote-page/test-remote-page.component.html"),
            styles: [__webpack_require__(/*! ./test-remote-page.component.css */ "./src/app/admin/test-remote-page/test-remote-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], TestRemotePageComponent);
    return TestRemotePageComponent;
}());



/***/ }),

/***/ "./src/app/admin/test-selection-page/test-selection-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/test-selection-page/test-selection-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/test-selection-page/test-selection-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/test-selection-page/test-selection-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Test Title</th>\n      <th scope=\"col\">Test Status</th>\n      <th scope=\"col\">No Of Question</th>\n      <th scope=\"col\">Remote</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">{{testLoaded.title}}</th>\n      <td>{{testLoaded.Teststatus}}</td>\n      <td>{{testLoaded.numberOfQuestion.total}}</td>\n      <td>\n        <button type=\"button\" [routerLink]=\"['/remote']\" class=\"btn btn-default\">Remote</button>\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Test Name</th>\n      <th scope=\"col\">Test Status</th>\n      <th scope=\"col\">No Of Questions</th>\n      <th scope=\"col\">-</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let test of totalTests;let i=index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>{{test.title}}</td>\n      <td>{{test.Teststatus}}</td>\n      <td>chem:{{test.numberOfQuestion.chem}} <br>\n        math:{{test.numberOfQuestion.math}} <br>\n        phy:{{test.numberOfQuestion.phy}} <br>\n        total:{{test.numberOfQuestion.total}}\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"testToLoad(test.key)\">Load</button>\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/test-selection-page/test-selection-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/test-selection-page/test-selection-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestSelectionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSelectionPageComponent", function() { return TestSelectionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestSelectionPageComponent = /** @class */ (function () {
    function TestSelectionPageComponent(db, router) {
        var _this = this;
        this.router = router;
        this.totalTests = [];
        this.testsRef = db.list('TESTS');
        this.testLoadRef = db.object('loadedTest');
        this.testsRef.snapshotChanges().subscribe(function (tests) {
            _this.totalTests = [];
            tests.forEach(function (test) {
                var x = test.payload.val();
                x.key = test.key;
                _this.totalTests.push(x);
                console.log(_this.totalTests);
            });
        });
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            _this.testLoaded = test.payload.val();
        });
    }
    TestSelectionPageComponent.prototype.ngOnInit = function () {
    };
    TestSelectionPageComponent.prototype.testToLoad = function (key) {
        var _this = this;
        console.log(key);
        this.totalTests.forEach(function (test) {
            if (test.key == key) {
                _this.testLoaded = test;
                _this.testLoadRef.set(test);
            }
        });
    };
    TestSelectionPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-selection-page',
            template: __webpack_require__(/*! ./test-selection-page.component.html */ "./src/app/admin/test-selection-page/test-selection-page.component.html"),
            styles: [__webpack_require__(/*! ./test-selection-page.component.css */ "./src/app/admin/test-selection-page/test-selection-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TestSelectionPageComponent);
    return TestSelectionPageComponent;
}());



/***/ }),

/***/ "./src/app/app-bootstrap/app-bootstrap.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-bootstrap/app-bootstrap.module.ts ***!
  \*******************************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <p>hi</p> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'examSite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-data.service */ "./src/app/question-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-bootstrap/app-bootstrap.module */ "./src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/question-viewing-page/question-viewing-page.component */ "./src/app/pages/question-viewing-page/question-viewing-page.component.ts");
/* harmony import */ var _admin_add_questions_page_add_questions_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/add-questions-page/add-questions-page.component */ "./src/app/admin/add-questions-page/add-questions-page.component.ts");
/* harmony import */ var _pages_score_reviewing_page_score_reviewing_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/score-reviewing-page/score-reviewing-page.component */ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_waiting_page_waiting_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/waiting-page/waiting-page.component */ "./src/app/pages/waiting-page/waiting-page.component.ts");
/* harmony import */ var _admin_test_remote_page_test_remote_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/test-remote-page/test-remote-page.component */ "./src/app/admin/test-remote-page/test-remote-page.component.ts");
/* harmony import */ var _admin_add_anstoque_page_add_anstoque_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/add-anstoque-page/add-anstoque-page.component */ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.ts");
/* harmony import */ var _admin_adding_question_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/adding-question.service */ "./src/app/admin/adding-question.service.ts");
/* harmony import */ var _admin_load_test_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/load-test.service */ "./src/app/admin/load-test.service.ts");
/* harmony import */ var _admin_add_users_to_test_add_users_to_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/add-users-to-test/add-users-to-test.component */ "./src/app/admin/add-users-to-test/add-users-to-test.component.ts");
/* harmony import */ var _admin_que_options_page_que_options_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/que-options-page/que-options-page.component */ "./src/app/admin/que-options-page/que-options-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _admin_test_selection_page_test_selection_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/test-selection-page/test-selection-page.component */ "./src/app/admin/test-selection-page/test-selection-page.component.ts");
/* harmony import */ var _pages_question_answers_viewing_page_question_answers_viewing_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/question-answers-viewing-page/question-answers-viewing-page.component */ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.ts");
/* harmony import */ var _admin_change_questions_page_change_questions_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/change-questions-page/change-questions-page.component */ "./src/app/admin/change-questions-page/change-questions-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// import { SimpleTimer } from 'ng2-simple-timer';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_17__["QuestionViewingPageComponent"],
                _admin_add_questions_page_add_questions_page_component__WEBPACK_IMPORTED_MODULE_18__["AddQuestionsPageComponent"],
                _pages_score_reviewing_page_score_reviewing_page_component__WEBPACK_IMPORTED_MODULE_19__["ScoreReviewingPageComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _pages_waiting_page_waiting_page_component__WEBPACK_IMPORTED_MODULE_21__["WaitingPageComponent"],
                _admin_test_remote_page_test_remote_page_component__WEBPACK_IMPORTED_MODULE_22__["TestRemotePageComponent"],
                _admin_add_anstoque_page_add_anstoque_page_component__WEBPACK_IMPORTED_MODULE_23__["AddAnstoquePageComponent"],
                _admin_add_users_to_test_add_users_to_test_component__WEBPACK_IMPORTED_MODULE_26__["AddUsersToTestComponent"],
                _admin_que_options_page_que_options_page_component__WEBPACK_IMPORTED_MODULE_27__["QueOptionsPageComponent"],
                _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_28__["SignupPageComponent"],
                _admin_test_selection_page_test_selection_page_component__WEBPACK_IMPORTED_MODULE_29__["TestSelectionPageComponent"],
                _pages_question_answers_viewing_page_question_answers_viewing_page_component__WEBPACK_IMPORTED_MODULE_30__["QuestionAnswersViewingPageComponent"],
                _admin_change_questions_page_change_questions_page_component__WEBPACK_IMPORTED_MODULE_31__["ChangeQuestionsPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_15__["routes"]),
                _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBootstrapModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_11__["CountdownModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(),
            ],
            providers: [_question_data_service__WEBPACK_IMPORTED_MODULE_2__["QuestionDataService"],
                _pages_question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_17__["QuestionViewingPageComponent"],
                _admin_add_anstoque_page_add_anstoque_page_component__WEBPACK_IMPORTED_MODULE_23__["AddAnstoquePageComponent"],
                _admin_adding_question_service__WEBPACK_IMPORTED_MODULE_24__["AddingQuestionService"],
                _admin_load_test_service__WEBPACK_IMPORTED_MODULE_25__["LoadTestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-check.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-check.guard.ts ***!
  \*************************************/
/*! exports provided: AuthCheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCheckGuard", function() { return AuthCheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthCheckGuard = /** @class */ (function () {
    function AuthCheckGuard(rou) {
        this.rou = rou;
    }
    AuthCheckGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('isLoggedIn') == 'true') {
            return true;
        }
        this.rou.navigate(['login']);
        return false;
    };
    AuthCheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthCheckGuard);
    return AuthCheckGuard;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input #email type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input #password type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <!-- <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div> -->\n  <!-- <div class=\"name\">\n    <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n    </div>\n    <input type=\"text\" #name class=\"form-control\" placeholder=\"Name\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n  </div>\n  </div> -->\n  <a class=\"btn btn-primary\" (click)=\"loginWithEmail(email.value , password.value , '')\">Login</a>\n  <!-- <a class=\"btn btn-primary\" (click)=\"signWithEmail()\">Sign In</a> -->\n\n  <p>{{errorMsg}}</p>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginWithEmail = function (email, password, name) {
        var _this = this;
        console.log(email, password);
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            console.log(user);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.afAuth.auth.currentUser.email);
            _this.errorMsg = '';
            location.reload();
            if (email == "t@gmail.com") {
                _this.router.navigate(['remote']);
            }
            if (email != "t@gmail.com") {
                _this.router.navigate(['wait']);
            }
        })
            .catch(function (error) { return _this.errorMsg = error; });
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                localStorage.setItem('uid', auth.uid);
                localStorage.setItem('user', name.toUpperCase());
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\" >Logout</button>\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Questions</th>\n\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let question of totalQuestions;let i=index\">\n      <th scope=\"row\">{{i+1}}</th>\n      <td>\n        <div class=\"card\" style=\"width: 75rem;\">\n          <img class=\"card-img-top\" src=\"{{question}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <!-- <h5 class=\"card-title\">Card title</h5> -->\n            <p class=\"card-text\">Your Option: <strong>{{totalStudentOptions[i]}}</strong> <br>\n                                  correct Options: <strong>{{totalCorrectOtp[i]}}</strong>\n                                </p>\n          </div>\n        </div>\n\n      </td>\n\n    </tr>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: QuestionAnswersViewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersViewingPageComponent", function() { return QuestionAnswersViewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../question-data.service */ "./src/app/question-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionAnswersViewingPageComponent = /** @class */ (function () {
    function QuestionAnswersViewingPageComponent(auth, questionStuDB, storage, san, db, router) {
        this.auth = auth;
        this.questionStuDB = questionStuDB;
        this.storage = storage;
        this.san = san;
        this.router = router;
    }
    QuestionAnswersViewingPageComponent.prototype.ngOnInit = function () {
        this.totalQuestions = this.questionStuDB.totalQuestions;
        this.totalStudentOptions = this.questionStuDB.studentOptions;
        this.totalCorrectOtp = this.questionStuDB.questionCorrectOptions;
        console.log(this.totalStudentOptions);
    };
    QuestionAnswersViewingPageComponent.prototype.logout = function () {
        this.auth.auth.signOut();
        localStorage.clear();
        this.router.navigate(["/login"]);
    };
    QuestionAnswersViewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-answers-viewing-page',
            template: __webpack_require__(/*! ./question-answers-viewing-page.component.html */ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.html"),
            styles: [__webpack_require__(/*! ./question-answers-viewing-page.component.css */ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _question_data_service__WEBPACK_IMPORTED_MODULE_6__["QuestionDataService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QuestionAnswersViewingPageComponent);
    return QuestionAnswersViewingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/question-viewing-page/question-viewing-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/question-viewing-page/question-viewing-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-section{\n  font-size: 75%;\n}\n.btn-jump{\n  /*padding: 1em;*/\n  background-color: #fff;\n  line-height: 80%;\n\n}\n.col-queBtn{\n  padding: 1em;\n  /*padding-left: 3px;*/\n}\n.title-h1{\n\n  background-color: #00b247;\n}\n.question-img-view{\n  border: 1px;\n}\n.btn-review{\n  width: 100%;\n  background-color: #81e8aa;\n}\n.btn-clearOption{\n  width: 100%;\n  background-color: #81e8aa;\n}\n.btn-save{\n  width: 100%;\n  background-color: #7fc19a;\n\n}\n.btn-save-final{\n  width: 50%;\n  background-color: #7fc19a;\n}\n.question-view{\n  height: auto;\n}\n.subject-section{\n  p{\n    background-color: #7fc19a;\n  }\n}\n.question-number{\n  background-color: #81e8aa;\n\n}\n.all-question{\n    background-color: #81e8aa;\n}\n.user-student-clock{\n  background-color: #fff;\n  line-height: 15vh;\n  font-size: 2em;\n  padding-left: 1em;\n  font-weight: bolder;\n}\n.user-stuent{\n  background-color: #fff;\n}\n/*.question-options{\n  transform: scale(20);\n}*/\n"

/***/ }),

/***/ "./src/app/pages/question-viewing-page/question-viewing-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/question-viewing-page/question-viewing-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-h1\">Online Test </h1>\n\n<div class=\"container ml-1 mr-1\">\n\n  <div class=\"row  border border-dark\"  [hidden]=\"questionImgLoad\" >\n    <div class=\"col-10\">\n      <div class=\"row title-section subject-section border-bottom border-dark\">\n        <div class=\"col\">\n          <h6 class=\"mb-0\">Section</h6>\n          <button class=\"btn btn-default\" *ngIf=\"phyQuestionsNumber!=0\" (click)=\"jumpToQuestion(phyQuestionsStartingNumber-1)\">PHY</button>\n          <button class=\"btn btn-default\" *ngIf=\"chemQuestionsNumber!=0\" (click)=\"jumpToQuestion(chemQuestionsStartingNumber-1)\">CHEM</button>\n          <button class=\"btn btn-default\"  *ngIf=\"mathQuestionsNumber!=0\" (click)=\"jumpToQuestion(mathQuestionsStartingNumber-1)\">Math</button>\n\n        </div>\n      </div>\n      <div class=\"row pt-2 title-section question-number border-top border-bottom border-dark\">\n        <div class=\"col\">\n          <!-- <h6>MCQS</h6> -->\n          <h5>Question : {{questionNumber}}</h5>\n        </div>\n      </div>\n      <div class=\"question-view\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <img src=\"{{question}}\" (load)=\"imgCheck()\" class=\"img-fluid\" alt=\"Responsive image\">\n          </div>\n\n        </div>\n        <div class=\"question-options ml-2\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('a')\" [(checked)]=\"checkedAnswer.a\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"a\">\n              <label class=\"form-check-label\" for=\"gridRadios1\">\n                a)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('b')\"  [(checked)]=\"checkedAnswer.b\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"b\">\n              <label class=\"form-check-label\" for=\"gridRadios2\">\n                b)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\"  (change)=\"optionSelected('c')\" [(checked)]=\"checkedAnswer.c\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"c\">\n              <label class=\"form-check-label\" for=\"gridRadios3\">\n                c)\n              </label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <input class=\"form-check-input\" (change)=\"optionSelected('d')\"  [(checked)]=\"checkedAnswer.d\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios4\" value=\"d\">\n              <label class=\"form-check-label\" for=\"gridRadios4\">\n                d)\n              </label>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n\n      <div class=\"row border border-dark\">\n        <div class=\"col-3 pl-0 pr-0\">\n          <div class=\"rewNextbtn\" [hidden]=\"saveBtn\">\n            <button class=\"btn btn-default btn-review border border-dark\" [hidden]=\"reviewBtnText\" (click)=\"markAsreview('mark' , 1)\">Review & next</button>\n            <button class=\"btn btn-default btn-review border border-dark\" [hidden]=\"!reviewBtnText\" (click)=\"markAsreview('unmark', 1)\">UnReview & next</button>\n          </div>\n          <div class=\"rewNextbtn\" [hidden]=\"!saveBtn\">\n            <button class=\"btn btn-default btn-review border border-dark\" [hidden]=\"reviewBtnText\" (click)=\"markAsreview('mark' , 2)\">Review </button>\n            <button class=\"btn btn-default btn-review border border-dark\" [hidden]=\"!reviewBtnText\" (click)=\"markAsreview('unmark', 2)\">UnReview</button>\n          </div>\n        </div>\n        <div class=\"col-3  pl-0 pr-0\">\n          <button class=\"btn btn-default btn-clearOption border border-dark\" (click)=\"clearAlloption('clear')\">Clear options</button>\n        </div>\n\n\n\n\n\n        <div class=\"col-5 offset-1\">\n          <button class=\"btn btn-default btn-save border border-dark\" [hidden]=\"saveBtn\" (click)=\"nextQuestion(1,questionNumber+1)\">Save & next</button>\n          <button class=\"btn btn-default btn-save-final border border-dark\" [hidden]=\"!saveBtn\" (click)=\"nextQuestion('save',questionNumber+1)\">Save</button>\n          <button class=\"btn btn-default btn-save-final border border-dark\" [hidden]=\"!saveBtn\" (click)=\"submit()\">Submit</button>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2 border border-dark all-question\">\n      <div class=\"row border-bottom border-dark user-student-clock\">\n        <countdown [config]=\"{leftTime: examTimer , demand: true}\" #cd1 (finished)=\"submit()\" (event)=\"timerEvent($event)\"> $!h!:$!m!:$!s!</countdown>\n        <!-- <button (click)=\"submit()\" class=\"btn btn-default\">pause</button> -->\n         <!-- <p>Today is {{today }}</p> -->\n\n      </div>\n      <div class=\"row border-bottom border-dark user-student\">\n          <p>Name: {{userName}}</p>\n      </div>\n      <div class=\"row btn-question\">\n        <div class=\"col-1 col-queBtn\" *ngFor=\"let question of totalQuestions ; let i =index\">\n          <button class=\"btn btn-default btn-jump pl-1 pr-1\" (click)=\"jumpToQuestion(i)\" [ngStyle]=\"{'background-color': markAsReview[i]}\" >{{i+1}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/question-viewing-page/question-viewing-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/question-viewing-page/question-viewing-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuestionViewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionViewingPageComponent", function() { return QuestionViewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../question-data.service */ "./src/app/question-data.service.ts");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-simple-timer */ "./node_modules/ng2-simple-timer/index.js");
/* harmony import */ var ng2_simple_timer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_simple_timer__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuestionViewingPageComponent = /** @class */ (function () {
    function QuestionViewingPageComponent(st, questionStuDB, afAuth, storage, san, db, router) {
        var _this = this;
        this.st = st;
        this.questionStuDB = questionStuDB;
        this.afAuth = afAuth;
        this.storage = storage;
        this.san = san;
        this.router = router;
        this.examTimer = 45 * 60;
        this.examLeftTimer = 0;
        this.today = Date.now();
        this.questionOption = null;
        this.questionNumber = 0;
        this.checkedAnswer = {
            a: false,
            b: false,
            c: false,
            d: false,
        };
        this.chemStudentOptions = [];
        this.chemQuestions = [];
        this.phyStudentOptions = [];
        this.phyQuestions = [];
        this.mathStudentOptions = [];
        this.mathQuestions = [];
        this.totalQuestions = [];
        this.totalStudentOptions = [];
        // totalQuestionsNumber=this.questionStuDB.totalNumberOfQuestion;
        this.totalQuestionsNumber = 0;
        this.chemQuestionsNumber = 0;
        this.mathQuestionsNumber = 0;
        this.phyQuestionsNumber = 0;
        this.chemQuestionsStartingNumber = 0;
        this.mathQuestionsStartingNumber = 0;
        this.phyQuestionsStartingNumber = 0;
        this.userName = "";
        this.saveBtn = false;
        this.markAsReview = [];
        this.reviewBtnText = false;
        this.questionImgLoad = true;
        // questionCorrectAnswere=this.questionStuDB.questionCorrectOptions
        this.questionCorrectAnswere = [];
        // userData = {
        //  questionCorrectAnsweres:[]
        //
        // }
        this.timerInt = false;
        this.usersDetails = [];
        this.titleOfTest = "";
        this.variable = '';
        this.itemRef = db.object('statusTest');
        // this.st.newTimer('?usageTimer', 10, true);
        this.itemRef.snapshotChanges().subscribe(function (action) {
            var status = action.payload.val();
            if (status.status == "end") {
                _this.submit();
            }
        });
    }
    QuestionViewingPageComponent.prototype.timerEvent = function (x) {
        // console.log(x)
        this.examLeftTimer = x.left;
        localStorage.setItem('studentUsedTime', JSON.stringify(this.examLeftTimer / 1000));
    };
    QuestionViewingPageComponent.prototype.timerStorage = function () {
        this.pauseTimer();
        this.resumeTimer();
    };
    QuestionViewingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.timerStorage(); }, 5000);
        if (this.questionStuDB.dbStatus == false) {
            this.router.navigate(['wait']);
        }
        this.runTest(this.questionStuDB.testType);
        this.totalStudentOptions = JSON.parse(localStorage.getItem("studentOptions"));
        this.examTimer = JSON.parse(localStorage.getItem("studentUsedTime"));
        this.markAsReview = JSON.parse(localStorage.getItem("studentOptionsReview"));
        this.markAsReview.length = 30;
        this.titleOfTest = this.questionStuDB.titleOfTest;
        // console.log("total que "+this.totalQuestionsNumber)
        this.userName = localStorage.getItem("user");
        if (this.questionStuDB.testType == "run") {
            this.chemQuestionsNumber = this.questionStuDB.chemQuestionsNumber;
            this.mathQuestionsNumber = this.questionStuDB.mathQuestionsNumber;
            this.phyQuestionsNumber = this.questionStuDB.phyQuestionsNumber;
            this.phyQuestionsStartingNumber = 1;
            this.chemQuestionsStartingNumber = this.phyQuestionsNumber + 1;
            this.mathQuestionsStartingNumber = this.phyQuestionsNumber + this.chemQuestionsNumber + 1;
            this.totalQuestions = this.questionStuDB.totalQuestions;
            this.phyQuestions = this.questionStuDB.phyQuestions;
            this.mathQuestions = this.questionStuDB.mathQuestions;
            this.chemQuestions = this.questionStuDB.chemQuestions;
            // for(let i=0;i<this.phyQuestionsNumber;i++)
            // for(let i =0; i<(this.totalQuestionsNumber) ; i++){
            // if(i>=(this.phyQuestionsStartingNumber-1) && i<(this.chemQuestionsStartingNumber-1)){
            //   console.log("phy")
            //   let ref = this.storage.ref(this.questionStuDB.titleOfTest+'/phy('+(i+1)+')');
            //   this.profileUrl = ref.getDownloadURL();
            //   this.profileUrl.subscribe(x => {
            //     // console.log(this.chemQuestions)
            //     this.phyQuestions[i]=x
            //     this.totalQuestions[i]=x
            //     // if(i==0){
            //     //   // console.log("here")
            //     //   this.question=x
            //     //   // console.log(this.chemQuestions)
            //     // }
            //   })
            // }
            // if(i>=(this.chemQuestionsStartingNumber-1) && i<(this.mathQuestionsStartingNumber-1)){
            //   console.log("chem")
            //   let ref = this.storage.ref(this.questionStuDB.titleOfTest+'/chem('+(i+2-this.chemQuestionsStartingNumber)+')');
            //   this.profileUrl = ref.getDownloadURL();
            //   this.profileUrl.subscribe(x => {
            //
            //     this.totalQuestions[i]=x
            //     this.chemQuestions[i]=x
            //     // if(i==0){
            //     //   // console.log("here")
            //     //   this.question=x
            //     //   console.log(this.chemQuestions)
            //     // }
            //   })
            // }
            // if(i>=(this.mathQuestionsStartingNumber-1) && i<(this.totalQuestionsNumber)){
            //   console.log("math")
            //   let ref = this.storage.ref(this.questionStuDB.titleOfTest+'/math('+(i+2-this.mathQuestionsStartingNumber)+')');
            //   this.profileUrl = ref.getDownloadURL();
            //   this.profileUrl.subscribe(x => {
            //     // console.log(this.chemQuestions)
            //
            //     this.mathQuestions[i]=x
            //     this.totalQuestions[i]=x
            //     // if(i==0){
            //     //   // console.log("here")
            //     //   this.question=x
            //     //   // console.log(this.chemQuestions)
            //     // }
            //   })
            // }
            // }
            this.question = this.totalQuestions[0];
            console.log(this.question, this.totalQuestions);
        }
        if (this.questionStuDB.testType == "single") {
            var _loop_1 = function (i) {
                console.log("chem");
                var ref = this_1.storage.ref('chem/chem(' + (i + 1) + ').jpg');
                this_1.profileUrl = ref.getDownloadURL();
                this_1.profileUrl.subscribe(function (x) {
                    // console.log(this.chemQuestions)
                    _this.chemQuestions[i] = x;
                    _this.totalQuestions[i] = x;
                    if (i == 0) {
                        // console.log("here")
                        _this.question = x;
                        // console.log(this.chemQuestions)
                    }
                });
            };
            var this_1 = this;
            for (var i = 0; i < (this.totalQuestionsNumber); i++) {
                _loop_1(i);
            }
        }
        // console.log("math=  "+this.mathQuestions)
        this.questionNumber = 1;
        this.studentOptionRestore();
    };
    QuestionViewingPageComponent.prototype.btn = function () {
        // console.log(this.checkedAnswer.value)
        // console.log(z)
        console.log(this.question);
        console.log(this.chemQuestions);
    };
    QuestionViewingPageComponent.prototype.optionSelected = function (option) {
        // console.log(option);
        // this.checkedAnswer[option] = !this.checkedAnswer.option
        this.questionOption = option;
        if (option == 'a') {
            this.checkedAnswer.a = true;
            this.checkedAnswer.b = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'b') {
            this.checkedAnswer.b = true;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'c') {
            this.checkedAnswer.c = true;
            this.checkedAnswer.b = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.d = false;
        }
        if (option == 'd') {
            this.checkedAnswer.d = true;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
        }
        // console.log(this.checkedAnswer)
    };
    QuestionViewingPageComponent.prototype.clearAlloption = function (x) {
        if (x == "clear") {
            this.checkedAnswer.d = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
            this.questionOption = "";
            console.log("clear");
        }
        if (x == "next") {
            this.checkedAnswer.d = false;
            this.checkedAnswer.a = false;
            this.checkedAnswer.c = false;
            this.checkedAnswer.b = false;
        }
    };
    QuestionViewingPageComponent.prototype.storeLocal = function () {
        localStorage.setItem('studentOptions', JSON.stringify(this.totalStudentOptions));
        localStorage.setItem('studentOptionsReview', JSON.stringify(this.markAsReview));
    };
    QuestionViewingPageComponent.prototype.nextQuestion = function (nextQ, nextQuestionNumber) {
        this.totalStudentOptions[this.questionNumber - 1] = "";
        if (this.questionOption != null) {
            this.totalStudentOptions[this.questionNumber - 1] = this.questionOption;
        }
        if (nextQ == 1) {
            this.markAsReview[this.questionNumber - 1] = "red";
        }
        if (nextQ == 1 && this.questionOption != null) {
            if (this.questionOption != "") {
                console.log(this.markAsReview);
                this.markAsReview[this.questionNumber - 1] = "green";
            }
        }
        if (nextQ != "save") {
            this.question = this.totalQuestions[this.questionNumber + 1 - 1];
            this.questionNumber = nextQuestionNumber;
        }
        this.questionOption = null;
        this.commonFunction();
        if (nextQ == 'save') {
            this.imgCheck();
            this.markAsReview[this.questionNumber - 1] = "green";
        }
        console.log(this.markAsReview);
        console.log(this.totalStudentOptions);
        console.log(this.questionOption);
        this.storeLocal();
    };
    QuestionViewingPageComponent.prototype.checkQuestionNumber = function () {
        if (this.totalQuestionsNumber == this.questionNumber) {
            this.saveBtn = true;
        }
        if (this.totalQuestionsNumber > this.questionNumber) {
            this.saveBtn = false;
        }
    };
    QuestionViewingPageComponent.prototype.jumpToQuestion = function (questionNumberPar) {
        if ((questionNumberPar + 1) != this.questionNumber) {
            console.log(questionNumberPar);
            var prevQuestionNumber = this.questionNumber;
            this.question = this.totalQuestions[questionNumberPar];
            this.questionNumber = questionNumberPar + 1;
            console.log(this.questionNumber);
            this.commonFunction();
            if (this.markAsReview[prevQuestionNumber - 1] != "green") {
                if (this.markAsReview[prevQuestionNumber - 1] != "yellow") {
                    if (this.markAsReview[prevQuestionNumber - 1] != "purple") {
                        this.markAsReview[prevQuestionNumber - 1] = "red";
                    }
                }
            }
        }
    };
    QuestionViewingPageComponent.prototype.markAsreview = function (par, mark) {
        // this.chemQuestions[this.questionNumber-1].style="background-"
        if (par == 'mark') {
            this.markAsReview[this.questionNumber - 1] = "purple";
        }
        if (par == 'unmark') {
            this.markAsReview[this.questionNumber - 1] = "";
        }
        if (par == 'mark' && this.questionOption != null) {
            this.markAsReview[this.questionNumber - 1] = "yellow";
        }
        if (mark != 2) {
            this.nextQuestion(2, this.questionNumber + 1);
        }
        this.checkReviewBtn();
    };
    QuestionViewingPageComponent.prototype.checkReviewBtn = function () {
        if (this.markAsReview[this.questionNumber - 1] != "") {
            console.log(this.markAsReview[this.questionNumber - 1]);
            if (this.markAsReview[this.questionNumber - 1] != "red") {
                if (this.markAsReview[this.questionNumber - 1] != "green") {
                    this.reviewBtnText = true;
                    console.log("here");
                }
            }
        }
        if (this.markAsReview[this.questionNumber - 1] == "" || this.markAsReview[this.questionNumber - 1] == undefined) {
            this.reviewBtnText = false;
        }
    };
    QuestionViewingPageComponent.prototype.studentOptionRestore = function () {
        if (this.totalStudentOptions[this.questionNumber - 1] != "") {
            this.questionOption = this.totalStudentOptions[this.questionNumber - 1];
            if (this.questionOption == 'a') {
                this.checkedAnswer.a = true;
                this.checkedAnswer.b = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'b') {
                this.checkedAnswer.b = true;
                this.checkedAnswer.a = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'c') {
                this.checkedAnswer.c = true;
                this.checkedAnswer.b = false;
                this.checkedAnswer.a = false;
                this.checkedAnswer.d = false;
            }
            if (this.questionOption == 'd') {
                this.checkedAnswer.d = true;
                this.checkedAnswer.a = false;
                this.checkedAnswer.c = false;
                this.checkedAnswer.b = false;
            }
        }
    };
    QuestionViewingPageComponent.prototype.imgCheck = function () {
        this.resumeTimer();
        if (this.timerInt == false) {
            this.counter.begin();
            this.timerInt = true;
        }
        this.questionImgLoad = false;
        // console.log(this.questionImgLoad);
    };
    QuestionViewingPageComponent.prototype.commonFunction = function () {
        this.questionImgLoad = true;
        this.pauseTimer();
        this.clearAlloption("next");
        this.checkQuestionNumber();
        this.checkReviewBtn();
        this.studentOptionRestore();
    };
    QuestionViewingPageComponent.prototype.submit = function () {
        this.totalStudentOptions[this.questionNumber - 1] = "";
        if (this.questionOption != null) {
            this.totalStudentOptions[this.questionNumber - 1] = this.questionOption;
        }
        this.question = this.totalQuestions[this.questionNumber + 1 - 1];
        // console.log(this.totalStudentOptions)
        this.logout();
        this.questionStuDB.studentOptions = this.totalStudentOptions;
        this.questionStuDB.questionCorrectOptions = this.questionCorrectAnswere;
        this.router.navigate(['score']);
    };
    QuestionViewingPageComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.removeItem('studentOptions');
        localStorage.removeItem('studentOptionsReview');
        localStorage.removeItem('studentUsedTime');
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('storeOpt', "storeTrue");
        localStorage.removeItem('email');
    };
    QuestionViewingPageComponent.prototype.check = function () {
        // this.counter.restart();
        this.counter.stop();
        // this.counter.resume();
        // this.counter.pause();
        // this.counter.begin();
    };
    QuestionViewingPageComponent.prototype.pauseTimer = function () {
        this.counter.pause();
    };
    QuestionViewingPageComponent.prototype.resumeTimer = function () {
        this.counter.resume();
    };
    QuestionViewingPageComponent.prototype.startTimer = function () {
        this.counter.begin();
    };
    QuestionViewingPageComponent.prototype.runTest = function (type) {
        if (type == "test") {
            this.totalQuestionsNumber = 12;
            this.questionCorrectAnswere = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c",];
            this.totalStudentOptions = [];
        }
        if (type == "run") {
            this.totalQuestionsNumber = this.questionStuDB.totalNumberOfQuestion;
            this.questionCorrectAnswere = this.questionStuDB.questionCorrectOptions;
            this.totalStudentOptions = [];
        }
        if (type == "single") {
            this.totalQuestionsNumber = 18;
            this.questionCorrectAnswere = ["c", "a", "c", "c", "a",
                "c", "b", "c", "b", "b",
                "c", "c", "c", "c", "c",
                "c", "b", "c"];
            this.chemQuestionsNumber = 18;
            this.mathQuestionsNumber = 0;
            this.phyQuestionsNumber = 0;
            this.chemQuestionsStartingNumber = 1;
            this.mathQuestionsStartingNumber = 0;
            this.phyQuestionsStartingNumber = 0;
            this.totalStudentOptions = [];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_countdown__WEBPACK_IMPORTED_MODULE_6__["CountdownComponent"]),
        __metadata("design:type", ngx_countdown__WEBPACK_IMPORTED_MODULE_6__["CountdownComponent"])
    ], QuestionViewingPageComponent.prototype, "counter", void 0);
    QuestionViewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-viewing-page',
            template: __webpack_require__(/*! ./question-viewing-page.component.html */ "./src/app/pages/question-viewing-page/question-viewing-page.component.html"),
            styles: [__webpack_require__(/*! ./question-viewing-page.component.css */ "./src/app/pages/question-viewing-page/question-viewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_simple_timer__WEBPACK_IMPORTED_MODULE_8__["SimpleTimer"], _question_data_service__WEBPACK_IMPORTED_MODULE_7__["QuestionDataService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], QuestionViewingPageComponent);
    return QuestionViewingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/score-reviewing-page/score-reviewing-page.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/score-reviewing-page/score-reviewing-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3>Score:</h3>\n      <div class=\"row\">\n        <div class=\"col\">\n          <p>Total score: {{totalScore}} </p>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col\">\n          <p>Phy score: {{phyMarks}} </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <p>Chem score: {{chemMarks}} </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <p>Maths score: {{mathMarks}} </p>\n        </div>\n      </div> -->\n      <div class=\"row\">\n        <div class=\"col\">Negative Marks: -{{negativeMarks}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\" >Logout</button>\n"

/***/ }),

/***/ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/score-reviewing-page/score-reviewing-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: ScoreReviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreReviewingPageComponent", function() { return ScoreReviewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question-viewing-page/question-viewing-page.component */ "./src/app/pages/question-viewing-page/question-viewing-page.component.ts");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../question-data.service */ "./src/app/question-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScoreReviewingPageComponent = /** @class */ (function () {
    function ScoreReviewingPageComponent(db, router, queDB, question) {
        this.router = router;
        this.queDB = queDB;
        this.question = question;
        this.correctOptions = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"];
        this.studentOptions = ["a", "b", "c", "a", "c", "c", "b", "b", "c"];
        this.phyMarks = 0;
        this.chemMarks = 0;
        this.mathMarks = 0;
        this.totalScore = 0;
        this.negativeMarks = 0;
        this.testScoreRef = db.list('testScore');
        this.testsRef = db.list('TESTS');
        this.usersRef = db.list('users');
        this.testLoadRef = db.object('loadedTest');
    }
    ScoreReviewingPageComponent.prototype.ngOnInit = function () {
        this.studentOptions = this.queDB.studentOptions;
        this.correctOptions = this.queDB.questionCorrectOptions;
        for (var i = 0; i < this.correctOptions.length; i++) {
            // console.log("here near")
            if (this.studentOptions[i] != "") {
                console.log(this.studentOptions[i]);
                if (this.studentOptions[i] != undefined) {
                    // if(i>=(this.question.phyQuestionsStartingNumber-1) && i<(this.question.chemQuestionsStartingNumber-1)){
                    //   if(this.studentOptions[i]==this.correctOptions[i]){
                    //     this.phyMarks=this.phyMarks+4;
                    //     this.totalScore=this.totalScore+4;
                    //   }
                    //   if(this.studentOptions[i]!=this.correctOptions[i]){
                    //     this.phyMarks=this.phyMarks-1;
                    //     this.negativeMarks++;
                    //   }
                    // }
                    // if(i>=(this.question.chemQuestionsStartingNumber-1) && i<(this.question.mathQuestionsStartingNumber-1)){
                    //   if(this.studentOptions[i]==this.correctOptions[i]){
                    //     this.chemMarks=this.chemMarks+4;
                    //     this.totalScore=this.totalScore+4;
                    //   }
                    //   if(this.studentOptions[i]!=this.correctOptions[i]){
                    //     this.chemMarks=this.chemMarks-1;
                    //     this.negativeMarks++;
                    //   }
                    // }
                    // if(i>=(this.question.mathQuestionsStartingNumber-1) && i<(this.question.totalQuestionsNumber)){
                    //   if(this.studentOptions[i]==this.correctOptions[i]){
                    //     this.mathMarks=this.mathMarks+4;
                    //     this.totalScore=this.totalScore+4;
                    //   }
                    //   if(this.studentOptions[i]!=this.correctOptions[i]){
                    //     this.mathMarks=this.mathMarks-1;
                    //     this.negativeMarks++;
                    //   }
                    // }
                    if (this.studentOptions[i] == this.correctOptions[i]) {
                        // this.mathMarks=this.mathMarks+4;
                        this.totalScore = this.totalScore + 4;
                    }
                    if (this.studentOptions[i] != this.correctOptions[i]) {
                        // this.mathMarks=this.mathMarks-1;
                        this.negativeMarks++;
                    }
                }
            }
        }
        this.totalScore = this.totalScore - this.negativeMarks;
        this.addScoreToDB();
    };
    ScoreReviewingPageComponent.prototype.addScoreToDB = function () {
        var _this = this;
        var count = 0;
        if (localStorage.getItem("storeOpt") == "storeTrue") {
            localStorage.setItem('storeOpt', "storeFalse");
            this.testsRef.snapshotChanges().subscribe(function (tests) {
                var allStudentsOptions = [];
                tests.forEach(function (test) {
                    if (test.key == localStorage.getItem('testKEY')) {
                        if (test.payload.val().studentOptions != undefined) {
                            allStudentsOptions = test.payload.val().studentOptions;
                        }
                        console.log(localStorage.getItem('name'));
                        allStudentsOptions.push({ 'name': localStorage.getItem('name'), 'totalScore': _this.totalScore, "neg": _this.negativeMarks, 'opt': _this.studentOptions, 'uid': localStorage.getItem('uid'), 'studentDBkey': localStorage.getItem('userDBKey') });
                        _this.testsRef.update(localStorage.getItem('testKEY'), { 'studentOptions': allStudentsOptions });
                    }
                });
            });
            this.usersRef.snapshotChanges().subscribe(function (users) {
                var studentAllTestOptions = [];
                users.forEach(function (user) {
                    if (localStorage.getItem('userDBKey') == user.key) {
                        if (user.payload.val().testOptions != undefined) {
                            studentAllTestOptions = user.payload.val().testOptions;
                        }
                        studentAllTestOptions.push({ 'title': localStorage.getItem('titleOfTest'), 'totalScore': _this.totalScore, "neg": _this.negativeMarks, 'opt': _this.studentOptions, 'testDBkey': localStorage.getItem('testKEY') });
                        _this.usersRef.update(localStorage.getItem('userDBKey'), { testOptions: studentAllTestOptions });
                    }
                });
            });
            this.testLoadRef.snapshotChanges().subscribe(function (test) {
                var allStudentsOptionsLoad = [];
                if (test.payload.val().studentOptions != undefined && count == 0) {
                    allStudentsOptionsLoad = test.payload.val().studentOptions;
                }
                if (count == 0) {
                    allStudentsOptionsLoad.push({ 'name': localStorage.getItem('name'), 'totalScore': _this.totalScore, "neg": _this.negativeMarks, 'opt': _this.studentOptions, 'uid': localStorage.getItem('uid'), 'studentDBkey': localStorage.getItem('userDBKey') });
                    _this.testLoadRef.update({ 'studentOptions': allStudentsOptionsLoad });
                    count++;
                }
                console.log(allStudentsOptionsLoad);
            });
            // this.testScoreRef.push({"name":localStorage.getItem('user'),'totalScore':this.totalScore , "neg":this.negativeMarks , 'opt':this.studentOptions})
            localStorage.setItem('storeOpt', "storeFalse");
            // localStorage.removeItem('user')
        }
    };
    ScoreReviewingPageComponent.prototype.logout = function () {
        this.question.logout();
        this.router.navigate(['login']);
        localStorage.clear();
        // console.log(localStorage.getItem('name'))
    };
    ScoreReviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score-reviewing-page',
            template: __webpack_require__(/*! ./score-reviewing-page.component.html */ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./score-reviewing-page.component.css */ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _question_data_service__WEBPACK_IMPORTED_MODULE_2__["QuestionDataService"], _question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_1__["QuestionViewingPageComponent"]])
    ], ScoreReviewingPageComponent);
    return ScoreReviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input #email type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputName1\">Your Name</label>\n    <input #name type=\"text\" class=\"form-control\" id=\"exampleInputName1\" aria-describedby=\"emailHelp\" placeholder=\"Enter your name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input #password type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwordConfirmation\">Confirm Password </label>\n    <input #passwordConfirmation type=\"password\" class=\"form-control\" id=\"passwordConfirmation\" placeholder=\"Password\">\n  </div>\n  <!-- <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div> -->\n\n  <a class=\"btn btn-primary\" (click)=\"signWithEmail(email.value , password.value , passwordConfirmation.value, name.value)\">Sign In</a>\n  <p>{{errorMsg}}</p>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(db, afAuth, router) {
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.usersRef = db.list('users');
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.signWithEmail = function (email, password, passwordCon, name) {
        var _this = this;
        if (passwordCon != password)
            return this.errorMsg = "Password Doesn't Match";
        if (passwordCon == password)
            this.errorMsg = "";
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            // console.log(email, password)
            console.log(user);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.afAuth.auth.currentUser.email);
            _this.afAuth.authState.subscribe(function (auth) {
                if (auth) {
                    localStorage.setItem('uid', auth.uid);
                    _this.usersRef.push({ 'name': name, 'email': email, 'password': password, 'uid': user.user.uid });
                }
                _this.afAuth.auth.signOut();
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.removeItem('email');
                localStorage.removeItem('uid');
                _this.router.navigate(['login']);
            });
        }).catch(function (error) {
            console.error(error);
            _this.errorMsg = error;
        });
    };
    SignupPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/pages/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.css */ "./src/app/pages/signup-page/signup-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/waiting-page/waiting-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/waiting-page/waiting-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/waiting-page/waiting-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/waiting-page/waiting-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" *ngIf=\"loadTest\">\n<h1 class=\"pb-5\">Welcome {{name}}.</h1>\n<h2 class=\"pt-5 pb-5\">Do check your answers once again <br>if you have time.... NO HURRY.</h2>\n<h3>PLEASE WAIT..</h3>\n<p>{{StatusText}}</p>\n</div>\n<div class=\"\" *ngIf=\"!loadTest\">\n  <h1>Thank You!!</h1>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\" >Logout</button>\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"show()\" >Show answers</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/waiting-page/waiting-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/waiting-page/waiting-page.component.ts ***!
  \**************************************************************/
/*! exports provided: WaitingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingPageComponent", function() { return WaitingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../question-data.service */ "./src/app/question-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WaitingPageComponent = /** @class */ (function () {
    function WaitingPageComponent(auth, db, router, queDb) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.queDb = queDb;
        this.StatusText = "";
        this.today = Date.now();
        this.loadTest = true;
        this.itemRef = db.object('statusTest');
        this.usersRef = db.list('users');
        this.usersRef.snapshotChanges()
            .subscribe(function (actions) {
            actions.forEach(function (action) {
                // console.log(action.type);
                // console.log();
                console.log(action.payload.val());
                if (action.payload.val().uid == localStorage.getItem('uid')) {
                    _this.name = action.payload.val().name;
                    localStorage.setItem('user', action.payload.val().name);
                    localStorage.setItem('name', action.payload.val().name);
                    // console.log(localStorage.getItem('name'))
                    localStorage.setItem('userDBKey', action.key);
                }
            });
        });
        // this.queDb.getTest("single")
        this.testLoadRef = db.object('loadedTest');
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            status = test.payload.val().startTest;
            _this.DBTestStatus = status;
            _this.StatusText = status;
            if (test.payload.val().studentOptions != undefined) {
                test.payload.val().studentOptions.forEach(function (testStu) {
                    console.log(testStu.studentDBkey);
                    if (testStu.studentDBkey == localStorage.getItem("userDBKey")) {
                        // this.router.navigate(['viewAnswers'])
                        _this.loadTest = false;
                    }
                });
            }
        });
        this.setInterval = setInterval(function () { _this.checkDB(); }, 1000);
        //     this.itemRef.snapshotChanges().subscribe(action => {
        //       let status =action.payload.val()
        //       if(this.queDb.dbStatus==false){
        //         this.StatusText=status.status
        //         this.itemRef.set({ status: "wait" });
        //
        //       }
        //       if(this.queDb.dbStatus==true){
        //         this.StatusText=status.status
        //
        //         if(status.status=="start" ){
        //           localStorage.setItem('presentTestTitle',this.queDb.titleOfTest)
        //           if(JSON.parse(localStorage.getItem("studentOptions"))==undefined){
        //             localStorage.setItem('studentOptions',JSON.stringify([]))
        //             localStorage.setItem('studentOptionsReview',JSON.stringify([]))
        //             localStorage.setItem('studentUsedTime',JSON.stringify(45*60))
        //             localStorage.setItem('storeOpt',"waiting")
        //
        //           }
        //           console.log(JSON.parse(localStorage.getItem("studentOptions")))
        //           this.router.navigate(['view'])
        //         }
        //       }
        //
        // });
        this.item = this.itemRef.valueChanges();
    }
    WaitingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testLoadRef.snapshotChanges().subscribe(function (test) {
            _this.testLoaded = test.payload.val();
            _this.queDb.getTest("run", test.payload.val().key);
            localStorage.setItem('testKEY', test.payload.val().key);
            localStorage.setItem('titleOfTest', test.payload.val().title);
        });
        var atuser = this.queDb.testUserAtCommand;
        var count = 0;
        console.log(atuser);
        console.log(localStorage.getItem('email'));
        // for(let i=0; i<atuser.length;i++){
        //   if(atuser[i]!=localStorage.getItem('email')){
        //     count++
        //     console.log("here here")
        //   }
        // }
        // if(count!=atuser.length){
        //   this.router.navigate(['view'])
        // }
        // this.itemRef.set({ status: "wait" });
    };
    WaitingPageComponent.prototype.checkDB = function () {
        console.log("its");
        if (this.loadTest == true) {
            if (this.queDb.dbStatus == false) {
                this.StatusText = status;
                // this.itemRef.set({ status: "wait" });
            }
            if (this.queDb.dbStatus == true) {
                this.StatusText = status;
                if (status == "start") {
                    // localStorage.setItem('presentTestTitle',this.queDb.titleOfTest)
                    if (JSON.parse(localStorage.getItem("studentOptions")) == undefined) {
                        localStorage.setItem('studentOptions', JSON.stringify([]));
                        localStorage.setItem('studentOptionsReview', JSON.stringify([]));
                        localStorage.setItem('studentUsedTime', JSON.stringify(this.testLoaded.time * 60));
                        localStorage.setItem('storeOpt', "waiting");
                    }
                    console.log(JSON.parse(localStorage.getItem("studentOptions")));
                    clearInterval(this.setInterval);
                    this.router.navigate(['view']);
                }
            }
        }
        if (this.loadTest == false) {
            clearInterval(this.setInterval);
        }
    };
    WaitingPageComponent.prototype.logout = function () {
        this.auth.auth.signOut();
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    WaitingPageComponent.prototype.show = function () {
        this.queDb.studentOptionsCheck(localStorage.getItem('testKEY'), localStorage.getItem('userDBKey'));
    };
    WaitingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waiting-page',
            template: __webpack_require__(/*! ./waiting-page.component.html */ "./src/app/pages/waiting-page/waiting-page.component.html"),
            styles: [__webpack_require__(/*! ./waiting-page.component.css */ "./src/app/pages/waiting-page/waiting-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _question_data_service__WEBPACK_IMPORTED_MODULE_4__["QuestionDataService"]])
    ], WaitingPageComponent);
    return WaitingPageComponent;
}());



/***/ }),

/***/ "./src/app/question-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/question-data.service.ts ***!
  \******************************************/
/*! exports provided: QuestionDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDataService", function() { return QuestionDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionDataService = /** @class */ (function () {
    // itemRef: AngularFireObject<any>;
    // item: Observable<any>;
    function QuestionDataService(router, storage, db) {
        this.router = router;
        this.storage = storage;
        this.studentOptions = [];
        this.questionCorrectOptions = [];
        this.allUsersOption = [];
        this.testUserAtCommand = [];
        this.totalNumberOfQuestion = 0;
        this.dbStatus = false;
        this.keyOfTheTest = "";
        this.titleOfTest = '';
        this.chemQuestionsNumber = 0;
        this.mathQuestionsNumber = 0;
        this.phyQuestionsNumber = 0;
        this.chemStudentOptions = [];
        this.chemQuestions = [];
        this.phyStudentOptions = [];
        this.phyQuestions = [];
        this.mathStudentOptions = [];
        this.mathQuestions = [];
        this.totalQuestions = [];
        this.totalStudentOptions = [];
        this.testsRef = db.list('TESTS');
        // this.testsRef.snapshotChanges()
        // .subscribe(actions => {
        //   actions.forEach(action => {
        //     console.log(action.type);
        //     console.log(action.key);
        //     console.log(action.payload.val());
        //   });
        // });
    }
    QuestionDataService.prototype.getTest = function (type, key) {
        var _this = this;
        this.testType = type;
        if (type == "run") {
            this.testsRef.snapshotChanges()
                .subscribe(function (actions) {
                actions.forEach(function (action) {
                    //  console.log(action.type);
                    //  console.log(action.key);
                    console.log(action.payload.val());
                    if (action.key == key) {
                        console.log("found");
                        _this.keyOfTheTest = action.key;
                        _this.questionCorrectOptions = action.payload.val().correctOptions.totalQue;
                        _this.totalNumberOfQuestion = action.payload.val().numberOfQuestion.total;
                        _this.allUsersOption = action.payload.val().studentOptions;
                        _this.testUserAtCommand = action.payload.val().atCommand;
                        _this.titleOfTest = action.payload.val().title;
                        _this.mathQuestionsNumber = action.payload.val().numberOfQuestion.math;
                        _this.chemQuestionsNumber = action.payload.val().numberOfQuestion.chem;
                        _this.phyQuestionsNumber = action.payload.val().numberOfQuestion.phy;
                        console.log("total question from db   " + _this.titleOfTest);
                        _this.setInterval = setInterval(function () { _this.checkDBStatus(); }, 1000);
                        _this.getQuestionUrl();
                    }
                });
            });
        }
        if (type != "run") {
            console.log(type);
            this.dbStatus = true;
        }
    };
    QuestionDataService.prototype.submitAfterTest = function (user, options) {
        if (this.allUsersOption.length == 0) {
            this.allUsersOption.push({ userName: user, userOptions: options });
            this.testsRef.update(this.keyOfTheTest, { studentOptions: this.allUsersOption });
        }
        this.allUsersOption.push({ userName: user, userOptions: options });
        this.testsRef.update(this.keyOfTheTest, { studentOptions: this.allUsersOption });
    };
    QuestionDataService.prototype.getQuestionUrl = function () {
        var _this = this;
        var _loop_1 = function (i) {
            console.log("phy");
            var ref = this_1.storage.ref(this_1.titleOfTest + '/phy(' + (i + 1) + ')');
            this_1.profileUrl = ref.getDownloadURL();
            this_1.profileUrl.subscribe(function (x) {
                _this.phyQuestions[i] = x;
                _this.totalQuestions[i] = x;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.phyQuestionsNumber; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            console.log("chem");
            var ref = this_2.storage.ref(this_2.titleOfTest + '/chem(' + (i + 1) + ')');
            this_2.profileUrl = ref.getDownloadURL();
            this_2.profileUrl.subscribe(function (x) {
                _this.chemQuestions[i] = x;
                _this.totalQuestions[i + _this.phyQuestionsNumber] = x;
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.chemQuestionsNumber; i++) {
            _loop_2(i);
        }
        var _loop_3 = function (i) {
            console.log("math");
            var ref = this_3.storage.ref(this_3.titleOfTest + '/math(' + (i + 1) + ')');
            this_3.profileUrl = ref.getDownloadURL();
            this_3.profileUrl.subscribe(function (x) {
                _this.mathQuestions[i] = x;
                _this.totalQuestions[i + _this.phyQuestionsNumber + _this.chemQuestionsNumber] = x;
            });
        };
        var this_3 = this;
        for (var i = 0; i < this.mathQuestionsNumber; i++) {
            _loop_3(i);
        }
        console.log(this.totalQuestions.length);
    };
    QuestionDataService.prototype.checkDBStatus = function () {
        if (this.totalQuestions.length == this.totalNumberOfQuestion) {
            this.dbStatus = true;
            clearInterval(this.setInterval);
        }
    };
    QuestionDataService.prototype.studentOptionsCheck = function (Testkey, userKey) {
        var _this = this;
        this.testsRef.snapshotChanges().subscribe(function (tests) {
            tests.forEach(function (test) {
                if (Testkey == test.key) {
                    test.payload.val().studentOptions.forEach(function (user) {
                        if (userKey == user.studentDBkey) {
                            console.log(user);
                            _this.studentOptions = user.opt;
                            _this.questionCorrectOptions = test.payload.val().correctOptions.totalQue;
                            _this.titleOfTest = test.payload.val().title;
                            console.log(_this.questionCorrectOptions);
                            _this.router.navigate(['/viewAnswers']);
                        }
                    });
                }
            });
        });
        this.getQuestionUrl();
    };
    QuestionDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], QuestionDataService);
    return QuestionDataService;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/question-viewing-page/question-viewing-page.component */ "./src/app/pages/question-viewing-page/question-viewing-page.component.ts");
/* harmony import */ var _admin_add_questions_page_add_questions_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/add-questions-page/add-questions-page.component */ "./src/app/admin/add-questions-page/add-questions-page.component.ts");
/* harmony import */ var _pages_score_reviewing_page_score_reviewing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/score-reviewing-page/score-reviewing-page.component */ "./src/app/pages/score-reviewing-page/score-reviewing-page.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_waiting_page_waiting_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/waiting-page/waiting-page.component */ "./src/app/pages/waiting-page/waiting-page.component.ts");
/* harmony import */ var _admin_test_remote_page_test_remote_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/test-remote-page/test-remote-page.component */ "./src/app/admin/test-remote-page/test-remote-page.component.ts");
/* harmony import */ var _admin_add_anstoque_page_add_anstoque_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/add-anstoque-page/add-anstoque-page.component */ "./src/app/admin/add-anstoque-page/add-anstoque-page.component.ts");
/* harmony import */ var _admin_add_users_to_test_add_users_to_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/add-users-to-test/add-users-to-test.component */ "./src/app/admin/add-users-to-test/add-users-to-test.component.ts");
/* harmony import */ var _admin_que_options_page_que_options_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/que-options-page/que-options-page.component */ "./src/app/admin/que-options-page/que-options-page.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _admin_test_selection_page_test_selection_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/test-selection-page/test-selection-page.component */ "./src/app/admin/test-selection-page/test-selection-page.component.ts");
/* harmony import */ var _pages_question_answers_viewing_page_question_answers_viewing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/question-answers-viewing-page/question-answers-viewing-page.component */ "./src/app/pages/question-answers-viewing-page/question-answers-viewing-page.component.ts");
/* harmony import */ var _admin_change_questions_page_change_questions_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/change-questions-page/change-questions-page.component */ "./src/app/admin/change-questions-page/change-questions-page.component.ts");
/* harmony import */ var _auth_check_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-check.guard */ "./src/app/auth-check.guard.ts");














var routes = [
    { path: '', redirectTo: 'wait', pathMatch: 'full' },
    { path: 'view',
        component: _pages_question_viewing_page_question_viewing_page_component__WEBPACK_IMPORTED_MODULE_0__["QuestionViewingPageComponent"],
        canActivate: [_auth_check_guard__WEBPACK_IMPORTED_MODULE_13__["AuthCheckGuard"]],
    },
    { path: 'remote',
        component: _admin_test_remote_page_test_remote_page_component__WEBPACK_IMPORTED_MODULE_5__["TestRemotePageComponent"],
        canActivate: [_auth_check_guard__WEBPACK_IMPORTED_MODULE_13__["AuthCheckGuard"]],
    },
    { path: 'score',
        component: _pages_score_reviewing_page_score_reviewing_page_component__WEBPACK_IMPORTED_MODULE_2__["ScoreReviewingPageComponent"]
    },
    { path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    { path: 'wait',
        component: _pages_waiting_page_waiting_page_component__WEBPACK_IMPORTED_MODULE_4__["WaitingPageComponent"],
        canActivate: [_auth_check_guard__WEBPACK_IMPORTED_MODULE_13__["AuthCheckGuard"]],
    },
    { path: 'addquestions',
        component: _admin_add_questions_page_add_questions_page_component__WEBPACK_IMPORTED_MODULE_1__["AddQuestionsPageComponent"],
    },
    { path: 'addAns',
        component: _admin_add_anstoque_page_add_anstoque_page_component__WEBPACK_IMPORTED_MODULE_6__["AddAnstoquePageComponent"],
    },
    { path: 'addUser',
        component: _admin_add_users_to_test_add_users_to_test_component__WEBPACK_IMPORTED_MODULE_7__["AddUsersToTestComponent"],
    },
    { path: 'checkAdminOptions',
        component: _admin_que_options_page_que_options_page_component__WEBPACK_IMPORTED_MODULE_8__["QueOptionsPageComponent"],
    },
    { path: 'signup',
        component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_9__["SignupPageComponent"],
    },
    { path: 'load',
        component: _admin_test_selection_page_test_selection_page_component__WEBPACK_IMPORTED_MODULE_10__["TestSelectionPageComponent"],
    },
    { path: 'viewAnswers',
        component: _pages_question_answers_viewing_page_question_answers_viewing_page_component__WEBPACK_IMPORTED_MODULE_11__["QuestionAnswersViewingPageComponent"],
    },
    { path: 'change',
        component: _admin_change_questions_page_change_questions_page_component__WEBPACK_IMPORTED_MODULE_12__["ChangeQuestionsPageComponent"],
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAYlf2mrOOefjGIA1C9NNiSMxsAv1PE72g",
        authDomain: "creeper-fa765.firebaseapp.com",
        databaseURL: "https://creeper-fa765.firebaseio.com",
        projectId: "creeper-fa765",
        storageBucket: "creeper-fa765.appspot.com",
        messagingSenderId: "943257830273"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thrilok/workspace/projects/exam-site/examSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map