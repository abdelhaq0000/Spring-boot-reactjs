package ma.ump.miniprojet.repository;

import ma.ump.miniprojet.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.TypedQuery;
import java.util.List;


public interface UserRepository extends JpaRepository<User,Long> {
    //Voir les nombres des Users
    @Query(value = "Select COUNT(u) from User u")
    public Long CountUser();
    @Query(value = "SELECT u FROM User u WHERE u.UserName = ?1")
    public User findByUserName(String UserName);
      @Query(value = "select u from User u where u.statu=0")
      public List<User> getDemmande();
      @Query(value = "select u from  User u order by u.idU  ")
    public List<User> lasthreeInscription();
      @Query(value = "select count(u) from User u where u.typeUser=?1")
      public Long selecNumberOftype(String type);

    }



