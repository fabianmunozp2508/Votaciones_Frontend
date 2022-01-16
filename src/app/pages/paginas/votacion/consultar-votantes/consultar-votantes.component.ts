import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-consultar-votantes',
  templateUrl: './consultar-votantes.component.html',
  styleUrls: ['./consultar-votantes.component.css']
})
export class ConsultarVotantesComponent implements OnInit {
  name = 'Set iframe source';
  url: string = "https://wsp.registraduria.gov.co/censo/consultar/";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
