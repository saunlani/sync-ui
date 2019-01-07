import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.scss']
})
export class ViewPurchaseComponent implements OnInit {

  // purchase will hold the purchase retrieved, when the getPurchase() method is ran
  public purchase;
  // in order to use a service in a component, the service must be imported and used in the constructor
  // as coded below.
  constructor(private purchaseService: PurchaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPurchase(this.route.snapshot.params.id);
  }
    
    getPurchase(id:number) {
      // an Observable is a data source. Observable emits data until it has nothing left to complete
      // if we want the data from the Observable(the PurchaseService), we must import Obserable and subscribe to it.
      this.purchaseService.getPurchase(id).subscribe(
        data => {
          this.purchase = data;
        },
        err => console.error(err),
        () => console.log('purchases loaded')
      );
    }
    
    
  }

