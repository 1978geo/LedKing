package bg.softuni.LedKing.service.impl;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

public class LedKingUser extends User {


    public LedKingUser(String username, String password,
                       Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public LedKingUser(String username, String password, boolean enabled, boolean accountNonExpired,
                       boolean credentialsNonExpired, boolean accountNonLocked,
                       Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked,
                authorities);
    }

    // some own methods below.

    public String getUserIdentifier() {
        return getUsername();
    }
}

