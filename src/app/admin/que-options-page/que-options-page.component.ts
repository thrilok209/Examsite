import { Component, OnInit } from '@angular/core';
import { AddingQuestionService } from '../adding-question.service'
@Component({
  selector: 'app-que-options-page',
  templateUrl: './que-options-page.component.html',
  styleUrls: ['./que-options-page.component.css']
})
export class QueOptionsPageComponent implements OnInit {
  totalQuestionsUrl=[]
  totalAdminOptions=[]
  constructor(private questionDB:AddingQuestionService) { }

  ngOnInit() {
    this.totalQuestionsUrl=this.questionDB.totolQuestionUrls
    this.totalAdminOptions=this.questionDB.questionCorrectOptions
  }
  submitAdminTest(){
    this.questionDB.addTest()
  }
}
