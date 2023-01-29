package ma.ump.miniprojet.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Role implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idR;
    private String rolename;
    private String roleDescription;

    public Role(String rolename, String roleDescription) {
        this.rolename = rolename;
        this.roleDescription = roleDescription;
    }

    public Role() {
    }
}