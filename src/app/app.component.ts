import { Component, OnInit } from '@angular/core';
import { ArtworkService } from './services/artwork.service';
import { Iartworks } from './models/art';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  filter : string = "";
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
  }
}
