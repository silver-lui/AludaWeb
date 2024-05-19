package com.adminpanell.repository;

import com.adminpanell.model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<AdminModel, Integer>{
    Optional<AdminModel> findByPassword(String password);

}