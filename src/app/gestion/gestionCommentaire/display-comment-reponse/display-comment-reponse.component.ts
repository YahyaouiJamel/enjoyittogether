import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/model/Commentaire';
import { Reponse } from 'src/app/model/Reponse';
import { CommentService } from 'src/app/services/comment.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-display-comment-reponse',
  templateUrl: './display-comment-reponse.component.html',
  styleUrls: ['./display-comment-reponse.component.css']
})
export class DisplayCommentReponseComponent implements OnInit {
  listcomment: Commentaire[]=[];
  listreponse: Reponse[]=[];
  constructor(private commentService: CommentService,private reponseService: ReponseService,private router: Router) { }

  ngOnInit(): void {
    
    this.commentService.getComment().subscribe((data: Commentaire[])=>this.listcomment=data);
    this.reponseService.getReponse().subscribe((data: Reponse[])=>this.listreponse=data);
 
  }
  deleter(reponse:Reponse):void {
    this.reponseService.deleteReponse(reponse.id_newcommentaire).subscribe(res=>alert("Reponse deleted successfully"));
  }
  deletec(comment:Commentaire):void {
    this.commentService.deleteComment(comment.id_commentaire).subscribe(res=>alert("Commentaire deleted successfully"));
  }
  }

