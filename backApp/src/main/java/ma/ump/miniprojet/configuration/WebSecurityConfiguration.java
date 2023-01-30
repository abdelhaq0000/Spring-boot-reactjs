package ma.ump.miniprojet.configuration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthentificationEntryPoint jwtAuthentificationEntryPoint;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Autowired
    private UserDetailsService jwtService;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors();
        httpSecurity.csrf().disable().authorizeRequests().antMatchers("/authenticate", "/save"
                        , "/v2/api-docs/**","/demmandsMateriel","/materiel/{id}","/demmandeMateriel/{idU}/{idM}","/affecterFouniture/{idU}/{idF}","/nomberUser","/nomberMateril","/nomberFournitur","/affecterFouniture/{idU}/{idF}/{Q}","/demmandeFourniture/{idU}/{idF}/{Q}","/deletUser/{id}","/user/{id}",
                        "/v3/api-docs/**",
                        "/swagger-resources/**","/nomberMateril/{i}","/getLastInsert","/user/{id}","/nomberOf/{type}","/updateUser/{id}","/download-csv","/download-pdf","affcteMaterriel/{idU}/{idM}","/deletMateriel/{id}","/deletDemandeFrn/{id}","/fourniturs","/pdf","/nomberDemandeFourniture","/nomberOf/{type}","/updateFrn/{id}","/updateMat/{id}","/materiels","/deletFourniture/{id}","/deletMateriel/{id}","/users","/materielOfUser/{idU}","/deletUser/{id}","/getDemande","/addMateriel","/demmandsFourniture","/nomberDemandeMateriel","/fourniture/{id}","/deletDemande/{id}","/allNomberFourniture","/addFourniture","/getLastInsertFourniture","/allTypeFourniture","/getLastInsertMateriel","/nomberAllmateriel","/getLastInsert","/affecterMateriel/{idU}/{idM}",
                        "/swagger-ui/**").permitAll()
                .antMatchers(HttpHeaders.ALLOW).permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtAuthentificationEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(jwtService).passwordEncoder(passwordEncoder());
    }
}
