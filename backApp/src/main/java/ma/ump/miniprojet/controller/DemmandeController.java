package ma.ump.miniprojet.controller;

import ma.ump.miniprojet.model.DemmandeFourniture;
import ma.ump.miniprojet.model.DemmandeMateriel;
import ma.ump.miniprojet.service.DemmandMaterielService;
import ma.ump.miniprojet.service.DemmandeFournitureSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DemmandeController {

    @Autowired
    private DemmandMaterielService demmandService;
    @Autowired
    private DemmandeFournitureSevice demmandeFournitureSevice;


    @PostMapping("/demmandeMateriel/{idU}/{idM}")
    public String demmandeMateriel(@PathVariable long idU,@PathVariable long idM){
        return demmandService.addDemmendeMateriel(idU,idM);
    }
    @PostMapping("/demmandeFourniture/{idU}/{idF}/{Q}")
    public String demmandeFournitur(@PathVariable long idU,@PathVariable long idF,@PathVariable int Q){
        return demmandeFournitureSevice.addDemmendeFourniture(idU,idF,Q);
    }
    @GetMapping("/demmandsMateriel")
    public List<DemmandeMateriel> demmandes(){
        return demmandService.getAll();
    }
    @GetMapping("/demmandsFourniture")
    public List<DemmandeFourniture> demmandesFourniture(){
        return demmandeFournitureSevice.getAlldemmande();
    }
    @GetMapping("/nomberDemandeMateriel")
    public long nomberdemnandeMateriel(){
        return demmandService.nomberdemandeMateriel();
    }
    @GetMapping("/nomberDemandeFourniture")
    public long nomberdemnandeFourniture(){
        return demmandeFournitureSevice.nomberdemandeFourniture();
    }
    @DeleteMapping("/deletDemande/{id}")
    public String deletDemande(@PathVariable Long id){
        try {
            demmandService.deletDemandeById(id);
            return "demande " + id + " deleted";
        }catch (Exception e){
            return "erruer";
        }
        }
    @DeleteMapping("/deletDemandeFrn/{id}")
    public String deletDemandeFrn(@PathVariable Long id){
        try {
            demmandeFournitureSevice.deletDemandeById(id);
            return "demande " + id + " deleted";
        }catch (Exception e){
            return "erruer";
        }
    }
}
