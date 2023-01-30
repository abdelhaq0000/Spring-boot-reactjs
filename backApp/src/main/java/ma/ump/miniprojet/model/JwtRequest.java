package ma.ump.miniprojet.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtRequest {

    private String uerName ;
    private String userPassword;
}