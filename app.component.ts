import { Component, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Items-web-app';
  jsonData: any;
  offset = 0;
  limit = 10;
  isLoading = false;
  page: number = 1;
  constructor(private dataService: DataService){
    
  }

  ngOnInit() {
    const apiUrl = 'https://db.ezobooks.in/kappa/image/task';
    this.dataService.fetchData(apiUrl).subscribe(data => {
      this.jsonData = data.items;
      debugger
    });
    // this.loadItems();
  }



  // loadItems() {
  //   this.dataService.getItems(this.offset, this.limit)
  //     .subscribe((newItems: any) => {
  //       this.jsonData.push(...newItems);
  //       this.offset += this.limit;
  //     });
  // }


  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const windowHeight = 'innerHeight' in window
  //     ? window.innerHeight
  //     : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );
  //   const windowBottom = windowHeight + window.pageYOffset;

  //   if (windowBottom >= docHeight) {
  //     this.loadItems();
  //   }
  // }





  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
  //     this.loadMoreItems();
  //   }
  // }

  // loadMoreItems(): void {
  //   if (!this.isLoading) {
  //     this.isLoading = true;
  //   }
  // }






  
 @HostListener('window:scroll', ['$event'])
 scrollHandler(event: any) {
   var insightsResults = document.getElementsByClassName(
     'insights-results'
   )[0];
   var childInsights = insightsResults?.scrollHeight;
   var windowScroll = window.scrollY;
   if (Math.floor(windowScroll) >= Math.floor(childInsights)) {
       this.loadMore();
   }
 }
 
 
  loadMore(): void {
   this.page++;
 }
 
}
