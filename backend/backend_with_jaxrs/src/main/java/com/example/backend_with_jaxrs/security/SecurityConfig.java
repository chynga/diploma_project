package com.example.backend_with_jaxrs.security;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserDetailsService userDetailsService;

    private static final String[] SWAGGER_URLS = {
            // -- swagger ui
            "/swagger-resources/**",
            "/swagger-ui.html",
            "/v2/api-docs",
            "/webjars/**",
            "/configuration/ui",
            "/configuration/security"

    };

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(SWAGGER_URLS);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        MyAuthenticationFilter myAuthenticationFilter = new MyAuthenticationFilter(authenticationManagerBean());
        myAuthenticationFilter.setFilterProcessesUrl("/api/users/login");
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests().antMatchers("/api/users/login/**").permitAll();
        http.authorizeRequests().antMatchers("/api/users/register/**").permitAll();
//        http.authorizeRequests().antMatchers("/swagger-ui.html").permitAll();
        http.authorizeRequests().antMatchers(GET,"/api/users")
                .hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(GET,"/api/users/**")
                .hasAnyAuthority("USER", "ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/users/**")
                .hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(POST, "/api/roles/save")
                .hasAnyAuthority("ADMIN");
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(myAuthenticationFilter);
        http.addFilterBefore(new MyAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
