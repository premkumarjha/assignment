import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  filterData:any;

  constructor() { }

  displayedColumns: string[] = ['id', 'name', 'department','joining_date'];
  dataSource = new MatTableDataSource(candidateData);
  //dataSource=candidateData

  ngOnInit(): void {
    
  }

  //question No 1:
sortByNameAndJoiningDate(){
  
  let result=candidateData.sort(function(a, b) {

    var dateA = new Date(a["joining_date"]);
    var dateB = new Date(b["joining_date"]);

    return a.name.localeCompare(b.name) ||  <any>dateA - <any>dateB;;
});
this.dataSource = new MatTableDataSource(result);
console.log(this.dataSource)
  }

//question No 2:
searchByName(inputValue:any){
  if(!inputValue) {
    this.filterData  = this.dataSource;
    this.dataSource = new MatTableDataSource(this.filterData);
  } else {
    this.filterData =candidateData.filter(data => 
       data.name.trim().toLowerCase().includes(inputValue.value.toLowerCase())
    );
    this.dataSource = new MatTableDataSource(this.filterData);
  }
}


//question No 3:  ==>No experience field is found in given array;

candidateExperienceMoreThanTwoYear(){

// let candidateExperienceMoreThanTwoYear=candidateData.filter(data=>data.experience > 2);
// console.log("candidateExperienceMoreThanTwoYear are ->",candidateExperienceMoreThanTwoYear);

}


//question No 4:
distinctDeptAndCandidateCount(){

  let removeDuplicate:any=[];
    candidateData.filter(data=>{
    if(removeDuplicate.indexOf(data.department) === -1 ){
      removeDuplicate.push(data.department);
    };
  });
  for(var i=0;i<removeDuplicate.length;i++){
    let counts=0;
    candidateData.filter(data=>{
      if(removeDuplicate[i]== data.department){
        counts=counts+1;
      }
    })
    console.log(`name of dept is ${removeDuplicate[i]} and its candidate count is ${counts} `)
    }
}

//question No 5:
removaAllCandidateFromDevDept(){

  let dataAfterRemovingDevDeptCandidate=candidateData.filter(data=>data.department !== 'Development');
  this.dataSource = new MatTableDataSource(dataAfterRemovingDevDeptCandidate);
  console.log("data after Remove all candidates from 'Development' department->",dataAfterRemovingDevDeptCandidate)
}

}

const candidateData=[ {
  "id": 11,
  "name": "Ash",
  "department": "Finance",
  "joining_date": "8/10/2016"
},
{"id": 12,"name": "John","department": "HR","joining_date": "18/1/2011"},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "6/4/2014"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date":" 8/12/2010"}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}]


