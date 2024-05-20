package com.adminpanell.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;

import com.adminpanell.model.AdminModel;
import com.adminpanell.service.AdminService;

@Controller
public class AdminController {

    private AdminService adminService;

    @GetMapping("/login")
    public String getLoginPage(Model model) {
        model.addAttribute("loginRequest", new AdminModel());
        return "login_page";
    }

    @PostMapping
    public String login(@ModelAttribute AdminModel adminModel) {
        System.out.println("login request: " + adminModel);
        AdminModel auth = adminService.authenticate(adminModel.getPassword());

        if (auth != null)
            return "Admin";
        else
            return "ERROR";
    }
}