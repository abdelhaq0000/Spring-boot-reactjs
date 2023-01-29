package ma.ump.miniprojet.controller;

import ma.ump.miniprojet.model.Fourniture;
import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.service.MaterielService;
import ma.ump.miniprojet.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@RestController
public class MaterielController {

    @Autowired
    private MaterielService materielService;
    @PostConstruct
    public void initMateriel(){


        materielService.affecterMateriel(5L,1L);
        materielService.affecterMateriel(6L,2L);
        materielService.initMateriel();
    }

    @GetMapping("/materiels")
    public List<Materiel> showMateriel(){
        return materielService.getAllMateriel();
    }
    @PostMapping("/addMateriel")
    public String addMateriel(@RequestBody Materiel materiel){
        materielService.saveMateriel(materiel);
        return "Materiel add";
    }
    @DeleteMapping("/deletMateriel/{id}")
    public String deletMateriel(@PathVariable Long id){
        materielService.deletMaterielById(id);
        return "Materiel id="+id+" deleted";
    }
    @GetMapping("/materiel/{id}")
    public Optional<Materiel> showMaterielById(@PathVariable Long id){
        return materielService.getMaterielById(id);
    }

    @GetMapping("/nomberMateril/{i}")
    public Long nomberMateril(@PathVariable String i){
        return materielService.nmberMateril(i);
    }
    @PutMapping("/affecterMateriel/{idU}/{idM}")
    public String afecterMateriel(Long idM,Long idU){
        return materielService.affecterMateriel(idU,idM);
    }
    @GetMapping("/nomberAllmateriel")
    public  Long allmateriel(){
        return materielService.contAllMateriel();
    }
    @GetMapping("/getLastInsertMateriel")
    public List<Materiel> getLast(){
        return materielService.getLastInsertedRow();
    }
    @GetMapping("materielOfUser/{idU}")
    public List<Materiel> materielOfUser(@PathVariable long idU){
        return materielService.materielsOfUser(idU);
    }
    @PutMapping("/updateMat/{id}")
    public Materiel updateMat(@RequestBody Materiel mat, Long id){
        return materielService.updateMat(mat,id);
    }

}
