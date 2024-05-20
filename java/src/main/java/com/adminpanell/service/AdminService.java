package com.adminpanell.service;

import com.adminpanell.model.AdminModel;
import com.adminpanell.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // public AdminModel registerUser(String password) {
    // if (password != null) {
    // AdminModel adminModel = new AdminModel();
    // adminModel.setPassword(password);

    // return adminRepository.save(adminModel);
    // } else
    // return null;
    // }

    public AdminModel authenticate(String password) {
        return adminRepository.findByPassword(password).orElse(null);
    }
}