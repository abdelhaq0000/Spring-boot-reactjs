package ma.ump.miniprojet.service;

import ma.ump.miniprojet.model.Role;
import ma.ump.miniprojet.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Role createRole(Role role){
       return roleRepository.save(role);
    }
}
