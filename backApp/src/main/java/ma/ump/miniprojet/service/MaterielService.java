package ma.ump.miniprojet.service;

import ma.ump.miniprojet.model.Fourniture;
import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.repository.MaterielRepository;
import ma.ump.miniprojet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MaterielService {
    @Autowired
    private MaterielRepository materielRepository;
    @Autowired
    private UserServiceImp userServiceImp;
    @Autowired
    private UserRepository userRepository;
    public Materiel saveMateriel(Materiel materiel){
        return materielRepository.save(materiel);
    }

    public long  contAllMateriel(){
        return materielRepository.CountMaterielTotale();
    }
    public List<Materiel> getAllMateriel() {
        return (List<Materiel>) materielRepository.findAll();
    }
    public void initMateriel(){
        Materiel materiel=new Materiel();
        materiel.setIdM(1L);
        materiel.setType("PC");
        materiel.setDateAcquisition("11/09/2011");
        materiel.setNumeroInventaire(122);
        User u = userRepository.findById(5L).orElse(null);
        materiel.setUser(u);
        materielRepository.save(materiel);
        materiel.setIdM(2L);
        materiel.setType("souris");
        materiel.setDateAcquisition("11/09/2011");
        materiel.setNumeroInventaire(122);
         u = userRepository.findById(6L).orElse(null);
        materiel.setUser(u);
        materielRepository.save(materiel);


    }


    public Materiel updateMateriel(Materiel materiel){
        return materielRepository.save(materiel);
    }
    public Optional<Materiel> getMaterielById(Long id) {
        return materielRepository.findById(id);
    }
    public String deletMaterielById(Long id){
        materielRepository.deleteById(id);
        return "materiel id="+id+"deleted";
    }
    public Long nmberMateril(String i){
        return materielRepository.CountMateriel(i);
    }
    @PostMapping("affcteMaterriel/{idU}/{idM}")
    public String affecterMateriel(@PathVariable  Long idU,@PathVariable Long idM) {
        User existingUser = userRepository.findById(idU).orElse(null);
        Materiel materiel=materielRepository.findById(idM).orElse(null);
        if (existingUser != null&&materiel!=null) {
            materiel.setUser(existingUser);
            // Update other fields as needed
            materiel.setDateAffectation(new Date());
            materielRepository.save(materiel);
            userRepository.save(existingUser);

            return "affecte good";
        }
        return "non good affecter";

    }
    public List<Materiel> getLastInsertedRow() {
        List<Materiel> rows = materielRepository.findAll();
        ;
        List<Materiel> lasteThree=new ArrayList<Materiel>();
        lasteThree.add(rows.get(rows.size() - 1));
        lasteThree.add(rows.get(rows.size() - 2));
        //lasteThree.add(rows.get(rows.size() - 3));
        return lasteThree;

    }
    public List<Materiel> materielsOfUser(long id){
        return materielRepository.materielOfUser(id);
    }
    public Materiel updateMat(Materiel newmat, Long id){
        return materielRepository.findById(id).map(mat -> {
           mat.setNumeroInventaire(newmat.getNumeroInventaire());
           mat.setDateAcquisition(newmat.getDateAcquisition());
           mat.setType(newmat.getType());
            return materielRepository.save(mat);
        }).orElseThrow();
    }
}
