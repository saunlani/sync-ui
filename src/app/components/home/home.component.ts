import { Component, OnInit } from '@angular/core'
import { PurchaseService } from 'src/app/services/purchase.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Vinyl',
    'CD',
    'Cassette',
    'DVD',
    'VHS'
  ];
  purchaseForm: FormGroup;
  validMessage: string ="";

  constructor(private purchaseService: PurchaseService ) { }

  ngOnInit() {
    this.purchaseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      // not passing default parameters, or Validators sets the contact field as not being required.
      contact: new FormControl()
    });
  }

  submitPurchase() {
    if (this.purchaseForm.valid) {
      this.validMessage = "Purchase Submitted.";
      this.purchaseService.createPurchase(this.purchaseForm.value).subscribe(
        data => {
          this.purchaseForm.reset();
          return true;
        },
        error => { 
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
