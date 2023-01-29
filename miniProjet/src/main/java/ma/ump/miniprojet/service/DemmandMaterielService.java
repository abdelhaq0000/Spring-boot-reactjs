package ma.ump.miniprojet.service;
import ma.ump.miniprojet.model.DemmandeMateriel;
import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.repository.DemmandMaterielRepository;
import ma.ump.miniprojet.repository.MaterielRepository;
import ma.ump.miniprojet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DemmandMaterielService {
    @Autowired
    private DemmandMaterielRepository demmandRepository;
    @Autowired
    private MaterielRepository materielRepository;
    @Autowired
    private UserRepository userRepository;
    public List<DemmandeMateriel> getAll(){
        return demmandRepository.findAll();
    }
    public  String addDemmendeMateriel(long idU,long idM){
            DemmandeMateriel demmande=new DemmandeMateriel();
            User existingUser = userRepository.findById(idU).orElse(null);
            Materiel materiel=materielRepository.findById(idM).orElse(null);
            if (existingUser != null&&materiel!=null) {
                demmande.setDateDemmandeMateriel(new Date());
                demmande.setMateriel(materiel);
                demmande.setUser(existingUser);
                demmandRepository.save(demmande);
                return "demmande good";
            }
            return "demmande good";

    }
    public  long nomberdemandeMateriel(){
        return demmandRepository.CountdemandesMateriel();
    }
    public String deletDemandeById(Long id){
        demmandRepository.deleteById(id);
        return "demande id="+id+"deletet";
    }

}
