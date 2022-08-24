package com.example.facebookapi.Repository;

import com.example.facebookapi.Model.Post;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public interface PostRepository extends MongoRepository<Post,String> {

    @Override
    ArrayList<Post> findAll();
    Post save(Post post);

    @Override
    void deleteById(String uuid);
}
