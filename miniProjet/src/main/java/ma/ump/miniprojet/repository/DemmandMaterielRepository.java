package ma.ump.miniprojet.repository;
import ma.ump.miniprojet.model.DemmandeMateriel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DemmandMaterielRepository extends JpaRepository<DemmandeMateriel,Long> {
    @Query(value = "Select COUNT(D) from DemmandeMateriel D ")
    public Long CountdemandesMateriel();
}
