"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var champions_component_1 = require('./champions.component');
var champion_detail_component_1 = require("./champion-detail.component");
var settings_component_1 = require('./settings.component');
var settings_service_1 = require('./settings.service');
var lookup_component_1 = require('./lookup.component');
var lookup_detail_component_1 = require('./lookup-detail.component');
var routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'champions', component: champions_component_1.ChampionsComponent },
    { path: 'items', loadChildren: './app/items.module' },
    { path: 'champions/detail/:id', component: champion_detail_component_1.ChampionDetailComponant },
    { path: 'settings', canActivate: [settings_service_1.AuthGuard], component: settings_component_1.SettingsComponent },
    { path: 'lookup', component: lookup_component_1.LookupComponent },
    { path: 'lookup/matchhistory/:name', component: lookup_detail_component_1.LookupDetailComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map