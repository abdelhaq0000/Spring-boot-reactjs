package ma.ump.miniprojet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DemmandeFourniture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDF;
    private Date dateDemmandeFourniture;
    private int Q;
    @ManyToOne
    private User user;
    @ManyToOne
    private Fourniture fourniture;
}
