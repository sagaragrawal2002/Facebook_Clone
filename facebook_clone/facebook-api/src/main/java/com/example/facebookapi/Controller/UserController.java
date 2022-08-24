package com.example.facebookapi.Controller;
import com.example.facebookapi.Model.User;
import com.example.facebookapi.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
@CrossOrigin
@RestController
@RequestMapping("/api/UserService")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        return userService.submituser(user);
    }
    @GetMapping("/getuserdetails")
    public ArrayList<User> getallUser(){
        return userService.retrieveAlluser();
    }
    @GetMapping("/getuserr/{userId}")
    public User getuser(@PathVariable("userId") String userId){
        return userService.getUser(userId);
    }

}
