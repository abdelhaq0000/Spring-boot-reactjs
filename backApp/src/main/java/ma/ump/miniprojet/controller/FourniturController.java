package ma.ump.miniprojet.controller;

import ma.ump.miniprojet.model.Fourniture;
import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.service.FournitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@RestController
public class FourniturController {

    @Autowired
    private FournitureService fournitureService;

    @PostConstruct
    public void init(){
        fournitureService.initFourniture();
    }

    @GetMapping("/fourniturs")
    public List<Fourniture> shawFourniturs(){
        return fournitureService.getAllFourniture();
    }
    @GetMapping("/fourniture/{id}")
    public Optional<Fourniture> getFournitureById(@PathVariable Long id){
        return fournitureService.getByIdFournuture(id);
    }
    @DeleteMapping("/deletFourniture/{id}")
    public String deletFourniture(@PathVariable Long id){
        fournitureService.deletFourniture(id);
        return "fourniture id="+id+" deleted";
    }
    @PostMapping("/addFourniture")
    public String addFourniture(@RequestBody Fourniture fourniture){
        fournitureService.addFourniture(fourniture);
        return "fourniture add";
    }
    @GetMapping("/nomberFournitur")
    public Long nomberFournitur(){
        return fournitureService.nmberFourniture();
    }

    @PutMapping("/affecterFouniture/{idU}/{idF}/{Q}")
    public String afecterMateriel(Long idF,Long idU,int Q){
        return fournitureService.affecterfourniture(idU,idF,Q);
    }
    @GetMapping("/getLastInsertFourniture")
    public List<Fourniture> getLast(){
        return fournitureService.getLastInsertedRow();
    }

    @GetMapping("/allTypeFourniture")
    public List<String> alltype(){
        return fournitureService.alltheType();
    }

    @GetMapping("/allNomberFourniture")
    public List<Long> allNomber(){
        return fournitureService.alltheNomber();
    }

    @PutMapping("/updateFrn/{id}")
    public Fourniture updatefrn(@RequestBody Fourniture frn, Long id){
        return fournitureService.updateFrn(frn,id);
    }

}
