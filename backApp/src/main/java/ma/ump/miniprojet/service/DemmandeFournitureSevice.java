package ma.ump.miniprojet.service;

import ma.ump.miniprojet.model.*;
import ma.ump.miniprojet.repository.DemmadeFournitureRepoitory;
import ma.ump.miniprojet.repository.FournitureRepository;
import ma.ump.miniprojet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DemmandeFournitureSevice {
    @Autowired
    private DemmadeFournitureRepoitory demmadeFournitureRepoitory;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FournitureRepository fournitureRepository;
    public List<DemmandeFourniture> getAlldemmande(){
        return demmadeFournitureRepoitory.findAll();
    }
    public  String addDemmendeFourniture(long idU,long idF,int Q){
        DemmandeFourniture demmande= new DemmandeFourniture();
        User existingUser = userRepository.findById(idU).orElse(null);
        Fourniture fourniture=fournitureRepository.findById(idF).orElse(null);
        if (existingUser != null&&fourniture!=null) {
            demmande.setDateDemmandeFourniture(new Date());
            demmande.setFourniture(fourniture);
            demmande.setUser(existingUser);
            demmande.setQ(Q);
            demmadeFournitureRepoitory.save(demmande);
            return "demmande good";
        }
        return "demmande good";

    }
    public String deletDemandeById(Long id){
        demmadeFournitureRepoitory.deleteById(id);
        return "demande id="+id+"deletet";
    }
    public long nomberdemandeFourniture(){
        return  demmadeFournitureRepoitory.CountdemandesFourniture();
    }
}
