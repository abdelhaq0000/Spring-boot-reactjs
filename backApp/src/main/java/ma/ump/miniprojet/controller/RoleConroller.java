package ma.ump.miniprojet.controller;

import ma.ump.miniprojet.model.Role;
import ma.ump.miniprojet.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoleConroller {
    @Autowired
    private RoleService roleService;

    @PostMapping("/createRole")
    public Role creteRole(@RequestBody Role role){
           return roleService.createRole(role);
    }
}
