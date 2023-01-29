package ma.ump.miniprojet.controller;


import ma.ump.miniprojet.model.JwtResponce;
import ma.ump.miniprojet.model.Role;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.service.UserServiceImp;
import ma.ump.miniprojet.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;


@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserServiceImp userServiceImp;

    @PostConstruct
    public void initRoleUser(){
        userServiceImp.initRoleandUser();
    }

    @PostMapping ("/save")
    public User save(@RequestBody User user){
        return userServiceImp.saveUser(user);
    }
    @GetMapping ("/users")
    public List<User> getAllUser(){
        return userServiceImp.getAllUser();
    }
    @PutMapping("/updateUser/{id}")
    public User updateUser(@RequestBody User user,Long id){
        return userServiceImp.updateUser(user,id);
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUser(@PathVariable Long id) {
        return userServiceImp.getUserById(id);
    }
    @DeleteMapping("/deletUser/{id}")
    public String deletUser(@PathVariable Long id){
         userServiceImp.deletUserById(id);
         return "user "+id+" deleted";
    }
    @GetMapping("/nomberUser")
    public Long nomberUser(){
        return userServiceImp.nmberUser();
    }

    @GetMapping("/User/{UserName}")
    public User getUserByUserName(@PathVariable String UserName){
        return userServiceImp.getUserByUserName(UserName);
    }

/*    @PostMapping("/affecterMateriel/{idM}/{idU}")
    public void affecterMateriel(@PathVariable Long idM,@PathVariable Long idU){
        userServiceImp.affecterMateriel(idM,idU);
    }*/
    @GetMapping("/getDemande")
    public List<User> getDemmande(){
        return userServiceImp.getDemande();
    }
    @GetMapping("/getLastInsert")
    public List<User> getLast(){
        return userServiceImp.getLastInsertedRow();
    }
    @GetMapping("/nomberOf/{type}")
    public Long numberOfType(@PathVariable String type){
        return  userServiceImp.selectNumberOfType(type);
    }
}

