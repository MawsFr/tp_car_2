webpackJsonp([1,5],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesBrowserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyFile = (function () {
    function MyFile(name, size, isDirectory, path) {
        this.name = name;
        this.size = size;
        this.isDirectory = isDirectory;
        this.path = path;
        this.setCurrentClasses();
    }
    MyFile.prototype.setCurrentClasses = function () {
        this.currentClasses = {
            'fa-file': !this.isDirectory,
            'fa-folder': this.isDirectory,
        };
    };
    return MyFile;
}());

var FilesBrowserComponent = (function () {
    function FilesBrowserComponent(fileService, router, route, location) {
        this.fileService = fileService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    FilesBrowserComponent.prototype.ngOnInit = function () {
    };
    FilesBrowserComponent.prototype.chooseFile = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.browse').click();
    };
    FilesBrowserComponent.prototype.newDir = function () {
        var file = new MyFile('', 0, true, this.fileService.currentPath);
        var modalConfig = {
            title: "Créer un nouveau dossier",
            text: "Entrez le nom",
            file: file,
            name: '',
            fileService: this.fileService,
            callback: function () {
                debugger;
                this.fileService.createDirectory();
            }
        };
        this.fileService.openModal(modalConfig);
    };
    FilesBrowserComponent.prototype.upload = function ($event) {
        var files = $event.srcElement.files;
        this.fileService.upload(files);
    };
    FilesBrowserComponent.prototype.splitCurrentPath = function () {
        return this.fileService.currentPath.split('/');
    };
    return FilesBrowserComponent;
}());
FilesBrowserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-files',
        template: __webpack_require__(267),
        styles: [__webpack_require__(251)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], FilesBrowserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=files-browser.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 172;


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(192);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'File Navigator';
        this.options = {
            position: ["bottom", "right"],
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            lastOnBottom: true
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(265),
        styles: [__webpack_require__(250)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__files_browser_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_files_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_file_name_edit_modal_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_notifications__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__files_browser_component__["a" /* FilesBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_files_component__["a" /* FilesComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_file_name_edit_modal_component__["a" /* FileNameEditModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/files',
                    pathMatch: 'full',
                },
                {
                    path: 'files',
                    component: __WEBPACK_IMPORTED_MODULE_7__files_browser_component__["a" /* FilesBrowserComponent */],
                    children: [
                        {
                            path: '**',
                            component: __WEBPACK_IMPORTED_MODULE_9_app_files_component__["a" /* FilesComponent */]
                        }
                    ]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__file_service__["a" /* FileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10_app_file_name_edit_modal_component__["a" /* FileNameEditModalComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileNameEditModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// #editName
var FileNameEditModalComponent = (function () {
    function FileNameEditModalComponent(fileService) {
        this.fileService = fileService;
    }
    FileNameEditModalComponent.prototype.ngOnInit = function () {
    };
    FileNameEditModalComponent.prototype.validate = function () {
        debugger;
        this.fileService.modalConfig.callback();
    };
    return FileNameEditModalComponent;
}());
FileNameEditModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-name-modal',
        template: __webpack_require__(266)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === "function" && _a || Object])
], FileNameEditModalComponent);

var _a;
//# sourceMappingURL=file-name-edit-modal.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilesComponent = (function () {
    function FilesComponent(fileService, router, route, location) {
        this.fileService = fileService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    FilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
            .forEach(function (event) {
            _this.parseUrl();
        });
        this.fileService.onFileUploadFinish.subscribe(function (file) {
            _this.addFile(file);
        });
        this.fileService.onDirectoryCreated.subscribe(function (file) {
            _this.addFile(file);
        });
    };
    FilesComponent.prototype.parseUrl = function () {
        var parentRoot = this.router.routerState.root.firstChild;
        if (parentRoot.snapshot.url.map(function (p) { return p.path; }).join('/') === 'files') {
            var path = '';
            // Child route is optional, in case the user has browsed to just "/browse"
            var childRoute = parentRoot.firstChild;
            if (childRoute && childRoute.snapshot) {
                path = childRoute.snapshot.url.map(function (p) { return p.path; }).join('/');
                this.fileService.currentPath = path;
                this.fileService.currentPathSplit = path.split('/');
                console.log('New browser path is ', path);
            }
            this.getFiles();
        }
    };
    FilesComponent.prototype.getFiles = function () {
        var _this = this;
        this.fileService.listFiles().then(function (files) { return _this.files = files; });
    };
    FilesComponent.prototype.go = function (directory) {
        if (directory.isDirectory) {
            this.router.navigate(['/files/' + directory.path]);
        }
    };
    FilesComponent.prototype.download = function (file) {
        this.fileService.download(file.path, file.name);
    };
    FilesComponent.prototype.addFile = function (file) {
        this.files.push(file);
        // this.files.sort();
    };
    FilesComponent.prototype.delete = function (file) {
        var _this = this;
        this.fileService.delete(file.path).then(function (e) {
            _this.files.splice(_this.files.indexOf(file), 1);
        });
    };
    FilesComponent.prototype.rename = function (file) {
        var modalConfig = {
            title: "Renommez le fichier ou le dossier",
            text: "Entrez le nom",
            file: file,
            name: '',
            fileService: this.fileService,
            callback: function () {
                this.fileService.renameDirectory();
            }
        };
        this.fileService.openModal(modalConfig);
    };
    return FilesComponent;
}());
FilesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-files',
        template: __webpack_require__(268),
        styles: [__webpack_require__(252)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object])
], FilesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=files.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "i.action,\r\ni.fa-folder {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "i.action,\r\ni.fa-folder {\r\n    cursor: pointer;\r\n}\r\n.browse {\r\n    position: absolute;\r\n    margin-top: 3px;\r\n    margin-left: 3px;\r\n    height: 1px;\r\n    width: 1px;\r\n    z-index: -5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "i.action,\r\ni.fa-folder {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"row\">\n        {{title}}\n    </h1>\n    <router-outlet></router-outlet>\n    <edit-name-modal></edit-name-modal>\n    <simple-notifications id=\"notif\" [options]=\"options\"></simple-notifications>\n</div>"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<div id=\"edit-name\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">{{this.fileService.modalConfig.title}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"name\">{{this.fileService.modalConfig.text}}</label>\n        <input name=\"name\" type=\"text\" [(ngModel)]=\"this.fileService.modalConfig.name\" placeholder=\"Nom\"/>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-success\" type=\"button\" data-dismiss=\"modal\" (click)=\"validate()\">Valider</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<nav class=\"breadcrumb row\">\n    <a class=\"breadcrumb-item\" href=\"#\">Home</a>\n    <a *ngFor=\"let item of fileService.currentPathSplit; let i = index; let last = last\" class=\"breadcrumb-item\" [ngClass]=\"{active: last}\"[routerLink]=\"['/files/' + fileService.getPathByIndex(i)]\">{{item}}</a>\n  </nav>\n  <div class=\"row\">\n    <div id=\"toolbar\" class=\"btn-toolbar\" role=\"toolbar\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"newDir()\"><i class=\"fa fa-plus\"></i></button>\n        <button id=\"choose_file\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"chooseFile()\"><i class=\"fa fa-upload\"></i></button>\n        <input id=\"choose_file_input\" type=\"file\" name=\"film\" id=\"file\" class=\"browse\" (change)=\"upload($event)\">\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <table id=\"files_table\" class=\"table table-striped table-hover table-responsiv\">\n        <thead class=\"thead-inverse\">\n            <tr scope=\"row\">\n                <th>Nom</th>\n                <th>Taille</th>\n                <th colspan=\"3\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr scope=\"row\" *ngFor=\"let file of files\">\n                <td class=\"filename\"><i class=\"fa fa-2x\" [ngClass]=\"file.currentClasses\" aria-hidden=\"true\" (click)=\"go(file)\"></i>\n                    <h6>{{file.name}}</h6>\n                </td>\n                <td class=\"filesize\">{{file.size}} octet{{file.size === 1 ? '' : 's'}}</td>\n                <td class=\"filesize\"><i title=\"Télécharger\" (click)=\"download(file)\" class=\"action fa fa-2x fa-download\" aria-hidden=\"true\"></i></td>\n                <td class=\"filesize\"><i title=\"Renommer\" (click)=\"rename(file)\" class=\"action fa fa-2x fa-pencil\" aria-hidden=\"true\"></i></td>\n                <td class=\"filesize\"><i title=\"Supprimer\" (click)=\"delete(file)\" class=\"action fa fa-2x fa-trash\" aria-hidden=\"true\"></i></td>\n            </tr>\n        </tbody>\n        <!--<tfoot>\n                <tr>\n                    <td colspan=\"5\">\n                        <nav aria-label=\"Page navigation example\">\n                            <ul class=\"pagination justify-content-center\">\n                                <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                        <span aria-hidden=\"true\">&laquo;</span>\n                                        <span class=\"sr-only\">Previous</span>\n                                    </a>\n                                </li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                        <span aria-hidden=\"true\">&raquo;</span>\n                                        <span class=\"sr-only\">Next</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </td>\n                </tr>\n            </tfoot>-->\n    </table>\n</div>"

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__files_browser_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__(136);
/* unused harmony export ModalConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalConfig = (function () {
    function ModalConfig() {
    }
    return ModalConfig;
}());

var FileService = (function () {
    function FileService(http, notifService) {
        this.http = http;
        this.notifService = notifService;
        this.LIST_FILE_URL = '/api/files/list/';
        this.DOWNLOAD_FILE_URL = '/api/files/download/';
        this.UPLOAD_FILE_URL = '/api/files/upload/';
        this.DELETE_FILE_URL = '/api/files/delete/';
        this.CREATE_DIR_URL = '/api/files/createdir/';
        this.RENAME_URL = '/api/files/rename/';
        this.MODAL_ID = '#edit-name';
        this.onFileUploadFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDirectoryCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDirectoryRename = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentPath = '';
        this.currentPathSplit = [];
        this.modalConfig = new ModalConfig();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.UPLOAD_FILE_URL });
    }
    FileService.prototype.listFiles = function () {
        var _this = this;
        return this.http.get(this.LIST_FILE_URL + this.currentPath)
            .toPromise()
            .then(function (response) { return response.json().map(function (_a) {
            var name = _a.name, size = _a.size, isDirectory = _a.isDirectory, path = _a.path;
            return new __WEBPACK_IMPORTED_MODULE_1__files_browser_component__["b" /* MyFile */](name, size, isDirectory, path);
        }); })
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.download = function (path, filename) {
        var _this = this;
        return this.http.get(this.DOWNLOAD_FILE_URL + path, { responseType: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* ResponseContentType */].Blob }).toPromise()
            .then(function (response) {
            var data = new Blob([response.blob()]);
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](data, filename);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.handleError = function (error) {
        debugger;
        this.notifService.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    FileService.prototype.upload = function (files) {
        var _this = this;
        this.notifService.warn('Upload en cours', 'Le fichier ' + files[0].name + ' est en cours d\'upload');
        this.uploader.options.url = this.UPLOAD_FILE_URL + this.currentPath;
        this.uploader.addToQueue(files);
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (status === 200) {
                var file = JSON.parse(response);
                var newFile = new __WEBPACK_IMPORTED_MODULE_1__files_browser_component__["b" /* MyFile */](file.name, file.size, file.isDirectory, file.path);
                _this.notifService.success('Upload réussi', 'Le fichier ' + file.name + ' a bien été uploadé');
                _this.onFileUploadFinish.emit(newFile);
            }
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.handleError(JSON.parse(response));
        };
    };
    FileService.prototype.createDirectory = function (name) {
        var _this = this;
        name = name || this.modalConfig.name;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.CREATE_DIR_URL + this.currentPath, { name: name }, options)
            .toPromise()
            .then(function (response) {
            var file = response.json();
            _this.modalConfig.file.name = file.name;
            _this.modalConfig.file.size = file.size;
            _this.modalConfig.file.isDirectory = file.isDirectory;
            _this.modalConfig.file.path = file.path;
            _this.modalConfig.file.setCurrentClasses();
            _this.notifService.success('Dossier créé', 'Le dossier ' + file.name + ' a été créé');
            _this.onDirectoryCreated.emit(_this.modalConfig.file);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.delete = function (path) {
        var _this = this;
        return this.http.delete(this.DELETE_FILE_URL + path)
            .toPromise()
            .then(function () {
            _this.notifService.success('Fichier / Dossier supprimé', 'Le fichier / dossier ' + path + ' a été supprimé');
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    FileService.prototype.openModal = function (config) {
        this.modalConfig = config;
        $(this.MODAL_ID).modal('show');
    };
    FileService.prototype.getPathByIndex = function (index) {
        index++;
        var temp = this.currentPathSplit.slice(0, index);
        return temp.join('/');
    };
    FileService.prototype.renameDirectory = function () {
        var _this = this;
        debugger;
        var name = this.modalConfig.name;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var data = { 'newName': name, 'name': this.modalConfig.file.name };
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.RENAME_URL + this.currentPath, data, options)
            .toPromise()
            .then(function (response) {
            _this.modalConfig.file.name = name;
            _this.notifService.success('Fichier renommé', 'Le fichier ' + name + ' a bien été uploadé');
            // this.onDirectoryRename.emit(this.modalConfig.file);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    return FileService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FileService.prototype, "onFileUploadFinish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FileService.prototype, "onDirectoryCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], FileService.prototype, "onDirectoryRename", void 0);
FileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* NotificationsService */]) === "function" && _e || Object])
], FileService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=file.service.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.bundle.js.map