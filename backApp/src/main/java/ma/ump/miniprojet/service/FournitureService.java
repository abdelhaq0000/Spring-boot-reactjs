package ma.ump.miniprojet.service;

import ma.ump.miniprojet.model.Fourniture;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.repository.FournitureRepository;
import ma.ump.miniprojet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FournitureService {

    @Autowired
    private FournitureRepository fournitureRepository;
    @Autowired
    private UserRepository userRepository;
    public void initFourniture(){
        Fourniture fourniture=new Fourniture();
        fourniture.setIdF(1L);
        fourniture.setType("tabla");
        fourniture.setNomber(1112);
        fournitureRepository.save(fourniture);


        fourniture.setIdF(11L);
        fourniture.setType("stilo");
        fourniture.setNomber(9);
        fournitureRepository.save(fourniture);




        fourniture.setIdF(12L);
        fourniture.setType("tabachir");
        fourniture.setNomber(300);
        fournitureRepository.save(fourniture);



        fourniture.setIdF(13L);
        fourniture.setType("wra9i");
        fourniture.setNomber(393);
        fournitureRepository.save(fourniture);

        fourniture.setIdF(14L);
        fourniture.setType("ktobaa");
        fourniture.setNomber(37);
        fournitureRepository.save(fourniture);
    }

    public Fourniture addFourniture(Fourniture fourniture){
        return fournitureRepository.save(fourniture);
    }
    public List<Fourniture> getAllFourniture(){
        return fournitureRepository.findAll();
    }
    public String deletFourniture(Long id){
         fournitureRepository.deleteById(id);
         return "Fourniture id="+id+" deleted";
    }

    public Optional<Fourniture> getByIdFournuture(Long id){
        return fournitureRepository.findById(id);
    }
    public Long nmberFourniture(){
        return fournitureRepository.CountFourniture();
    }

    @PostMapping("affcteFourniture/{idU}/{idF}/{Q}")
    public String affecterfourniture(@PathVariable Long idU, @PathVariable Long idF,@PathVariable int Q) {
        User existingUser = userRepository.findById(idU).orElse(null);
        Fourniture fourniture=fournitureRepository.findById(idF).orElse(null);
        if (existingUser != null&&fourniture!=null) {
            fourniture.setUser(existingUser);
            fourniture.setNomber(fourniture.getNomber()-Q);
            // Update other fields as needed
            fournitureRepository.save(fourniture);
            userRepository.save(existingUser);

            return "affecte good";
        }
        return "non good affecter";
    }
    public List<Fourniture> getLastInsertedRow() {
        List<Fourniture> rows = fournitureRepository.findAll();
        ;
        List<Fourniture> lasteThree=new ArrayList<Fourniture>();
        lasteThree.add(rows.get(rows.size() - 1));
        lasteThree.add(rows.get(rows.size() - 2));
        //lasteThree.add(rows.get(rows.size() - 3));
        return lasteThree;

    }
    public List<String> alltheType(){
        return fournitureRepository.allTheType();
    }
    public List<Long> alltheNomber(){
        return fournitureRepository.allTheNomber();
    }
    public Fourniture updateFrn(Fourniture newfrn,Long id){
        return fournitureRepository.findById(id).map(frn -> {
            frn.setNomber(newfrn.getNomber());
            frn.setType(newfrn.getType());
            return fournitureRepository.save(frn);
        }).orElseThrow();
    }

}
