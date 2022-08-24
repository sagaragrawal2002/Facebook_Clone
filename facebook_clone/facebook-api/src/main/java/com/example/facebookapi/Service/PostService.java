package com.example.facebookapi.Service;

import com.example.facebookapi.Model.Post;
import com.example.facebookapi.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.ArrayList;

import java.util.UUID;
@Service
public class PostService {
    @Autowired
    PostRepository postRepository;
    public ArrayList<Post> submitpostToDB(Post postdata){
       // postdata.setUserId(UUID.randomUUID());
        postdata.setLikes(0);
        //postdata.setDateTime(dateTime);
        postRepository.save(postdata);
        ArrayList<Post> result=retrievepostFromDB();

        return result;
    }
    public ArrayList<Post> retrievepostFromDB(){
        ArrayList<Post> result=postRepository.findAll();

        return result;
    }
    public ArrayList<Post> deletePostFromDB(String postId){
        postRepository.deleteById(postId);
        retrievepostFromDB();
        return new ArrayList<Post>();
    }
}
