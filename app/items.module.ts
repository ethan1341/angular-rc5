import { NgModule}           from '@angular/core';
import {ItemsService} from './items.service';
import {ItemsComponent} from './items.component';
import { routing }            from './app.routing';
import { CommonModule }  from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';


@NgModule({
    imports: [BrowserModule,CommonModule, routing],
    declarations: [ItemsComponent],
    providers:[ItemsService]
})

export default class ItemsModule {}