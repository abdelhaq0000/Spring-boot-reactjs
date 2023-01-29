package ma.ump.miniprojet.repository;

import ma.ump.miniprojet.model.DemmandeFourniture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DemmadeFournitureRepoitory extends JpaRepository<DemmandeFourniture,Long> {
    @Query(value = "Select COUNT(D) from DemmandeFourniture D ")
    public Long CountdemandesFourniture();
}
