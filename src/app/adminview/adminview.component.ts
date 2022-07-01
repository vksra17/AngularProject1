import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
displayedColumns : string[]=['createdOn','name','email',
'phonenumber','DOB',];
dataSource!:MatTableDataSource<any>
@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!:MatSort  

constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }
 getAllData(){
  this.api.getAllInfo().subscribe({next:(res)=>{
    this.dataSource = new MatTableDataSource(res)  
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort 
    console.log(res)   
  }})
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
