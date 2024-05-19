package com.adminpanell.model;

import javax.persistance.Entity;
import javax.persistance.Table;
import javax.persistance.GeneratedValue;
import javax.persistance.Id;

@Entity
@Table(name = "admin_table")
public class AdnimModel {

    @Id
    GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String password;

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        return this.password;
    }

    @Override public boolean equals(Object obj){
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;

        AdminModel that = (AdminModel) obj;
        return Object.equals(id, that.id) && Object.equals(password, that.password);
    }

    @Override
    public int hashCode(){
        return Object.hash(id, password);
    }

    

}