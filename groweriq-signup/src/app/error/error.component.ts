import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/services/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private shareDataService: ShareDataService,
              private router: Router) { console.log(this.shareDataService.createUserServiceResponse); }

  errorMessage;

  ngOnInit() {
    if (this.shareDataService.createUserServiceResponse) {
      this.errorMessage = this.shareDataService.createUserServiceResponse.errorMessage;
    } else {
      this.backToUsersList();
    }
  }

  backToUsersList() {
    this.shareDataService.createUserServiceResponse = null;
    this.router.navigate(['']);
  }
}
