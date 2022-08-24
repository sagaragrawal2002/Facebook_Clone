package com.example.facebookapi.Controller;

import com.example.facebookapi.Model.Post;
import com.example.facebookapi.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.UUID;
@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("/save")
    public ArrayList<Post> submitpost(@RequestBody Post body){
       ArrayList<Post> result= postService.submitpostToDB(body);
        return result;
    }
    @GetMapping("hey")
    public String fun(){
        return "hey Aakash";
    }
    @GetMapping("/getPost")
    public ArrayList<Post> retrieveAllpost(){
        ArrayList<Post> result=postService.retrievepostFromDB();
        return result;
    }
    @DeleteMapping("/delete/{postId}")
    public ArrayList<Post> deleteparticularpost(@PathVariable("postId")String postId){
        ArrayList<Post> result=postService.deletePostFromDB(postId);
        return result;
    }
}
