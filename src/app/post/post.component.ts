import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input() title: string;
  @Input() content: string;
  @Input() loveIts;
  @Input() created_at: string;

  constructor() { }

  ngOnInit() {
  }

  loveIt()
  {
 	 this.loveIts++;
  }

  dontLoveIt()
  {
 	 this.loveIts--;
  }

  getColor()
  {
  	if(this.loveIts > 1) {
      return 'green';
    } else if(this.loveIts < 1) {
      return 'red';
    }
  }

}
