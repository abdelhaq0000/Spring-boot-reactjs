package ma.ump.miniprojet.model;

import org.springframework.beans.factory.annotation.Value;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idU;
    private String UserName;

    private String FullName;

    private String Tele;

    private String CIN;

    private String NumeroBureau;

    private String email;

    private String grade;

    private String mdp;
    private String r;
    private Date dataInscription;

    @Value("0")
    private int statu;

    private String typeUser;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;


    public User(String userName, String fullName, String tele, String CIN, String numeroBureau, String email, String grade, String mdp, int statu, String typeUser, Set<Role> role) {
        UserName = userName;
        FullName = fullName;
        Tele = tele;
        this.CIN = CIN;
        NumeroBureau = numeroBureau;
        this.email = email;
        this.grade = grade;
        this.mdp = mdp;
        this.statu = statu;
        this.typeUser = typeUser;
        this.role = role;
    }


}