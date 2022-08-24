package com.example.facebookapi.Repository;

import com.example.facebookapi.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
@Repository
public interface UserRepository extends MongoRepository<User, String> {

    @Override
    User save(User user);
    @Override
    ArrayList<User> findAll();
    User findAllByUserId(String user);

}
