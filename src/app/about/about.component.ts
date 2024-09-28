import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, of } from 'rxjs';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const interval$ = interval(1000);
    // const sub = interval$.subscribe(val => console.log(val))

    // setTimeout(() => sub.unsubscribe(), 5000)
    // setTimeout(() => interval$.subscribe(val => console.log("start again" + val)), 5000)
     
    const source1$ = of(1,2,3); // send 1,2,3 then complete
    const source2$ = of(4,5,6);
    const source3$ = of(7,8,9);
    const result$ = concat(source1$, source2$, source3$);
    result$.subscribe(console.log);
    // same as result$.subscribe(val => console.log(val));
  }

}


