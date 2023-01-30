package ma.ump.miniprojet.service;


import ma.ump.miniprojet.model.JwtRequest;
import ma.ump.miniprojet.model.JwtResponce;
import ma.ump.miniprojet.model.User;
import ma.ump.miniprojet.repository.UserRepository;
import ma.ump.miniprojet.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class JwtService implements UserDetailsService {

    @Autowired
    private UserRepository userDao;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponce createJwtToken(JwtRequest jRequest) throws Exception {
        String userName = jRequest.getUerName();
        String userPassword = jRequest.getUserPassword();
        authenticate(userName, userPassword);

        final UserDetails userDetails = loadUserByUsername(userName);

        String newGeneratedToken = jwtUtil.generateToken(userDetails);
        User user = userDao.findByUserName(userName);
        return new JwtResponce(user , newGeneratedToken);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        User user = userDao.findByUserName(username);

        if (user != null) {
            return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getMdp(),
                    getAuthorities(user));
        } else {
            throw new UsernameNotFoundException("username is not valid");
        }
    }

    private Set getAuthorities(User user) {
        Set authorites = new HashSet<>();
        user.getRole().forEach(role -> {
            authorites.add(new SimpleGrantedAuthority("ROLE_" + role.getRolename()));
        });
        return authorites;
    }

    private void authenticate(String userName, String userPassword) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
        } catch (DisabledException e) {
            // TODO: handle exception
            throw new Exception("User is disabled");
        } catch (BadCredentialsException e) {
            throw new Exception("Bad credentials from user");
        }
    }
}
