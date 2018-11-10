import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AddingQuestionService } from '../adding-question.service'


@Component({
  selector: 'app-add-users-to-test',
  templateUrl: './add-users-to-test.component.html',
  styleUrls: ['./add-users-to-test.component.css']
})
export class AddUsersToTestComponent implements OnInit {
    dropdownUsersList = [];
    selectedUsers = [];
    dropdownSettings = {};

  constructor(private router: Router , private questionDB:AddingQuestionService) { }
  onItemSelect(item: any) {
    console.log(this.selectedUsers);
  }
  onDeItemSelect(item: any) {
    console.log(this.selectedUsers);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  ngOnInit() {
    this.dropdownUsersList = [
      // { item_id: 1, item_text: 'Mumbai' },
      "thrilok","1@gmail.com","2@gmail.com"
    ];
    this.selectedUsers = this.questionDB.atCommandUsers;
    this.dropdownSettings = {
      singleSelection: false,
      // idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  addUserForCommand(){
    this.questionDB.atCommandUsers=this.selectedUsers
    this.questionDB.addTest()
  }
}
