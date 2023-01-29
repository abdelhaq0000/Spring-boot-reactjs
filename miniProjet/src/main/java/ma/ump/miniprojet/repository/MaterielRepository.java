package ma.ump.miniprojet.repository;

import ma.ump.miniprojet.model.Materiel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MaterielRepository extends JpaRepository<Materiel,Long>{
    @Query(value = "Select COUNT(M) from Materiel M where M.type=?1")
    public Long CountMateriel(String i);
    @Query(value = "Select COUNT(M) from Materiel M ")
    public Long CountMaterielTotale();

    @Query(value = "SELECT M from  Materiel M where M.user.idU=?1")
    public List<Materiel> materielOfUser(long idU);
}