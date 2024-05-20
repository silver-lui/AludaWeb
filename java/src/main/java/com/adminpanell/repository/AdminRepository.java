package com.adminpanell.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.adminpanell.model.AdminModel;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<AdminModel, Integer> {
    Optional<AdminModel> findByPassword(String password);

}