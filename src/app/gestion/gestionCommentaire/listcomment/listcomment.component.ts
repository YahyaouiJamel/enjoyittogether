import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/model/Commentaire';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-listcomment',
  templateUrl: './listcomment.component.html',
  styleUrls: ['./listcomment.component.css']
})
export class ListcommentComponent implements OnInit {
  listcomment: Commentaire[]=[];
  constructor(private commentService: CommentService,private router: Router) { }

  ngOnInit(): void {
    this.commentService.getComment().subscribe((data: Commentaire[])=>this.listcomment=data);
  }
  delete(comment:Commentaire):void {
    this.commentService.deleteComment(comment.id_commentaire).subscribe(res=>alert("Commentaire deleted successfully"));
  }
}
