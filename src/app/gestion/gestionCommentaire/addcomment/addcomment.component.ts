import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from 'src/app/model/Commentaire';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  public gfg = true;
  comment : Commentaire=new Commentaire();
  list: Commentaire[]=[];
  id:any;
  titre:any="";
  constructor(private commentService: CommentService,private router: Router,private ac:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    if(this.id === undefined) {
      this.comment = new Commentaire();
      this.titre='Add new reponse';
    }else {
      this.commentService.getCommentById(this.id).subscribe(res=>{
         this.comment=res;
        this.titre = 'Update reponse'+res.contenu;}) 
    }
  }
  save()
{
  console.log(this.comment);
  if(this.id === undefined){
    this.commentService.addComment(this.comment).subscribe(res=>alert("comment added successfully"));  
  }else{
    this.commentService.updateComment(this.id,this.comment).subscribe((data)=>this.router.navigateByUrl('/addc'));  

  }

}
}
