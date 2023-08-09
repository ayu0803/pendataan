import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from 'src/post-providers';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  nama : string = '';
  ttl : string = '';
  jeniskelamin : string = '';
  nohp : string = '';
  alamat : string = '';
  pekerjaan: string = '';
  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
  ) {

  }

  ngOnInit()  {
    
  }

  async addRegister (){
    if (this.nama== '') {
      const toast = await this.toastController.create({
        message: 'Nama Lengkap harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.ttl== '') {
      const toast = await this.toastController.create({
        message: 'Tempat/Tanggal Lahir harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.jeniskelamin== '') {
      const toast = await this.toastController.create({
        message: 'Jenis Kelamin harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.nohp== '') {
      const toast = await this.toastController.create({
        message: 'No HP/WA harus di isi',
        duration: 2000
      });  
      toast.present();
    } else if (this.alamat== '') {
      const toast = await this.toastController.create({
        message: 'Alamat harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.pekerjaan== '') {
      const toast = await this.toastController.create({
        message: 'Pekerjaan harus di isi',
        duration: 2000
      });
      toast.present();
    } else {
      let body = {
        nama:this.nama,
        ttl:this.ttl,
        jeniskelamin:this.jeniskelamin,
        nohp:this.nohp,
        alamat:this.alamat,
        pekerjaan:this.pekerjaan,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data  => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab3']);
          const toast = await this.toastController.create({
            message: 'Selamat ! Pendataan Jemaat Gereja SUKSES.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });
    }
  }
}
