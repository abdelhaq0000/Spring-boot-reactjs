package ma.ump.miniprojet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Optional;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DemmandeMateriel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idD;
    private Date dateDemmandeMateriel;
    @ManyToOne
    private User user;
    @ManyToOne
    private Materiel materiel;
}
