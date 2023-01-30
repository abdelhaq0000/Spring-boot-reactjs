package ma.ump.miniprojet.service;

import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.model.Role;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.repository.FournitureRepository;
import ma.ump.miniprojet.repository.MaterielRepository;
import ma.ump.miniprojet.repository.RoleRepository;
import ma.ump.miniprojet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.*;

@Service
public class UserServiceImp  {
   @Autowired
   private UserRepository userRepository;
   @Autowired
   private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private MaterielRepository materielRepository;
    @Autowired
    private FournitureRepository fournitureRepository;


    public User saveUser(User user)
    {
        user.setDataInscription(new Date());
        user.setMdp(getEncodedPassword(user.getMdp()));
        Role techRole=new Role("thecRole","isc rooole");
        Role ensignRole=new Role("ensignRole","this role for ensignant");

        if(user.getTypeUser().equals("Technicien")){
            Set<Role> techRoles11 = new HashSet<>();
            techRoles11.add(techRole);
            user.setRole(techRoles11);
        } else {
            Set<Role> ensignRoles11 = new HashSet<>();
            ensignRoles11.add(ensignRole);
            user.setRole(ensignRoles11);
        }
        return  userRepository.save(user);
    }


    public List<User> getAllUser() {
        return (List<User>) userRepository.findAll();
    }



    public User updateUser(User user){
        return userRepository.save(user);
    }
    public User getUserByUserName(String s){
        return userRepository.findByUserName(s);
    }


    public void initRoleandUser(){
       
        // Admin Role
        Role adminRole = new Role("Admin","Admin fro administration");
        roleRepository.save(adminRole);
        Role ensignRole = new Role("ensignant","this is just for teachers");
        roleRepository.save(ensignRole);
        Role techRole=new Role("technicient","isc rooole");
        roleRepository.save(techRole);



        // admin registration
        User adminUser= new User();
        adminUser.setIdU(1L);
        adminUser.setFullName("Admin");
        adminUser.setUserName("adm");
        adminUser.setMdp(getEncodedPassword("adm123"));
        adminUser.setCIN("ADMIN123");
        adminUser.setEmail("Admin@gmail.com");
        adminUser.setTele("061572893");
        adminUser.setGrade("AD");
        adminUser.setDataInscription(new Date());
        adminUser.setNumeroBureau("10");
        adminUser.setTypeUser("Admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminRoles.add(techRole);
        adminUser.setRole(adminRoles);
        userRepository.save(adminUser);


        // tech registration
        User thecUser= new User();
        thecUser.setIdU(2L);
        thecUser.setFullName("technicient");
        thecUser.setUserName("tech");
        thecUser.setMdp(getEncodedPassword("tech123"));
        thecUser.setCIN("TECH123");
        thecUser.setDataInscription(new Date());
        thecUser.setEmail("Technicient@gmail.com");
        thecUser.setTele("061572893");
        thecUser.setTypeUser("Technicien");
        thecUser.setGrade("TCH");
        thecUser.setNumeroBureau("1");
        Set<Role> techRoles11 = new HashSet<>();
        techRoles11.add(techRole);
        thecUser.setRole(techRoles11);
        userRepository.save(thecUser);


        // ensign registration
        User ensgnUser= new User();
        ensgnUser.setIdU(3L);
        ensgnUser.setFullName("ensignant");
        ensgnUser.setUserName("ens");
        ensgnUser.setMdp(getEncodedPassword("ens123"));
        ensgnUser.setCIN("ANSGN123");
        ensgnUser.setEmail("ensignant@gmail.com");
        ensgnUser.setTele("061572893");
        ensgnUser.setTypeUser("ensignant");
        ensgnUser.setGrade("EN");
        ensgnUser.setDataInscription(new Date());
        ensgnUser.setNumeroBureau("9");
        Set<Role> ensignRoles1 = new HashSet<>();
        ensignRoles1.add(ensignRole);

        ensgnUser.setRole(ensignRoles1);
        userRepository.save(ensgnUser);


    }


    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    public String deletUserById(Long id){
     userRepository.deleteById(id);
    return "user id="+id+"deletet";
    }
    public Long nmberUser(){
        return userRepository.CountUser();
    }
    public User updateUser(User newuser,Long id){
        return userRepository.findById(id).map(user -> {
            user.setCIN(newuser.getCIN());
            user.setUserName(newuser.getUserName());
            user.setGrade(newuser.getGrade());
            user.setMdp(newuser.getMdp());
            user.setFullName(newuser.getFullName());
            user.setTele(newuser.getTele());
            user.setEmail(newuser.getEmail());
            user.setNumeroBureau(newuser.getNumeroBureau());
            return userRepository.save(user);
        }).orElseThrow();
    }

    public String getEncodedPassword(String Password){
        return passwordEncoder.encode(Password);
    }
    public void affecterMateriel(Long idM,Long idU){
       User user= userRepository.getById(idU);
       Materiel materiel=materielRepository.getById(idM);
       materiel.setUser(user);
    }
    public List<User> getDemande(){
        return userRepository.getDemmande();
    }
    public List<User> getLastInsertedRow() {
        List<User> rows = userRepository.findAll();
        ;
        List<User> lasteThree=new ArrayList<User>();
        lasteThree.add(rows.get(rows.size() - 1));
        lasteThree.add(rows.get(rows.size() - 2));
        //lasteThree.add(rows.get(rows.size() - 3));
        return lasteThree;

    }
    public Long selectNumberOfType(String type){
        return userRepository.selecNumberOftype(type);
    }



    }
