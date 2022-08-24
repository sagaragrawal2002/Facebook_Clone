package com.example.facebookapi.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Timestamp;
import java.util.UUID;
@Document(collection = "post")
public class Post {
   @Id
    private String postId;

    private  String userId;
    private  String username;
    private  String imageurl;
    private String description;
    public String  postimageurl;
    private int likes;
    private Timestamp dateTime;
    public Post(){
        super();
    }

    public Post(String postId, String userId, String username, String imageurl, String description, String postimageurl, int likes, Timestamp dateTime) {
        this.postId = postId;
        this.userId = userId;
        this.username = username;
        this.imageurl = imageurl;
        this.description = description;
        this.postimageurl = postimageurl;
        this.likes = likes;
        this.dateTime = dateTime;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPostimageurl() {
        return postimageurl;
    }

    public void setPostimageurl(String postimageurl) {
        this.postimageurl = postimageurl;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }
}
