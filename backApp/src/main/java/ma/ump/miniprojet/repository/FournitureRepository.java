package ma.ump.miniprojet.repository;

import ma.ump.miniprojet.model.Fourniture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FournitureRepository extends JpaRepository<Fourniture,Long> {
    @Query(value = "Select COUNT(*) from Fourniture ")
    public Long CountFourniture();
    @Query(value = "select F.type from Fourniture F ")
    public List<String> allTheType();
    @Query(value = "select F.nomber from Fourniture F ")
    public List<Long> allTheNomber();
}
