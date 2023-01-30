package ma.ump.miniprojet.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter

public class JwtResponce {

    private User user;
    private String jwtToken;

    public JwtResponce(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}