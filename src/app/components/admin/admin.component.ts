import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public purchases;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {

    this.getPurchases();
  }

  getPurchases() {
    this.purchaseService.getPurchases().subscribe(
      data => { this.purchases = data },
      err => console.error(err),
      () => console.log('purchases loaded')
    )
  }

}
