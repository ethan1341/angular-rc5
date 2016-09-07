import {Component,OnInit,Input} from '@angular/core';
import {LookupService} from './lookup.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { ChampionService} from '../champions/champion.service';

@Component({
    selector: 'lookup-detail-player-selector',
    templateUrl:'html/lookup-detail-player.html',
    styleUrls:['css/lookup-detail.css']
})


export class LookupDetailPlayerComponent{
    @Input()
    public championId:any;
    @Input()
    public playerName:any;
    @Input()
    public championImage:any;
    private champions:any;
    private errorMessage:any;
    constructor(
        private lookupService: LookupService, //Not being used
        private championService: ChampionService
    ){}

    getChampions(){
        this.championService.getChampions()
            .subscribe(champions => {
                var desiredId = this.championId
                console.log('adffafaf',this.championId)
                console.log
                if (champions.allChampions[desiredId].id == this.championId) {  //Red syntax even though its exists
                    this.championImage = champions.allChampions[desiredId].image //Red syntax even though its exists
                }
            }, error =>  this.errorMessage = <any>error);
                }

    ngOnInit(){
        this.getChampions()
    }
}