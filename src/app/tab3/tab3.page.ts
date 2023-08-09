import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/post-providers';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  gerejas: any = [];
  limit: number = 10;
  start: number = 0;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.gerejas = [];
    this.start = 0;
    this.loadgereja();
  }


  doRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadgereja().then(() => {
    event.target.complete();
    });
    }, 500);
  }

  loadgereja() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'action.php').subscribe(data => {
        for (let gereja of data.result) {
          this.gerejas.push(gereja);
        }
        resolve(true);
      });
    });
  }

}